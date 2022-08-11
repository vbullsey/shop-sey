import { useActions } from "@/redux/hooks";
import Button from "@/ui/Actions/Button";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

function ProductForm({ product }) {
  const [quantity, setQuantity] = useState<number>(1);

  const { addToCartByQuantity } = useActions();

  const decrementQuantity = ({}) => {
    if (!quantity) return;

    setQuantity((quantity) => quantity - 1);
  };

  const incrementQuantity = () => setQuantity((quantity) => quantity + 1);

  const handleAddToCart = () => {
    const payload = {
      quantity,
      product,
    };

    addToCartByQuantity(payload);

    setQuantity(1);
  };

  return (
    <div className="w-full">
      <div className="flex justify-start space-x-2 w-full">
        <div className="custom-number-input h-6 w-24 my-2">
          <div className="flex flex-row h-7  md:h-8 w-full rounded-lg relative bg-transparent mt-1">
            <button
              type="button"
              data-action="decrement"
              className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
              onClick={decrementQuantity}
            >
              <span className="m-auto text-2xl font-thin">-</span>
            </button>
            <input
              type="number"
              className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  "
              name="custom-input-number"
              value={quantity}
            />
            <button
              data-action="increment"
              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
              onClick={incrementQuantity}
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
      </div>

      <Button
        color="primary"
        className="pt-3 pb-2 text-white w-full mt-6 rounded-sm font-primary font-semibold text-xl flex 
        justify-center items-baseline"
        aria-label="cart-button"
        onClick={handleAddToCart}
        disabled={!quantity}
      >
        Añadir al carrito
        <FaShoppingCart className="w-5 ml-2" />
      </Button>
    </div>
  );
}

export default ProductForm;
