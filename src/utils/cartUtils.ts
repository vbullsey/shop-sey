import { CartSlice } from "@/redux/slices/cart";

export const getItemsCount = (cart: CartSlice[]) => {
  return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
};

export const getTotalPrice = (cart: CartSlice[]) => {
  return cart.reduce(
    (accumulator, item) => accumulator + item.quantity * Number(item.price),
    0
  );
};
