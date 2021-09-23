import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import { RootState } from './store';

// eslint-disable-next-line import/prefer-default-export
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
