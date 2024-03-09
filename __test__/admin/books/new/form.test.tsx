import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Page from "../../../../app/admin/books/page";

describe("ImageUpload", () => {
  it("AdminIndex component test", async () => {
    const getData = jest.fn();
    render(await Page());
    expect(screen.getByText("Admin Book List")).toBeInTheDocument();

    expect(await getData()).toHaveBeenCalled();
    // getDataSpy.mockRestore(); // Restore the original function
  });
});

// You can add more tests for other scenarios if needed
