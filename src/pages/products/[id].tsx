import ProductSection from "@/components/Product/ProductSection";
import MainLayout from "@/layout/MainLayout";

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

const ProductBySlug: React.FC<ProductProps> = ({ categories, product }) => {
  return (
    <MainLayout navBarData={categories}>
      <div className="min-h-screen py-12 sm:pt-36">
        {product && <ProductSection product={product} />}
      </div>
    </MainLayout>
  );
};

export async function getStaticPaths() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/products`
    );

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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/product/${params.id}`
  );

  const categoriesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/config/categories`
  );

  const categories = await categoriesResponse.json();

  const product = await res.json();

  return {
    props: {
      product,
      categories,
    },
  };
}

export default ProductBySlug;
