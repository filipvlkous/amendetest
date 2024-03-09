import { submitFormData } from "@/app/components/new/createBook";
import ImageUpload from "@/app/components/new/form";
import Underline from "@/app/components/underline";

const Page: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 relative w-full ">
      <Underline css="pt-24">Add book</Underline>

      <ImageUpload formSubmit={submitFormData} />
    </div>
  );
};

export default Page;
