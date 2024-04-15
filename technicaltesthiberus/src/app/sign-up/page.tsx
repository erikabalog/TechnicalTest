"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaAngleLeft } from "react-icons/fa6";

export default function SignUpPage() {
  //redirect user to login page
  const router = useRouter();

  const [user, setUser] = React.useState({
    username: "",
    surname: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const onSignUp = async () => {
    try {
      setLoading(true);

      console.log ('entrei no signup no client');
      const response = await axios.post("/api/users/signup", user);
      console.log("Successfully signed up", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.surname.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  console.log(user);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="py-10 mb-10 text-5xl">Signup Page </h1>
      {loading ? "Processing" : ""}
      <input
        className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="username"
        type="text"
        value={user.username}
        placeholder="Username..."
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />

      <input
        className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="surname"
        type="text"
        value={user.surname}
        onChange={(e) => setUser({ ...user, surname: e.target.value })}
        placeholder="Surname..."
      />

      <input
        className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email..."
      />

      <input
        className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password..."
      />

      <button
        onClick={onSignUp}
        className="p-2 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 uppercase px-40 py-3 mt-10 font-bold"
      >
        {buttonDisabled ? "Sign Up" : "Sign Up"}
      </button>

      <Link href="/login">
        <p className="mt-8 opacity-50 font-bold text-green-600 ml-2 cursor-pointer underline">
          <FaAngleLeft className="inline nr-1" /> Login Page
        </p>
      </Link>

      <Link href="/">
        <p className="mt-8 opacity-50 font-bold text-green-600 ml-2 cursor-pointer underline">
          <FaAngleLeft className="inline nr-1" /> Home Page
        </p>
      </Link>
    </div>
  );
}
