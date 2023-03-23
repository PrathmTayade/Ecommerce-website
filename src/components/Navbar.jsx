import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between border-b border-slate-300 bg-white/75 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/75 ">
      <div className="container px-6  mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link href="/" className="">
          Home
        </Link>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
        <div className="hidden gap-4 md:flex">
          <ThemeToggle />
          <Link href="/shop">Shop</Link>
          <Link href="/about">about</Link>
        </div>
      </div>
    </div>
  );
}
