import React from 'react';
import CarouselMain from "./CarouselMain.component";
import FloralCollection from "./FloralCollection.component";
import CollectionGrid from "./CollectionGrid.component";
import About from "./About.component";
import SocialGrid from "../SocialGrid/SocialGrid.component";
import Testimonial from "../Testimonial/Testimonial.component";
import Story from "./Story.jsx"

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
      <Story />
      <CollectionGrid />
      <About />
      <div className={classes.floralCollection}>
        <FloralCollection />
      </div>
      <SocialGrid />
      < Testimonial />
    </>
  )
}
 export default Hero;
