import React from 'react';
import CarouselSmall from "./CarouselSmall.component";

import {
  Typography,
  makeStyles
} from "@material-ui/core";

const styles = makeStyles((theme) => ({
  collectionTitle: {
    fontSize: 48,
    color: theme.palette.primary.main,
  },
  subHead: {
    marginBottom: theme.spacing(6),
    fontSize: 20
  }
}));

const FloralCollection = () => {
  const classes = styles();
  return (
    <>
      <Typography variant="h4" align="center" className={classes.collectionTitle} gutterBottom>
        Trending
      </Typography>
      <Typography variant="body1" align="center" color="primary" className={classes.subHead} gutterBottom>
        A collection of our most popular products.
      </Typography>
      
      <CarouselSmall />
    </>
  )
}

export default FloralCollection;