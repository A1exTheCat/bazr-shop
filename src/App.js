import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Favorite from "./components/Favorite";
import { fetchInitialData } from "./store/shopSlice";
import { setFavorite, setBasket } from "./store/userSlice";
import Basket from "./components/Basket";

function App() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.ui.loading);

  useEffect(() => {
    const favorite =
      localStorage.getItem("favorite") !== null
        ? JSON.parse(localStorage.getItem("favorite"))
        : [];

    const basket =
      localStorage.getItem("basket") !== null
        ? JSON.parse(localStorage.getItem("basket"))
        : [];

    dispatch(setFavorite(favorite));
    dispatch(setBasket(basket));
    dispatch(fetchInitialData());
  }, [dispatch]);

  if (loading) {
    return <div>Загрузка</div>;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
      <Footer />
      <Favorite />
      <Basket />
    </BrowserRouter>
  );
}

export default App;
