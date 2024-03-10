"use server";

import { revalidatePath } from "next/cache";
import { formSchema } from "./validation";

/**
 * Submits form data to the server
 * @param {any} prevState - The previous state of the form
 * @param {FormData} formData - The form data to submit
 * @returns {Promise<{ message: string }>} - A promise with a message indicating success or error
 */
export async function submitFormData(prevState: any, formData: FormData): Promise<{ message: string }> {
  try {
    // Check if formData exists
    if (!formData) {
      console.error("No file selected");
      return { message: "error, wrong data." };
    }

    // Get the file from the formData
    const file = formData.get("file") as File;

    // Check if a file was selected
    if (!file) {
      console.error("No file selected");
      return { message: "error, wrong data." };
    }

    // Convert the file to base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base = buffer.toString("base64");

    // Create a JSON object with form data
    const jsonBody = {
      name: formData.get("name"),
      author: formData.get("author"),
      img: base,
      text: formData.get("text"),
    };

    // Validate the form data
    const dataValid = formSchema.safeParse(jsonBody);
    if (!dataValid.success) {
      console.error(dataValid.error);
      return { message: "error, wrong data." };
    }

    // Send the form data to the server
    const response = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/books/`, {
      method: "POST",
      body: JSON.stringify(jsonBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Handle server response
    if (!response.ok) {
      console.error("Error uploading file:", response.statusText);
      return { message: "error" };
    }
    
    revalidatePath('/', 'layout') // Revalidate paths
    
    // Return success message
    return { message: "success" };
  } catch (error) {
    // Handle any errors that occur
    console.error("Error uploading file:", error);
    return { message: "error" };
  }
}
