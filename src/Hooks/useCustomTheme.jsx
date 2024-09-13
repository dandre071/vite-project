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
const primaryColor = "#0866FF";
const primaryDarkColor = "#0530ad";
const primaryDarkerColor = "#2962ff";
const primaryLightColor = "#76ABDF";
const primaryLightherColor = "#82b1ff";
const secondaryColor = "#e50037";
const mainText = "#02172a";
//const backgroundColor =
const grey = "#B0C4DE"; //light steel blue
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
      main: "#e50037",
      light: "#f2d7e0",

      dark: "#c9003a",
      contrastText: "white",
    },
    divider: "rgba(125,125,125,0.12)",
    error: {
      main: "#e50037",
    },
    success: {
      main: "#49c134",
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
      light: grey,
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
          //bgcolor: "green",
          color: "text.main",
          fontWeight: 600,
          fontSize: 16,
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
          color: primaryColor,
        },
      },
    },

    MuiInputBase: {
      defaultProps: {
        multiline: true,
        disableUnderline: true,
        sx: {
          borderRadius: 2,
          //bgcolor: "red",
          color: mainText,
          fontWeight: 600,
          fontSize: 16,
          "&:hover": {
            backgroundColor: primaryLightherColor,
            borderStyle: "none",
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
              fontSize: 16,
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        multiline: true,
        disableUnderline: true,

        sx: {
          borderRadius: 2,
          // bgcolor: primaryLightherColor,
          color: "text.main",
          fontWeight: 600,
          fontSize: 15,
          "&:hover": {
            backgroundColor: primaryLightherColor,
          },
          "&:notched": {
            backgroundColor: primaryLightherColor,
            borderStyle: "none",
          },

          "& .MuiFilledInputLabel": {
            color: "blue",
          },
        },
      },
    },

    MuiOutlinedInput: {
      defaultProps: {
        multiline: true,

        sx: {
          borderRadius: 1.5,
          // bgcolor: "#f3f3f3",
          color: "text.main",
          fontWeight: 600,
          fontSize: 17,
          "&:hover": {
            backgroundColor: "#f3f3f3",
          },
          "&:notched": {
            backgroundColor: "#f3f3f3",
          },

          "& .MuiOutlinedInputLabel": {
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
          padding: 1,
        },
      },
    },
  },
});
