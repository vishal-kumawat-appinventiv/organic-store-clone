import { render, screen } from "@testing-library/react";
import HeroCards from "../components/HeroCards";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";

vi.mock("../libs/mock", () => ({
  heroCardsData: [
    {
      topic: "Free Shipping",
      desc: "Above $5 Only",
      icon: () => <svg data-testid="free-shipping-icon" />,
    },
    {
      topic: "Certified Organic",
      desc: "100% Guarantee",
      icon: () => <svg data-testid="certified-organic-icon" />,
    },
    {
      topic: "Huge Savings",
      desc: "At Lowest Price",
      icon: () => <svg data-testid="huge-savings-icon" />,
    },
    {
      topic: "Easy Returns",
      desc: "No Questions Asked",
      icon: () => <svg data-testid="easy-returns-icon" />,
    },
  ],
}));

describe("HeroCards Component", () => {
  it("should render all the hero cards with correct content", () => {
    render(<HeroCards />);

    expect(screen.getByText(/Free Shipping/i)).toBeInTheDocument();
    expect(screen.getByText(/Above \$5 Only/i)).toBeInTheDocument();

    expect(screen.getByText(/Certified Organic/i)).toBeInTheDocument();
    expect(screen.getByText(/100% Guarantee/i)).toBeInTheDocument();

    expect(screen.getByText(/Huge Savings/i)).toBeInTheDocument();
    expect(screen.getByText(/At Lowest Price/i)).toBeInTheDocument();

    expect(screen.getByText(/Easy Returns/i)).toBeInTheDocument();
    expect(screen.getByText(/No Questions Asked/i)).toBeInTheDocument();
  });

  it("should render the correct icons for each card", () => {
    render(<HeroCards />);

    expect(screen.getByTestId("free-shipping-icon")).toBeInTheDocument();
    expect(screen.getByTestId("certified-organic-icon")).toBeInTheDocument();
    expect(screen.getByTestId("huge-savings-icon")).toBeInTheDocument();
    expect(screen.getByTestId("easy-returns-icon")).toBeInTheDocument();
  });
});
