// components/ImageUpload.tsx
import { PhotoIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
function ImageUpload() {
  const submitFormData = async (formData: FormData) => {
    "use server";
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

    try {
      const response = await fetch(
        "https://crudcrud.com/api/7c01e6b4f7f04ae39bb0304b6adb621a/books/",
        {
          method: "POST",
          body: JSON.stringify(jsonBody),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="pt-20 space-y-10 divide-y divide-gray-900/10">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
        <form
          className="ring-1 bg-gradient-radial from-white to-gray-300 sm:rounded-xl md:col-span-2 shadow-lg shadow-gray-500"
          action={submitFormData}
        >
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
              <div className=" group sm:col-span-4">
                <Label
                  css={"group-hover:translate-x-3 transition-all duration-200"}
                  htmlFor={"name"}
                  label={"Name"}
                />
                <Input htmlFor={"name"} placeholder={"Lord of the Rigns"} />
              </div>

              <div className=" group sm:col-span-4">
                <Label
                  css={"group-hover:translate-x-3 transition-all duration-200"}
                  htmlFor={"author"}
                  label={"Author"}
                />
                <Input htmlFor={"author"} placeholder={"JRR Tolkien"} />
              </div>

              <div className=" group col-span-full">
                <Label
                  css={"group-hover:translate-x-3 transition-all duration-200"}
                  htmlFor={"text"}
                  label={"About"}
                />
                <div className="mt-2">
                  <textarea
                    id="text"
                    name="text"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 bg-transparent ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Write a few sentences about book.
                </p>
              </div>

              <div className=" group col-span-full">
                <Label
                  css={"group-hover:translate-x-3 transition-all duration-200"}
                  htmlFor={"file"}
                  label={"Image"}
                />
                <input
                  id="file"
                  name="file"
                  type="file"
                  className="w-full text-black text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-900 file:hover:bg-gray-200 file:text-white rounded-md "
                />
                <p className="text-xs text-gray-400 mt-2">
                  PNG, JPG SVG, WEBP, and GIF are Allowed.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const Label = ({
  htmlFor,
  label,
  css,
}: {
  htmlFor: string;
  label: string;
  css?: string;
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={twMerge("block text-md font-bold leading-6 text-black", css)}
    >
      {label}
    </label>
  );
};

const Input = ({
  htmlFor,
  placeholder,
}: {
  htmlFor: string;
  placeholder: string;
}) => {
  return (
    <div className="mt-2">
      <div className="flex rounded-md shadow-lg ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-black sm:max-w-md">
        <input
          type="text"
          name={htmlFor}
          id={htmlFor}
          className="block flex-1 border-0 shadow-2xl  bg-gray-200 ring-black ring-2 outline-none rounded-md py-1.5 pl-1 text-black placeholder:text-gray-600 focus:ring-2 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default ImageUpload;
