import React from "react";
import {
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DevicesIcon from "@material-ui/icons/Devices";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SettingsIcon from "@material-ui/icons/Settings";
import User from "../../User";
import Style from "./SideMenu.module.scss";

const SideMenu = (props) => {
  return (
    <div className={Style.root} role="presentation">
      <div className={Style.user}>
        <User user={{ initals: "ADM", name: "Administrador" }} />
      </div>
      <Divider />
      <List>
        {["Visão geral", "Dispositivos", "Locais", "Configurações"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 ? (
                  <DashboardIcon />
                ) : index === 1 ? (
                  <DevicesIcon />
                ) : index === 2 ? (
                  <LocationOnIcon />
                ) : (
                  <SettingsIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );
};

export default SideMenu;
