import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CARD_ROUTE } from "../utils/consts";
import { addFavorite, removeFavorite } from "../store/userSlice";
import lineationHeart from "../assets/icons/heart-contur.png";
import redHeart from "../assets/icons/heart-red.png";
import filterFunction from "../utils/filterFunction";

const ItemsList = () => {
  const items = useSelector((state) => state.shop.items);
  const currentType = useSelector((state) => state.shop.typeId);
  const currentColors = useSelector((state) => state.shop.colorIds);
  const currentSizes = useSelector((state) => state.shop.sizeIds);
  const favorites = useSelector((state) => state.user.favorite);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filteredItems = filterFunction(
    items,
    currentType,
    currentColors,
    currentSizes
  );

  return (
    <section className="cards-list">
      {filteredItems.map((item) => {
        const { id } = item;
        const { name, price, bigPictures } = item;
        const [picture1, picture2] = bigPictures;
        const isFavorite = favorites.includes(id);
        return (
          <div
            className="product-link"
            key={id}
            onClick={() => navigate(`${CARD_ROUTE}/${id.toString()}`)}
          >
            <div className="product-card">
              <div className="product-image">
                <img
                  src={`${picture1}`}
                  alt="Product1"
                  className="default-image"
                />
                <img
                  src={`${picture2}`}
                  alt="Product2"
                  className="alternate-image"
                />
              </div>
              <div className="product-info">
                <h2 className="product-title">{name}</h2>
                <p className="product-price">{price} ₽</p>
              </div>
              <div className="card-favorite">
                <button
                  id={id}
                  className="favorite-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    isFavorite
                      ? dispatch(removeFavorite(id))
                      : dispatch(addFavorite(id));
                  }}
                >
                  <img
                    src={isFavorite ? redHeart : lineationHeart}
                    alt="Heart"
                  />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ItemsList;
