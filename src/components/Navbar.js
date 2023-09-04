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

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-nav">
          <ul className="nav-list">
            <li>
              <a className="active" href={MAIN_ROUTE}>
                Главная
              </a>
            </li>
            <li>
              <a href={SHOP_ROUTE}>Магазин</a>
            </li>
            <li>
              <a href={ABOUT_ROUTE}>О нас</a>
            </li>
          </ul>
          <a className="logo-link" href={MAIN_ROUTE}>
            <img className="img-logo" src={logo} alt="logo" />
          </a>
          <ul className="nav-list">
            <li>
              <a href={DELIVERY_ROUTE}>Доставка</a>
            </li>
            <li>
              <a href={CONTACTS_ROUTE}>Контакты</a>
            </li>
            <li>
              <a href={FAVORITE_ROUTE}>
                <img className="img-nav" src={heart} alt="Избранное" />
              </a>
            </li>
            <li>
              <a href={BASKET_ROUTE}>
                <img className="img-nav" src={basket} alt="Корзина" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
