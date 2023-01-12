import { describe, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./Input";

const mockRegister = vi.fn();
const mockErrors = {};

const MockInput = () => {
  return (
    <Input
      type="text"
      id="test-input"
      label="test-label"
      errors={mockErrors}
      register={mockRegister}
      required={true}
      placeholder="test-placeholder"
      validationSchema={{
        required: "test-label is required",
      }}
      className="w-full"
      containerClassName="space-y-2"
    />
  );
};

describe("the Input component", () => {
  it("should render input element with the correct label", () => {
    render(<MockInput />);

    const inputElement = screen.getByLabelText("test-label");
    expect(inputElement).toBeInTheDocument();
  });

  it("should change input value on change event", () => {
    const inputValue = "00.009";

    render(<MockInput />);

    const inputElement = screen.getByLabelText(
      "test-label"
    ) as unknown as HTMLInputElement;
    fireEvent.change(inputElement, {
      target: { value: inputValue },
    });

    expect(inputElement.value).toBe(inputValue);
  });
});
