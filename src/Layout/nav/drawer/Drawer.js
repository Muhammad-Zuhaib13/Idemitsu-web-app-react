/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const NavDrawer = (props) => {
  // const { links } = props
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Drawer open={open} onClose={handleClose}>
        <List>
          <ListItemButton onClick={handleClose} divider>
            <ListItemIcon>
              <ListItemText>
                <ul className="navDrawer">
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/About"}>About</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/Services"}>Services</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/Products"}>Products</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/Where to buy"}>Where to Buy</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/Contact"}>Contact us</NavLink>
                  </li>
                </ul>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "#000000" }}
        onClick={handleOpen}
      >
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
};

export default NavDrawer;
