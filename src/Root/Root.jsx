import React from "react";
import ThemeProvider from "../ThemeProvider";
import { themePrimary } from "../style/theme";
import Main from "../Main";

const Root = (props) => {
  return (
    <ThemeProvider theme={themePrimary}>
      <Main />
    </ThemeProvider>
  );
};

export default Root;
