/* eslint-disable no-unused-vars */
import React from "react";
import "./style.css";
import { Link, useLocation, NavLink } from "react-router-dom";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  Stack,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";
import Logo from "../../images/logo.png";
import NavDrawer from "./drawer/Drawer";

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // const location = useLocation();
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <AppBar
          sx={{
            position: "static",
            boxShadow: "none",
            padding: "35px 30px 7px 0px",
          }}
          className="navbar-position"
        >
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            className="menu-nav-bar"
          >
            <img
              className="logo"
              style={{ width: "14em" }}
              src={Logo}
              alt="logo"
            />
            {isMatch ? (
              <div className="nav-drawer">
                <NavDrawer />
              </div>
            ) : (
              <Stack
                direction="row"
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}
                style={{ marginLeft: "auto" }}
              >
                <ul className="nav">
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/About"}>About Us</NavLink>
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
                    <NavLink to={"/Contact"}>Contact Us</NavLink>
                  </li>
                  <li>
                    <div className="basket-ellipse">
                      <span className="basket-icon-text">0</span>
                      <span className="basket-icon-img">
                        <i className="fa-solid fa-basket-shopping"></i>
                      </span>
                    </div>
                  </li>
                </ul>
              </Stack>
            )}
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
};

export default Navbar;
