import React from "react";
import { Typography, IconButton, Button } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import ReorderIcon from "@material-ui/icons/Reorder";
import Searchbox from "../../componentes/Searchbox";
import Tabela from "../../componentes/Tabela";
import Style from "./Locais.module.scss";

const Locais = (props) => {
  return (
    <div className={Style.root}>
      <div className={Style.title}>
        <Typography variant={"h4"}>
          <b>Locais</b>
        </Typography>
      </div>
      <div className={Style.findArea}>
        <div className={Style.search}>
          <Searchbox />
        </div>
        <IconButton color={"primary"}>
          <FilterListIcon />
        </IconButton>
        <IconButton color={"primary"}>
          <ReorderIcon />
        </IconButton>
      </div>
      <div className={Style.table}>
        <Tabela />
      </div>
      <div className={Style.addButton}>
        <Button size={"large"} color={"primary"} variant="contained">
          Adicionar Local
        </Button>
      </div>
    </div>
  );
};

export default Locais;
