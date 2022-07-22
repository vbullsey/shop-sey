import { useTypedSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import Button from "@/ui/Actions/Button";

import { getTotalPrice } from "@/utils/cartUtils";
import Link from "next/link";
import CartProduct from "@/components/Cart/CartProduct";

const CartSection = () => {
  const cart = useTypedSelector((state: RootState) => state.cart);

  if (!cart.length) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 my-4 min-h-screen">
        <h1 className="text-4xl">Ups!</h1>
        <h2 className="text-xl">Tú carrito está vacío</h2>
        <Link href="/">
          <a>
            <Button color="primary" className="text-white">
              Ir a comprar
            </Button>
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div className="my-4 min-h-screen">
      <div className="m-4 sm:px-4 md:px-8 lg:px-12 xl:px-44 mx-auto">
        <div className="flex flex-col p-6 space-y-4 sm:p-10 ">
          <h2 className="text-4xl ">Carrito</h2>
          <ul className="flex flex-col divide-y divide-gray-700 ">
            {cart &&
              cart.map((product, i) => (
                <CartProduct key={i} product={product} />
              ))}
          </ul>
          <div className="space-y-1 text-right">
            <p className="text-2xl ">
              Precio Total
              <span className="ml-2 text-primary">${getTotalPrice(cart)}</span>
            </p>
          </div>
          <div className="flex justify-end space-x-4">
            <Link href="/">
              <a>
                <Button>Volver</Button>
              </a>
            </Link>
            <Link href="/1426489388/checkout">
              <a>
                <Button color="primary" className="text-white">
                  Comprar
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
