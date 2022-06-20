import React from "react";
import logo from "./cu.png";

export default function Message() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center px-10 md:mt-0 mt-12">
        <img src={logo} className="max-w-xs" alt="logo" />
        <p className="text-xl font-medium text-gray-500 px-5 mt-5 max-w-lg text-center">
          A verification link has been sent to <b className="text-green-500">exampleuser@course.uni.lk</b>. Click that link to verify your email and registr to <b className="text-teal-500">ceylonuni.lk</b>.
        </p>
      </div>
    </div>
  );
}
