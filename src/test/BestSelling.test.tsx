import { render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";
import BestSelling from "../components/BestSelling";
import { describe, it, vi, expect } from "vitest";
import "@testing-library/jest-dom";

vi.mock("../components/ProductComponent", () => ({
  default: ({ data }: any) => <p>{data.name}</p>,
}));

vi.mock("../components/Loading", () => ({
  default: () => <div>Loading...</div>,
}));
vi.mock("../components/Error", () => ({
  default: ({ error }: { error: string }) => <div>Error: {error}</div>,
}));

vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
}));

describe("BestSelling Component", () => {
  it("should render a product with the name 'Assorted Coffee'", () => {
    //@ts-ignore
    (useSelector as vi.Mock)
      .mockReturnValueOnce(false) // No loading
      .mockReturnValueOnce(null) // No error
      .mockReturnValueOnce([
        {
          name: "Assorted Coffee",
          img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted.jpg",
        },
      ]);

    render(<BestSelling />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText("Assorted Coffee")).toBeInTheDocument();
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    expect(screen.queryByText("Error:")).not.toBeInTheDocument();
  });
});
