import { createTheme } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";
import { redux } from "zustand/middleware";

const primary = "customTheme.primary.main";

export const customTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#186cff",
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

  shape: {
    borderRadius: 7,
  },

  textField: {},
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: "#689f38",
        color: "#fff",
      },
    },
    MuiInputBase: {
      colorInherit: {
        backgroundColor: "#689f38",
        color: "#fff",
      },
    },
    MuiInputLabel: {
      style: {
        margin: "dense",
        color: "brown",
      },
    },
  },
  props: {
    MuiAppBar: {
      color: "inherit",
    },
    MuiButton: {
      size: "medium",
    },
    MuiButtonGroup: {
      size: "small",
    },
    MuiCheckbox: {
      size: "small",
    },
    MuiFab: {
      size: "small",
    },
    MuiFormControl: {
      margin: "dense",
      size: "medium",
    },
    MuiFormHelperText: {
      margin: "dense",
    },
    MuiIconButton: {
      size: "small",
    },
    MuiInputBase: {
      margin: "dense",
      backgroundColor: "red",
    },
    MuiInputLabel: {
      margin: "dense",
      color: "red",
    },
    MuiRadio: {
      size: "small",
    },
    MuiSwitch: {
      size: "small",
    },
    MuiTextField: {
      margin: "dense",
      size: "large",
    },
    MuiTooltip: {
      arrow: true,
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
            width: 360,
            borderRadius: 10,
            height: 60,
            p: 0,
            m: 0,
            "&:hover": {
              background: "#2432ff",
            },
            //border: `2px dashed ${blue[500]}`,
          },
        },
      ],
    },

    MuiInputLabel: {
      color: "brown",
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
