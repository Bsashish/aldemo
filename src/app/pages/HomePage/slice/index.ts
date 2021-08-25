import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { homeSaga } from './saga';
import { HomeState } from './types';

export const initialState: HomeState = { appName: 'Alurts FE' };

const slice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeAppName(state, action: PayloadAction<string>) {
      state.appName = action.payload;
    },
  },
});

export const { actions: homeActions } = slice;

export const useHomeSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: homeSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useHomeSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
