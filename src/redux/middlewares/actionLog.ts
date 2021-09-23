/* eslint-disable import/prefer-default-export */
import { Middleware } from 'redux';

export const actionLog: Middleware = (store) => (next) => (action) => {
  console.log('state 当前', store.getState());
  console.log('first action', action);
  next(action);
  console.log('state 更新', store.getState());
};
