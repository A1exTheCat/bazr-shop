import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../store/userSlice";
import { HOST } from "../utils/consts";
import { setFavoritePopup } from "../store/uiSlice";

const Favorite = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ui.favoritePopup);
  const items = useSelector((state) => state.shop.items);
  const favorites = useSelector((state) => state.user.favorite);
  const filteredItems = items.filter((item) => favorites.includes(item.id));

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`}>
      <div className={`fav-popup ${isOpen ? "open" : ""}`}>
        <div className="fav-popup-content">
          <h2>Избранное</h2>
          <button
            className="fav-close-popup"
            onClick={() => dispatch(setFavoritePopup())}
          >
            Закрыть
          </button>
          <ul className="favorite-list">
            {filteredItems.map((product) => (
              <li key={product.id} className="favorite-item">
                <img
                  src={product.thumbnailsPictures[0]}
                  alt={product.name}
                  className="fav-product-image"
                />
                <div className="fav-product-details">
                  <h3 className="fav-product-name">{product.name}</h3>
                  <p className="fav-product-size">
                    Размер: {product.size.name}
                  </p>
                </div>
                <p className="fav-product-price">{product.price} ₽</p>
                <button className="fav-remove-button">Удалить</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
