import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "90%",
    margin: "auto",
    paddingTop: theme.spacing(8),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: "#fffafa",
  },
  videoPaper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: "#fffafa",
    height: 300,
  },
  about: {
    boxShadow: theme.shadows[8],
  },
  aboutTitle: {
    fontSize: 48,
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  aboutSub: {
    marginBottom: theme.spacing(6),
    fontSize: 18,
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper elevation={0} className={classes.paper}>
            <Typography
              variant="h4"
              align="center"
              className={classes.aboutTitle}
              gutterBottom
            >
              INDIA'S FRESH FLOWERS
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="primary"
              className={classes.aboutSub}
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {/* <Paper elevation={4} className={classes.videoPaper}>
            
          </Paper> */}
          <video
              src="https://media.istockphoto.com/videos/apricot-flower-blooming-against-pink-background-in-a-time-lapse-movie-video-id1142732381"
              type="video/mp4"
              style={{ height: "100%", width: "100%", margin: 0 }}
              autoPlay={true}
              loop={true}
              muted={true}
            />
          {/* https://media.istockphoto.com/videos/apricot-flower-blooming-against-pink-background-in-a-time-lapse-movie-video-id1142732381 */}
        </Grid>
      </Grid>
    </div>
  );
}
