import React from "react";
import Link from "next/link";

function ItemsPage() {
  return (
    <div className="bg-indigo-500 h-28">
      ItemsPage
      <button className="m-5 px-5 shadow-md rounded bg-red-500">
        {" "}
        <Link href={"/home/itemspage/itemspage1/itemspage2"}>Items2</Link>
      </button>
    </div>
  );
}

export default ItemsPage;
