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
      main: "#0067FF",
      dark: "#0552db",
      light: "#c0daff",
      //lighter: "#f3f6ff",
      //contrastText: "#304ffe",
    },
    secondary: {
      /* main: blueGrey[300],
      light: blueGrey[100],
      lighter: blueGrey[50],
      dark: blueGrey[800], */
      main: "#e50037",
      light: "#f2d7e0",
      // lighter: pink[100],
      dark: "#c9003a",
      contrastText: "white",
    },
    divider: "rgba(125,125,125,0.12)",
    error: {
      main: "#e2001b",
      //light: "#ff2727",
      // dark: "#d50000",
    },
    success: {
      main: "#49c134",
      //light: "#2eff62",
      //dark: "#00af2c",
      //contrastText: "rgba(255,255,255,0.87)",
    },
    warning: {
      main: "#ef491d",
      /*  light: "#ff8a2d",
      dark: "#d04200", */
    },
    info: {
      main: "#0d97f4",
      /* light: "#41bcff",
      dark: "#0060a4", */
    },
    background: {
      default: "#f1f1f2",
      light: "#f7f7f7",
      dark: "#e2e2e2",
    },
    text: {
      main: "#02172a",
      light: "#828187",
    },
  },
  spacing: 8,
  p: [1, 2, 3, 4, 5, 6, 8, 10, 12],
  width: [100, 150, 200, 250, 300, 350, 400, 450, 500],
  height: [100, 150, 200, 250, 300, 350, 400, 450, 500],
  shape: {
    borderRadius: 4,
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
            variant: "primary",
            color: "primary.main",
          },

          style: {
            textTransform: "initial",
            //backgroundColor: "customTheme.palette.primary.main",
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
          color: "text.main",
          //color: "primary.main",
          textAlign: "left",
          height: 0,
          fontSize: 18,
          fontWeight: 500,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: variantType,
        minRows: 3,
        fullWidth: true,
      },
    },

    MuiInputBase: {
      defaultProps: {
        multiline: true,
        disableUnderline: true,
        sx: {
          borderRadius: 2,
          bgcolor: "background.defaul",
          color: "text.main",
          fontWeight: 600,
          fontSize: 19,
          "&:hover": {
            backgroundColor: "background.dark",
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

/* export const inputStyle = {
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
 */
