import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import "./CarouselMain.scss";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";

import { Typography, Button, Paper } from "@material-ui/core";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const CarouselMain = () => {
  return (
    <div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={4000}
        cssModule={AwesomeSliderStyles}
        className="aws-btn"
        bullets={false}
        animation="openAnimation"
      >
        {/* <div data-src={require("../../assets/carousel/balloon1.webp")}>
        <p>I want to see what you got.</p>
        </div>
        <div data-src="https://cdn.shopify.com/s/files/1/0004/2303/4931/products/IMG_9958-2_1024x1024@2x.jpg?v=1580797654" />
        <div data-src={require("../../assets/carousel/rose1.jpg")} />
        <div data-src={require("../../assets/carousel/rose2.webp")} /> */}
        <div className="mainCarousel">
          <Paper
            className="Project"
            style={{
              backgroundImage:
                "url(https://cdn.shopify.com/s/files/1/0004/2303/4931/products/IMG_9958-2_1024x1024@2x.jpg?v=1580797654)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            elevation={10}
          >
            <div>
              <Typography style={{fontSize: "5vw"}} color="secondary" align="center" gutterBottom>
                <b>Plush Floral Company</b>
              </Typography>

              <Button className="CheckButton">Check it out!</Button>
            </div>
          </Paper>
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default CarouselMain;
