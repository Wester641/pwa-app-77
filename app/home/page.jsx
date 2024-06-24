import MenuNavbar from "@/components/menubar/Menubar";
import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <div className="bg-indigo-500 h-28">
      HomePage
      <button className="m-5 px-5 shadow-md rounded bg-red-500">
        {" "}
        <Link href={"/home/itemspage"}>Items</Link>
      </button>
    </div>
  );
}

export default HomePage;
