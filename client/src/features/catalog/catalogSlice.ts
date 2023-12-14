import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { Product } from "../../app/models/product";
import agent from "../../app/api/agent";
import { RootState } from "../../app/store/configureStore";

// Create an entity adapter for individual Product objects
const productsAdapter = createEntityAdapter<Product>();

export const fetchProductsAsync = createAsyncThunk(
  "catalog/fetchProductsAsync",
  async (_, thunkAPI) => {
    try {
      return await agent.Catalog.list();
    } catch (error: any) {
      return thunkAPI.rejectWithValue({
        error: error.data ?? error.message,
      });
    }
  }
);

export const fetchProductAsync = createAsyncThunk<Product, number>(
  "catalog/fetchProductAsync",
  async (productId, thunkAPI) => {
    try {
      return await agent.Catalog.details(productId);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data ?? error.message });
    }
  }
);

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: productsAdapter.getInitialState({
    productsLoaded: false,
    status: "idle",
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "pendingFetchProducts";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        productsAdapter.setAll(state, action.payload);
        state.status = "idle";
        state.productsLoaded = true;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        console.log(action.payload);
        state.status = "idle";
      })
      .addCase(fetchProductAsync.pending, (state) => {
        state.status = "pendingFetchProduct";
      })
      .addCase(fetchProductAsync.fulfilled, (state, action) => {
        productsAdapter.upsertOne(state, action.payload);
        state.status = "idle";
      })
      .addCase(fetchProductAsync.rejected, (state) => {
        state.status = "idle";
      });
  },
});

export const productSelectors = productsAdapter.getSelectors(
  (state: RootState) => state.catalog
);
