import { useModal } from "@/hooks/useModal";
import SearchMobile from "@/layout/SearchMobile";
import { useTypedSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import Button from "@/ui/Actions/Button";
import Dropdown from "@/ui/Actions/Dropdown";
import Avatar from "@/ui/Data display/Avatar";
import Badge from "@/ui/Data display/Badge";
import Card from "@/ui/Data display/Card";
import Indicator from "@/ui/Layout/Indicator";
import Menu from "@/ui/Navigation/Menu";
import Navbar from "@/ui/Navigation/Navbar";
import { getItemsCount, getTotalPrice } from "@/utils/cartUtils";
import { firstLetterSession } from "@/utils/functionts";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

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

export const itemsMenuUser = [
  {
    title: "Mi cuenta",
    icon: <FaUser />,
  },
  {
    title: "Favoritos",
    icon: <MdFavorite />,
  },
  {
    title: "Pedidos",
    icon: <FaShoppingCart />,
  },
];

const NavBar = ({ navBarData }) => {
  const { RenderModal, toggleVisible, closeModal } = useModal();

  const [value, setValue] = useState<number>(0);

  const renderNavBarData = (
    <>
      {navBarData &&
        navBarData.map((item, i) => {
          return (
            <li key={i}>
              <a className="uppercase text-sm">{item.title}</a>
            </li>
          );
        })}
    </>
  );

  return (
    <>
      <Navbar className="bg-black border-b-2 border-primary">
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
              {renderNavBarData}
            </ul>
          </div>
          <Link href="/">
            <a className="btn btn-ghost normal-case text-xl">ShopSey</a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{renderNavBarData}</ul>
        </div>
        <RightNavbar toggleVisible={toggleVisible} setValue={setValue} />
      </Navbar>

      <RenderModal>
        <MainModal value={value} setValue={setValue} closeModal={closeModal} />
      </RenderModal>
    </>
  );
};

export default NavBar;

type RigthNavbarProps = {
  toggleVisible: () => void;
  setValue: (selected: number) => void;
};

const RightNavbar: React.FC<RigthNavbarProps> = ({
  toggleVisible,
  setValue,
}) => {
  const { data: session } = useSession();

  const { RenderModal, toggleVisible: toggleModal } = useModal();

  const isAuthenticated = () => (
    <>
      <div>
        <FaSearch
          className="hover:fill-primary cursor-pointer"
          onClick={toggleModal}
        />
      </div>
      <Dropdown>
        <Dropdown.Toggle>
          <Avatar
            className="uppercase "
            shape="circle"
            size="xs"
            letters={session ? firstLetterSession(session) : "X"}
          />
        </Dropdown.Toggle>
        <Dropdown.Menu className="w-48">
          <Menu>
            {itemsMenuUser.map((item, i) => (
              <Menu.Item key={i}>
                <a>
                  {item.icon}
                  {item.title}
                </a>
              </Menu.Item>
            ))}
          </Menu>
        </Dropdown.Menu>
      </Dropdown>
      <div className="flex-none">
        <ShoppingCartNavBar />
      </div>
      <div className="">
        <button
          onClick={() => signOut()}
          className="btn btn-sm btn-primary hidden text-white md:inline "
        >
          Cerrar Sesión
        </button>
      </div>
      <RenderModal>
        <SearchMobile />
      </RenderModal>
    </>
  );

  return (
    <div className="navbar-end gap-2">
      {session ? (
        isAuthenticated()
      ) : (
        <>
          <ShoppingCartNavBar />
          <Button
            onClick={() => {
              toggleVisible();
              setValue(0);
            }}
            className="text-white"
          >
            Iniciar Sesión
          </Button>
          <Button
            onClick={() => {
              toggleVisible();
              setValue(1);
            }}
            className="btn btn-sm btn-primary text-white hidden md:inline"
          >
            Registrarse
          </Button>
        </>
      )}
    </div>
  );
};

const ShoppingCartNavBar = () => {
  const cart = useTypedSelector((state: RootState) => state.cart);

  const totaltems = getItemsCount(cart);

  return (
    <Dropdown vertical="end">
      <Button tabIndex={0} color="ghost" shape="circle">
        <Indicator item={<Badge size="sm">{totaltems}</Badge>}>
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
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </Indicator>
      </Button>
      <Dropdown.Menu
        tabIndex={0}
        className="mt-3 card card-compact  w-52 bg-base-100 !p-0"
      >
        <Card.Body className="card-body">
          {!totaltems ? (
            <>
              <span className="font-bold text-lg">¡El carrito está vacío!</span>
              <Card.Actions>
                <Button color="primary" fullWidth>
                  Añadir Productos
                </Button>
              </Card.Actions>
            </>
          ) : (
            <>
              <span className="font-bold text-lg">{totaltems} Productos</span>
              <span className="text-info">
                Subtotal: ${getTotalPrice(cart)}
              </span>
              <Card.Actions>
                <Link href="/cart">
                  <a>
                    <Button color="primary" fullWidth>
                      Ver Carrito
                    </Button>
                  </a>
                </Link>
              </Card.Actions>
            </>
          )}
        </Card.Body>
      </Dropdown.Menu>
    </Dropdown>
  );
};
