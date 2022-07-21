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
    const res = await fetch(`http://localhost:8000/user/products`);

    const data = await res.json();
    const paths = data.map(({ id }: any) => ({ params: { id: `${id}` } }));

    return {
      fallback: false,
      paths,
    };
  } catch (e) {
    console.log(e);
  }
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(`http://localhost:8000/user/product/${params.id}`);

  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export default ProductBySlug;
