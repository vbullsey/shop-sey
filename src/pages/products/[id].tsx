import ProductSection from "@/components/Product/ProductSection";

export type ProductInfoProps = {
  title: string;
  slug: string;
  description: string;
  price: string;
  url: string;
  images?: string[];
};

export type ProductProps = {
  product: ProductInfoProps;
  categories?: any;
};

const ProductBySlug: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="min-h-screen py-12 sm:pt-36">
      {product && <ProductSection product={product} />}
    </div>
  );
};

export async function getStaticPaths() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product`);

    const data = await res.json();

    const paths = data.products.map(({ id }: any) => ({
      params: { id: `${id}` },
    }));

    return {
      fallback: false,
      paths,
    };
  } catch (e) {
    console.log(e);

    return null;
  }
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/product/${params.id}`
  );

  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export default ProductBySlug;
