"use client";
import { SubmitButton } from "./SubmitButton";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Modal from "../modal";
import { Input, Label } from "../formComponents";

const initState = {
  message: "",
};

type ImageUploadType = {
  formSubmit: (
    prevState: any,
    formData: FormData
  ) => Promise<{ message: string } | undefined>;
};

function ImageUpload({ formSubmit }: ImageUploadType) {
  const [modal, setModal] = useState(false);
  const [state, formAction] = useFormState(formSubmit, initState);
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
      <form
        className="relative ring-1 bg-gradient-radial w-full from-white to-gray-100 sm:rounded-xl md:col-span-2 shadow-lg shadow-gray-500"
        action={formAction}
      >
        <div className="px-4 py-6 sm:p-8">
          <div className="flex flex-col">
            <div className=" flex flex-col md:flex-row w-full ">
              <div className="  w-full ">
                <div className=" group sm:col-span-4">
                  <Label
                    css={
                      "group-hover:translate-x-3 transition-all duration-200"
                    }
                    htmlFor={"name"}
                    label={"Name"}
                  />
                  <Input htmlFor={"name"} placeholder={"Lord of the Rigns"} />
                </div>

                <div className=" group sm:col-span-4 pt-3">
                  <Label
                    css={
                      "group-hover:translate-x-3 transition-all duration-200"
                    }
                    htmlFor={"author"}
                    label={"Author"}
                  />
                  <Input htmlFor={"author"} placeholder={"JRR Tolkien"} />
                </div>
              </div>
              <div className=" group w-full col-span-full">
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
            </div>
            <div className=" group col-span-full pt-5">
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
  );
}

export default ImageUpload;
