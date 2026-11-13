const NODES = [
  { id: "a", x: 270, y: 90, label: "A", accent: "#38D9E8" },
  { id: "m", x: 90, y: 90, label: "M", accent: "#8985FF" },
  { id: "r", x: 270, y: 270, label: "R", accent: "#6665F5" },
  { id: "s", x: 90, y: 270, label: "S", accent: "#38D9E8" },
] as const;

const LOOSE_DOTS = [
  { x: 180, y: 34 },
  { x: 326, y: 180 },
  { x: 34, y: 180 },
];

export default function AuthVisual() {
  return (
    <div className="relative mx-auto mt-10 flex w-full max-w-[380px] items-center justify-center">
      <div className="absolute size-56 rounded-full bg-brand-primary/20 blur-[100px]" />

      <svg
        viewBox="0 0 360 360"
        className="relative z-10 w-full"
        role="img"
        aria-label="Network graph of connected students around the Connefy mark"
      >
        {/* faint orbit for depth */}
        <circle
          cx="180"
          cy="180"
          r="150"
          fill="none"
          stroke="#2A3044"
          strokeOpacity="0.5"
          strokeWidth="1"
        />

        {/* connections from the center to each student node */}
        {NODES.map((node, i) => (
          <line
            key={`spoke-${node.id}`}
            x1="180"
            y1="180"
            x2={node.x}
            y2={node.y}
            stroke={node.accent}
            strokeOpacity="0.35"
            strokeWidth="1.5"
            className="animate-constellation-line"
            style={{ animationDelay: `${i * 90 + 120}ms` }}
          />
        ))}

        {/* side connections, so it reads as a graph rather than a wheel */}
        <line
          x1="270"
          y1="90"
          x2="270"
          y2="270"
          stroke="#2A3044"
          strokeWidth="1.5"
          className="animate-constellation-line"
          style={{ animationDelay: "480ms" }}
        />
        <line
          x1="90"
          y1="90"
          x2="90"
          y2="270"
          stroke="#2A3044"
          strokeWidth="1.5"
          className="animate-constellation-line"
          style={{ animationDelay: "520ms" }}
        />

        {/* loose nodes — more connections still forming */}
        {LOOSE_DOTS.map((dot, i) => (
          <circle
            key={`dot-${i}`}
            cx={dot.x}
            cy={dot.y}
            r="3.5"
            fill="#2A3044"
            className="animate-constellation"
            style={{ animationDelay: `${560 + i * 60}ms` }}
          />
        ))}

        {/* student nodes */}
        {NODES.map((node, i) => (
          <g
            key={node.id}
            className="animate-constellation"
            style={{ animationDelay: `${i * 90 + 160}ms` }}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r="25"
              fill="#171B2B"
              stroke={node.accent}
              strokeOpacity="0.55"
              strokeWidth="1.5"
            />
            <text
              x={node.x}
              y={node.y + 5}
              textAnchor="middle"
              fontSize="15"
              fontWeight="600"
              fill={node.accent}
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Connefy mark, at the center of the graph */}
        <g className="animate-constellation" style={{ animationDelay: "60ms" }}>
          <circle cx="180" cy="180" r="42" fill="#6665F5" />
          <circle
            cx="180"
            cy="180"
            r="42"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />
          <text
            x="180"
            y="189"
            textAnchor="middle"
            fontSize="26"
            fontWeight="700"
            fill="white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            C
          </text>
        </g>
      </svg>
    </div>
  );
}
