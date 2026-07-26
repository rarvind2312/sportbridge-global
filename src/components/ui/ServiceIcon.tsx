type IconName = "pathways" | "performance" | "technology" | "advisory" | "intelligence";

export function ServiceIcon({ name }: { name: IconName }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10 text-primary" aria-hidden>
      {name === "pathways" && (
        <>
          <circle {...common} cx="10" cy="38" r="4" />
          <circle {...common} cx="24" cy="24" r="4" />
          <circle {...common} cx="38" cy="10" r="4" />
          <path {...common} d="M13.5 34.5 L20.5 27.5 M27.5 20.5 L34.5 13.5" />
        </>
      )}
      {name === "performance" && (
        <>
          <path {...common} d="M8 36 V20 M16 36 V14 M24 36 V22 M32 36 V10 M40 36 V18" />
          <path {...common} d="M8 36 H40" />
        </>
      )}
      {name === "technology" && (
        <>
          <circle {...common} cx="24" cy="24" r="5" />
          <circle {...common} cx="10" cy="14" r="3" />
          <circle {...common} cx="38" cy="14" r="3" />
          <circle {...common} cx="10" cy="34" r="3" />
          <circle {...common} cx="38" cy="34" r="3" />
          <path {...common} d="M13 16 L19 21 M29 21 L35 16 M13 32 L19 27 M29 27 L35 32" />
        </>
      )}
      {name === "advisory" && (
        <>
          <rect {...common} x="10" y="12" width="28" height="24" rx="2" />
          <path {...common} d="M16 20 H32 M16 26 H28 M16 32 H24" />
        </>
      )}
      {name === "intelligence" && (
        <>
          <circle {...common} cx="24" cy="24" r="14" />
          <circle {...common} cx="24" cy="24" r="5" />
          <path {...common} d="M24 10 V14 M24 34 V38 M10 24 H14 M34 24 H38" />
        </>
      )}
    </svg>
  );
}
