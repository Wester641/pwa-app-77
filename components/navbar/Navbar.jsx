import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <ul className="flex m-10 gap-10">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/clienside"}>
          <li>Client Side</li>
        </Link>
        <Link href={"/cliensidehoc"}>
          <li>Client side hoc</li>
        </Link>
        <Link href={"/serverside"}>
          <li>Server side</li>
        </Link>
        <Link href={"/middleeareside"}>
          <li>Middleware side</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
