import { Loader } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <>
      {/* <h1 className="text-2xl bg-indigo-500">Loading...</h1> */}
      <div className="flex justify-center items-center">
        <Loader size={150} color="white" className="animate-spin " />
      </div>
    </>
  );
}
