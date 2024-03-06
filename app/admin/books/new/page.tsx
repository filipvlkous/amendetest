import ImageUpload from "@/app/components/new/form";
import Underline from "@/app/components/underline";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 relative  ">
      <Underline>Add book</Underline>
      {/* <Image
        src={`data:image/png;base64,${img}`}
        width={200}
        height={200}
        alt={""}
      /> */}
      <ImageUpload />
    </div>
  );
};

export default Home;
