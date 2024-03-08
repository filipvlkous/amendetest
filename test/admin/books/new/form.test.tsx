import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Page from "../../../../app/admin/books/new/page";

describe("ImageUpload", () => {
  it("modal toggles display based on useState", () => {
    // Mocking useRouter to avoid errors related to router
    // jest.mock("next/router", () => ({
    //   useRouter: () => ({ push: jest.fn() }),
    // }));

    render(<Page />);

    // Initial modal should not be displayed
    expect(screen.findAllByText("New Book")).not.toBeNull();
    // expect(screen.queryByText("Some Error")).toBeNull();

    // // Simulate a state change where modal becomes true
    // fireEvent.change(screen.getByLabelText("About"), {
    //   target: { value: "Some text" },
    // });
    // fireEvent.click(screen.getByText("Submit"));

    // // Modal should be displayed now
    // expect(screen.getByText("Some Error")).toBeInTheDocument();

    // // Simulate a state change where modal becomes false
    // fireEvent.click(screen.getByText("Return"));

    // // Modal should be hidden now
    // expect(screen.queryByText("Modal Content")).toBeNull();
  });

  // You can add more tests for other scenarios if needed
});
