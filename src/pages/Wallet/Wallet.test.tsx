import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Wallet from "./Wallet";

const MockerWallet = () => {
  return (
    <BrowserRouter>
      <Wallet />
    </BrowserRouter>
  )
}

describe("the Wallet component", () => {
  it("should render the wallet correctly", () => {
    render(<MockerWallet />);
  });
});
