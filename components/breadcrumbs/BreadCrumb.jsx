"use client";
import axios from "axios";
import React, { useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export default function BreadCrumb() {
  // const route = useRouter();

  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  console.log(segments);

  // const handleSubmit = () => {
  //   try {
  //     const res = axios
  //       .get(`http://82.97.249.148:5003/admin/products/`)
  //       .then((res) => console.log(res.data));
  //     if (!res.data) {
  //       console.log("Не удаётся получить res.data!");
  //     } else {
  //       console.log("Успешно получена!");
  //     }
  //   } catch (error) {
  //     console.log(error, "Ошибка из бэка!");
  //   }
  // };

  // const buildPath = (index) => "/" + segment.slice(0, index + 1).join("/");
  const buildPath = (index) => "/" + segments.slice(0, index + 1).join("/");

  return (
    <Breadcrumb className="flex m-10">
      {segments.map((segment, index) => (
        <BreadcrumbList key={index}>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={buildPath(index)}>{segment}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      ))}
    </Breadcrumb>
  );
}
