import React from "react";
import {
  alpha,
  AppBar,
  Avatar,
  IconButton,
  InputBase,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { HelpOutline, Menu, SettingsOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { grey } from "@material-ui/core/colors";
import logo from "../static/gmail.png";
import avatar from "../static/avatar2.jpg";
import SideBar from "../components/Sidebar";

const Dashboard = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    root3: {
      flexGrow: 1,
      color: "none",
      "&:hover": {
        background: "none",
        cursor: "none",
        opacity: 1,
      },
    },
    tooltip: {
      fontFamily: "poppin",
    },
    filter: {
      position: "absolute",
      top: "5%",
      right: "3%",
    },
    AppBar: {
      background: "white",
      boxShadow: "none",
      border: "1px solid #ccc",
      width: "100%",
    },
    logo: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    logoText: {
      paddingLeft: ".5rem",
      flexGrow: 1,
    },
    white: {
      color: grey[700],
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "#F1F3F4",
      width: "500px !important",
      height: "50px",
      display: "flex",
      alignItems: "center",
      color: "#555",
      "&:hover": {
        backgroundColor: "#F1F3F4",
      },
      marginLeft: 0,
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#555",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      fontFamily: "poppin",
      padding: theme.spacing(1, 1, 1, 0),
      fontWeight: 500,
      width: "720px !important",
      position: "absolute",
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar className={classes.AppBar} position="fixed">
          <Toolbar>
            <IconButton>
              <Menu className={classes.white} />
            </IconButton>
            <img src={logo} className={classes.logo} alt="" />
            <Typography
              color="textSecondary"
              className={classes.logoText}
              variant="h5"
              noWrap
            >
              Gmail
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search email"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
              <Tooltip className={classes.tooltip} title="Filter">
                <IconButton className={classes.filter}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path>
                  </svg>
                </IconButton>
              </Tooltip>
            </div>
            <IconButton
              disableRipple
              disableTouchRipple
              className={classes.root3}
            />
            <Tooltip title="Help">
              <IconButton>
                <HelpOutline />
              </IconButton>
            </Tooltip>
            <Tooltip title="Settings">
              <IconButton>
                <SettingsOutlined />
              </IconButton>
            </Tooltip>
            <Tooltip title="More apps">
              <IconButton>
                <svg class="gb_Ve" focusable="false" viewBox="0 0 24 24">
                  <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                </svg>
              </IconButton>
            </Tooltip>
            <Tooltip title="Basitng">
              <IconButton>
                <Avatar src={avatar} />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </div>
      <SideBar />
    </React.Fragment>
  );
};

export default Dashboard;
