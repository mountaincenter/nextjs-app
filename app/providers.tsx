import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
