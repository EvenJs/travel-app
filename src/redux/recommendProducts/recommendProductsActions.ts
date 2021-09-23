import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../store';

/* eslint-disable arrow-body-style */
export const FETCH_RECOMMEND_PRODUCTS_START = 'FETCH_RECOMMEND_PRODUCTS_START'; // 正在调用推荐信息api
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS = 'FETCH_RECOMMEND_PRODUCTS_SUCCESS'; // 推荐信息api调用成功
export const FETCH_RECOMMEND_PRODUCTS_FAIL = 'FETCH_RECOMMEND_PRODUCTS_FAIL'; // 推荐信息api调用失败

interface FetchRecommendProductStartAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_START
}

interface FetchRecommendProductSuccessAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS,
  payload: any,
}

interface FetchRecommendProductFailAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL
  payload: any,
}

export type RecommendProductAction =
| FetchRecommendProductStartAction
| FetchRecommendProductSuccessAction
| FetchRecommendProductFailAction;

export const fetchRecommendProductStartActionCreator = (): FetchRecommendProductStartAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_START,
  };
};

export const fetchRecommendProductSuccessActionCreator = (
  data: any,
): FetchRecommendProductSuccessAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const fetchRecommendProductFailActionCreator = (
  error: any,
): FetchRecommendProductFailAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: error,
  };
};

export const giveMeDataActionCreator = (): ThunkAction<
void,
RootState,
unknown,
RecommendProductAction
> => async (dispatch) => {
  dispatch(fetchRecommendProductStartActionCreator());
  try {
    const { data } = await axios.get('http://123.56.149.216:8089/api/productCollections');
    dispatch(fetchRecommendProductSuccessActionCreator(data));
  } catch (error) {
    dispatch(fetchRecommendProductFailActionCreator(error.message));
  }
};
