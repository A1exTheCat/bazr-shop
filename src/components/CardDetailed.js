import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite, addBasket } from "../store/userSlice";
import { setBasketPopup } from "../store/uiSlice";
import { SHOP_ROUTE, HOST } from "../utils/consts";
import backArrow from "../assets/icons/arrow-back.svg";
import leftSign from "../assets/slider UI/left sign.svg";
import rightSign from "../assets/slider UI/right sign.svg";
import lineationHeart from "../assets/icons/heart-contur.png";
import redHeart from "../assets/icons/heart-red.png";

const CardDetailed = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const itemId = Number(id);
  const [imageIndex, setImageIndex] = useState(0);

  const items = useSelector((state) => state.shop.items);
  const item = items.find((item) => item.id === itemId);
  const bigPictures = item.bigPictures;
  const thumbnailsPictures = item.thumbnailsPictures;

  const goToNextPic = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % bigPictures.length);
  };

  const goToPrevPic = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? bigPictures.length - 1 : prevIndex - 1
    );
  };

  const favorites = useSelector((state) => state.user.favorite);
  const isFavorite = favorites.includes(itemId);
  const basket = useSelector((state) => state.user.basket);
  const isBasket = basket.includes(itemId);
  const { name, size, color, type, price, description } = item;
  return (
    <div className="card-container">
      <div className="back-btn" onClick={() => navigate(SHOP_ROUTE)}>
        <img className="back-btn" src={backArrow} alt="Корзина" />
        <span>НАЗАД</span>
      </div>
      <div className="card-information">
        <div className="card-images">
          <img
            src={leftSign}
            alt="Кнопка влево"
            className="slider-btn-left"
            onClick={goToPrevPic}
          />
          <img
            src={rightSign}
            alt="Кнопка вправо"
            className="slider-btn-right"
            onClick={goToNextPic}
          />
          <img
            className="main-image"
            src={bigPictures[imageIndex]}
            alt="Main Product"
          />
          <div className="thumbnails">
            {thumbnailsPictures.map((picUrl) => {
              const picId = thumbnailsPictures.indexOf(picUrl);
              return (
                <img
                  key={picId}
                  className={`thumbnail ${imageIndex === picId && "active"}`}
                  src={picUrl}
                  alt="Thumbnail 1"
                  onClick={() => setImageIndex(picId)}
                />
              );
            })}
          </div>
        </div>
        <div className="product-card-info">
          <h2 className="product-card-title">{name}</h2>
          <p className="product-card-description">Размер: {size.name}</p>
          <p className="product-card-description">Цвет: {color.name}</p>
          <p className="product-card-description">Тип: {type.name}</p>
          <p className="product-card-description">Описание: {description}</p>
          <p className="product-card-price">Цена: {price} ₽</p>
          <div className="card-buttons">
            {isBasket ? (
              <button
                className="go-to-cart"
                onClick={() => dispatch(setBasketPopup())}
              >
                Перейти в корзину
              </button>
            ) : (
              <button
                className="add-to-cart"
                onClick={() => dispatch(addBasket(itemId))}
              >
                Добавить в корзину
              </button>
            )}
            <button
              className="favorite-button"
              onClick={() => {
                isFavorite
                  ? dispatch(removeFavorite(itemId))
                  : dispatch(addFavorite(itemId));
              }}
            >
              <img
                src={isFavorite ? redHeart : lineationHeart}
                alt="emptyHeart"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailed;
