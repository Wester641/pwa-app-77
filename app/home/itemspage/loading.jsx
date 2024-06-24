import Spinner from "@/components/spinner/Spinner";
import { Loader } from "lucide-react";
import React from "react";

export default function loading() {
  return (
    <>
      <h1 className="text-2xl bg-indigo-500">Loading...</h1>
      <div className="justify-center items-center flex min-h-screen ">
        <Loader size={150} color="green" className="animate-spin" />
      </div>
    </>
  );
}
