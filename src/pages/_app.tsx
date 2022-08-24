import '../styles/global.css';
import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';

import type { AppProps } from 'next/app';
import { getSession, SessionProvider } from 'next-auth/react';

import { wrapper } from '@/redux/store';
import { NextPageContext } from 'next';
import MainLayout from '@/layout/MainLayout';
import { FALLBACK_CATEGORIES } from '@/constants/fallback';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => (
  <SessionProvider session={session}>
    <MainLayout>
      <ToastContainer />

      <Component {...pageProps} />
    </MainLayout>
  </SessionProvider>
);

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  const categoriesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/config/categories`
  );

  const categories = await categoriesResponse.json();

  return {
    props: {
      fallback: {
        [FALLBACK_CATEGORIES]: categories,
      },
      session,
    },
  };
}

export default wrapper.withRedux(MyApp);
