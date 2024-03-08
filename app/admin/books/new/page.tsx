import ErrorBody from "@/app/components/Error/error";
import ImageUpload from "@/app/components/new/form";
import Underline from "@/app/components/underline";
import Image from "next/image";

const Page: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 relative w-full ">
      <Underline css="pt-24">Add book</Underline>

      <ImageUpload />
    </div>
  );
};

export default Page;
