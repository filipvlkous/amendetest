import { twMerge } from "tailwind-merge";

export const Label = ({
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

export const Input = ({
  htmlFor,
  placeholder,
}: {
  htmlFor: string;
  placeholder: string;
}) => {
  return (
    <div className="mt-2">
      <div className="flex rounded-md shadow-lg ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-black sm:max-w-lg">
        <input
          minLength={2}
          maxLength={50}
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
