import React from "react";
import "../styles/carrossel.css";

export default function ExampleCarouselImage({ img, text }) {
  return <img className="image-carrossel" src={img} text={text} />;
}
