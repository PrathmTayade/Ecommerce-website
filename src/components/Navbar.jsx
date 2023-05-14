"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useSelector } from "react-redux";
import { cartSelector } from "@/reducers/cartSlice";
import Cart from "./Cart";
import CartLogo from "../../public/cart.png";
import Image from "next/image";
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { logIn, logout, signInWithGoogle } from "@/firebase/auth";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const cart = useSelector(cartSelector);

  const auth = getAuth();
  const user = auth?.currentUser;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, handle the authenticated state
        // For example, you can update the UI, set a flag, or redirect to a protected route
        console.log("user logged in");
        setLoggedIn(true);
      } else {
        // User is signed out, handle the unauthenticated state
        // For example, you can clear the user data, update the UI, or redirect to a sign-in page
        setLoggedIn(false);
        console.log("user logged out");
      }
    });
  }, [auth]);

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between border-b border-slate-300 bg-white/75 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/75 ">
      <div className="container mx-auto  flex w-full max-w-7xl items-center justify-between px-6">
        <Link href="/" className="relative flex items-center  ">
          <Image
            src={CartLogo}
            alt="cart logo"
            className="h-10 w-10 object-contain"
          />
          <span className=" hidden px-2 text-xl font-semibold sm:block">
            Shopcart
          </span>
        </Link>
        <div className="flex items-center gap-2 md:hidden">
          <Link href={"/shop"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </Link>
          <div className="relative">
            <Link href={"/cart"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </Link>

            <div className="absolute right-0 top-0  block h-4 w-4 rounded-full bg-red-600 text-center text-[10px] text-white ">
              {cart.items.length}
            </div>
          </div>
          <ThemeToggle />
        </div>

        {/* Desktop */}
        <div className="hidden items-center justify-center gap-4 md:flex">
          <Link href={"/shop"}>Shop</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/cart"}> Cart</Link>
          <div className=" block h-6 w-6 rounded-full bg-red-400 text-center text-white ">
            {cart.items.length}
          </div>
          <ThemeToggle />

          <div>
            {loggedIn ? (
              <button type="button" onClick={logout}>
                Logout
              </button>
            ) : (
              <button type="button" onClick={signInWithGoogle}>
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
