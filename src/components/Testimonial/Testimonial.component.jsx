import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./TestimonialCard.component";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "90%",
    margin: "auto",
    paddingTop: theme.spacing(8),
  },
  title: {
    fontSize: 48,
    color: theme.palette.primary.main,
  },
}));

const Testimonial = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant="h4"
        align="center"
        className={classes.title}
        gutterBottom
      >
        Testimonials
      </Typography>
      <div style={{cursor: "grab"}}>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        showDots={true}
        centerMode={false}
        autoPlaySpeed={3000}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        sliderClass=""
        slidesToSlide={3}
        swipeable
      >
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
