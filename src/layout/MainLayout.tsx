import { useRouter } from 'next/router';

import NavBar from '@/components/NavBar';

const MainLayout = ({ children }: any) => {
  const router = useRouter();

  if (router.asPath === '/') {
    return <div>{children}</div>;
  }

  return (
    <div className="flex h-screen w-full bg-white dark:bg-gray-900">
      <div className="flex flex-1 flex-col">
        <NavBar />
        <div className="p-1">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
