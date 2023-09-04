import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./shopSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    shop: shopSlice,
  },
});
