import { expect, test } from "@playwright/test";

const pages = [
  { path: "/", title: /SportBridge Global/i },
  { path: "/about", title: /About\s*\|\s*SportBridge Global/i },
  { path: "/services", title: /Services\s*\|\s*SportBridge Global/i },
  { path: "/network", title: /Network\s*\|\s*SportBridge Global/i },
  { path: "/opportunities", title: /Opportunities\s*\|\s*SportBridge Global/i },
  { path: "/contact", title: /Contact\s*\|\s*SportBridge Global/i },
] as const;

test.describe("SportBridge smoke", () => {
  test("homepage logo and navigation work", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "SportBridge Global home" })).toBeVisible();

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
    await page.getByRole("link", { name: "Explore Our Services", exact: true }).click();
    await expect(page).toHaveURL(/\/services$/);

    await page.goto("/");
    await page.getByRole("link", { name: "View Our Network", exact: true }).first().click();
    await expect(page).toHaveURL(/\/network$/);

    await page.goto("/");
    await page.getByRole("link", { name: "Start a Conversation", exact: true }).first().click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test("partner logos do not break", async ({ page }) => {
    const failed: string[] = [];
    page.on("response", (response) => {
      const url = response.url();
      if (url.includes("/logos/partners/") && response.status() >= 400) {
        failed.push(`${response.status()} ${url}`);
      }
    });

    await page.goto("/network");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      /Connected across the sporting ecosystem/i
    );

    const logos = page.locator('img[alt$="logo"]');
    const count = await logos.count();
    expect(count).toBe(3);

    for (let i = 0; i < count; i += 1) {
      const img = logos.nth(i);
      await expect(img).toBeVisible();
      await expect
        .poll(async () => img.evaluate((el: HTMLImageElement) => el.naturalWidth), {
          message: (await img.getAttribute("alt")) || "partner logo",
        })
        .toBeGreaterThan(0);
    }

    expect(failed, failed.join("\n")).toEqual([]);
  });

  test("no page-level 404 assets on homepage", async ({ page }) => {
    const missing: string[] = [];
    page.on("response", (response) => {
      if (response.status() === 404 && response.url().includes("127.0.0.1:3010")) {
        missing.push(response.url());
      }
    });

    await page.goto("/");
    await page.waitForLoadState("networkidle");
    expect(missing, missing.join("\n")).toEqual([]);
  });
});
