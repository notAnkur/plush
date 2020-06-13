import React from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Badge,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core";

import { FaRegUser, FaSearch, FaShoppingBag } from "react-icons/fa";

import MoreIcon from "@material-ui/icons/MoreVert";
import { AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    width: "100%",
  },
  navbarTitle: {
    fontSize: 36,
    marginRight: 48,
    textDecoration: "none",
    color: "#fff",
    font: "Lobster"
  },
  navLinks: {
    fontSize: 16,
    marginRight: 20,
    color: "rgba(54, 69, 79,0.8)",
    fontWeight: "bold",
    textDecoration: "none",
    "&:hover": {
      color: "rgba(54, 69, 79, 1)",
    },
  },
  toolbarItemsLeft: {
    marginRight: "auto",
  },
  toolbarItemsRight: {
    marginLeft: "auto",
  },
  toolbarItemsCenter: {
    color: "rgba(255, 255, 255, 0.8)",
    margin: 'auto'
  },
  loginMenuItems: {
    backgroundColor: "#24252a",
    color: "rgba(54, 69, 79,0.8)",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    marginLeft: 10,
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const NavbarItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/" },
    { name: "Gallery", href: "/" },
    { name: "Collections", href: "/" },
    { name: "Blog", href: "/" },
    { name: "Contact us", href: "/" },
  ];

  // account menu
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      getContentAnchorEl={null}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem className={classes.loginMenuItems} onClick={handleMenuClose}>
        My Servers
      </MenuItem>
      <MenuItem className={classes.loginMenuItems} onClick={handleMenuClose}>
        Billing
      </MenuItem>
      <MenuItem
        style={{ backgroundColor: "#24252a", color: "rgb(167, 42, 57)" }}
        onClick={handleMenuClose}
      >
        Logout
      </MenuItem>
    </Menu>
  );

  // collapsed navbar menu
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      getContentAnchorEl={null}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {NavbarItems.map((navbarItem) => (
        <MenuItem style={{ backgroundColor: "#24252a" }} key={navbarItem.name}>
          <Link to={navbarItem.href} className={classes.navLinks}>
            {navbarItem.name}
          </Link>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <div>
      <AppBar position="static" elevation={20} color="transparent">
      
        <Toolbar style={{background: "#000000"}}>
          <div className={classes.toolbarItemsCenter}><b>+91-9988776655</b></div>
          <div className={classes.toolbarItemsCenter}><b>WORLDWIDE SHIPPING AVAILABLE</b></div>
        </Toolbar>

        <Toolbar>
          <Link to="/" className={classes.navbarTitle}>
            <img src={require("../../assets/plush_logo.webp")} alt="Plush" />
          </Link>
          <div className={classes.sectionDesktop}>
            <div className={classes.toolbarItemsLeft}>
              {NavbarItems.map((navbarItem) => (
                <Typography display="inline" key={navbarItem.name}>
                  <Link to={navbarItem.href} className={classes.navLinks}>
                    {navbarItem.name}
                  </Link>
                </Typography>
              ))}
            </div>
          </div>
          {true ? (
            <div className={classes.toolbarItemsRight}>
              {/* <Button
                className={classes.loginButton}
                href={`${process.env.REACT_APP_BACKEND_URL_BASE}auth/login`}
              >
                Login
              </Button> */}
              <IconButton
                aria-label="search icon"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
              >
                <FaSearch />
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
              >
                <FaRegUser />
              </IconButton>
              <IconButton
                aria-label="cart of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
              >
                <Badge badgeContent={104} color="secondary" max={99}>
                  <FaShoppingBag />
                </Badge>
              </IconButton>
            </div>
          ) : (
            <div
              className={classes.toolbarItemsRight}
              onClick={handleProfileMenuOpen}
            >
              <IconButton
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          )}
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
