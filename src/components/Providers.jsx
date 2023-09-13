"use client";
import store from "@/app/store";
import { SessionProvider } from "next-auth/react";

import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";

function Providers({ children, session }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}

export default Providers;
