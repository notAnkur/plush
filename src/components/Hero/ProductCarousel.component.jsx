import React from "react";
import Slider from "react-slick";
import "./ProductCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FcPrevious, FcNext } from "react-icons/fc";
import { IconButton } from "@material-ui/core";

export default class ProductCarousel extends React.Component {

  NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="carArrow"
        onClick={onClick}>
        <IconButton
        aria-label="next"
        color="inherit"
      >
        <FcNext />
      </IconButton>
      </div>
    );
  }
  
  PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      nextArrow: <this.NextArrow />,
      prevArrow: <this.PrevArrow />
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div className="slick-slide">
            <img alt="product" src="http://placekitten.com/g/400/200" />
          </div>
          <div className="slick-slide">
            <img alt="product" src="http://placekitten.com/g/400/200" />
          </div>
          <div className="slick-slide">
            <img alt="product" src="http://placekitten.com/g/400/200" />
          </div>
          <div className="slick-slide">
            <img alt="product" src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
      </div>
    );
  }
}
