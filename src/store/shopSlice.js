import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchTypes,
  fetchColors,
  fetchSizes,
  fetchItems,
} from "../http/itemsAPI";

const initialState = {
  types: [],
  colors: [],
  sizes: [],
  items: [],
  typeId: "all",
  colorIds: [],
  sizeIds: [],
  loading: true,
};

export const fetchInitialData = createAsyncThunk(
  "shop/fetchDataFilters",
  async () => {
    const types = await fetchTypes();
    const colors = await fetchColors();
    const sizes = await fetchSizes();
    const items = await fetchItems();

    return { types, colors, sizes, items };
  }
);

const shopSlice = createSlice({
  name: "shopSlice",
  initialState,

  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setTypeId: (state, action) => {
      state.typeId = action.payload;
    },
    setColorIds: (state, action) => {
      state.colorIds.push(action.payload);
    },
    setSizeIds: (state, action) => {
      state.sizeIds.push(action.payload);
    },
    removeColorIds: (state, action) => {
      const filteredIds = state.colorIds.filter((id) => id !== action.payload);
      state.colorIds = filteredIds;
    },
    removeSizeIds: (state, action) => {
      const filteredIds = state.sizeIds.filter((id) => id !== action.payload);
      state.sizeIds = filteredIds;
    },
    defaultColors: (state) => {
      state.colorIds = [];
    },
    defaultSizes: (state) => {
      state.sizeIds = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialData.fulfilled, (state, action) => {
      state.types = action.payload.types;
      state.colors = action.payload.colors;
      state.sizes = action.payload.sizes;
      state.items = action.payload.items;
      state.loading = false;
    });
  },
});

export const {
  setItems,
  setTypeId,
  setColorIds,
  setSizeIds,
  removeColorIds,
  removeSizeIds,
  defaultColors,
  defaultSizes,
} = shopSlice.actions;

export default shopSlice.reducer;
