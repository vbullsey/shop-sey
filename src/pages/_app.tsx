import "../styles/global.css";

import type { AppProps } from "next/app";

import MainLayout from "@/layout/MainLayout";
import { wrapper } from "@/redux/store";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
);

export default wrapper.withRedux(MyApp);
