import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import NavBar from '@/components/NavBar/NavBar';
import { useRouter } from 'next/router';
import { Meta } from './Meta';

import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';
import { ToastContainer } from 'react-toastify';

// https://stackoverflow.com/questions/70939164/next-js-pass-getserversideprops-and-children-props-in-the-page-component

const MainLayout = ({ children }: any) => {
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`, fetcher, {
    revalidateOnFocus: true,
  });

  const { asPath } = useRouter();

  const categories = data?.categories || [];

  return (
    <div className="flex  h-screen w-full overflow-x-hidden">
      <Meta />
      <div className="flex flex-1 flex-col">
        <NavBar categories={categories} />

        {asPath === '/' && <Hero />}
        <div className=" bg-neutral ">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
