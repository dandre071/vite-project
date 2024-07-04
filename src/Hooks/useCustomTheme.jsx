import { createTheme } from "@mui/material";
import { blue, red, indigo } from "@mui/material/colors";
import { redux } from "zustand/middleware";

const primary = "customTheme.primary.main";
const variantType = "filled";
export const customTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      //main: "#186cff",
      main: "#2979ff",
      dark: "#2432ff",
      light: "#e8eaf6",
    },
    secondary: {
      main: "#f50032",
      light: "#ef1420",
      dark: "#f5001f",
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
      main: "#009aec",
      light: "#41bcff",
      dark: "#0060a4",
    },
    background: {
      default: "#e6ecf9",
    },
  },
  spacing: 8,
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
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            textTransform: "initial",
            backgroundColor: " #186cff",
            color: "white",
            fontSize: 22,
            //width: 360,
            borderRadius: 10,
            height: 60,
            p: 0,
            m: 0,
            "&:hover": {
              background: "#2432ff",
            },
          },
        },
      ],
    },

    MuiInputLabel: {
      defaultProps: {
        multiline: true,
        //shrink: true,

        sx: {
          bgcolor: "yellow",
          color: "blue",
          textAlign: "left",
          height: 0,
          fontSize: 18,
          fontWeight: 600,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        underline: {
          "&:before": {
            borderBottomColor: "red",
          },
          "&:hover:not(.Mui-focused):before": {
            borderBottomColor: "green",
          },
          "&:after": {
            // focused
            borderBottomColor: "purple",
          },
        },
        variant: variantType,
      },
    },
    MuiInputBase: {
      defaultProps: {
        root: {
          bgcolor: "pink",
        },
        multiline: true,
        disableUnderline: true,
        sx: {
          borderRadius: 2,
          bgcolor: "green",
          color: "black",
          fontWeight: 600,
          fontSize: 18,
          "&:hover": {
            backgroundColor: "red",
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
