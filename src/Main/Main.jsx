import React from "react";
import Navbar from "../componentes/Navbar";
import NavbarProvider from "../componentes/Navbar/NavbarProvider";
import SwitchPages from "./SwitchPages";
import Style from "./Main.module.scss";

const Main = (props) => {
  return (
    <div className={Style.main}>
      <NavbarProvider>
        <Navbar />
        <SwitchPages />
      </NavbarProvider>
    </div>
  );
};

export default Main;
