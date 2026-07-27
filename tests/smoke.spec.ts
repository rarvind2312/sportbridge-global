import { expect, test } from "@playwright/test";

const pages = [
  { path: "/", title: /SportBridge Global/i },
  { path: "/about", title: /About\s*\|\s*SportBridge Global/i },
  { path: "/services", title: /Services\s*\|\s*SportBridge Global/i },
  { path: "/network", title: /Network\s*\|\s*SportBridge Global/i },
  { path: "/opportunities", title: /Opportunities\s*\|\s*SportBridge Global/i },
  { path: "/contact", title: /Contact\s*\|\s*SportBridge Global/i },
] as const;

const viewports = [
  { width: 1536, height: 864 },
  { width: 1440, height: 900 },
  { width: 1366, height: 768 },
  { width: 1280, height: 800 },
  { width: 1024, height: 768 },
  { width: 768, height: 1024 },
  { width: 430, height: 932 },
  { width: 390, height: 844 },
] as const;

async function assertNoHorizontalOverflow(page: import("@playwright/test").Page) {
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
    };
  });
  expect(
    overflow.scrollWidth,
    `horizontal overflow: scroll=${overflow.scrollWidth} client=${overflow.clientWidth}`
  ).toBeLessThanOrEqual(overflow.clientWidth + 1);
}

async function assertNoClippedText(page: import("@playwright/test").Page) {
  const issues = await page.evaluate(() => {
    const selectors = "h1, h2, h3, p, a, button, .eyebrow, .lead, .heading-xl, .heading-lg, .heading-md";
    const nodes = Array.from(document.querySelectorAll(selectors));
    return nodes
      .filter((el) => {
        const text = (el.textContent || "").trim();
        if (!text) return false;
        const style = window.getComputedStyle(el);
        if (style.display === "none" || style.visibility === "hidden") return false;
        if (Number(style.opacity) === 0) return false;
        const rect = el.getBoundingClientRect();
        if (rect.width < 2 || rect.height < 2) return false;
        const overflowY = style.overflowY;
        const clips = overflowY === "hidden" || overflowY === "clip";
        const verticallyClipped = clips && el.scrollHeight > el.clientHeight + 2;
        const outside =
          rect.right > window.innerWidth + 2 || rect.left < -2;
        return verticallyClipped || outside;
      })
      .map((el) => {
        const style = window.getComputedStyle(el);
        return {
          tag: el.tagName,
          text: (el.textContent || "").trim().slice(0, 80),
          overflowY: style.overflowY,
          lineHeight: style.lineHeight,
          scrollHeight: el.scrollHeight,
          clientHeight: el.clientHeight,
        };
      });
  });
  expect(issues, JSON.stringify(issues, null, 2)).toEqual([]);
}

test.describe("SportBridge smoke", () => {
  test("homepage logo, hero and navigation work", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");
    await expect(page.getByRole("link", { name: "SportBridge Global home" })).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/CONNECTING TALENT/i);
    await expect(page.getByText(/Connecting possibilities\. Building futures/i)).toBeVisible();
    await expect(page.getByText(/Global Pathways/i).first()).toBeVisible();
    await expect(page.getByText(/Our Growing Network/i)).toBeVisible();
    await expect(page.locator('img[src*="sportbridge-hero"]')).toBeVisible();
    await expect(page.getByText("Topline · F16 · CFC")).toHaveCount(0);

    for (const item of ["About", "Services", "Network", "Opportunities", "Contact"] as const) {
      await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: item }).click();
      await expect(page).toHaveURL(new RegExp(`/${item.toLowerCase()}$`));
      await expect(page).toHaveTitle(new RegExp(`${item}\\s*\\|\\s*SportBridge Global`, "i"));
    }
  });

  test("all core routes render with expected titles", async ({ page }) => {
    for (const route of pages) {
      const response = await page.goto(route.path);
      expect(response?.ok()).toBeTruthy();
      await expect(page).toHaveTitle(route.title);
    }
  });

  test("homepage CTAs navigate successfully", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /Explore Our Services/i }).first().click();
    await expect(page).toHaveURL(/\/services$/);

    await page.goto("/");
    await page.getByRole("link", { name: /View Our Network/i }).first().click();
    await expect(page).toHaveURL(/\/network$/);

    await page.goto("/");
    await page.getByRole("link", { name: /Start a Conversation/i }).first().click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test("partner logos load and CFC opens Instagram", async ({ page }) => {
    const failed: string[] = [];
    page.on("response", (response) => {
      const url = response.url();
      if (url.includes("/partners/") && response.status() >= 400) {
        failed.push(`${response.status()} ${url}`);
      }
    });

    await page.goto("/network");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      /Building connections across sport/i
    );

    for (const name of ["Topline NextGen", "F16", "CFC Excellence Cricket Academy"] as const) {
      const img = page.locator(`img[alt="${name} logo"]`);
      await expect(img).toBeVisible();
      await expect
        .poll(async () => img.evaluate((el: HTMLImageElement) => el.naturalWidth))
        .toBeGreaterThan(0);
    }

    const cfc = page.getByRole("link", {
      name: /Visit CFC Excellence Cricket Academy on Instagram/i,
    });
    await expect(cfc).toHaveAttribute(
      "href",
      "https://www.instagram.com/cfcexcellencecricketacademy/reels/"
    );
    await expect(cfc).toHaveAttribute("target", "_blank");
    await expect(cfc).toHaveAttribute("rel", /noopener/);

    expect(failed, failed.join("\n")).toEqual([]);
  });

  test("no sports atmosphere imagery or silhouette leftovers", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("[data-sports-bg]")).toHaveCount(0);

    for (const route of pages) {
      await page.goto(route.path);
      await expect(page.locator("[data-sports-bg]")).toHaveCount(0);
      await expect(page.locator('img[src*="/images/sports/"]')).toHaveCount(0);
    }
  });

  test("no horizontal overflow or clipped text across key viewports", async ({ page }) => {
    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      for (const route of pages) {
        await page.goto(route.path);
        await page.waitForLoadState("domcontentloaded");
        await assertNoHorizontalOverflow(page);
        await assertNoClippedText(page);

        const heading = page.getByRole("heading", { level: 1 }).first();
        await expect(heading).toBeVisible();
        const box = await heading.boundingBox();
        expect(box).toBeTruthy();
        if (box) {
          expect(box.x).toBeGreaterThanOrEqual(-1);
          expect(box.x + box.width).toBeLessThanOrEqual(viewport.width + 2);
          expect(box.height).toBeGreaterThan(24);
        }
      }
    }
  });

  test("about page uses ecosystem diagram not filler imagery", async ({ page }) => {
    await page.goto("/about");
    await expect(page.getByText(/Who We Are/i).first()).toBeVisible();
    await expect(
      page.getByText(/A sports partnerships, pathways, performance and innovation platform/i)
    ).toBeVisible();
    await expect(page.getByLabel(/SportBridge connects athletes/i)).toBeVisible();
    await expect(page.locator('img[alt="SportBridge Global seal"]')).toHaveCount(0);
    await expect(page.locator('img[src*="/images/sports/"]')).toHaveCount(0);
  });

  test("hero image loads with non-zero dimensions", async ({ page }) => {
    await page.goto("/");
    const img = page.locator('img[src*="sportbridge-hero"]').first();
    await expect(img).toBeVisible();
    await expect
      .poll(async () => img.evaluate((el: HTMLImageElement) => el.naturalWidth))
      .toBeGreaterThan(100);
  });
});
