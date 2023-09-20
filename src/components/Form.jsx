"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoadingDots from "./LoadingDots";
import { useForm } from "react-hook-form";

const Form = ({ type }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);

    if (type === "login") {
      signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      }).then(({ error }) => {
        if (error) {
          setLoading(false);
          toast.error(error);
        } else {
          // router.refresh();
          router.push("/");
        }
      });
    } else {
      fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      }).then(async (res) => {
        setLoading(false);
        if (res.status === 200) {
          toast.success("Account created! Redirecting to login...");
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        } else {
          console.log(res);
          toast.error(res.error);
        }
      });
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
    >
      <div>
        <label
          htmlFor="email"
          className="block text-xs uppercase text-gray-600"
        >
          Email Address
        </label>
        <input
          id="email"
          placeholder="panic@thedis.co"
          autoComplete="email"
          type="text"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-xs uppercase text-gray-600"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password")}
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <button
        disabled={loading}
        className={`${
          loading
            ? "cursor-not-allowed border-gray-200 bg-gray-100"
            : "border-black bg-black text-white hover:bg-white hover:text-black"
        } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
      >
        {loading ? (
          <LoadingDots color="#808080" />
        ) : (
          <p>{type === "login" ? "Sign In" : "Sign Up"}</p>
        )}
      </button>
      {type === "login" ? (
        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-gray-800">
            Sign up
          </Link>{" "}
          for free.
        </p>
      ) : (
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-gray-800">
            Sign in
          </Link>{" "}
          instead.
        </p>
      )}
    </form>
  );
};

export default Form;
