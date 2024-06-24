"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    axios
      .post(`${API_URL}/users/login/`, {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.msg) {
          alert("Success login");
        } else if (res.errors.non_field_errors) {
          setError(res.errors.non_field_errors[0]);
          console.log(error);
        }

        if (res.data.token) {
          localStorage.setItem("access-token", res.data.token.access);
          localStorage.setItem("refresh-token", res.data.token.refresh);
        } else {
          console.log("Access token failed");
        }

        const getAccesToken = localStorage.getItem("access-token");
        const getRefreshToken = localStorage.getItem("refresh-token");

        // if (getAccesToken) {
        //   router.push("/contacts");
        // }
      })
      .catch((error) => {
        console.log("Произошла ошибка!", error);
        if (error.response) {
          if (
            error.response.data &&
            error.response.data.errors &&
            error.response.data.errors.non_field_errors
          ) {
            setError(error.response.data.errors.non_field_errors[0]);
          } else {
            setError("Произошла ошибка на сервере");
          }
        } else if (error.request) {
          setError("Не удалось получить ответ от сервера");
        } else {
          setError("Произошла ошибка при отправке запроса");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-black">
        <input
          type="email"
          placeholder="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className=" bg-indigo-500" type="submit">
          {loading ? "Loading..." : "Login"}
        </button>
        <span className="bg-indigo-500 text-center "></span>
      </form>
      <div className="bg-white text-red-500">
        {error && <div className="bg-white text-red-500">{error}</div>}
      </div>
    </>
  );
}

export default Form;
