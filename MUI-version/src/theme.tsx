import { createTheme } from "@mui/material";

//   /* Fonts */
//   --font-jetbrains: JetBrains Mono, sans-serif;

//   /* Colors */
//   --color-main: #00A099;
//   --color-principal: #5C1D9D;

//   /* Background Colors*/
//   --color-bg-light: #2D2D2D;
//   --color-bg-main: #171717;
//   --color-bg-dark: #1C1A1D;
//   --color-teste: rgb(23,23,23);

const theme = createTheme({
   palette: {
      primary: {
         main: "#00A099",
      },
      secondary: {
         main: "#5C1D9D",
      },
      text: {
         primary: "#fff",
         secondary: "#00A099",
      },
      background: {
         default: "#171717",
         paper: "#1C1A1D",
      },
      customBackgrounds: {
         primary: "#2D2D2D",
      },
   },
   typography: {
      fontFamily: '"JetBrains Mono", monospace',
      fontWeightBold: 700,
   },
});

export default theme;
