import { TrendingUp } from "@mui/icons-material";
import { createTheme } from "@mui/material";
import {
  blue,
  red,
  indigo,
  blueGrey,
  pink,
  deepPurple,
  lightBlue,
} from "@mui/material/colors";
import { redux } from "zustand/middleware";

const primary = "customTheme.primary.main";
const variantType = "filled";
const primaryColor = "#2962ff";
export const customTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      //main: "#186cff",
      main: primaryColor,
      dark: "#304ffe",
      light: indigo[50],
      lighter: "#eef4fe",
      contrastText: "#304ffe",
    },
    secondary: {
      /* main: blueGrey[300],
      light: blueGrey[100],
      lighter: blueGrey[50],
      dark: blueGrey[800], */
      main: "#ff1744",
      light: "#ff4081",
      lighter: pink[100],
      dark: "#f7003b",
      contrastText: "white",
    },
    divider: "rgba(125,125,125,0.12)",
    error: {
      main: "#ff0000",
      light: "#ff2727",
      dark: "#d50000",
    },
    success: {
      main: "#00cc33",
      light: "#2eff62",
      dark: "#00af2c",
      contrastText: "rgba(255,255,255,0.87)",
    },
    warning: {
      main: "#ff7200",
      light: "#ff8a2d",
      dark: "#d04200",
    },
    info: {
      main: blueGrey[50],
      light: "#41bcff",
      dark: "#0060a4",
    },
    background: {
      default: "#e6ecf9",
    },
  },
  spacing: 8,
  p: [1, 2, 3, 4, 5, 6, 8, 10, 12],
  width: [100, 150, 200, 250, 300, 350, 400, 450, 500],
  height: [100, 150, 200, 250, 300, 350, 400, 450, 500],
  shape: {
    borderRadius: 3,
  },

  overrides: {},
  props: {
    MuiInputBase: { disableUnderline: true },
    MuiAppBar: {
      color: "inherit",
    },
    /*  MuiButton: {
      defaultProps: {
        root: {
          color: "primary.main",
        },
      },
    }, */
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: {
            variant: "secondary",
          },

          style: {
            textTransform: "initial",
            backgroundColor: "#ff1744",
            color: "#fff",
            fontSize: 20,
            // width: 400,

            borderRadius: 8,
            height: 60,

            p: 0,
            m: 0,
            "&:hover": {
              background: "#f7003b",
            },
          },
        },
        {
          props: {
            variant: "secondary-outlined",
          },

          style: {
            textTransform: "initial",
            backgroundColor: pink[50],
            color: "#ff1744",
            fontSize: 20,
            // width: 400,
            border: `2px solid ${"#ff1744"}`,
            borderRadius: 8,
            height: 60,

            p: 0,
            m: 0,
            "&:hover": {
              background: "#f7003b",
              color: "#fff",
            },
            "&:disabled": {
              background: pink[50],
              color: pink[100],
              border: "none",
            },
          },
        },
      ],
    },
    MuiSvgIcon: { defaultProps: { sx: { width: 35, height: 35 } } },

    MuiInputLabel: {
      defaultProps: {
        multiline: true,
        //shrink: true,

        sx: {
          // bgcolor: "yellow",
          color: "primary.main",
          textAlign: "left",
          height: 0,
          fontSize: 18,
          fontWeight: 400,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: variantType,
      },
    },

    MuiInputBase: {
      defaultProps: {
        multiline: true,
        disableUnderline: true,
        sx: {
          borderRadius: 2,
          bgcolor: "primary.lighter",
          color: "black",
          fontWeight: 600,
          fontSize: 18,
          "&:hover": {
            backgroundColor: "primary.lighter",
          },
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: variantType,
      },
    },
    MuiGrid2: {
      defaultProps: {
        sx: {
          padding: 0.7,
        },
      },
    },
  },
});

export const inputStyle = {
  "& .MuiOutlinedInput-root": {
    color: "primary.main",
    fontSize: 20,
    fontWeight: 500,
    borderRadius: 2,
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ccc",
      borderWidth: 2,
    },
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "primary.main",
        borderWidth: 2,
      },
    },
    "&:hover:not(.Mui-focused)": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "danger",
      },
    },
    "&.error": {
      color: "red",
    },
  },
  "& .MuiInputLabel-outlined": {
    color: "primary.main",
    fontWeight: "bold",
    "&.Mui-focused": {
      color: "primary.main",
      fontWeight: 400,
      fontSize: 20,
    },
  },
};
