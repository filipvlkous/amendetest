"use server";

import { revalidatePath } from "next/cache";
import { formSchema } from "./validation";

/**
 * Updates form data and uploads it to the server
 * @param prevState - The previous state of the data
 * @param formData - The new form data to be updated
 * @returns Object with message indicating success or error, and the updated data
 */
export async function updateFormData(prevState: any, formData: FormData) {
  try {
    // Check if formData is empty
    if (!formData) {
      console.error("No file selected");
      return;
    }

    // Get the file from the formData
    const file = formData.get("file") as File;

    // Get the base64 representation of the file, or use the previous state image
    let base = file.size !== 0 ? await getBase64(file) : prevState.data.img;

    // Create JSON body with form data or previous state data
    const jsonBody = {
      name: formData.get("name") || prevState.data.name,
      author: formData.get("author") || prevState.data.author,
      img: base,
      text: formData.get("text") || prevState.data.text,
    };

    // Validate the JSON body using formSchema
    const dataValid = formSchema.safeParse(jsonBody);
    if (!dataValid.success) {
      console.error(dataValid.error);
      return { message: "error, wrong data." };
    }

    // Send the updated data to the server
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/books/${prevState.data._id}`,
      {
        method: "PUT",
        body: JSON.stringify(jsonBody),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Handle server response
    if (!response.ok) {
      console.error("Error uploading file:", response.statusText);
      return { message: "error", data: prevState.data };
    }
    revalidatePath('/', 'layout') // Revalidate paths
    return { message: "success",data: prevState.data };
  } catch (error) {
    console.error("Error uploading file:", error);
    return { message: "error", data: prevState.data };
  }
}

async function getBase64(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  return buffer.toString("base64");
}
