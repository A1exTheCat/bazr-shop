import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBasket } from "../store/userSlice";
import { setBasketPopup } from "../store/uiSlice";
import closeIcon from "../assets/icons/close_icon.png";
import deleteBasketIcon from "../assets/icons/basket-delete-btn.png";
import { CARD_ROUTE } from "../utils/consts";
import { useFormik } from "formik";
import * as Yup from "yup";
import { DeliveryOptions, PaymentOptions } from "../utils/consts";
import { summaryFunction } from "../utils/summaryFunc";

const Basket = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ui.basketPopup);
  const items = useSelector((state) => state.shop.items);
  const basketItems = useSelector((state) => state.user.basket);
  const filteredItems = items.filter((item) => basketItems.includes(item.id));

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Имя обязательно для заполнения"),
    phone: Yup.string()
      .min(11, "Введите корректный номер телефона формата +7 (999) 999 99 99")
      .required("Телефон обязателен для заполнения"),
    email: Yup.string()
      .email("Введите корректный email")
      .required("Email обязателен для заполнения"),
    address: Yup.string().required("Адрес доставки обязателен для заполнения"),
    deliveryMethod: Yup.string().required("Выберите способ доставки"),
    paymentMethod: Yup.string().required("Выберите способ оплаты"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      deliveryMethod: "",
      paymentMethod: "",
    },
    validationSchema,
    onSubmit: (values) => console.log({ ...values }),
  });

  const isInvalid = (fieldName) =>
    formik.touched[fieldName] && formik.errors[fieldName];

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
          {basketItems.length === 0 ? (
            <div>Корзина пуста. Добавьте в корзину хотя бы один товар</div>
          ) : (
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
          )}
          <div className="basket-sum">
            Сумма: {summaryFunction(filteredItems)} ₽
          </div>

          <form onSubmit={formik.handleSubmit} className="basket-form">
            <div className="basket-form-field">
              <label htmlFor="name">Имя:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Имя Фамилия"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {isInvalid("name") && (
                <div className="basket-form-error">{formik.errors.name}</div>
              )}
            </div>
            <div className="basket-form-field">
              <label htmlFor="phone">Телефон:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+7 (999) 999 99 99"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              {isInvalid("phone") && (
                <div className="basket-form-error">{formik.errors.phone}</div>
              )}
            </div>
            <div className="basket-form-field">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Введите ваш email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {isInvalid("email") && (
                <div className="basket-form-error">{formik.errors.email}</div>
              )}
            </div>
            <div className="basket-form-field">
              <label htmlFor="address">Адрес доставки:</label>
              <input
                type="address"
                id="address"
                name="address"
                placeholder="г. Нальчик, ул. Ленина, дом 25, кв. 3"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.address}
              />
              {isInvalid("address") && (
                <div className="basket-form-error">{formik.errors.address}</div>
              )}
            </div>
            <div className="basket-form-radio">
              <p>Способы доставки:</p>
              {DeliveryOptions.map((option) => (
                <div className="basket-form-radio-btn" key={option}>
                  <label>
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value={option}
                      checked={formik.values.deliveryMethod === option}
                      onChange={formik.handleChange}
                    />
                    {option}
                  </label>
                </div>
              ))}
              {isInvalid("deliveryMethod") && (
                <div className="basket-form-error">
                  {formik.errors.deliveryMethod}
                </div>
              )}
            </div>
            <div className="basket-form-radio">
              <p>Способы оплаты:</p>
              {PaymentOptions.map((option) => (
                <div className="basket-form-radio-btn" key={option}>
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={option}
                      checked={formik.values.paymentMethod === option}
                      onChange={formik.handleChange}
                    />
                    {option}
                  </label>
                </div>
              ))}
              {isInvalid("paymentMethod") && (
                <div className="basket-form-error">
                  {formik.errors.paymentMethod}
                </div>
              )}
            </div>
            <div className="basket-sum">
              {`Сумма с доставкой: ${
                summaryFunction(filteredItems) +
                (formik.values.deliveryMethod === "Сдэк" ? 750 : 0)
              } ₽`}
            </div>
            <div className="basket-form-field">
              <button
                type="submit"
                className="basket-form-button"
                disabled={summaryFunction(filteredItems) === 0}
              >
                {summaryFunction(filteredItems) === 0
                  ? "Корзина пуста"
                  : "Оформить заказ"}
              </button>
              {Object.keys(formik.errors).length > 0 && (
                <div className="basket-form-error">Заполните форму</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Basket;
