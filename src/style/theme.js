import { createMuiTheme } from "@material-ui/core/styles";

export const themePrimary = {
  mui: createMuiTheme({
    palette: {
      type: "dark",
      common: { black: "#000", white: "#fff", transparent: "transparent" },
      background: {
        light: "#ffffff",
        main: "#F5F7FB",
        dark: "#c2c4c8",
        contrastText: "#000",
        paper: "rgba(38, 38, 59, 1)",
        default: "rgba(38, 38, 59, 1)",
      },
      primary: {
        light: "#4f5b62",
        main: "#263238",
        dark: "#000a12",
        contrastText: "#fff",
      },
      secondary: {
        light: "#4f4e65",
        main: "#26263b",
        dark: "#000016",
        darkness: "#161623",
        contrastText: "#fff",
      },
      error: {
        light: "#ff7957",
        main: "#ed442c",
        dark: "#b30000",
        contrastText: "rgba(255, 255, 255, .87)",
      },
      info: {
        light: "#869fd8",
        main: "#5671A6",
        dark: "#254677",
        contrastText: "rgba(255, 255, 255, .87)",
      },
      warn: {
        light: "#ffe650",
        main: "#f1b40f",
        dark: "#b98500",
        contrastText: "rgba(0, 0, 0, .87)",
      },
      text: {
        primary: "rgba(255, 255, 255, .87)",
        secondary: "rgba(148, 158, 216, 1)",
        disabled: "rgba(122, 129, 171, 1)",
        disabledInvert: "rgba(255, 255, 255, 0.48)",
        hint: "rgba(155, 155, 155, 1)",
      },
    },
    typography: {
      useNextVariants: true,
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: 14,
    },
  }),
};
