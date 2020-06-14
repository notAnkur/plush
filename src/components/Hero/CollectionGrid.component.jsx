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
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 200,
    backgroundSize: "cover",
    backgroundPosition: "center left",
    boxShadow: theme.shadows[20],
    "&:hover": {
      boxShadow: theme.shadows[5],
      cursor: "pointer",
    },
  },
  collectionTitle: {
    fontSize: 48,
    color: theme.palette.primary.main,
  },
  subHead: {
    marginBottom: theme.spacing(6),
    fontSize: 20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: theme.palette.primary.main,
    marginTop: theme.spacing(4),
  },
  productSub: {
    marginBottom: theme.spacing(6),
    fontSize: 18,
  },
}));

export default function CollectionGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper
            className={classes.paper}
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1518554311867-fd154e146f39)",
            }}
          ></Paper>
          <Typography
            variant="h4"
            align="center"
            className={classes.productTitle}
            gutterBottom
          >
            Heart Balloon Collection
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="primary"
            className={classes.productSub}
            gutterBottom
          >
            Starting from Rs. 499.00
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Paper
            className={classes.paper}
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1591425556280-4bd9ace82135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9)",
            }}
          ></Paper>

          <Typography
            variant="h4"
            align="center"
            className={classes.productTitle}
            gutterBottom
          >
            Classic Collection
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="primary"
            className={classes.productSub}
            gutterBottom
          >
            Starting from Rs. 899.00
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Paper
            className={classes.paper}
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1589217289787-879b47f6edab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",
            }}
          ></Paper>

          <Typography
            variant="h4"
            align="center"
            className={classes.productTitle}
            gutterBottom
          >
            Gift Box Collection
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="primary"
            className={classes.productSub}
            gutterBottom
          >
            Starting from Rs. 2299.00
          </Typography>
        </Grid>
      </React.Fragment>
    );
  }

  function FormRow2() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper
            className={classes.paper}
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1526047932273-341f2a7631f9)",
            }}
          ></Paper>

          <Typography
            variant="h4"
            align="center"
            className={classes.productTitle}
            gutterBottom
          >
            Surprise Box Collection
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="primary"
            className={classes.productSub}
            gutterBottom
          >
            Starting from Rs. 2999.00
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Paper
            className={classes.paper}
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1456655010498-adf10969b75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",
            }}
          ></Paper>

          <Typography
            variant="h4"
            align="center"
            className={classes.productTitle}
            gutterBottom
          >
            Royal Collection
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="primary"
            className={classes.productSub}
            gutterBottom
          >
            Starting from Rs. 4999.00
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Paper
            className={classes.paper}
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1521207237524-f18b1e0bea3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",
            }}
          ></Paper>

          <Typography
            variant="h4"
            align="center"
            className={classes.productTitle}
            gutterBottom
          >
            Fresh Rose Collection
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="primary"
            className={classes.productSub}
            gutterBottom
          >
            Starting from Rs. 1499.00
          </Typography>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Typography
        variant="h4"
        align="center"
        className={classes.collectionTitle}
        gutterBottom
      >
        Staff Picks
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="primary"
        className={classes.subHead}
        gutterBottom
      >
        A collection of beautiful products selected by our staff.
      </Typography>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={4}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={4}>
          <FormRow2 />
        </Grid>
      </Grid>
    </div>
  );
}
