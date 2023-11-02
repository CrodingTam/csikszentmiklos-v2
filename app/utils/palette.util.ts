import { Color } from "@mui/material";

export interface Custom extends Color {
  main: string;
}

interface CustomPalette {
  white: Custom;
  black: Custom;
}

declare module "@mui/material/styles" {
  /* eslint-disable no-unused-vars */
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}
