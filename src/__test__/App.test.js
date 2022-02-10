import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("App input focus on first mount", () => {
    render(<App />);
  });
});
