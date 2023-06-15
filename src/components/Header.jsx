import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import Cart from "../pages/Cart";
import Searching from "./Searching";
import { CiGrid41 } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";

function Header({ setToken }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState(false);
  const [menu, setMenu] = useState(false);
  const listLI = [
    { name: "Favoritos", to: "/productos" },
    { name: "Categorias", to: "/productos" },
    { name: "Checkout", to: "/checkout" },
    { name: "Iniciar Sesion", to: "/category" },
  ];

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const openMenu = () => {
    setMenu(!menu);
  };

  const logInOrOut = () => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    localStorage.removeItem("token");
    setToken(false);
  };

  const getSizeAiOutlineHeart = () => {
    return window.innerWidth > 1536 ? "32" : "22";
  };
  const getSizeIcons = () => {
    return window.innerWidth > 1536 ? "30" : "20";
  };

  return (
    <>
      {cart && <Cart />}

      <div className="sm:sticky top-0 bg-white z-10 flex justify-center">
        <nav className="flex justify-between w-[90vw]  items-center min-h-[3.5rem] flex-wrap sticky ">
          <div className="bg-gray-200 my-3 py-1 px-5 flex items-center justify-center">
            <span onClick={() => navigate("/")}>Logo </span>
          </div>

          <ul
            className={`ml-4 gap-6 md2:flex ${
              menu === true
                ? "absolute right-0 top-16 space-y-4 text-xl bg-blue-500 text-white p-10"
                : "hidden"
            }`}
          >
            <li>Inicio</li>
            <li>Laptops</li>
            <li>PCs de Escritorio</li>
            <li>Tablets</li>
            <li>Accesorios</li>
            <li>FAQS</li>
          </ul>

          {/*
          <div className=" md:hidden flex items-center gap-4">
            <button
              onClick={handleMenuClick}
              className="flex items-center px-3 py-2 border rounded "
            >
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 12 12"
                stroke="currentColor"
              >
                {!isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4h6M3 8h6"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.5 4.5l3 3M7.5 4.5l-3 3"
                  />
                )}
              </svg>
            </button>
          </div> */}
          <div className="order-5 md:order-[0] ">
            <Searching />
          </div>
          <div className="flex items-center justify-center gap-4">
            <div
              onClick={() => navigate("/checkout")}
              className="hover:scale-[1.2] cursor-pointer"
            >
              <HiOutlineShoppingBag size={getSizeIcons()} />
            </div>

            <AiOutlineHeart
              size={getSizeAiOutlineHeart()}
              className="hover:scale-[1.2] cursor-pointer"
            />

            <BiUser
              onClick={() => logInOrOut()}
              size={getSizeIcons()}
              className="hover:scale-[1.2] cursor-pointer"
            />

            <button className="md2:hidden" onClick={openMenu}>
              <CiGrid41
                size="22"
                className="hover:scale-[1.2] cursor-pointer"
              />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
