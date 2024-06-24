"use client";
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

function MenuNavbar() {
  return (
    <div className="my-10">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="text-white cursor-pointer">
            Menu
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href={"/home"}>Home</Link>
              <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <Link href={"/about"}>About</Link>
              <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <Link href={"/contacts"}>Contacts</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href={"/donate"}>Donate</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href={"/faq"}>Faq</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}

export default MenuNavbar;
