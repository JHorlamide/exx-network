import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("the Navbar component", function () {
  it("should render the Navbar component correctly", function () {
    render(<Navbar />);
    const headingElement = screen.getByRole("heading", { level: 1 });
    const buttonElement = screen.getByRole("button", {
      name: /Download Tokenomics/i,
    });

    expect(headingElement).toHaveTextContent(/logo here/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
