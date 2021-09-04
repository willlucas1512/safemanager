import React, { useState, useContext } from "react";
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
import NavbarContext from "./NavbarContext";

import Style from "./Navbar.module.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { updatePage } = useContext(NavbarContext);

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
          <SideMenu handleClick={updatePage} />
        </div>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
