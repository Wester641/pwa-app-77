"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Contacts() {
  const router = useRouter();

  const handleClick = () => {
    const logoutTrue = confirm("Вы действительно хотите выйти?");

    if (logoutTrue) {
      localStorage.removeItem("access-token");
      router.push("/");
    }
  };

  return (
    <div className="bg-indigo-500 h-28 flex gap-10">
      <div className="">Contacts</div>
      <div className="w-30 ">
        <button
          className="bg-black rounded px-5 relative top-5"
          onClick={handleClick}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Contacts;
