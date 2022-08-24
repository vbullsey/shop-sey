import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export type CartSlice = {
  id: string;
  title: string;
  price: string;
  url: string;
  quantity: number;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartSlice[],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find((item: CartSlice) => item.id === action.payload.id);

      if (!itemExists) {
        state.push({ ...action.payload, quantity: 1 });
        toast.dark(`Se añadió ${action.payload.title}`, {
          position: 'top-right',
        });
        return;
      }

      const stock = stockAvailable(action.payload.stock, itemExists.quantity);

      if (!stock) {
        toast.warning('Stock superado', {
          position: 'top-right',
        });
        return;
      }

      itemExists.quantity++;
      toast.dark(`${action.payload.title} (+1)`, {
        position: 'top-right',
      });
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item: CartSlice) => item.id === action.payload.id);

      console.log('action.payload', action.payload);

      if (item) {
        const stock = stockAvailable(action.payload.stock, item.quantity);

        if (!stock) {
          toast.dark('No puedes agregar más productos de este tipo!', {
            position: 'top-right',
          });
          return;
        }

        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);

      if (item) {
        if (item.quantity === 1) {
          const index = state.findIndex((item) => item.id === action.payload.id);
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
        if (product.quantity > item.quantity) {
          item.quantity += quantity;
        } else {
          toast.warning('Stock superado', {
            position: 'top-right',
          });
        }
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers: {},
});

const stockAvailable = (currentStock: number, quantity: number): boolean => {
  console.log('currentStock', currentStock, 'quantity', quantity);

  if (quantity >= currentStock) {
    return false;
  }

  // const newQuantity: number = (currentStock -= quantity);

  // if (currentStock < action.payload.quantity) {
  //   return false;
  // }

  return true;
};

export const cartActions = {
  ...cartSlice.actions,
};
