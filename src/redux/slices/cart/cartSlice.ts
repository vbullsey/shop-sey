import { createSlice } from "@reduxjs/toolkit";

export type CartSlice = {
  id: string;
  title: string;
  price: string;
  url: string;
  quantity: number;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartSlice[],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find((item) => item.id === action.payload.id);

      if (!itemExists) {
        state.push({ ...action.payload, quantity: 1 });
      } else {
        itemExists.quantity++;
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item: CartSlice) => item.id === action.payload);

      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);

      if (item) {
        if (item.quantity === 1) {
          const index = state.findIndex((item) => item.id === action.payload);
          state.splice(index, 1);
        } else item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers: {},
});

export const cartActions = {
  ...cartSlice.actions,
};
