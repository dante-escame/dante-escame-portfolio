import type { GlobalProvider } from "@ladle/react";

import "../app/globals.css";

export const Provider: GlobalProvider = ({ children }) => {
  return (
    <div className="min-h-screen bg-(--color-bg) text-(--color-text)">
      {children}
    </div>
  );
};
