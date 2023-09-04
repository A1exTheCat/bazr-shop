import React from "react";

const BigSlider = () => {
  <section className="slider">
    <img className="slider-img" src="/img/main/1.jpg" alt="1-я картинка слайдера"/>
    <img className="slider-img active" src="/img/main/2.jpg" alt="2-я картинка слайдера"/>
    <img className="slider-img" src="/img/main/3.jpg" alt="3-я картинка слайдера"/>
    <img className="slider-img" src="/img/main/4.jpg" alt="4-я картинка слайдера"/>
    <img src="/img/slider UI/left sign.svg" alt="Кнопка влево" className="slider-btn-left"/>
    <img src="/img/slider UI/right sign.svg" alt="Кнопка вправо" className="slider-btn-right"/>
    <div className="slider-menu">
      <div className="slider-menu-flex">
        <img src="/img/slider UI/filled rec.svg" alt="Закрашенный квадрат" className="slider-rec active"/>
        <img src="/img/slider UI/empty rec.svg" alt="Пустой квадрат" className="slider-rec"/>
        <img src="/img/slider UI/empty rec.svg" alt="Пустой квадрат" className="slider-rec"/>
        <img src="/img/slider UI/empty rec.svg" alt="Пустой квадрат" className="slider-rec"/>
      </div>
    </div>
  </section>
}

export default BigSlider;