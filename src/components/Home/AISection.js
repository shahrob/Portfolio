import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiPause, FiPlay } from "react-icons/fi";
import Card from "../UI/Card";
import Section from "../UI/Section";
import { reveal } from "../UI/reveal";
import AIVisual from "./AIVisuals";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import {
  aiCapabilities,
  aiFlowEdges,
  aiFlowLayouts,
  aiFlowNodes,
  aiFlowSteps,
  aiInProduction,
} from "../../data/ai";
import "./AISection.css";

const STEP_MS = 2600;
const LAST_STEP_MS = 4200;
const LAST_STEP = aiFlowSteps.length - 1;

const edgeKey = ([from, to]) => `${from}-${to}`;

// S-shaped curve between two node centres, following the layout direction.
function edgePath(layout, from, to) {
  const [x1, y1] = layout.positions[from];
  const [x2, y2] = layout.positions[to];
  if (layout.curve === "vertical") {
    const my = (y1 + y2) / 2;
    return `M ${x1} ${y1} C ${x1} ${my}, ${x2} ${my}, ${x2} ${y2}`;
  }
  const mx = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
}

// Pauses work while the element is off screen.
function useInView(ref) {
  const [inView, setInView] = useState(true);
  useEffect(() => {
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "100px 0px",
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

function AgentFlow({ running, paused, reduceMotion, onTogglePause }) {
  const tall = useMediaQuery("(max-width: 719px)");
  const layout = tall ? aiFlowLayouts.tall : aiFlowLayouts.wide;
  const [step, setStep] = useState(() => (reduceMotion ? LAST_STEP : 0));
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (reduceMotion) setStep(LAST_STEP);
  }, [reduceMotion]);

  useEffect(() => {
    if (!running) return undefined;
    const timer = setTimeout(
      () => {
        if (step === LAST_STEP) {
          setCycle((count) => count + 1);
          setStep(0);
        } else {
          setStep(step + 1);
        }
      },
      step === LAST_STEP ? LAST_STEP_MS : STEP_MS
    );
    return () => clearTimeout(timer);
  }, [running, step]);

  const current = aiFlowSteps[step];
  const earlier = aiFlowSteps.slice(0, step);
  const activeNodes = new Set(current.nodes);
  const doneNodes = new Set(earlier.flatMap((s) => s.nodes));
  const activeEdges = new Set(current.edges.map(edgeKey));
  const doneEdges = new Set(earlier.flatMap((s) => s.edges.map(edgeKey)));

  return (
    <div className="flow">
      <div className={`flow-canvas flow-canvas--${tall ? "tall" : "wide"}`} aria-hidden="true">
        <div
          className="flow-spacer"
          style={{ paddingTop: `${(layout.height / layout.width) * 100}%` }}
        />
        <svg
          className="flow-edges"
          viewBox={`0 0 ${layout.width} ${layout.height}`}
          preserveAspectRatio="none"
        >
          {aiFlowEdges.map((edge) => {
            const key = edgeKey(edge);
            const state = activeEdges.has(key) ? "is-active" : doneEdges.has(key) ? "is-done" : "";
            const d = edgePath(layout, edge[0], edge[1]);
            return (
              <g key={key} className={`flow-edge ${state}`}>
                <path className="flow-edge-base" d={d} pathLength="100" />
                <path className="flow-edge-flow" d={d} pathLength="100" />
              </g>
            );
          })}
        </svg>
        {Object.entries(aiFlowNodes).map(([id, node]) => {
          const [x, y] = layout.positions[id];
          const Icon = node.icon;
          const state = activeNodes.has(id) ? "is-active" : doneNodes.has(id) ? "is-done" : "";
          return (
            <div
              key={id}
              className={`flow-node hue-${node.hue} ${state}`}
              style={{ left: `${(x / layout.width) * 100}%`, top: `${(y / layout.height) * 100}%` }}
            >
              <span className="flow-node-icon">
                <Icon />
              </span>
              <span className="flow-node-label">{node.label}</span>
              <span className="flow-node-detail">{node.detail}</span>
            </div>
          );
        })}
      </div>

      <div className="flow-panel">
        <div className="flow-caption">
          <p className="flow-step-count mono">
            Step {step + 1} of {aiFlowSteps.length}
          </p>
          <p className="flow-step-title">{current.title}</p>
          <p className="flow-step-text">{current.caption}</p>
          <div className="flow-controls">
            {!reduceMotion && (
              <button
                type="button"
                className="icon-btn flow-play"
                onClick={onTogglePause}
                aria-label={paused ? "Play animation" : "Pause animation"}
                title={paused ? "Play animation" : "Pause animation"}
              >
                {paused ? <FiPlay aria-hidden="true" /> : <FiPause aria-hidden="true" />}
              </button>
            )}
            <div className="flow-dots" role="group" aria-label="Choose a step">
              {aiFlowSteps.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  className={`flow-dot ${i === step ? "is-active" : ""} ${i < step ? "is-done" : ""}`}
                  onClick={() => setStep(i)}
                  aria-label={`Step ${i + 1}: ${s.title}`}
                  aria-current={i === step ? "step" : undefined}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flow-log" aria-hidden="true">
          <div className="flow-log-head mono">
            <span className="flow-log-lights">
              <i />
              <i />
              <i />
            </span>
            agent.trace
            <span className="flow-log-note">Illustrative example</span>
          </div>
          <ol className="flow-log-lines mono">
            {aiFlowSteps.slice(0, step + 1).map((s, i) => (
              <li key={`${cycle}-${s.id}`} className={i === step ? "is-current" : ""}>
                <span className="flow-log-text">{s.log}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* The diagram and log are decorative; this is the same story as text. */}
      <ol className="sr-only">
        {aiFlowSteps.map((s) => (
          <li key={s.id}>
            {s.title}: {s.caption}
          </li>
        ))}
      </ol>
    </div>
  );
}

function AISection() {
  const rootRef = useRef(null);
  const inView = useInView(rootRef);
  const reduceMotion = Boolean(useReducedMotion());
  const [paused, setPaused] = useState(false);
  const running = inView && !paused && !reduceMotion;

  return (
    <Section
      id="ai"
      index="03"
      eyebrow="AI engineering"
      tone="cyan"
      glow="right"
      title={
        <>
          AI agents that do <em>real work</em>.
        </>
      }
      intro="LLM apps, RAG pipelines and agents that call tools and connect to your data through MCP, built with LangChain and LangGraph."
    >
      <div ref={rootRef} className={`ai-lab ${running ? "" : "is-paused"}`}>
        <motion.div className="card inverse ai-flow-card" {...reveal()}>
          <div className="ai-flow-head">
            <p className="eyebrow">How an AI agent answers a question</p>
          </div>
          <AgentFlow
            running={running}
            paused={paused}
            reduceMotion={reduceMotion}
            onTogglePause={() => setPaused((value) => !value)}
          />
        </motion.div>

        <div className="ai-grid">
          {aiCapabilities.map((capability, index) => (
            <Card
              key={capability.id}
              className={`tile ai-card ai-card--${capability.id} ${capability.wide ? "is-wide" : ""}`}
              {...reveal(index * 0.04)}
            >
              <div className="ai-visual" aria-hidden="true">
                <AIVisual type={capability.visual} />
              </div>
              <h3 className="ai-card-title">{capability.title}</h3>
              <p className="ai-card-text">{capability.text}</p>
              <ul className="chips">
                {capability.chips.map((chip) => (
                  <li key={chip} className="chip">
                    {chip}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <motion.div className="ai-proof" {...reveal()}>
          <p className="eyebrow">AI in my client work</p>
          <ul className="ai-proof-list">
            {aiInProduction.map((item) => (
              <li key={item.name}>
                <strong>{item.name}</strong>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <Link to="/projects" className="link-arrow">
            See the projects <FiArrowRight aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}

export default AISection;
