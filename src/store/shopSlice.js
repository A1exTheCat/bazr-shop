import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HOST } from "../utils/consts";
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialData.fulfilled, (state, action) => {
      const normalizedTypes = action.payload.types.data.map((type) => {
        const normalizedData = {
          id: type.id,
          name: type.attributes.name,
        };
        return normalizedData;
      });

      const normalizedSizes = action.payload.sizes.data.map((size) => {
        const normalizedData = {
          id: size.id,
          name: size.attributes.name,
        };
        return normalizedData;
      });

      const normalizedColors = action.payload.colors.data.map((color) => {
        const normalizedData = {
          id: color.id,
          name: color.attributes.name,
        };
        return normalizedData;
      });

      const normalizedItems = action.payload.items.data.map((item) => {
        const bigPictures = item.attributes.pictures.data.reduce((acc, pic) => {
          const newPic = pic.attributes.formats.large.url;
          acc.push(`${HOST}${newPic}`);
          return acc;
        }, []);

        const thumbnailsPictures = item.attributes.pictures.data.reduce(
          (acc, pic) => {
            const newPic = pic.attributes.formats.thumbnail.url;
            acc.push(`${HOST}${newPic}`);
            return acc;
          },
          []
        );

        const normalizedData = {
          id: item.id,
          name: item.attributes.name,
          price: item.attributes.price,
          size: {
            id: item.attributes.size.data.id,
            name: item.attributes.size.data.attributes.name,
          },
          color: {
            id: item.attributes.color.data.id,
            name: item.attributes.color.data.attributes.name,
          },
          type: {
            id: item.attributes.type.data.id,
            name: item.attributes.type.data.attributes.name,
          },
          description: item.attributes.description,
          bigPictures,
          thumbnailsPictures,
        };
        return normalizedData;
      });

      state.types = normalizedTypes;
      state.sizes = normalizedSizes;
      state.colors = normalizedColors;
      state.items = normalizedItems;
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
} = shopSlice.actions;

export default shopSlice.reducer;
