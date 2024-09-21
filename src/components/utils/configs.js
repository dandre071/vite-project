/* import { theme } from "../../Styles/styles";

export const themeColors = {
  neutralLight: "white",
  neutralDark: "black",
  bg: theme.palette.background.default,
  bgLight: theme.palette.background.light,
  mainText: theme.palette.text.main,
  secondaryText: theme.palette.text.secondary,
  disabledText: theme.palette.text.disabled,
  infoMain: theme.palette.info.main,
  infoDark: theme.palette.info.dark,
  error: theme.palette.error,
  success: theme.palette.success.main,
  warning: theme.palette.warning,
  mainPrimary: theme.palette.primary.main,
  lightPrimary: theme.palette.primary.light,
  darkPrimary: theme.palette.primary.dark,
  mainSecondary: theme.palette.secondary.main,
  lightSecondary: theme.palette.secondary.main,
  darkSecondary: theme.palette.secondary.main,
};
const globalTextBlue = themeColors.mainPrimary;

export const inputPropsConf = {
  color: themeColors.mainText,
  bgcolor: "white",

  fontWeight: 500,
  fontSize: 18,
  borderRadius: 10,
};

export const fieldStyle = {
  
  color: themeColors.darkText,
  bgcolor: "white",
  fontWeight: 500,
  fontSize: 18,
  borderRadius: 1.5,
}; */
export const styleConf = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  p: 0,
  boxShadow: 2,
};
export const textStyles = {
  p: 0,
  m: 0,

  color: "black",
  bgcolor: "white",
  fontSize: 3,
  fontWeight: 400,
  borderRadius: 1.5,
};

export const colPesos = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  minimumFractionDigits: 0,
});
