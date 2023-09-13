import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite, addBasket } from "../store/userSlice";
import { SHOP_ROUTE, HOST, BASKET_ROUTE } from "../utils/consts";
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

  const items = useSelector((state) => state.shop.items.data);
  const item = items.find((item) => item.id === itemId);
  const pictures = item.attributes.pictures.data;

  const bigPictures = pictures.reduce((acc, pic) => {
    const newPic = pic.attributes.formats.large.url;
    acc.push(`${HOST}${newPic}`);
    return acc;
  }, []);

  const thumbnailsPictures = pictures.reduce((acc, pic) => {
    const newPic = pic.attributes.formats.thumbnail.url;
    acc.push(`${HOST}${newPic}`);
    return acc;
  }, []);

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
  console.log(basket);
  console.log(isBasket);
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
          <h2 className="product-card-title">{item.attributes.name}</h2>
          <p className="product-card-description">
            Размер: {item.attributes.size.data.attributes.name}
          </p>
          <p className="product-card-description">
            Цвет: {item.attributes.color.data.attributes.name}
          </p>
          <p className="product-card-description">
            Описание: {item.attributes.description}
          </p>
          <p className="product-card-price">Цена: {item.attributes.price} ₽</p>
          <div className="card-buttons">
            {isBasket ? (
              <button
                className="go-to-cart"
                onClick={() => navigate(BASKET_ROUTE)}
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
