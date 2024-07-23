import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#0054FC",
      light: "#E3EDFB",
      dark: "#0041F9",

      contrastText: "#e2f2ff",
    },
    secondary: {
      main: "#B8B8B8",
      light: "#EDEDED",
      dark: "#777777",
    },
    background: {
      default: "#f1f1f1",
      light: "#F4F4F4",
    },
    text: {
      main: "#757575",
      /* main: "#464F5E", */
      secondary: "secondary.main",
      disabled: "secondary.light",
    },
    error: {
      main: "#F44336",
    },
    warning: {
      main: "#FF3D00",
    },
    success: {
      main: "#22C55E",
    },
    divider: "rgba(86,86,86,0.12)",

    info: {
      main: "#0090ff",
      dark: "#0081ff",
    },
  },
});
