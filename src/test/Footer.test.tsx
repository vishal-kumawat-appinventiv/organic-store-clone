import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import Footer from "../components/Footer";

vi.mock("lucide-react", () => ({
  Facebook: () => <svg data-testid="facebook-icon" />,
  Instagram: () => <svg data-testid="instagram-icon" />,
  Twitter: () => <svg data-testid="twitter-icon" />,
}));

vi.mock("../libs/mock", () => ({
  btnImgs: [{ img: "mock-btn-img1.jpg" }, { img: "mock-btn-img2.jpg" }],
  mainLogo: "mock-main-logo.jpg",
  moreLinks: [
    {
      title: "Know More About Us",
      href: "/about",
    },
  ],
  quickLinks: [{ href: "/about", title: "About Us" }],
  siteLinks: [
    {
      href: "/privacy-policy",
      title: "Privacy Policy",
    },
  ],
}));

describe("Footer Component", () => {
  it("should render the About Us link", () => {
    render(<Footer />);

    const aboutUsLink = screen.getByText("About Us");
    expect(aboutUsLink).toBeInTheDocument();
    expect(aboutUsLink).toHaveAttribute("href", "/about");

    const knowMoreAboutUsLink = screen.getByText("Know More About Us");
    expect(knowMoreAboutUsLink).toBeInTheDocument();
    expect(knowMoreAboutUsLink).toHaveAttribute("href", "/about");

    const privacyPolicyLink = screen.getByText("Privacy Policy");
    expect(privacyPolicyLink).toBeInTheDocument();
    expect(privacyPolicyLink).toHaveAttribute("href", "/privacy-policy");
  });
  it("should render social media icons", () => {
    render(<Footer />);

    expect(screen.getByTestId("facebook-icon")).toBeInTheDocument();
    expect(screen.getByTestId("twitter-icon")).toBeInTheDocument();
    expect(screen.getByTestId("instagram-icon")).toBeInTheDocument();
  });
});
