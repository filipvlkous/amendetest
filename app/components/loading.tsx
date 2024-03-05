import React from "react";
import Lottie from "lottie-react";
import animation from "../../public/loadingAnim.json";
export default function LoadingBody() {
  return (
    <div className=" w-full h-[100vh] flex justify-center items-center ">
      <Lottie
        className="w-56 h-56"
        animationData={animation}
        autoPlay
        loop={true}
      />
    </div>
  );
}
