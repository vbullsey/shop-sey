import { useModal } from "@/hooks/useModal";
import Avatar from "@/ui/Data display/Avatar";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import MainModal from "../Modals/MainModal";

export const itemsNav = [
  {
    title: "Inicio",
  },
  {
    title: "Tienda",
  },
  {
    title: "Contacto",
  },
];

const NavBar = () => {
  const { data: session } = useSession();

  const { RenderModal, toggleVisible, closeModal } = useModal();

  const [value, setValue] = useState<number>(0);

  const firstLetterSession = session?.user?.name
    ? session.user.name.substring(0, 2)
    : "X";

  return (
    <>
      <div className="navbar bg-neutral">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {itemsNav.map((item, i) => {
                return (
                  <li key={i}>
                    <a className="uppercase text-sm">{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">ShopSey</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {itemsNav.map((item, i) => {
              return (
                <li key={i}>
                  <a className="uppercase text-sm">{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {session ? (
            <>
              <Avatar
                className="uppercase"
                shape="circle"
                size="xs"
                letters={firstLetterSession}
              />
              <button
                onClick={() => signOut()}
                className="btn btn-sm btn-primary "
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  toggleVisible();
                  setValue(0);
                }}
                className="btn btn-sm "
              >
                Iniciar Sesión
              </button>
              <button
                onClick={() => {
                  toggleVisible();
                  setValue(1);
                }}
                className="btn btn-sm btn-primary"
              >
                Registrarse
              </button>
            </>
          )}
        </div>
      </div>
      <RenderModal>
        <MainModal value={value} setValue={setValue} closeModal={closeModal} />
      </RenderModal>
    </>
  );
};

export default NavBar;
