"use client";
import store from "@/app/store";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";

function Providers({ children }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system">
        {children}
      </ThemeProvider>
    </Provider>
  );
}

export default Providers;
