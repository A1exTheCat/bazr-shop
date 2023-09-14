import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBasket } from "../store/userSlice";
import { setBasketPopup } from "../store/uiSlice";

const Basket = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ui.basketPopup);
  const items = useSelector((state) => state.shop.items);
  const basketItems = useSelector((state) => state.user.basket);
  const filteredItems = items.filter((item) => basketItems.includes(item.id));

  return (
    <>
      {isOpen && (
        <div className="basket-modal-overlay">
          <div className="basket-popup">
            <div className="basket-popup-content">
              {/* Содержимое вашего попапа */}
              <button onClick={() => dispatch(setBasketPopup())}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Basket;
