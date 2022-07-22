import "../styles/global.css";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import type { AppProps } from "next/app";
import { getSession, SessionProvider } from "next-auth/react";

import { wrapper } from "@/redux/store";
import { NextPageContext } from "next";

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => (
  <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>
);

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  return {
    props: { session },
  };
}

export default wrapper.withRedux(MyApp);
