import {
  Action,
  combineReducers,
  configureStore,
  EnhancedStore,
  getDefaultMiddleware,
  Store,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import logger from "redux-logger";
import { cartSlice } from "./slices/cart";
import { counterSlice } from "./slices/counter";

export type ThunkActionType<T = Promise<void>> = ThunkAction<
  T,
  RootState,
  null,
  Action<string>
>;
export type ThunkDispatchType = ThunkDispatch<RootState, any, Action<string>>;
export type StoreType = Store<RootState, Action<string>> & {
  dispatch: ThunkDispatchType;
};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: combineReducers({
    counter: counterSlice.reducer,
    cart: cartSlice.reducer,
  }),
  middleware: [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV !== `production`,
});
// @ts-ignore
const makeStore: MakeStore<RootState> = (context: Context): EnhancedStore =>
  store;

// @ts-ignore
export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === `production`,
});
