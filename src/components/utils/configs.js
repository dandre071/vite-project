import { theme } from "../../Styles/styles";

export const styleConf = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 470,
  height: 500,
  bgcolor: `white`,
  p: 0,
  boxShadow: 5,
};

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
  color: globalTextBlue,
  bgcolor: "white",
  /*  bgcolor: themeColors.bgLight, */
  fontWeight: 500,
  fontSize: 18,
  borderRadius: 10,
};

export const fieldStyle = {
  /* color: themeColors.mainText, */
  /*  bgcolor: themeColors.bgLight, */
  color: globalTextBlue,
  bgcolor: "white",
  fontWeight: 500,
  fontSize: 18,
  borderRadius: 1.5,
};

export const textStyles = {
  p: 0,
  m: 0,
  /*  bgcolor: themeColors.bgLight, */
  bgcolor: "white",
  fontSize: 3,
  fontWeight: 400,
  borderRadius: 1.5,
};

/* export const initialState = {
  id: "",
  name: "",
  price: 0,
  quantity: 0,
  description: "",
  height: 0,
  width: 0,
  matWidth: 0,
  finish: "Sin acabado",
  finishQ: 0,
  material: "",
  descolillado: "",
  transfer: false,
  itemTotalPrice: 0,
};
 */
export const colPesos = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  minimumFractionDigits: 0,
});
