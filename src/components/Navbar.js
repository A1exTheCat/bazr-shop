import {
  BASKET_ROUTE,
  CONTACTS_ROUTE,
  DELIVERY_ROUTE,
  MAIN_ROUTE,
  SHOP_ROUTE,
  ABOUT_ROUTE,
  FAVORITE_ROUTE,
} from "../utils/consts";
import logo from "../assets/icons/logo.svg";
import heart from "../assets/icons/heart.svg";
import basket from "../assets/icons/basket.svg";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header-nav">
          <ul className="nav-list">
            <li>
              <span
                className={location.pathname === MAIN_ROUTE ? "active" : ""}
                onClick={() => navigate(MAIN_ROUTE)}
              >
                Главная
              </span>
            </li>
            <li>
              <span
                className={location.pathname === SHOP_ROUTE ? "active" : ""}
                onClick={() => navigate(SHOP_ROUTE)}
              >
                Магазин
              </span>
            </li>
            <li>
              <span
                className={location.pathname === ABOUT_ROUTE ? "active" : ""}
                onClick={() => navigate(ABOUT_ROUTE)}
              >
                О нас
              </span>
            </li>
          </ul>
          <span className="logo-link" onClick={() => navigate(MAIN_ROUTE)}>
            <img className="img-logo" src={logo} alt="logo" />
          </span>
          <ul className="nav-list">
            <li>
              <span
                className={location.pathname === DELIVERY_ROUTE ? "active" : ""}
                onClick={() => navigate(DELIVERY_ROUTE)}
              >
                Доставка
              </span>
            </li>
            <li>
              <span
                className={location.pathname === CONTACTS_ROUTE ? "active" : ""}
                onClick={() => navigate(CONTACTS_ROUTE)}
              >
                Контакты
              </span>
            </li>
            <li>
              <span onClick={() => navigate(FAVORITE_ROUTE)}>
                <img className="img-nav" src={heart} alt="Избранное" />
              </span>
            </li>
            <li>
              <span onClick={() => navigate(BASKET_ROUTE)}>
                <img className="img-nav" src={basket} alt="Корзина" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
