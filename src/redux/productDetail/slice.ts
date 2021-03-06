/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface ProductDetailState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: ProductDetailState = {
  loading: true,
  error: null,
  data: null,
};

export const getProductDetail = createAsyncThunk(
  'productDetail/getProductDetail',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (touristRouteId: string, thunkAPI) => {
    // thunkAPI.dispatch(productDetailSlice.actions.fetchStart());
    // try {
    //   const { data } = await axios.get(
    //     `http://123.56.149.216:8089/api/touristRoutes/${touristRouteId}`,
    //   );
    //   // setProduct(data);
    //   // setLoading(false);
    //   thunkAPI.dispatch(productDetailSlice.actions.fetchSuccess(data));
    // } catch (error) {
    //   // setError(error.message);
    //   // setLoading(false);
    //   thunkAPI.dispatch(productDetailSlice.actions.fetchFail(error.message));
    // }
    const { data } = await axios.get(
      `http://123.56.149.216:8089/api/touristRoutes/${touristRouteId}`,
    );
    return data;
  },
);

export const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getProductDetail.pending.type]: (state) => {
      // return { ...state, loading: true};
      state.loading = true;
    },
    [getProductDetail.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getProductDetail.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
