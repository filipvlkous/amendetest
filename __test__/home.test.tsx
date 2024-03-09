import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";
import { HomeSparkles } from "@/app/components/home";

describe("Page", () => {
  it("renders a heading", async () => {
    render(<HomeSparkles />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
