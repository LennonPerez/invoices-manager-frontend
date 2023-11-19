import { DefaultTheme } from "styled-components";

const black = "#000000";
const white = "#FFFFFF";

// Text colors
const lavenderGrey = "#DFE3FA";
const cadetBlue = "#888EB0";
const blueGray = "#777F98";

// Primary colors
const mediumSlateBlue = "#7C5DFA";
const lightSlateBlue = "#9277FF";

// Secondary colors
const blueBell = "#858BB2";
const slateBlue = "#7E88C3";
const outerSpace = "#252945";

// Background colors
const midnightBlue = "#1E2139";
const outerSpaceLight = "#252945";
const ebonyClay = "#0C0E16";
const darkLiver = "#141625";
const darkGrey = "#373B53";

// Other colors
const graniteGray = "#494E6E";
const mutedBlue = "rgba(72, 84, 159, 0.10)";
const ghostWhite = "rgba(255, 255, 255, 0.1)";
const bittersweet = "#EC5757";
const lightSalmon = "#FF9797";
const orangeYellow = "#FF8F00";
const shamrockGreen = "#33D69F";

const colorTheme: DefaultTheme = {
  type: "dark",
  palette: {
    text: {
      primary: white,
      secondary: lavenderGrey,
      tertiary: blueGray,
      fourth: cadetBlue,
    },
    common: {
      black: black,
      white: white,
    },
    primary: {
      light: lightSlateBlue,
      main: mediumSlateBlue,
      dark: mediumSlateBlue,
      contrastText: white,
    },
    secondary: {
      light: blueBell,
      main: slateBlue,
      dark: outerSpace,
      contrastText: white,
    },
    background: {
      paper: midnightBlue,
      lightPaper: outerSpaceLight,
      darkPaper: ebonyClay,
      default: darkLiver,
    },
  },
  navbar: {
    background: midnightBlue,
    icon: graniteGray,
    border: graniteGray,
  },
  page: {
    background: darkLiver,
    scrollbarThumb: outerSpaceLight,
  },
  modal: {
    background: midnightBlue,
    primaryText: white,
    secondaryText: cadetBlue,
    shadow: mutedBlue,
  },
  card: {
    background: midnightBlue,
    lightContrastBackground: outerSpaceLight,
    darkContrastBackground: ebonyClay,
    shadow: ghostWhite,
  },
  inputs: {
    background: midnightBlue,
    border: outerSpaceLight,
    borderActive: outerSpaceLight,
    error: bittersweet,
    icon: slateBlue,
    selector: mediumSlateBlue,
    caret: mediumSlateBlue,
    label: cadetBlue,
    text: white,
  },
  selector: {
    background: outerSpaceLight,
    shadow: ghostWhite,
    text: lavenderGrey,
    activeText: lightSlateBlue,
    border: midnightBlue,
  },
  buttons: {
    primary: {
      background: mediumSlateBlue,
      hoverBackground: lightSlateBlue,
      color: white,
      hoverColor: white,
    },
    secondary: {
      background: outerSpace,
      hoverBackground: white,
      color: lavenderGrey,
      hoverColor: lavenderGrey,
    },
    tertiary: {
      background: darkGrey,
      hoverBackground: midnightBlue,
      color: lavenderGrey,
      hoverColor: lavenderGrey,
    },
    danger: {
      background: bittersweet,
      hoverBackground: lightSalmon,
      color: white,
      hoverColor: white,
    },
  },
  status: {
    draft: lavenderGrey,
    pending: orangeYellow,
    paid: shamrockGreen,
  },
};

export default colorTheme;
