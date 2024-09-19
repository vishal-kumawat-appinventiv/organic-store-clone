import { render, screen, waitFor } from "@testing-library/react";
import { useSelector } from "react-redux";
import TrendingProd from "@/components/TrendingProd";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";

vi.mock("../components/ProductComponent", () => ({
  default: ({ data }: any) => (
    <div>
      <img src={data.img} alt={data.name} />
      <p>{data.name}</p>
    </div>
  ),
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

describe("TrendingProd Component", () => {
  it("should render a product with the name 'Handpicked Red Chillies' and the correct image", async () => {
    //@ts-ignore
    (useSelector as vi.Mock)
      .mockReturnValueOnce(false) // No loading
      .mockReturnValueOnce(null) // No error
      .mockReturnValueOnce([
        {
          id: 1,
          name: "Handpicked Red Chillies",
          img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies.jpg",
        },
      ]);

    render(<TrendingProd />);

    // Wait for the lazy-loaded ProductComponent to appear
    await waitFor(() =>
      expect(screen.getByAltText("Handpicked Red Chillies")).toBeInTheDocument()
    );
    expect(screen.getByText("Handpicked Red Chillies")).toBeInTheDocument();
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    expect(screen.queryByText("Error:")).not.toBeInTheDocument();
  });
});
