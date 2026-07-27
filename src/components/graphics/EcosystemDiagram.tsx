type EcosystemDiagramProps = {
  className?: string;
};

const nodes = [
  { label: "Athletes", x: 280, y: 52 },
  { label: "Coaches", x: 472, y: 140 },
  { label: "Academies", x: 472, y: 340 },
  { label: "Sporting Orgs", x: 280, y: 428 },
  { label: "Technology", x: 88, y: 340 },
  { label: "Partners", x: 88, y: 140 },
] as const;

/**
 * Premium SportBridge ecosystem — business model as connector.
 */
export function EcosystemDiagram({ className = "" }: EcosystemDiagramProps) {
  return (
    <div
      className={`rounded-3xl border border-line bg-gradient-to-br from-[#F7F5F0] to-[#EEE9DF] p-5 md:p-7 ${className}`}
      role="img"
      aria-label="SportBridge connects athletes, coaches, academies, sporting organisations, technology and strategic partners"
    >
      <svg
        viewBox="0 0 560 480"
        className="h-auto w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="280" cy="240" r="172" stroke="#DDD8CE" strokeWidth="1" />
        <circle cx="280" cy="240" r="128" stroke="#DDD8CE" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="280" cy="240" r="86" stroke="#B99352" strokeWidth="0.75" opacity="0.35" />

        {nodes.map((node) => (
          <g key={`spoke-${node.label}`}>
            <line
              x1="280"
              y1="240"
              x2={node.x}
              y2={node.y}
              stroke="#12352F"
              strokeWidth="1.1"
              opacity="0.28"
            />
            <circle
              cx={(280 + node.x) / 2}
              cy={(240 + node.y) / 2}
              r="2.5"
              fill="#B99352"
              opacity="0.85"
            />
          </g>
        ))}

        {/* Outer bridge arcs */}
        <path
          d="M120 160 C180 90, 380 90, 440 160"
          stroke="#B99352"
          strokeWidth="1.35"
          opacity="0.55"
          strokeDasharray="5 6"
        />
        <path
          d="M120 320 C180 390, 380 390, 440 320"
          stroke="#12352F"
          strokeWidth="1"
          opacity="0.25"
        />

        {/* Centre — SportBridge */}
        <g transform="translate(280 240)">
          <circle r="54" fill="#FFFFFF" stroke="#12352F" strokeWidth="1.5" />
          <circle r="46" stroke="#B99352" strokeWidth="0.8" opacity="0.4" />
          <path
            d="M-32 14 C-10 -26, 10 -26, 32 14"
            stroke="#B99352"
            strokeWidth="2.25"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-26 18 C-8 -12, 8 -12, 26 18"
            stroke="#12352F"
            strokeWidth="1.3"
            fill="none"
            opacity="0.55"
          />
          <circle cx="-32" cy="14" r="3.4" fill="#12352F" />
          <circle cx="0" cy="-18" r="3.4" fill="#B99352" />
          <circle cx="32" cy="14" r="3.4" fill="#12352F" />
          <text
            y="36"
            textAnchor="middle"
            fill="#12352F"
            fontFamily="system-ui, sans-serif"
            fontSize="8"
            fontWeight="700"
            letterSpacing="0.14em"
          >
            SPORTBRIDGE
          </text>
        </g>

        {nodes.map((node) => (
          <g key={node.label} transform={`translate(${node.x} ${node.y})`}>
            <circle r="30" fill="#FFFFFF" stroke="#12352F" strokeWidth="1.25" />
            <circle r="22" stroke="#B99352" strokeWidth="0.7" opacity="0.35" />
            <circle r="4" fill="#B99352" />
            <text
              y="48"
              textAnchor="middle"
              fill="#12352F"
              fontFamily="system-ui, sans-serif"
              fontSize="11"
              fontWeight="650"
              letterSpacing="0.02em"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
