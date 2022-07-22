import Divider from "@/ui/Layout/Divider";
import { useTypedSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import Image from "next/image";
import product from "next-seo/lib/jsonld/product";

const CartSection = () => {
  const cart = useTypedSelector((state: RootState) => state.cart);

  return (
    <div className="my-4 min-h-screen">
      <h1 className="text-4xl text-white">Mi Carrito</h1>
      <Divider />
      <div>
        <div className="m-4">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="hidden md:inline text-right">
                <tr>
                  <th className="bg-transparent"></th>
                  <th className="bg-transparent">Product</th>
                  <th className="bg-transparent">Price</th>
                  <th className="bg-transparent">Cantidad</th>
                  <th className="bg-transparent">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart &&
                  cart.map((product, index) => (
                    <tr>
                      <td
                        data-label="Product"
                        className="text-right bg-transparent p-4 before:content-[attr(data-label)] before:float-left before:text-center before:pr[10px] "
                      >
                        <div className="relative pt-[100%] overflow-hidden mt-4 h-[150px] w-[150px] ">
                          <Image
                            className="object-cover max-w-[150px] absolute t-0 r-0 b-0 l-0 m-auto"
                            quality={100}
                            src={`${product.url}`}
                            layout="fill"
                            alt="NIKE AIR"
                          />
                        </div>
                      </td>
                      <td
                        data-label=""
                        className="text-right bg-transparent p-4 before:content-[attr(data-label)] before:float-left before:text-center before:pr[10px] "
                      ></td>
                      <td
                        data-label="Price"
                        className="text-right bg-transparent p-4 before:content-[attr(data-label)] before:float-left before:text-center before:pr[10px] "
                      >
                        ${product.price}
                      </td>
                      <td
                        data-label="Quantity"
                        className="text-right bg-transparent p-4 before:content-[attr(data-label)] before:float-left before:text-center before:pr[10px] "
                      >
                        {product.quantity}
                      </td>
                      <td
                        data-label="Total"
                        className="text-right bg-transparent p-4 before:content-[attr(data-label)] before:float-left before:text-center before:pr[10px] "
                      >
                        {product.quantity * Number(product.price)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
