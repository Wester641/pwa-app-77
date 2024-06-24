import Link from "next/link";
import React from "react";

function ItemsPage() {
  return (
    <div className="bg-indigo-500 h-28">
      ItemsPage
      <button className="m-5 px-5 shadow-md rounded bg-red-500">
        <Link href={"/"}>Домой</Link>
      </button>
    </div>
  );
}

export default ItemsPage;
