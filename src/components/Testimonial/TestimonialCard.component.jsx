import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "./TestimonialCard.css";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(4),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
}));

export default function TestimonialCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <figure className="snip1192">
        <blockquote>
          <Typography
            variant="body1"
            align="center"
            color="primary"
            className={classes.title}
            gutterBottom>
            Got a plush box as a gift from my friend and it was a delight to my eyes. The box looked so classy and also the flowers looked so fresh. Got chocolates along with the box and it was yummy!!
          </Typography>
        </blockquote>
        <div className="author">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg"
            alt="sq-sample1"
          />
          <h5>
            Supriya V
          </h5>
        </div>
      </figure>
    </div>
  );
}
