import CartSection from "@/sections/CartSection";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

const Cart = () => {
  return <CartSection />;
};

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  return {
    props: { session },
  };
}

export default Cart;
