import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";

import {FaPhoneAlt} from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  navbarTitle: {
    fontSize: 24,
    marginRight: 48,
    textDecoration: "none",
    color: "#fff",
  },
  toolbarItemsLeft: {
    marginRight: "auto",
  },
  toolbarItemsRight: {
    marginLeft: "auto",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" elevation={0} color="transparent">
        <Toolbar>
          <div className={classes.toolbarItemsLeft}>
            +91-9988776655
          </div>
          <div className={classes.toolbarItemsRight}>
            
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
