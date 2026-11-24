import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

const UPWORK_URL = "https://www.upwork.com/freelancers/~01589f1d414475058b";
const FIVERR_URL = "https://www.fiverr.com/s/1EKlGDz";

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
  expect(screen.getByRole("heading", { name: /ai agents that do real work/i })).toBeInTheDocument();
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

  fireEvent.change(within(dialog).getByRole("combobox"), {
    target: { value: "hire" },
  });

  expect(within(dialog).getByRole("option", { name: "Hire me on Upwork" })).toBeInTheDocument();
  expect(within(dialog).getByRole("option", { name: "Hire me on Fiverr" })).toBeInTheDocument();
});

test("invites visitors to hire me on Upwork and Fiverr", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: "Hire me on Upwork" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Hire me on Fiverr" })).toBeInTheDocument();

  // Hero pill, services band pill, contact card, footer icon.
  const fiverrLinks = screen.getAllByRole("link", { name: /fiverr/i });
  expect(fiverrLinks.length).toBeGreaterThanOrEqual(4);
  fiverrLinks.forEach((link) => expect(link).toHaveAttribute("href", FIVERR_URL));

  const upworkHireLinks = screen.getAllByRole("link", { name: /hire me on upwork/i });
  expect(upworkHireLinks.length).toBeGreaterThanOrEqual(3);
  upworkHireLinks.forEach((link) => expect(link).toHaveAttribute("href", UPWORK_URL));
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
