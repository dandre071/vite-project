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
const primaryColor = "#333dff";
const primaryDarkColor = "#2e29ff";
const primaryLightColor = "#f1f6ff";
const primaryLightherColor = "#fafcff";
const secondaryColor = "#e50037";
export const customTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      //main: "#186cff",
      //main: "#0067FF",
      main: primaryColor,
      //dark: "#0552db",
      dark: primaryDarkColor,
      light: primaryLightColor,
      lighter: primaryLightherColor,
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
      main: "#e50037",
      //main: "#e2001b",
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
      light: "#eef2ff",
      //light: "#f7f7f7",
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

  overrides: {
    MuiFilledInput: {
      overrides: {
        multiline: true,
        disableUnderline: true,
        sx: {
          borderRadius: 2,
          bgcolor: "#f3f3f3",
          color: "text.main",
          fontWeight: 600,
          fontSize: 19,
          "&:hover": {
            backgroundColor: "#f3f3f3",
          },
          "&:notched": {
            backgroundColor: "#f3f3f3",
          },
          "& .MuiInputLabel-shrink": {
            color: "blue",
          },
        },
      },
    },
  },
  props: {
    /* MuiInputBase: { disableUnderline: true },
    MuiAppBar: {
      color: "inherit",
    }, */
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: {
            variant: "prime",
            color: "primary",
            //fullWidth: "true",
          },

          style: {
            textTransform: "initial",
            backgroundColor: primaryColor,
            color: "white",
            fontSize: 20,
            //width: 400,

            borderRadius: 8,
            height: 70,

            p: 0,
            m: 0,
            "&:hover": {
              background: primaryDarkColor,
            },
            /* "&:disabled": {
              backgroundColor: primaryLightherColor,
              border: `2px solid ${primaryColor}`,
              color: primaryColor,
              fontSize: 20,
            }, */
            "&:disabled": {
              background: primaryColor,
              color: primaryLightColor,
            },
          },
        },
        {
          props: {
            variant: "prime-light",
            color: "primary",
          },

          style: {
            textTransform: "initial",
            // backgroundColor: "white",
            border: `2px solid ${primaryColor}`,
            color: primaryColor,
            fontSize: 20,
            // width: 400,

            borderRadius: 8,
            height: 60,

            p: 0,
            m: 0,
            "&:hover": {
              background: "white",
              color: "#d6e7fc",
            },
          },
        },
        {
          props: {
            variant: "secondary",
          },

          style: {
            textTransform: "initial",
            background: "#e50037",
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
            "&:disabled": {
              background: primaryColor,
              color: primaryLightColor,
            },
          },
        },
        {
          props: {
            variant: "secondary-outlined",
          },

          style: {
            textTransform: "initial",
            background: "white",
            color: secondaryColor,
            fontSize: 20,
            // width: 400,
            border: `3px solid ${secondaryColor}`,
            borderRadius: 8,
            height: 60,

            p: 0,
            m: 0,
            /* "&:hover": {
              background: "#f7003b",
            },
            "&:disabled": {
              background: "#f7f7f7",
            }, */
          },
        },
        {
          props: {
            variant: "success",
          },

          style: {
            textTransform: "initial",
            background: "#49c134",
            // color: secondaryColor,
            fontSize: 20,

            borderRadius: 8,
            height: 60,

            p: 0,
            m: 0,
            /* "&:hover": {
              background: "#f7003b",
            },
            "&:disabled": {
              background: "#f7f7f7",
            }, */
          },
        },
      ],
    },
    MuiSvgIcon: { defaultProps: { sx: { width: 35, height: 35 } } },
    /* 
    MuiInputLabel: {
      defaultProps: {
        multiline: true,
        //shrink: true,

        sx: {
          // bgcolor: "yellow",
          color: "primary.main",
          //color: "primary.main",
          textAlign: "left",
          height: 0,
          fontSize: 18,
          fontWeight: 500,
        },
      },
    }, */

    MuiTextField: {
      defaultProps: {
        variant: variantType,
        minRows: 2,
        fullWidth: true,
        sx: {
          color: "green",
        },
      },
    },

    MuiInputBase: {
      defaultProps: {
        multiline: true,
        disableUnderline: false,
        sx: {
          borderRadius: 2,
          bgcolor: "red",
          color: "green",
          fontWeight: 600,
          fontSize: 19,
          "&:hover": {
            backgroundColor: "red",
          },
          "&.Mui-focused": {
            "&:hover:not(.Mui-focused)": {
              "& .MuiFilledInput-notchedFilled": {
                color: "orange",
              },
            },
            "&.error": {
              color: "purple",
            },
          },
          "& .MuiInputLabel-filled": {
            color: "red",
            fontWeight: "bold",
            bgcolor: "red",
            "&.Mui-focused": {
              color: "red",
              fontWeight: 400,
              fontSize: 20,
            },
          },
        },
      },
    },
    MuiFilledInput: {
      defaultProps: {
        multiline: true,
        disableUnderline: true,

        sx: {
          borderRadius: 2,
          bgcolor: "#f3f3f3",
          color: "text.main",
          fontWeight: 600,
          fontSize: 19,
          "&:hover": {
            backgroundColor: "#f3f3f3",
          },
          "&:notched": {
            backgroundColor: "#f3f3f3",
          },

          "& .MuiFilledInputLabel": {
            color: "blue",
          },
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: variantType,
        "& .MuiInputLabel-shrink": { color: "blue" },
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
