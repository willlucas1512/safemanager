import React from "react";
import Navbar from "../Navbar";
import Style from "./Main.module.scss";

const Main = (props) => {
  return (
    <div className={Style.main}>
      <Navbar />
    </div>
  );
};

export default Main;
