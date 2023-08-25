import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  types: [
    { id: 1, name: "Вся одежда" },
    { id: 2, name: "Куртки" },
    { id: 3, name: "Рубашки" },
    { id: 4, name: "Футболки" },
    { id: 5, name: "Пиджаки" },
    { id: 6, name: "Брюки" },
    { id: 7, name: "Лонгсливы" },
  ],
  colors: [
    { id: 1, name: "Все цвета" },
    { id: 2, name: "Черный" },
    { id: 3, name: "Белый" },
    { id: 4, name: "Серый" },
    { id: 5, name: "Паттерн" },
  ],
  sizes: [
    { id: 1, name: "Все размеры" },
    { id: 2, name: "XS" },
    { id: 3, name: "S" },
    { id: 4, name: "M" },
    { id: 5, name: "L" },
    { id: 6, name: "XL" },
  ],
};
const shopSlice = createSlice({
  name: "shopSlice",
  initialState,

  reducers: {
    setTypes: (state, action) => {
      state.types = action.payload;
    },
    setColors: (state, action) => {
      state.colors = action.payload;
    },
    setSize: (state, action) => {
      state.sizes = action.payload;
    },
  },
});

export const { setTypes, setColors, setSize } = shopSlice.actions;

export default shopSlice.reducer;
