import { describe, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import SalesCard from "./SalesCard";

const mockBalance = "0.00008";
const MockSalesCard = () => {
  return <SalesCard balance={mockBalance} />;
};

describe("the SalesCard component", function () {
  it("should render the card component correctly", function () {
    render(<MockSalesCard />);
    const paragraphElement = screen.getByText(/disclaimer/i);
    const paragraphElement2 = screen.getByText(
      /The information provided shall/i
    );
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement2).toBeInTheDocument();
  });

  it("should render input field correctly", () => {
    render(<MockSalesCard />);
    const inputElement = screen.getByTestId("amount-input");
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type in the input field", () => {
    const inputValue = "00.009";
    render(<MockSalesCard />);

    const inputElement = screen.getByTestId(
      "amount-input"
    ) as unknown as HTMLInputElement;

    fireEvent.change(inputElement, {
      target: { value: inputValue },
    });

    expect(inputElement.value).toBe(inputValue);
  });

  it("Should show input field value when the button is clicked", () => {
    const inputValue = "00.08";
    render(<MockSalesCard />);

    const inputElement = screen.getByPlaceholderText(
      /00.00 USDT/i
    ) as unknown as HTMLInputElement;
    const buttonElement = screen.getByRole("button", { name: /buy/i });

    fireEvent.change(inputElement, {
      target: { value: inputValue },
    });

    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe(inputValue);
  });
});
