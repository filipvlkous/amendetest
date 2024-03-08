"use server";

import { formSchema } from "./validation";

export async function submitFormData(prevState: any, formData: FormData) {
  try {
    if (!formData) {
      console.error("No file selected");
      return;
    }
    const file = formData.get("file") as File;

    if (!file) {
      console.error("No file selected");
      return;
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base = buffer.toString("base64");

    const jsonBody = {
      name: formData.get("name"),
      author: formData.get("author"),
      img: base,
      text: formData.get("text"),
    };

    const dataValid = formSchema.safeParse(jsonBody);
    if (!dataValid.success) {
      console.error(dataValid.error);
      return { message: "error, wrong data." };
    }

    const response = await fetch(
      " https://crudcrud.com/api/d9d513d77a424d9cb866d89f1321d32b/books/",
      {
        method: "POST",
        body: JSON.stringify(jsonBody),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );


    if (!response.ok) {
      console.error("Error uploading file:", response.statusText);
      return { message: "error" };
    }
    return { message: "success" };
  } catch (error) {
    console.error("Error uploading file:", error);

    return { message: "error" };
  }
}
