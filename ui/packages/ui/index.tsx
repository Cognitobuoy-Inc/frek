declare module "@mui/material/styles" {
  interface Palette {
    google: Palette["primary"];
    twitter: Palette["primary"];
    facebook: Palette["primary"];
    instagram: Palette["primary"];
  }

  interface PaletteOptions {
    google: PaletteOptions["primary"];
    twitter: PaletteOptions["primary"];
    facebook: PaletteOptions["primary"];
    instagram: PaletteOptions["primary"];
  }
}

import AuthCard from "./Card";
export { AuthCard };

export * from "./Button";
export * from "./Header";
export * from "./Result";
export * from "./theme";
