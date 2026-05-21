import type { GlobalProvider } from "@ladle/react";

import "../app/globals.css";
import { LocaleProvider } from "../src/lib/i18n/context";

export const Provider: GlobalProvider = ({ children }) => {
  return (
    <LocaleProvider initialLocale="en">
      <div className="min-h-screen bg-(--color-bg) text-(--color-text)">
        {children}
      </div>
    </LocaleProvider>
  );
};
