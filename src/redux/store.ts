// import { createStore, applyMiddleware } from 'redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import languageReducer from './language/languageReducer';
// eslint-disable-next-line import/no-cycle
import recommendProductsReducer from './recommendProducts/recommendProductsReducer';
import { actionLog } from './middlewares/actionLog';
import { productDetailSlice } from './productDetail/slice';
import { productSearchSlice } from './productSearch/slice';

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetai: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer,
});

// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
