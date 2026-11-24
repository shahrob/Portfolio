import {
  FiDatabase,
  FiGitBranch,
  FiMessageSquare,
  FiServer,
  FiTool,
  FiUser,
} from "react-icons/fi";
import { SiOpenai } from "react-icons/si";

// Content for the AI section. The animated flow is an illustrative example of
// how an AI agent answers a question; it is not a specific client system.

export const aiFlowNodes = {
  user: { label: "User", detail: "asks a question", icon: FiUser, hue: "blue" },
  agent: { label: "Agent", detail: "LangGraph", icon: FiGitBranch, hue: "violet" },
  rag: { label: "RAG", detail: "pgvector search", icon: FiDatabase, hue: "cyan" },
  tools: { label: "Tool calling", detail: "APIs & functions", icon: FiTool, hue: "amber" },
  mcp: { label: "MCP", detail: "servers", icon: FiServer, hue: "emerald" },
  llm: { label: "LLM", detail: "OpenAI & others", icon: SiOpenai, hue: "pink" },
  answer: { label: "Answer", detail: "streamed back", icon: FiMessageSquare, hue: "violet" },
};

// Node centres in SVG user units. "wide" is used from 720px up, "tall" below.
export const aiFlowLayouts = {
  wide: {
    width: 1000,
    height: 400,
    curve: "horizontal",
    positions: {
      user: [90, 200],
      agent: [290, 200],
      rag: [500, 68],
      tools: [500, 200],
      mcp: [500, 332],
      llm: [710, 200],
      answer: [910, 200],
    },
  },
  tall: {
    width: 360,
    height: 660,
    curve: "vertical",
    positions: {
      user: [180, 52],
      agent: [180, 182],
      rag: [62, 330],
      tools: [180, 330],
      mcp: [298, 330],
      llm: [180, 478],
      answer: [180, 606],
    },
  },
};

export const aiFlowEdges = [
  ["user", "agent"],
  ["agent", "rag"],
  ["agent", "tools"],
  ["agent", "mcp"],
  ["rag", "llm"],
  ["tools", "llm"],
  ["mcp", "llm"],
  ["llm", "answer"],
];

export const aiFlowSteps = [
  {
    id: "ask",
    title: "Ask",
    nodes: ["user"],
    edges: [["user", "agent"]],
    log: 'user      › "Which invoices are overdue this month?"',
    caption: "A user asks a question in plain language.",
  },
  {
    id: "plan",
    title: "Plan",
    nodes: ["agent"],
    edges: [],
    log: "langgraph › plan: retrieve → call tools → answer",
    caption: "A LangGraph agent decides which steps to run, and in what order.",
  },
  {
    id: "retrieve",
    title: "Retrieve",
    nodes: ["rag"],
    edges: [["agent", "rag"]],
    log: "rag       › embed query · pgvector top_k=4",
    caption:
      "RAG turns the question into an embedding and finds the most relevant documents with vector search.",
  },
  {
    id: "tools",
    title: "Call tools",
    nodes: ["tools"],
    edges: [["agent", "tools"]],
    log: 'tool_call › get_invoices({ status: "overdue" })',
    caption: "Tool calling lets the model use real APIs and functions with structured arguments.",
  },
  {
    id: "mcp",
    title: "Connect",
    nodes: ["mcp"],
    edges: [["agent", "mcp"]],
    log: "mcp       › billing-db.query → 3 rows",
    caption: "MCP servers give the agent controlled access to outside tools and data.",
  },
  {
    id: "compose",
    title: "Compose",
    nodes: ["llm"],
    edges: [
      ["rag", "llm"],
      ["tools", "llm"],
      ["mcp", "llm"],
    ],
    log: "llm       › write the answer from the gathered context",
    caption: "The LLM writes the answer from everything the agent gathered.",
  },
  {
    id: "answer",
    title: "Answer",
    nodes: ["answer"],
    edges: [["llm", "answer"]],
    log: '✓ answer  › "3 invoices are overdue, £4,120 in total."',
    caption: "The answer streams back to the user, grounded in real data instead of guesses.",
  },
];

// One card per capability; `visual` picks the small animation on the card.
export const aiCapabilities = [
  {
    id: "langgraph",
    title: "LangGraph agents",
    text: "Stateful, multi-step agents built as graphs, with branches, loops and retries.",
    chips: ["State", "Branches", "Loops"],
    visual: "graph",
    wide: true,
  },
  {
    id: "mcp",
    title: "MCP",
    text: "Model Context Protocol servers and clients that connect AI assistants to tools and data.",
    chips: ["Servers", "Clients", "Tools"],
    visual: "mcp",
  },
  {
    id: "rag",
    title: "RAG pipelines",
    text: "Answers grounded in your own data: chunking, embeddings and vector search with pgvector.",
    chips: ["Embeddings", "pgvector", "Retrieval"],
    visual: "rag",
  },
  {
    id: "tools",
    title: "Tool calling",
    text: "LLMs that call your APIs, databases and services with structured arguments.",
    chips: ["Function calling", "JSON schema"],
    visual: "tools",
  },
  {
    id: "langchain",
    title: "LangChain",
    text: "Prompts, models, retrievers and output parsers composed into reliable chains.",
    chips: ["Prompts", "Retrievers", "Parsers"],
    visual: "chain",
  },
  {
    id: "agents",
    title: "Agents & chatbots",
    text: "Assistants that keep the conversation's context, answer questions and take actions.",
    chips: ["Context", "Actions"],
    visual: "chat",
  },
  {
    id: "vision",
    title: "Multimodal AI",
    text: "LLMs that understand images: product descriptions, AI image search and photo verification.",
    chips: ["Vision", "Image search"],
    visual: "vision",
  },
  {
    id: "prompts",
    title: "Prompt engineering",
    text: "System prompts and templates written so the output stays accurate and in the right format.",
    chips: ["System prompts", "Templates"],
    visual: "prompt",
  },
];

// Real client work that uses these techniques (from the projects list).
export const aiInProduction = [
  {
    name: "MMAREKANI",
    text: "AI image search: an LLM describes product images, embeddings capture them, and similarity search in PostgreSQL finds matches.",
  },
  {
    name: "FrogEater",
    text: "AI-powered before/after photo verification for task completion, with uploads protected by expiring links.",
  },
];
