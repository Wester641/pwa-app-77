"use client";
import { Suspense, useEffect, useState } from "react";
import { Loader } from "lucide-react";
import React from "react";
import Loading from "./loading";
// import Form from "@/components/Inputform/Form";
import UsersList from "@/components/Inputform/UsersList";
import BreadCrumb from "@/components/breadcrumbs/BreadCrumb";

const Form = React.lazy(() => import("@/components/Inputform/Form"));
// const UsersList = React.lazy(() => import("@/components/Inputform/UsersList"));
// const BreadCrumb = React.lazy(() =>
//   import("@/components/breadcrumbs/BreadCrumb")
// );

export default function Home() {
  const [name, setName] = useState("");
  const [storageName, setStorageName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const handleChange = (e) => {
    setName(e.target.value);
    localStorage.setItem("name", e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("zafarzhon@gmail.com", "zafarzhon77");
    setStorageName("zafarzhon77");
  }, []);

  const handleChangeLogin = (e) => {
    const getOtherName = localStorage.getItem(e.target.value);
    if (getOtherName) {
      console.log("Item есть!");
      // router.push("/contacts");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <Suspense fallback={<Loading />}>
        <Form />
      </Suspense>
      {/* <Suspense fallback={<Loading />}> */}
      <UsersList />
      {/* </Suspense> */}
      {/* <Suspense fallback={<Loading />}> */}
      <BreadCrumb />
      {/* </Suspense> */}
      <div>
        <input
          className="text-black"
          type="text"
          value={name}
          onChange={handleChange}
        />
        <p>Name: {name}</p>
        <p>Login: {storageName}</p>
        <input
          className="text-black"
          type="text"
          value={storageName}
          onChange={handleChangeLogin}
        />
      </div>
    </main>
  );
}
