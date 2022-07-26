import React, { Component } from "react";
import { Link } from "react-router-dom";
import { mouseout1, mouseout2, mouseout3, mouseover } from "./event";

class MainSection1Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Gallery",
      sub: { first: "Vincent", middle: "Van", last: "Gogh" },
      txt: ["Gogh’s Life", "Gogh’s Gallery", "Gogh in the media"],
    };
  }
  render() {
    return (
      <>
        <section id="section1" className="section1">
          <div id="txt-container">
            <div id="sub-txt1" className="sub-txt">
              {this.state.sub.first}
            </div>
            <div id="sub-txt2" className="sub-txt">
              {this.state.sub.middle}
            </div>
            <div id="sub-txt3" className="sub-txt">
              {this.state.sub.last}
            </div>
          </div>
          <div id="title-txt" className="title-txt">
            {this.state.title}
          </div>
        </section>
        <section id="section2" className="section2">
          <Link to={"/media/"}>
          <div
            onMouseOver={mouseover}
            onMouseLeave={mouseout1}
            className="circle-menu media-menu"
          >
            {this.state.txt[2]}
          </div>
          </Link>
          <Link to={"/gallery/main"}>
            <div
              onMouseOver={mouseover}
              onMouseLeave={mouseout2}
              className="circle-menu gallery-menu"
            >
              {this.state.txt[1]}
            </div>
          </Link>
          <Link to={"/life/"}>
            <div
              onMouseOver={mouseover}
              onMouseLeave={mouseout3}
              className="circle-menu life-menu"
            >
              {this.state.txt[0]}
            </div>
          </Link>
        </section>
      </>
    );
  }
}

export default MainSection1Content;
