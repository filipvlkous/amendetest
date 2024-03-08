"use client"; // Error components must be Client Components
import Image from "next/image";
import Gandalf from "../../../public/gandalf.png";
import { useEffect } from "react";
import Underline from "../underline";
export default function ErrorBody({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 relative  ">
      <Underline>Something went wrong</Underline>
      <div className=" flex flex-col items-center pt-20">
        <Image src={Gandalf} alt="Gandalf Error Mage" />

        <div className="relative inline-flex mt-20 ju  group">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <button
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
            className="relative inline-flex items-center justify-center px-4 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Reset page
          </button>
        </div>
      </div>
    </div>
  );
}
