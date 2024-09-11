import { createTheme } from "@mui/material";
import { themeColors } from "../components/utils/configs";
import { customTheme } from "../Hooks/useCustomTheme";
import { BorderBottom } from "@mui/icons-material";

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
  width: 650,
  height: 100,
  borderRadius: 2,
  display: "grid",
  justifyContent: "start",

  //bgcolor: "background.light",
  // bgcolor: "#f5f5f5",
  // alignContent: "center",
  //boxShadow: 3,
  /* borderStyle: "solid",
  borderWidth: 3,
  borderColor: "background.light", */
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

export const ModalCardStyle = {
  //bgcolor: "white",
  borderRadius: customTheme.shape.borderRadius - 2,
  //border: `2px solid ${customTheme.palette.primary.light}`,

  width: "97%",
  height: "85%",
  display: "grid",
  gridTemplateColumns: "30% 70%",
  justifyContent: "center",
  alignItems: "center",
};

export const modal = {
  //flexGrow: 1,
  //minWidth: 160,
  width: 450,
  bgcolor: "white",
  p: 3,
  borderRadius: 1.7,

  /* backgroundColor: "rgb(247, 247, 247, 95%)",
  backdropFilter: "blur(30px)", */
  //boxShadow: 4,
};

export const title = {
  width: 140,

  bgcolor: "primary.light",
  borderRadius: 1.2,
  display: "flex",
  boxSizing: "content-box",
  fontSize: 12,
  justifyContent: "start",
  pl: 0.5,
  alignItems: "center",
};

export const center = { justifySelf: "center", alignSelf: "center" };

export const invoiceGrid = "7.5cm 1cm 2cm 2cm";

export const iconSize = 50;
