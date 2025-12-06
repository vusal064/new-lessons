import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Slider.css";

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <img src={images[index]} className="slide-img" />

      <button className="btn left" onClick={prevSlide}>
        <FaArrowLeft />
      </button>

      <button className="btn right" onClick={nextSlide}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Slider;
