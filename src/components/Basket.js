import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBasket } from "../store/userSlice";
import { setBasketPopup } from "../store/uiSlice";
import closeIcon from "../assets/icons/close_icon.png";
import deleteBasketIcon from "../assets/icons/basket-delete-btn.png";
import { CARD_ROUTE } from "../utils/consts";

const Basket = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ui.basketPopup);
  const items = useSelector((state) => state.shop.items);
  const basketItems = useSelector((state) => state.user.basket);
  const filteredItems = items.filter((item) => basketItems.includes(item.id));

  return (
    <div
      className={`modal-overlay ${isOpen ? "open" : ""}`}
      onClick={() => dispatch(setBasketPopup())}
    >
      <div
        className={`basket-popup ${isOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="basket-popup-content">
          <h2>ВАШ ЗАКАЗ</h2>
          <button
            className="basket-close-popup"
            onClick={() => dispatch(setBasketPopup())}
          >
            <img src={closeIcon} alt="cross-btn" />
          </button>
          <ul className="basket-list">
            {filteredItems.map((product) => (
              <li key={product.id} className="basket-item">
                <img
                  src={product.thumbnailsPictures[0]}
                  alt={product.name}
                  className="basket-product-image"
                />
                <div className="basket-product-details-block">
                  <div className="basket-product-details">
                    <a
                      className="basket-product-name"
                      href={`${CARD_ROUTE}/${product.id.toString()}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {product.name}
                    </a>
                    <p className="basket-product-size">
                      Размер: {product.size.name}
                    </p>
                  </div>
                  <p className="basket-product-price">{product.price} ₽</p>
                </div>
                <button
                  className="basket-remove-button"
                  onClick={() => dispatch(removeBasket(product.id))}
                >
                  <img src={deleteBasketIcon} alt="cross-btn" />
                </button>
              </li>
            ))}
          </ul>
          div
        </div>
      </div>
    </div>
  );
};

export default Basket;
