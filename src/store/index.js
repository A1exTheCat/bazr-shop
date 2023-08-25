import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./shopSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    shop: shopSlice,
  },
});
