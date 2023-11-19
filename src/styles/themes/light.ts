import { DefaultTheme } from "styled-components";

// Common colors
const black = "#000000";
const white = "#FFFFFF";

// Text colors
const richBlack = "#0C0E16";
const slateBlueLight = "#7E88C3";
const cadetBlue = "#888EB0";

// Primary colors
const lightRoyalPurple = "#9277FF";
const royalPurple = "#7C5DFA";

// Secondary colors
const blueGreyLight = "#858BB2";
const slateBlueMain = "#7E88C3";
const outerSpace = "#252945";

// Background colors
const whitePaper = "#FFFFFF";
const lightPaper = "#F9FAFE";
const darkPaper = "#373B53";
const defaultPaper = "#F8F8FB";

// Other colors
const richBlackShadow = "rgba(72, 84, 159, 0.10)";
const mutedBlue = "rgba(72, 84, 159, 0.25)";
const errorRed = "#EC5757";
const lightSalmon = "#FF9797";
const orangeYellow = "#FF8F00";
const shamrockGreen = "#33D69F";
const frenchGray = "#888EB0";
const aliceBlue = "#F8F8FB";
const lavenderBlue = "#DFE3FA";

const lightTheme: DefaultTheme = {
  type: "light",
  palette: {
    text: {
      primary: richBlack,
      secondary: slateBlueLight,
      disabled: cadetBlue,
    },
    common: {
      black: black,
      white: white,
    },
    primary: {
      light: lightRoyalPurple,
      main: royalPurple,
      dark: royalPurple,
      contrastText: white,
    },
    secondary: {
      light: blueGreyLight,
      main: slateBlueMain,
      dark: outerSpace,
      contrastText: white,
    },
    background: {
      paper: whitePaper,
      lightPaper: lightPaper,
      darkPaper: darkPaper,
      default: defaultPaper,
    },
  },
  navbar: {
    background: darkPaper,
    icon: slateBlueLight,
    border: outerSpace,
  },
  page: {
    background: defaultPaper,
    scrollbarThumb: slateBlueMain,
  },
  card: {
    background: whitePaper,
    lightContrastBackground: lightPaper,
    darkContrastBackground: darkPaper,
    shadow: richBlackShadow,
  },
  inputs: {
    background: whitePaper,
    border: lavenderBlue,
    borderActive: lightRoyalPurple,
    error: errorRed,
    icon: slateBlueLight,
    selector: royalPurple,
    caret: royalPurple,
    label: slateBlueLight,
    text: richBlack,
  },
  selector: {
    background: whitePaper,
    shadow: mutedBlue,
    text: richBlack,
    activeText: royalPurple,
    border: slateBlueMain,
  },
  buttons: {
    primary: {
      background: royalPurple,
      hoverBackground: lightRoyalPurple,
      color: white,
      hoverColor: white,
    },
    secondary: {
      background: lightPaper,
      hoverBackground: aliceBlue,
      color: slateBlueLight,
      hoverColor: slateBlueLight,
    },
    tertiary: {
      background: darkPaper,
      hoverBackground: richBlack,
      color: frenchGray,
      hoverColor: frenchGray,
    },
    danger: {
      background: errorRed,
      hoverBackground: lightSalmon,
      color: white,
      hoverColor: white,
    },
  },
  status: {
    draft: darkPaper,
    pending: orangeYellow,
    paid: shamrockGreen,
  },
};

export default lightTheme;
