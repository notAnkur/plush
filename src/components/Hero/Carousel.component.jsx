import React from "react";
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
import "./Carousel.scss";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Slider,
} from "@material-ui/core";

function Banner(props) {
  if (props.newProp) console.log(props.newProp);
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : "left";
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item xs={12 / totalItems} key="content">
      <CardContent className="Content">
        <Typography className="Title">{props.item.Name}</Typography>

        <Typography className="Caption">{props.item.Caption}</Typography>

        <Button variant="outlined" className="ViewButton">
          SHOP NOW
        </Button>
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={12 / totalItems} key={item.Name}>
        <CardMedia className="Media" image={item.Image} title={item.Name}>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  );
}

const items = [
  {
    Name: "PLUSH FLORAL COMPANY",
    Caption: "CAPTION_TEXT_PLACEHOLDER",
    contentPosition: "left",
    Items: [
      {
        Name: "Macbook Pro",
        Image: require("../../assets/carousel/rose1.jpg"),
      },
      {
        Name: "iPhone",
        Image: require("../../assets/carousel/rose2.webp"),
      },
    ],
  },
  {
    Name: "PLUSH FLORAL COMPANY",
    Caption: "CAPTION_TEXT_PLACEHOLDER",
    contentPosition: "middle",
    Items: [
      {
        Name: "Washing Machine WX9102",
        Image: require("../../assets/carousel/balloon1.webp"),
      },
      {
        Name: "Learus Vacuum Cleaner",
        Image: require("../../assets/carousel/balloon2.webp"),
      },
    ],
  },
  {
    Name: "PLUSH FLORAL COMPANY",
    Caption: "CAPTION_TEXT_PLACEHOLDER",
    contentPosition: "right",
    Items: [
      {
        Name: "Living Room Lamp",
        Image: require("../../assets/carousel/flower1.webp"),
      },
      {
        Name: "Floral Vase",
        Image: require("../../assets/carousel/flower2.webp"),
      },
    ],
  },
];

class HeroCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: true,
      timer: 500,
      animation: "fade",
      indicators: true,
      timeout: 500,
      navButtonsAlwaysVisible: true,
    };

    autoBind(this);
  }

  render() {
    return (
      <div style={{  }}>
        <Carousel
          className="Example"
          autoPlay={this.state.autoPlay}
          timer={this.state.timer}
          animation={this.state.animation}
          indicators={this.state.indicators}
          timeout={this.state.timeout}
          navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
        >
          {items.map((item, index) => {
            return (
              <Banner
                item={item}
                key={index}
                contentPosition={item.contentPosition}
              />
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default HeroCarousel;
