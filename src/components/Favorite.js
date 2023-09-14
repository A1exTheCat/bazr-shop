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
      <div className={`popup ${isOpen ? "open" : ""}`}>
        <div className="popup-content">
          <h2>Избранные товары</h2>
          <ul className="favorite-list">
            {filteredItems.map((product) => (
              <li key={product.id} className="favorite-item">
                <img
                  src={product.thumbnailsPictures[0]}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-details">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                  <p className="product-size">Размер: {product.size.name}</p>
                </div>
                <button className="remove-button">Удалить</button>
              </li>
            ))}
          </ul>
          <button onClick={() => dispatch(setFavoritePopup())}>Закрыть</button>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
