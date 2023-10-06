import React, { useState } from "react";
import leftSign from "../assets/slider UI/left sign.svg";
import rightSign from "../assets/slider UI/right sign.svg";
import emptyRec from "../assets/slider UI/empty rec.svg";
import filledRec from "../assets/slider UI/filled rec.svg";
import { SliderPics } from "../utils/consts";

const BigSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SliderPics.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? SliderPics.length - 1 : prevIndex - 1
    );
  };

  const recGenerator = (curIndex, count) => {
    const result = [];
    for (let index = 0; index < count; index++) {
      if (index === curIndex) {
        result.push(
          <img
            src={filledRec}
            key={index}
            alt="Квадрат"
            className="slider-rec"
          />
        );
      } else {
        result.push(
          <img
            src={emptyRec}
            key={index}
            alt="Пустой квадрат"
            className="slider-rec"
          />
        );
      }
    }
    return [...result];
  };

  return (
    <section className="slider">
      <img
        className="slider-img"
        src={SliderPics[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        loading="lazy"
      />
      <img
        src={leftSign}
        onClick={goToPrevSlide}
        alt="Кнопка влево"
        className="slider-btn-left"
        loading="lazy"
      />
      <img
        src={rightSign}
        onClick={goToNextSlide}
        alt="Кнопка вправо"
        className="slider-btn-right"
        loading="lazy"
      />
      <div className="slider-menu">
        <div className="slider-menu-flex">
          {recGenerator(currentIndex, SliderPics.length)}
        </div>
      </div>
    </section>
  );
};

export default BigSlider;
