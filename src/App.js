import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Hero from "./components/Hero/Hero.component";
import SuperNavbar from "./components/SuperNavbar/SuperNavbar.component";
import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Hero} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
