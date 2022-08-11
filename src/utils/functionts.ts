import { Session } from "next-auth";

export const firstLetterSession = (session: Session): string =>
  session?.user?.name ? session.user.name.substring(0, 2) : "X";

export const totalQuantityItems = (cart: number) => {
  let totalCartItems = 0;
  try {
    cart > 0 ? (totalCartItems = cart) : (totalCartItems = 0);
  } catch (e) {
    totalCartItems = 0;
  }

  return totalCartItems;
};

export const stringOrEmpty = (message: string): string => message || "";
