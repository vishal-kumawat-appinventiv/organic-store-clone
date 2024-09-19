import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import HeroImage from "@/components/HeroImage";

vi.mock("lucide-react", () => ({
  ShoppingCart: () => <svg data-testid="shopping-cart" />,
}));

vi.mock("../libs/mock", () => ({
  heroBottomLeaf: "mock-bottom-leaf.jpg",
  heroImage: "mock-hero-image.jpg",
  leafImg: "mock-leaf-img.jpg",
}));

describe("HeroImage Component", () => {
  it("should render the hero section with correct texts", () => {
    render(<HeroImage />);

    expect(screen.getByText(/Join The Organic Movement!/i)).toBeInTheDocument();

    expect(screen.getByText(/Best Quality Products/i)).toBeInTheDocument();

    expect(screen.getByText(/SHOP NOW/i)).toBeInTheDocument();

    expect(screen.getByTestId("shopping-cart")).toBeInTheDocument();
  });

  it("should render the images correctly", () => {
    render(<HeroImage />);

    expect(screen.getByAltText("bottom")).toHaveAttribute(
      "src",
      "mock-bottom-leaf.jpg"
    );
    expect(screen.getByAltText("heroImage")).toHaveAttribute(
      "src",
      "mock-hero-image.jpg"
    );
    expect(screen.getByAltText("leafHero")).toHaveAttribute(
      "src",
      "mock-leaf-img.jpg"
    );
  });
});
