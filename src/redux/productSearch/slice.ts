/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface ProductSearchState {
  loading: boolean;
  error: string | null;
  data: any;
  pagination: any;
}

const initialState: ProductSearchState = {
  loading: true,
  error: null,
  data: null,
  pagination: null,
};

export const searchProduct = createAsyncThunk(
  'productSearch/searchProduct',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (paramaters: {
    keywords: string,
    nextPage: number | string,
    pageSize: number | string,
  }, thunkAPI) => {
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
    let url = `http://123.56.149.216:8080/api/touristRoutes?pageNumber=${paramaters.nextPage}&pageSize=${paramaters.pageSize}`;
    if (paramaters.keywords) {
      url += `&keyword=${paramaters.keywords}`;
    }

    const response = await axios.get(url);
    return {
      data: response.data,
      pagination: JSON.parse(response.headers['x-pagination']),
    };
  },
);

export const productSearchSlice = createSlice({
  name: 'productSearch',
  initialState,
  reducers: {
  },
  extraReducers: {
    [searchProduct.pending.type]: (state) => {
      // return { ...state, loading: true};
      state.loading = true;
    },
    [searchProduct.fulfilled.type]: (state, action) => {
      state.data = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
      state.error = null;
    },
    [searchProduct.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
