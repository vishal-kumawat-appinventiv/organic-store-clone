import { render, screen } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import PriceOffBanner from "@/components/PriceOffBaner";
import "@testing-library/jest-dom";

vi.mock("../components/ShopNowBtn", () => ({
  default: () => <button>Shop Now</button>,
}));

describe("PriceOffBanner Component", () => {
  it("should render the correct text and ShopNowBtn component", () => {
    render(<PriceOffBanner />);

    expect(
      screen.getByText("Get 25% Off On Your First Purchase!")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Try It For Free. No Registration Needed.")
    ).toBeInTheDocument();

    expect(screen.getByText("Shop Now")).toBeInTheDocument();
  });
});
