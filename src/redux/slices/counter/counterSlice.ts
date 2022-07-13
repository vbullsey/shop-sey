import { createSlice } from "@reduxjs/toolkit";
import { FeatureKey } from "./enumCounter";

export const counterSlice = createSlice({
  name: FeatureKey.COUNTER,
  initialState: 0,
  reducers: {},
  extraReducers: {},
});

export const counterActions = {
  ...counterSlice.actions,
};
