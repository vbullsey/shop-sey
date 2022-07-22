import { useActions } from "@/redux/hooks";
import Button from "@/ui/Actions/Button";
import ButtonGroup from "@/ui/Layout/ButtonGroup";
import Image from "next/image";
import { useState } from "react";

const CartProduct = ({ product }) => {
  const { removeFromCart } = useActions();

  return (
    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
      <div className="flex w-full space-x-2 sm:space-x-4">
        <div className="relative w-20 h-20 sm:w-32 sm:h-32">
          <Image
            className="flex-shrink-0 object-cover"
            src={product.url}
            alt={product.title}
            layout="fill"
          />
        </div>

        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                {product.title}
              </h3>
              <p className="text-sm dark:text-gray-400">Figura</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">${product.price}</p>
              <p className="text-sm line-through dark:text-gray-600">
                ${Number(product.price) + 1000}
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex text-sm divide-x">
              <ButtonGroup>
                <Button
                  type="button"
                  className="flex items-center pl-0 space-x-1 bg-error text-white"
                  responsive
                  onClick={() => removeFromCart(product.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                    <rect width="32" height="200" x="168" y="216"></rect>
                    <rect width="32" height="200" x="240" y="216"></rect>
                    <rect width="32" height="200" x="312" y="216"></rect>
                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                  </svg>
                  <span>Eliminar</span>
                </Button>
                <Button
                  type="button"
                  className="flex items-center space-x-1 bg-primary text-white"
                  responsive
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                  </svg>
                  <span>Añadir a favoritos</span>
                </Button>
              </ButtonGroup>
            </div>
            <div>
              <ManageQuantity product={product} />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartProduct;

export const ManageQuantity = ({ product }) => {
  const { quantity } = product;

  const { decrementQuantity, incrementQuantity } = useActions();

  return (
    <div className="custom-number-input h-6 w-24">
      <div className="flex flex-row h-7 md:h-8 w-full rounded-lg relative bg-transparent mt-1">
        <button
          type="button"
          data-action="decrement"
          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          onClick={() => decrementQuantity(product.id)}
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
          onClick={() => incrementQuantity(product.id)}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};
