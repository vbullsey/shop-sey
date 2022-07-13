import { bindActionCreators } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import actionCreators from "./actionCreators";
import { AppDispatch, RootState } from "./store";

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(actionCreators, dispatch);
};

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
