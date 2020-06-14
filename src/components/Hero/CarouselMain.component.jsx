import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import "./CarouselMain.scss";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";

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
        <div data-src={require("../../assets/carousel/balloon1.webp")} />
        <div data-src={require("../../assets/carousel/balloon2.webp")} />
        <div data-src={require("../../assets/carousel/rose1.jpg")} />
        <div data-src={require("../../assets/carousel/rose2.webp")} />
      </AutoplaySlider>
    </div>
  );
};
// react-awesome-slider/src/styled/fold-out-animation.scss

export default CarouselMain;