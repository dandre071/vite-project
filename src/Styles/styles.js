import { createTheme } from "@mui/material";
import { themeColors } from "../components/utils/configs";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      //main: "#0054FC",
      main: "#0066FF",
      dark: "#0033FF",
      contrastText: "white",
    },
    secondary: {
      main: "#F44336",
      light: "#EF9A9A",
      dark: "#E53935",
      //main: "#F50057",
      //light: "#E8EAF6",
      //dark: "#777777",
    },
    background: {
      default: "#f1f1f1",
      light: "#F4F4F4",
    },
    text: {
      main: "#000000",
      secondary: "#AEAFB7",
      disabled: "#D5D6E0",
    },
    error: {
      main: "#FF1744",
    },
    warning: {
      main: "#FF1744",
    },
    success: {
      main: "#00E676",
    },
    divider: "rgba(86,86,86,0.12)",

    info: {
      main: "#651FFF",
      dark: "#6200EA",
    },
  },
});

export const listItemStyle = {
  width: 500,
  height: 90,
  borderRadius: 3,
  //bgcolor: "background.light",
  bgcolor: "white",
  // alignContent: "center",
  boxShadow: 3,
  borderStyle: "solid",
  borderWidth: 1.5,
  borderColor: "primary.light",
  /* "&:hover": {
    bgcolor: "primary.lighter",
    borderStyle: "none",
  }, */
};

export const secondaryBtn = {
  height: 50,
  width: 120,
  fontSize: 20,
  color: "white",
  bgcolor: "secondary.main",
  borderRadius: 2,
  borderStyle: "none",
  scale: 1,
  textTransform: " initial",
  "&:hover": {
    bgcolor: "secondary.dark",
  },
  /* "&:hover": {
    bgcolor: "white",
    borderStyle: "solid",
    borderColor: "primary.main",
    borderWidth: 2,
    transform: "scale(1.1)",
    transformOrigin: "center",
    transition: "scale 1",
  }, */
};

export const primaryFilledBtn = {
  height: 55,
  fontSize: 22,
  textTransform: " initial",
  // color: "primary.main",
  //bgcolor: "primary.light",
  color: "white",
  bgcolor: "primary.main",
  //width: 370,
  borderRadius: 2.5,
  pt: 3,
  pb: 3,
  //"&:hover": {
  // color: "primary.main",
  //bgcolor: "primary.light",
  // color: "white",
  // bgcolor: "primary.main",
  //  },
};

export const InputLabelProps = {
  sx: {
    color: theme.palette.primary.dark,
    fontSize: "20px",
    //background: "red",
    paddingRight: 5,
    "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
  },
};
export const header = {
  display: "grid",
  height: 100,

  justifyContent: "center",

  alignItems: "center",
};
