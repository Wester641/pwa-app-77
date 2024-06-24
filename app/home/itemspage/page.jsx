import Link from "next/link";
import React from "react";

function ItemsPage() {
  return (
    <div className="bg-indigo-500 h-28">
      ItemsPage
      <button className="m-5 px-5 shadow-md rounded-lg bg-red-500">
        {" "}
        <Link href={"/home/itemspage/itemspage1"}>Items1</Link>
      </button>
    </div>
  );
}

export default ItemsPage;
