import React from "react";
import Gallery from "react-grid-gallery";
import "./SocialGrid.scss";

import { makeStyles, Paper, Typography } from "@material-ui/core";

const IMAGES = [
  {
    src:
      "https://media.istockphoto.com/photos/beautiful-pink-peony-flowers-on-white-table-with-copy-space-for-your-picture-id806870408",
    thumbnail:
      "https://media.istockphoto.com/photos/beautiful-pink-peony-flowers-on-white-table-with-copy-space-for-your-picture-id806870408",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Plush",
  },
  {
    src:
      "https://media.istockphoto.com/photos/elegant-window-box-with-purple-pansies-picture-id131544021",
    thumbnail:
      "https://media.istockphoto.com/photos/elegant-window-box-with-purple-pansies-picture-id131544021",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: "#flowerbox", title: "#flowerbox" }],
    caption: "Plush",
  },

  {
    src:
      "https://media.istockphoto.com/photos/elegant-window-box-with-pansies-picture-id131712342",
    thumbnail:
      "https://media.istockphoto.com/photos/elegant-window-box-with-pansies-picture-id131712342",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src:
      "https://media.istockphoto.com/photos/old-fashioned-window-box-of-spring-flowers-picture-id468388244",
    thumbnail:
      "https://media.istockphoto.com/photos/old-fashioned-window-box-of-spring-flowers-picture-id468388244",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Plush",
  },
  {
    src:
      "https://media.istockphoto.com/photos/flower-boxes-on-the-balcony-picture-id802459794",
    thumbnail:
      "https://media.istockphoto.com/photos/flower-boxes-on-the-balcony-picture-id802459794",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "plush",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "90%",
    margin: "auto",
    paddingTop: theme.spacing(8),
  },
  socialWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    display: "block",
    minHeight: "1px",
    width: "100%",
    alignContent: "center",
    border: "1px solid #ddd",
    overflow: "auto",
    color: theme.palette.text.secondary,
    background: "#fffafa",
  },
  socialTitle: {
    fontSize: 40,
    color: theme.palette.primary.main,
  },
  socialButton: {
    fontSize: 32,
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
}));

const SocialGrid = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        variant="h4"
        align="center"
        className={classes.socialTitle}
        gutterBottom
      >
        @plushfloralcompany
      </Typography>
      <Paper elevation={4} className={classes.paper}>
        <Gallery
          images={IMAGES}
          backdropClosesModal={true}
          enableImageSelection={false}
        />
      </Paper>
      <div className={classes.socialWrapper}>
      <a
        className="learn-more"
        href="https://www.instagram.com/plushfloralcompany"
        rel = "noopener noreferrer"
         target="_blank"
      >
        <Typography
          align="center"
          className={classes.socialButton}
        >
          Follow us on Instagram
        </Typography>
      </a>
      </div>
    </div>
  );
};

export default SocialGrid;
