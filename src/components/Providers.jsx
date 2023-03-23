"use client";

import { ThemeProvider } from "next-themes";

function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}

export default Providers;
