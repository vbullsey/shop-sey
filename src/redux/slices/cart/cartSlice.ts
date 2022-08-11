import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
      const itemExists = state.find(
        (item: CartSlice) => item.id === action.payload.id
      );

      if (!itemExists) {
        state.push({ ...action.payload, quantity: 1 });
        toast.dark(`Se añadió: ${action.payload.title}`, {
          position: "top-right",
        });
      } else {
        itemExists.quantity++;
        toast.dark(`${action.payload.title} (+1)`, {
          position: "top-right",
        });
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
    addToCartByQuantity: (state, action) => {
      const { product, quantity } = action.payload;

      const item = state.find((item) => item.id === product.id);

      if (!item) {
        state.push({ ...product, quantity });
      } else {
        item.quantity += quantity;
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
