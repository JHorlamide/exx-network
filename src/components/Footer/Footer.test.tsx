import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

const MockFooter = () => {
  return (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
};

describe("the Footer component", () => {
  it("should render the Footer correctly", () => {
    render(<MockFooter />);

    const paragraphElement = screen.getByText("© 2022 Exx Network");
    expect(paragraphElement).toBeInTheDocument();
  });
});
