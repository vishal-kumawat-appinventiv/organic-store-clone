import { render, screen } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import FruitsCard from "../components/FruitsCard";
import "@testing-library/jest-dom";

vi.mock("../libs/mock", () => ({
  leafDivider: "mock-leaf-divider.jpg",
  fruitsCardProducts: [
    {
      name: "Farm Fresh Fruits",
      desc: "Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.",
      img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product11-free-img.jpg",
    },
  ],
}));

describe("FruitsCard Component", () => {
  it("should render a card with the name 'Farm Fresh Fruits' and correct image", () => {
    render(<FruitsCard />);

    expect(screen.getByText("Farm Fresh Fruits")).toBeInTheDocument();

    const imgElement = screen.getByAltText("img");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute(
      "src",
      "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product11-free-img.jpg"
    );

    expect(
      screen.getByText(
        "Ut sollicitudin quam vel purus tempus, vel eleifend felis varius."
      )
    ).toBeInTheDocument();
  });
});
