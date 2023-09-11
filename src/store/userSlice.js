import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
  basket: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,

  reducers: {
    setFavorite: (state, action) => {
      state.favorite = action.payload;
    },
    setBasket: (state, action) => {
      state.basket = action.payload;
    },
    addFavorite: (state, action) => {
      state.favorite.push(action.payload);
      localStorage.setItem("favorite", JSON.stringify(state.favorite));
    },
    addBasket: (state, action) => {
      state.basket.push(action.payload);
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    removeFavorite: (state, action) => {
      const filteredFavorite = state.favorite.filter(
        (id) => id !== action.payload
      );
      state.favorite = filteredFavorite;
      localStorage.setItem("favorite", JSON.stringify(state.favorite));
    },
    removeBasket: (state, action) => {
      const filteredBasket = state.basket.filter((id) => id !== action.payload);
      state.basket = filteredBasket;
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
  },
});

export const {
  setUser,
  setFavorite,
  setBasket,
  addFavorite,
  addBasket,
  removeFavorite,
  removeBasket,
} = userSlice.actions;

export default userSlice.reducer;
