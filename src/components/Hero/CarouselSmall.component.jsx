import React from "react";
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
import {
  Paper,
  Button,
  Typography,
} from "@material-ui/core";

import "./CarouselSmall.scss";

function Project(props) {
  return (
    <Paper
      className="Project"
      style={{
        backgroundImage: `url(${props.item.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      elevation={10}
    >
      <Typography variant="h4"><b>{props.item.name}</b></Typography>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

const items = [
  {
    name: "Collection 1",
    description: "A PDF Reader specially designed for musicians.",
    color: "#64ACC8",
    image: "https://images.unsplash.com/photo-1586951900606-1a0a612549ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Collection 2",
    description:
      "My Solution on the 2019 Hash Code by Google Slideshow problem.",
    color: "#7D85B1",
    image: "https://images.unsplash.com/photo-1452827073306-6e6e661baf57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Collection 3",
    description: "A exciting mobile game game made in the Unity Engine.",
    color: "#CE7E78",
    image: "https://images.unsplash.com/photo-1533616688419-b7a585564566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Collection 4",
    description: "A Generic carousel UI component for React using material ui.",
    color: "#C9A27E",
    image: "https://images.unsplash.com/photo-1571559945800-21fd60231e4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
];

export default class CarouselSmall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: true,
      timer: 500,
      animation: "fade",
      indicators: false,
      timeout: 500,
      navButtonsAlwaysVisible: true,
    };

    autoBind(this);
  }

  render() {
    return (
      <div>

        <Carousel
          className="SecondExample"
          autoPlay={this.state.autoPlay}
          timer={this.state.timer}
          animation={this.state.animation}
          indicators={this.state.indicators}
          timeout={this.state.timeout}
          navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
        >
          {items.map((item, index) => {
            return <Project item={item} key={index} />;
          })}
        </Carousel>
      </div>
    );
  }
}
