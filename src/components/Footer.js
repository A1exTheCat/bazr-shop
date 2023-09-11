import {
  CONTACTS_ROUTE,
  DELIVERY_ROUTE,
  SHOP_ROUTE,
  ABOUT_ROUTE,
} from "../utils/consts";
import instagramIcon from "../assets/socialIcons/instagram.png";
import vkIcon from "../assets/socialIcons/vk.png";
import { useSelector, useDispatch } from "react-redux";
import { setTypeId } from "../store/shopSlice";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const types = useSelector((state) => state.shop.types.data);

  return (
    <section className="footer">
      <div className="container">
        <div className="footer-nav">
          <ul className="footer-list">
            <li className="list-head">Магазин</li>
            <li>
              <span
                onClick={() => {
                  dispatch(setTypeId("all"));
                  navigate(SHOP_ROUTE);
                }}
              >
                Вся одежда
              </span>
            </li>
            {types.map((type) => {
              return (
                <li key={type.id}>
                  <span
                    onClick={() => {
                      dispatch(setTypeId(type.id));
                      navigate(SHOP_ROUTE);
                    }}
                  >
                    {type.attributes.name}
                  </span>
                </li>
              );
            })}
          </ul>
          <ul className="footer-list">
            <li className="list-head">О нас</li>
            <li>
              <span onClick={() => navigate(ABOUT_ROUTE)}>О магазине</span>
            </li>
            <li>
              <span onClick={() => navigate(DELIVERY_ROUTE)}>Доставка</span>
            </li>
            <li>
              <span onClick={() => navigate(CONTACTS_ROUTE)}>Контакты</span>
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
