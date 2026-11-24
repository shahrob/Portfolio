import React from "react";
import { FiArrowRight } from "react-icons/fi";

// Small decorative animations for the AI capability cards. They are purely
// visual (the card text carries the meaning), are driven by CSS keyframes in
// AISection.css, and freeze in their finished state for reduced motion.

const delay = (seconds) => ({ "--d": `${seconds}s` });

function GraphVisual() {
  const edges = [
    { d: "M60 80 L170 80", at: 0 },
    { d: "M170 80 C 230 80, 235 40, 300 40", at: 0.5 },
    { d: "M170 80 C 230 80, 235 120, 300 120", at: 0.5 },
    { d: "M300 40 C 370 40, 375 80, 440 80", at: 1 },
    { d: "M300 120 C 370 120, 375 80, 440 80", at: 1 },
    { d: "M300 120 C 250 158, 192 142, 176 90", at: 1.5, loop: true },
  ];
  const nodes = [
    { x: 60, y: 80, label: "start", ly: 106, at: 0 },
    { x: 170, y: 80, label: "router", ly: 60, at: 0.4 },
    { x: 300, y: 40, label: "retrieve", ly: 22, at: 0.9 },
    { x: 300, y: 120, label: "tools", ly: 148, at: 0.9 },
    { x: 440, y: 80, label: "respond", ly: 106, at: 1.4 },
  ];
  return (
    <svg className="viz-graph" viewBox="0 0 500 160" role="presentation">
      {edges.map((edge) => (
        <g key={edge.d} className={`viz-edge ${edge.loop ? "is-loop" : ""}`} style={delay(edge.at)}>
          <path className="viz-edge-base" d={edge.d} pathLength="100" />
          <path className="viz-edge-flow" d={edge.d} pathLength="100" />
        </g>
      ))}
      {nodes.map((node) => (
        <g key={node.label} className="viz-node" style={delay(node.at)}>
          <circle cx={node.x} cy={node.y} r="9" />
          <text x={node.x} y={node.ly} textAnchor="middle">
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function McpVisual() {
  const servers = [
    { name: "GitHub", x: 52, y: 28, at: 0 },
    { name: "Postgres", x: 248, y: 28, at: 0.6 },
    { name: "Slack", x: 248, y: 122, at: 1.2 },
    { name: "Files", x: 52, y: 122, at: 1.8 },
  ];
  return (
    <svg className="viz-mcp" viewBox="0 0 300 150" role="presentation">
      {servers.map((server) => (
        <g key={`edge-${server.name}`} className="viz-edge" style={delay(server.at)}>
          <path className="viz-edge-base" d={`M150 75 L${server.x} ${server.y}`} pathLength="100" />
          <path className="viz-edge-flow" d={`M150 75 L${server.x} ${server.y}`} pathLength="100" />
        </g>
      ))}
      <g className="viz-mcp-hub">
        <rect x="116" y="57" width="68" height="36" rx="10" />
        <text x="150" y="80" textAnchor="middle">
          MCP
        </text>
      </g>
      {servers.map((server) => (
        <g key={server.name} className="viz-mcp-server" style={delay(server.at)}>
          <rect x={server.x - 40} y={server.y - 14} width="80" height="28" rx="8" />
          <text x={server.x} y={server.y + 4} textAnchor="middle">
            {server.name}
          </text>
        </g>
      ))}
    </svg>
  );
}

function RagVisual() {
  return (
    <div className="viz-rag">
      <div className="viz-doc">
        <span />
        <span />
        <span />
        <span />
      </div>
      <FiArrowRight className="viz-arrow" />
      <div className="viz-chunks">
        {[0, 1, 2].map((i) => (
          <span key={i} style={delay(i * 0.25)} />
        ))}
      </div>
      <FiArrowRight className="viz-arrow" />
      <div className="viz-vectors">
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} className={i === 4 || i === 9 ? "is-match" : ""} />
        ))}
      </div>
    </div>
  );
}

function ToolsVisual() {
  return (
    <div className="viz-code mono">
      <span className="viz-code-line viz-type">
        <span className="tok-fn">get_invoices</span>({"{ "}
        <span className="tok-key">status</span>: <span className="tok-str">"overdue"</span>
        {" }"})
      </span>
      <span className="viz-code-line viz-result">→ 200 OK · 3 results</span>
    </div>
  );
}

function ChainVisual() {
  const links = ["prompt", "model", "parser"];
  return (
    <div className="viz-chain mono">
      {links.map((link, i) => (
        <React.Fragment key={link}>
          {i > 0 && <span className="viz-pipe">|</span>}
          <span className="viz-link" style={delay(i * 0.45)}>
            {link}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}

function ChatVisual() {
  return (
    <div className="viz-chat">
      <span className="viz-bubble viz-bubble--user">Can you refund order #2231?</span>
      <span className="viz-typing">
        <i />
        <i />
        <i />
      </span>
      <span className="viz-bubble viz-bubble--bot">Done, the refund is on its way ✓</span>
    </div>
  );
}

function VisionVisual() {
  return (
    <div className="viz-vision">
      <div className="viz-photo">
        <span className="viz-sun" />
        <span className="viz-hill viz-hill--back" />
        <span className="viz-hill" />
        <span className="viz-scan" />
      </div>
      <div className="viz-tags mono">
        {["mountain", "outdoor", "daylight"].map((tag, i) => (
          <span key={tag} style={delay(1.2 + i * 0.3)}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function PromptVisual() {
  return (
    <div className="viz-prompt mono">
      <span className="viz-prompt-line">
        <span className="viz-role">system</span> Answer only from{" "}
        <span className="viz-var" style={delay(0)}>
          {"{context}"}
        </span>
      </span>
      <span className="viz-prompt-line">
        <span className="viz-role">user</span>{" "}
        <span className="viz-var" style={delay(1)}>
          {"{question}"}
        </span>
      </span>
    </div>
  );
}

const VISUALS = {
  graph: GraphVisual,
  mcp: McpVisual,
  rag: RagVisual,
  tools: ToolsVisual,
  chain: ChainVisual,
  chat: ChatVisual,
  vision: VisionVisual,
  prompt: PromptVisual,
};

function AIVisual({ type }) {
  const Visual = VISUALS[type];
  return Visual ? <Visual /> : null;
}

export default AIVisual;
