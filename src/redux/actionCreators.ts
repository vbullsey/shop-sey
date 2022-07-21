import { cartActions } from "./slices/cart";
import { counterActions } from "./slices/counter";

export default {
  ...counterActions,
  ...cartActions,
};
