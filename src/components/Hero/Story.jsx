import React from "react";

class Story extends React.Component {
  render() {
    return (
      <section className="love-story section position-relative text-center">
        <div className="d-none d-sm-block love-story__flower-parallax position-absolute parallax">
          <img src="img/ls-flower-prlx.png" alt="flower" />
        </div>
        <div className="container">
          <div className="love-story__flowers m-auto">
            <img src="img/story-flowers.png" alt="flowers" />
          </div>
          <h1 className="title">
            “Plush a Luxurious Affair.
            <br />
            Now with your loved ones at a distance we try bringing them closer”
          </h1>
        </div>
      </section>
    );
  }
}

export default Story;
