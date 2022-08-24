import DropdownMenu from '@/components/DropdownMenu/DropdownMenu';
import { NextPageContext } from 'next';
import { BsSortAlphaDown, BsSortAlphaDownAlt } from 'react-icons/bs';
import { BiRocket } from 'react-icons/bi';
import { GiCutDiamond } from 'react-icons/gi';
import { getSession } from 'next-auth/react';
import useProducts from '@/hooks/swr/useProducts';
import { useState } from 'react';
import CardTwo from '@/components/Card/CardTwo';
import UltimatePaginationBasic from '@/components/Pagination/PaginationXD';

const itemsMenuUser = [
  {
    title: 'A-Z',
    value: 'asc',
    icon: <BsSortAlphaDown />,
  },
  {
    title: 'Z-A',
    value: 'desc',
    icon: <BsSortAlphaDownAlt />,
  },
  {
    title: 'Popular',
    value: 'asc',
    icon: <BiRocket />,
  },
  {
    title: 'Destacado',
    value: 'asc',
    icon: <GiCutDiamond />,
  },
];

const NewReleases = () => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('name');
  const [order, setOrder] = useState('asc');
  const [limit, setLimit] = useState(10);

  const { data } = useProducts(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/product?page=${page}&limit=${limit}&sortBy=${sortBy}&orderBy=${order}`
  );

  const totalPages = Math.round(data?.count / limit);

  const onPageChange = (page) => {
    setPage(page);
  };

  // const a = () => {
  //   const postId = 2;
  //   const param = 2;
  //   router.push(
  //     {
  //       pathname: `/category/new-releases`,
  //       query: {
  //         postId,
  //         param,
  //       },
  //     },
  //     `/category/new-releases?page=${param}`,
  //     { shallow: true }
  //   );
  // };

  return (
    <div className="min-h-screen py-12 ">
      <div className="flex flex-row justify-between mx-4">
        <span className="rounded-lg px-4 btn">Productos</span>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Ordenar por</span>
          <DropdownMenu title="A-Z" setOrder={setOrder} data={itemsMenuUser} />
        </div>
      </div>
      <section>
        <div className="py-6">
          <div className="container flex flex-col justify-center p-4 mx-auto">
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
              {data?.products &&
                data.products.map((product, i) => (
                  <div className="flex flex-col">
                    <CardTwo product={product} />
                  </div>
                ))}
            </div>
            <div className="flex justify-center mt-8 items-center">
              {data && data.count && (
                <UltimatePaginationBasic
                  currentPage={page}
                  totalPages={totalPages}
                  onChange={onPageChange}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

export default NewReleases;
