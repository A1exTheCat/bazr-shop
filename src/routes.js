import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Basket from "./pages/Basket";
import Card from "./pages/Card";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import About from "./pages/About";
import Favorite from "./pages/Favorite";

import {
  BASKET_ROUTE,
  CARD_ROUTE,
  CONTACTS_ROUTE,
  DELIVERY_ROUTE,
  MAIN_ROUTE,
  SHOP_ROUTE,
  ABOUT_ROUTE,
  FAVORITE_ROUTE,
} from "./utils/consts";

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
  {
    path: ABOUT_ROUTE,
    Component: About,
  },
  {
    path: FAVORITE_ROUTE,
    Component: Favorite,
  },
];
