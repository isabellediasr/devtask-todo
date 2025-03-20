// src/theme.d.ts
import { PaletteOptions } from "@mui/material/styles";

// Extensão do módulo de estilos do MUI
declare module "@mui/material/styles" {
   interface Palette {
      customBackgrounds: {
         primary: string;
         secondary: string;
         tertiary: string;
      };
   }

   interface PaletteOptions {
      customBackgrounds?: {
         primary?: string;
         secondary?: string;
         tertiary?: string;
      };
   }
}
