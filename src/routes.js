import Admin from "./pages/Admin";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import Card from "./pages/Card";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";

import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  CARD_ROUTE,
  CONTACTS_ROUTE,
  DELIVERY_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
  {
    path: CARD_ROUTE + "/:id",
    Component: Card,
  },
  {
    path: CONTACTS_ROUTE,
    Component: Contacts,
  },
  {
    path: DELIVERY_ROUTE,
    Component: Delivery,
  },
];
