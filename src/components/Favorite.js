import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../store/userSlice";
import { CARD_ROUTE } from "../utils/consts";
import { setFavoritePopup } from "../store/uiSlice";
import deleteIcon from "../assets/icons/delete_icon.png";
import closeIcon from "../assets/icons/close_icon.png";

const Favorite = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ui.favoritePopup);
  const items = useSelector((state) => state.shop.items);
  const favorites = useSelector((state) => state.user.favorite);
  const filteredItems = items.filter((item) => favorites.includes(item.id));

  return (
    <div
      className={`modal-overlay ${isOpen ? "open" : ""}`}
      onClick={() => dispatch(setFavoritePopup())}
    >
      <div
        className={`fav-popup ${isOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="fav-popup-content">
          <h2>Избранное</h2>
          <button
            className="fav-close-popup"
            onClick={() => dispatch(setFavoritePopup())}
          >
            <img src={closeIcon} alt="cross-btn" />
          </button>
          <ul className="favorite-list">
            {filteredItems.map((product) => (
              <li key={product.id} className="favorite-item">
                <img
                  src={product.thumbnailsPictures[0]}
                  alt={product.name}
                  className="fav-product-image"
                />
                <div className="fav-product-details-block">
                  <div className="fav-product-details">
                    <a
                      className="fav-product-name"
                      href={`${CARD_ROUTE}/${product.id.toString()}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {product.name}
                    </a>
                    <p className="fav-product-size">
                      Размер: {product.size.name}
                    </p>
                  </div>
                  <p className="fav-product-price">{product.price} ₽</p>
                </div>
                <button
                  className="fav-remove-button"
                  onClick={() => dispatch(removeFavorite(product.id))}
                >
                  <img src={deleteIcon} alt="cross-btn" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
