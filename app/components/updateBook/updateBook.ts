"use server";

import { revalidatePath } from "next/cache";
import { formSchema } from "./validation";

export async function updateFormData(prevState: any, formData: FormData) {
  try {
    if (!formData) {
      console.error("No file selected");
      return;
    }

    const file = formData.get("file") as File;

    let base = file.size !== 0 ? await getBase64(file) : prevState.data.img;

    const jsonBody = {
      name: formData.get("name") || prevState.data.name,
      author: formData.get("author") || prevState.data.author,
      img: base,
      text: formData.get("text") || prevState.data.text,
    };

    const dataValid = formSchema.safeParse(jsonBody);
    if (!dataValid.success) {
      console.error(dataValid.error);
      return { message: "error, wrong data." };
    }

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

    if (!response.ok) {
      console.error("Error uploading file:", response.statusText);
      return { message: "error", data: prevState.data };
    }
    revalidatePath('/', 'layout')
    // revalidatePath("http://localhost:3000/admin/books");
    // revalidatePath(`http://localhost:3000/admin/books/[id]`,'page');
    // revalidatePath("http://localhost:3000/books");

    return { message: "success" };
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
