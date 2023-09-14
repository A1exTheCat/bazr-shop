import { createSlice } from "@reduxjs/toolkit";
import { fetchInitialData } from "./shopSlice";

const initialState = {
  loading: true,
  favoritePopup: false,
  basketPopup: false,
};

const uiSlice = createSlice({
  name: "uiSlice",
  initialState,

  reducers: {
    setLoading: (state) => {
      state.loading = !state.loading;
    },
    setFavoritePopup: (state) => {
      state.favoritePopup = !state.favoritePopup;
    },
    setBasketPopup: (state) => {
      state.basketPopup = !state.basketPopup;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialData.fulfilled, (state) => {
      state.loading = false;
    });
  },
});

export const { setLoading, setFavoritePopup, setBasketPopup } = uiSlice.actions;

export default uiSlice.reducer;
