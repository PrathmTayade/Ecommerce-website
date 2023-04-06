"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);
  const setThemeMode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };


  if (!mounted) {
    return null;
  }

  return (
    <div
      onClick={setThemeMode}
      className="ease  h-10 w-10  flex items-center justify-center rounded-full p-1 "
    >
      {theme === "dark" ? (
        <SunIcon className="fill-black" />
      ) : (
        <MoonIcon className="fill-black" />
      )}
    </div>
  );
}
