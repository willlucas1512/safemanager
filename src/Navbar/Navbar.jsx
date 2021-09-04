import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SideMenu from "./SideMenu";

import Style from "./Navbar.module.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar color={"primary"} position="static">
      <Toolbar>
        <div className={Style.menuButton}>
          <IconButton
            onClick={handleOpen}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Typography variant="h6" className={Style.title}>
          SAFE Manager
        </Typography>
        <Button
          color="inherit"
          // onClick={handleOpen}
        >
          Login
        </Button>
      </Toolbar>
      <Drawer anchor={"left"} open={open} onClose={handleClose}>
        <div className={Style.sideMenu}>
          <SideMenu />
        </div>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
