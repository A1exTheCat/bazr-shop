import {
  CONTACTS_ROUTE,
  DELIVERY_ROUTE,
  SHOP_ROUTE,
  ABOUT_ROUTE,
} from "../utils/consts";
import instagramIcon from "../assets/socialIcons/instagram.png";
import vkIcon from "../assets/socialIcons/vk.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-nav">
          <ul className="footer-list">
            <li className="list-head">Магазин</li>
            <li>
              <a href={SHOP_ROUTE}>Вся одежда</a>
            </li>
            <li>
              <a href={SHOP_ROUTE}>Футболки</a>
            </li>
            <li>
              <a href={SHOP_ROUTE}>Кофты</a>
            </li>
            <li>
              <a href={SHOP_ROUTE}>Брюки</a>
            </li>
            <li>
              <a href={SHOP_ROUTE}>Куртки</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li className="list-head">О нас</li>
            <li>
              <a href={ABOUT_ROUTE}>О магазине</a>
            </li>
            <li>
              <a href={DELIVERY_ROUTE}>Доставка</a>
            </li>
            <li>
              <a href={CONTACTS_ROUTE}>Контакты</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li className="list-head">Адрес</li>
            <li>Нальчик, Лермонтова 11</li>
            <li>1 этаж, кофейня "Адлашка"</li>
            <li>Ежедневно с 12 до 19 часов</li>
            <li></li>
            <li>+7 928 555 44 66</li>
            <li>+7 928 999 77 33</li>
            <div className="footer-social">
              <a href="!#">
                <img
                  className="img-social"
                  src={instagramIcon}
                  alt="instagram-icon"
                />
              </a>
              <a href="!#">
                <img className="img-social" src={vkIcon} alt="vk-icon" />
              </a>
            </div>
          </ul>
        </div>
        <div className="rulesInfo">
          <p>BAZR shop</p>
          <p>Индивидуальный предприниматель Султыгов Ризван Русланович</p>
          <p>ОГРНИП 318774600503320 ИНН 771581602357</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
