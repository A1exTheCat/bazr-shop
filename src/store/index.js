import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./shopSlice";
import userSlice from "./userSlice";
import uiSlice from "./uiSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    shop: shopSlice,
    ui: uiSlice,
  },
});
