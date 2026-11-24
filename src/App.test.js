import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  window.history.pushState({}, "", "/");
  // Network calls (GitHub API, contribution calendar) fail fast in tests.
  global.fetch = jest.fn(() => Promise.reject(new Error("offline")));
});

afterEach(() => {
  delete global.fetch;
});

test("renders the home page with its main sections", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { level: 1, name: "Muhammad Shahrob Abbas" })
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /things i've built/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /where i've worked/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /all 14 projects/i })).toHaveAttribute(
    "href",
    "/projects"
  );
});

test("opens the command menu with Cmd+K and filters commands", () => {
  render(<App />);

  fireEvent.keyDown(window, { key: "k", metaKey: true });
  const dialog = screen.getByRole("dialog", { name: "Command menu" });

  fireEvent.change(within(dialog).getByRole("combobox"), {
    target: { value: "resume" },
  });

  expect(within(dialog).getByRole("option", { name: "Resume" })).toBeInTheDocument();
  expect(within(dialog).queryByRole("option", { name: "About" })).not.toBeInTheDocument();
});

test("filters client projects by category on the projects page", async () => {
  window.history.pushState({}, "", "/projects");
  render(<App />);

  // GitHub is unreachable here, so the page falls back to a note.
  expect(await screen.findByText(/couldn't be loaded right now/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /mobile apps/i }));
  const clientWork = screen.getByRole("region", { name: /client & product work/i });

  expect(within(clientWork).getAllByRole("article")).toHaveLength(4);
});
