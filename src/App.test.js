import { render, screen } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  window.IntersectionObserver = class {
    observe() {}
    disconnect() {}
    unobserve() {}
  };
  window.matchMedia = () => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} });
});

test("renders the hero headline", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/Senior Full Stack Engineer/i);
});
