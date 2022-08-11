import { createSlice } from "@reduxjs/toolkit";
// import { extraAction } from "../extraAction";

export type AlertSlice = {
  alerts: AlertType[];
};

type AlertType = {
  message: string;
  type: string;
};

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    alerts: [],
  } as AlertSlice,
  reducers: {
    createAlert: (state, action) => {
      state.alerts.push({
        message: action.payload.message,
        type: action.payload.type,
      });
    },
  },
  extraReducers: {
    // [extraAction]: (state, action) => {
    //   state.alerts.push({ message: action.error.message, type: "error" });
    // },
  },
});

export const alertActions = {
  ...alertSlice.actions,
};
