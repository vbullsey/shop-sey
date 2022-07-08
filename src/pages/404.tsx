import Image from 'next/image';
import Link from 'next/link';

const NotFound404 = () => {
  return (
    <div className="flex items-center">
      <div className="container flex flex-col items-center justify-between px-5 text-gray-700 md:flex-row">
        <div className="mx-8 flex w-full flex-col items-center lg:w-1/2">
          <div className="mb-8 text-7xl font-extrabold text-violet-400">
            {' '}
            Opps...
          </div>
          <p className="mb-8 text-2xl font-light leading-normal md:text-3xl">
            Esta página ya no existe.
          </p>

          <Link href="/">
            <a className="flex items-center rounded-lg border border-transparent bg-violet-400 px-12 py-3 text-center text-sm font-medium leading-5 text-white shadow-2xl transition-all hover:bg-purple-700 focus:outline-none active:bg-purple-900">
              Volver al inicio
            </a>
          </Link>
        </div>
        <div className="mx-5 my-12 w-full lg:flex lg:w-1/2 lg:justify-end">
          <div className="relative h-96 w-screen">
            <Image
              src="/404.svg"
              layout="fill"
              objectFit="cover"
              className=""
              alt="Page not found"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
