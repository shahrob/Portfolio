import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AISection from "./AISection";

function renderSection() {
  return render(
    <MemoryRouter>
      <AISection />
    </MemoryRouter>
  );
}

test("shows the AI topics the section is about", () => {
  renderSection();

  expect(screen.getByRole("heading", { name: /ai agents that do real work/i })).toBeInTheDocument();
  ["LangGraph agents", "MCP", "RAG pipelines", "Tool calling", "LangChain"].forEach((name) =>
    expect(screen.getByRole("heading", { name })).toBeInTheDocument()
  );
});

test("lets visitors pause the animation and jump to a step", () => {
  renderSection();

  fireEvent.click(screen.getByRole("button", { name: "Pause animation" }));
  expect(screen.getByRole("button", { name: "Play animation" })).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Step 4: Call tools" }));
  expect(screen.getByText("Step 4 of 7")).toBeInTheDocument();
  // The visible caption (the same text also sits in a screen-reader list).
  expect(
    screen.getByText(/tool calling lets the model use real apis/i, { selector: "p" })
  ).toBeInTheDocument();
});
