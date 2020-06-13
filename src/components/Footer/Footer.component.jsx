import React from "react";
import { Link } from "react-router-dom";

import {
  makeStyles,
  Container,
  Typography,
  Grid,
  Button,
  Toolbar,
} from "@material-ui/core";

function Copyright() {
  return (
    <Typography
      variant="caption"
      align="left"
      style={{ color: "rgba(220,202,152,0.6)" }}
    >
      {"Copyright © "}
      {new Date().getFullYear()}
      {" Plush Floral Company"}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  footerTitle: {
    fontSize: 24,
    marginRight: 48,
  },
  footer: {
    background: theme.palette.primary.main,
    width: "100%",
    color: "#fff",
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  footerSubLinks: {
    color: "rgba(220, 202, 152, 0.8)",
    fontSize: 14,
    textDecoration: "none",
    "&:hover": {
      color: "rgba(220, 202, 152, 1)",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  const footers = [
    {
      title: "General",
      subItems: ["Home", "Our Story", "FAQ", "Blog"],
    },
    {
      title: "Support",
      subItems: ["Product Care", "Shipping", "Accessibility"],
    },
    {
      title: "Others",
      subItems: ["Privacy policy", "Terms of use", "Press", "Contact"],
    },
  ];

  return (
    <>
      <Container maxWidth={false} component="footer" className={classes.footer}>
        <Grid container justify="space-evenly">
          <div>
            <Typography
              variant="h4"
              align="left"
              className={classes.footerTitle}
              gutterBottom
            >
              <b>Plush</b>
            </Typography>
            <Copyright />
          </div>
          {footers.map((footer) => (
            <Grid item align="center" xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.subItems.map((item) => (
                  <li key={item}>
                    <Link to="/" className={classes.footerSubLinks}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
