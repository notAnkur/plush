import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { makeStyles, Fab } from '@material-ui/core';
import { BsChatSquareDots } from "react-icons/bs";

import Hero from "./components/Hero/Hero.component";
import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    background: "rgba(255, 255, 255)",
    boxShadow: theme.shadows[20],
    zIndex: 10,
  }
}));

const App = () => {

  const classes = useStyles();

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Hero} />
      </Switch>
      <Footer />
      <Fab className={classes.fab} aria-label="add">
        <BsChatSquareDots />
      </Fab>
    </Router>
  );
};

export default App;
