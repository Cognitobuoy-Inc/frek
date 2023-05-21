"use client";

import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    google: {
      main: "#DC3545",
      dark: "#c02333",
      contrastText: "#f1f1f1",
    },
    facebook: {
      main: "#2b4db1",
      dark: "#3b5998",
      contrastText: "#f1f1f1",
    },
    twitter: {
      main: "#00acee",
      dark: "#0079b8",
      contrastText: "#f1f1f1",
    },
    instagram: {
      main: "#962fbf",
      dark: "#6124a8",
      contrastText: "#f1f1f1",
    },
  },
});

export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
