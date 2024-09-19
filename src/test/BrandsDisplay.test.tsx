import { render, screen } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import BrandsDisplay from "../components/BrandsDisplay";
import "@testing-library/jest-dom";

vi.mock("../libs/mock", () => ({
  brandsLogo: [
    {
      img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-4.svg",
    },
    {
      img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg",
    },
  ],
}));

describe("BrandsDisplay Component", () => {
  it("should render the correct brand images", () => {
    render(<BrandsDisplay />);

    const images = screen.getAllByAltText("brand-logo");

    expect(images).toHaveLength(2);

    expect(images[0]).toHaveAttribute(
      "src",
      "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-4.svg"
    );
    expect(images[1]).toHaveAttribute(
      "src",
      "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg"
    );
  });
});
