import { submitFormData } from "../../../../app/components/new/createBook";
import "@testing-library/jest-dom";
describe("submitFormData", () => {
  it("should submit form data", async () => {
    // Mock form data
    const formData = new FormData();

    // FIX file formData file is empty dont know why....
    formData.append(
      "file",
      new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" })
    );
    formData.append("name", "Book Name");
    formData.append("author", "Book Author");
    formData.append("text", "Some book content");

    // Mock fetch
    const global = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: "success" }),
      })
    );

    const result = await submitFormData(null, formData);
    console.log(result);
    expect(result).toEqual({ message: "success" });

    // Clean up
    global.mockClear();
  });

  it("should handle error when submitting form data", async () => {
    // Mock form data
    const formData = new FormData();
    formData.append("file", new File([""], "test.txt"));
    formData.append("name", "Book Name");
    formData.append("author", "Book Author");
    formData.append("text", "Some book content");

    // Mock fetch
    const global = jest.fn(() =>
      Promise.resolve({
        ok: false,
        message: "error",
      })
    );

    const result = await submitFormData(null, formData);
    expect(result).toEqual({ message: "error" });

    // Clean up
    global.mockClear();
  });
});
