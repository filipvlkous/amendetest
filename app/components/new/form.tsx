"use client";
import { twMerge } from "tailwind-merge";
import { SubmitButton } from "./SubmitButton";
import { submitFormData } from "./createBook";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Modal from "./modal";

const initState = {
  message: "",
};
function ImageUpload() {
  const [modal, setModal] = useState(false);
  const [state, formAction] = useFormState(submitFormData, initState);
  const router = useRouter();

  useEffect(() => {
    if (state?.message == "success") {
      router.push("/admin/books/");
    }

    if (state?.message == "error") {
      setModal(true);
    }
  }, [state]);

  return (
    <div className="pt-20 space-y-10 w-full divide-y divide-gray-900/10">
      <div className="grid grid-cols-1 w-full gap-x-8 gap-y-8 md:grid-cols-3">
        <form
          className="relative ring-1 bg-gradient-radial w-full from-white to-gray-100 sm:rounded-xl md:col-span-2 shadow-lg shadow-gray-500"
          action={formAction}
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
                    minLength={5}
                    maxLength={100}
                    required
                    id="text"
                    name="text"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-black shadow-sm ring-2 ring-black bg-white ring-inset  placeholder:text-gray-800 outline-none sm:text-sm sm:leading-6 "
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
                  required
                  className="w-full text-black text-sm bg-white border ring-2 ring-black mt-2 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-800 file:hover:bg-black file:text-white rounded-md "
                />
                <p className="text-xs text-gray-400 mt-2">
                  PNG, JPG, SVG and WEBP are Allowed.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <SubmitButton />
          </div>
          {modal && <Modal setModal={() => setModal(false)} />}
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
          minLength={2}
          maxLength={50}
          required
          type="text"
          name={htmlFor}
          id={htmlFor}
          className="block flex-1 border-0 shadow-2xl  bg-white ring-black ring-2 outline-none rounded-md py-1.5 pl-1 text-black placeholder:text-gray-600 focus:ring-2 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default ImageUpload;
