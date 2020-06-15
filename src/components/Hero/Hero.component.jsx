import React from 'react';
import CarouselMain from "./CarouselMain.component";
import FloralCollection from "./FloralCollection.component";
import CollectionGrid from "./CollectionGrid.component";
import About from "./About.component";
import SocialGrid from "../SocialGrid/SocialGrid.component";

import {
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  floralCollection: {
    marginTop: theme.spacing(8)
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <>
      <CarouselMain />
      <CollectionGrid />
      <About />
      <div className={classes.floralCollection}>
        <FloralCollection />
      </div>
      <SocialGrid style={{width: "auto", height: "auto"}} />
    </>
  )
}
 export default Hero;