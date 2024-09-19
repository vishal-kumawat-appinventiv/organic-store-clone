import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import Navbar from "@/components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
  useDispatch: () => vi.fn(),
}));

describe("Navbar Component", () => {
  it("should render the 'Everything' link with href '/category/shop'", () => {
    //@ts-ignore
    (useSelector as vi.Mock)
      .mockReturnValueOnce(100) // Mock totalPrice
      .mockReturnValueOnce(5); // Mock totalCount

    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const everythingLink = screen.getByText("Everything");
    expect(everythingLink).toBeInTheDocument();
    expect(everythingLink).toHaveAttribute("href", "/category/shop");

    const aboutLink = screen.getByText("About");
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute("href", "/about");

    expect(screen.getByText("£100")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });
});
