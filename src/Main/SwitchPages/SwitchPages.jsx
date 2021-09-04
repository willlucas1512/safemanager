import React, { useContext } from "react";
import Dispositivos from "../../views/Dispositivos";
import Locais from "../../views/Locais";
import NavbarContext from "../../componentes/Navbar/NavbarContext";
import Dashboard from "../../views/Dashboard";
import Configuracoes from "../../views/Configuracoes";

const SwitchPages = (props) => {
  const { page } = useContext(NavbarContext);
  return page === "Locais" ? (
    <Locais />
  ) : page === "Dispositivos" ? (
    <Dispositivos />
  ) : page === "Configurações" ? (
    <Configuracoes />
  ) : (
    <Dashboard />
  );
};

export default SwitchPages;
