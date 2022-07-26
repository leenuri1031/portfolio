import React, { Component } from "react";

const title = [
  "Vincent van Gogh",
  "Gallery Entrance",
  "Gallery Hall",
  "Gogh in the media",
];

const hashArr = ["#/life/", "#/gallery/main", "#/galleryHall/", "#/media/"];

function titleChange() {
  for (let i = 0; i < title.length; i++) {
    if (window.location.hash === hashArr[i]) {
      return title[i];
    }
  }
}

class TitleText extends Component {
  render() {
    return (
      <div id="title-box">
        <div className=" sub-txt">{titleChange()}</div>
      </div>
    );
  }
}

export default TitleText;
