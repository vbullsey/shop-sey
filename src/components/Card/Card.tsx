import { useActions } from "@/redux/hooks";
import Rating from "@/ui/Data input/Rating";
import Link from "next/link";

type CardProps = {
  product: {
    id: string;
    title: string;
    price: string;
    url: string;
  };
};

const Card: React.FC<CardProps> = ({ product }) => {
  const { id, title = "", price = "", url = "" } = product;
  const { addToCart } = useActions();

  const handleAddToCart = () => addToCart(product);

  return (
    <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
      <img
        className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md object-cover"
        src={url}
      />

      <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 ">
        <Link href={`products/${id}`}>
          <a>
            <h3 className="font-bold tracking-wide text-center text-gray-800 uppercase ">
              {title}
            </h3>
          </a>
        </Link>

        <div className="pb-2  flex justify-center">
          <Rating>
            {[...Array.from(Array(5).keys())].map((num, i) => (
              <Rating.Item
                disabled
                key={i}
                name="rating-2"
                className={`mask mask-star-2  ${num === 4 ? "" : "bg-primary"}`}
                defaultChecked={num === 4 ? false : true}
              />
            ))}
          </Rating>
        </div>

        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <span className="font-bold text-gray-800 dark:text-gray-200">
            {price}
          </span>
          <button
            className="btn btn-xs btn-primary md:btn-sm gap-2"
            onClick={handleAddToCart}
          >
            Añadir al carro
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
