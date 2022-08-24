import { useActions } from '@/redux/hooks';
import Button from '@/ui/Actions/Button';
import Rating from '@/ui/Data input/Rating';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillLightningFill } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';

const CardTwo = ({ product }) => {
  const { id, title = '', description = '', price = '', image = '' } = product;
  const { addToCart } = useActions();
  const handleAddToCart = () => {
    // notify();

    addToCart(product);
  };

  return (
    <div className="max-w-sm mx-auto">
      <div className="relative h-64 rounded-md ">
        <Link href={`products/${id}`}>
          <Image
            className="bg-gray-300 bg-center shadow-md object-cover cursor-pointer "
            src={image}
            layout="fill"
          />
        </Link>

        <div className="absolute h-10 top-0 right-2 flex justify-center items-center ">
          <Button shape="circle" className="bg-gray-400 border-0" size="sm">
            <FaRegHeart className="fill-primary w-4 h-4" />
          </Button>
        </div>
        <div className="absolute h-10 bottom-0 right-2 flex justify-center items-center ">
          <Button
            startIcon={<BsFillLightningFill className="fill-primary" />}
            className="bg-gray-400 border-0"
            size="xs"
          >
            Special Offer
          </Button>
        </div>
      </div>

      <div className="bg-white min-h-36 p-6 w-56 md:w-64  overflow-hidden">
        <Link href={`products/${id}`}>
          <div className="cursor-pointer">
            <h2 className="text-black hover:text-primary font-semibold">{title}</h2>
            {/* <span className="text-gray-400 text-sm ">{description}</span> */}
          </div>
        </Link>
        <div className="flex justify-between">
          <div className="my-1 ">
            <Rating>
              {[...Array.from(Array(5).keys())].map((num, i) => (
                <Rating.Item
                  disabled
                  key={i}
                  name="rating-2"
                  className={`mask mask-star-2  ${num === 4 ? '' : 'bg-primary'}`}
                  defaultChecked={num === 4 ? false : true}
                />
              ))}
            </Rating>
          </div>
          <div className="flex items-center justify-between px-1 py-2">
            <div className="badge badge-primary" onClick={() => handleAddToCart()}>
              <span className="font-bold">$3000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
