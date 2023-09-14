import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Card from "./pages/Card";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import About from "./pages/About";

import {
  CARD_ROUTE,
  CONTACTS_ROUTE,
  DELIVERY_ROUTE,
  MAIN_ROUTE,
  SHOP_ROUTE,
  ABOUT_ROUTE,
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
];
