import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsMinecartLoaded } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Cart from "../pages/Cart";
import Searching from "./Searching";

function Header({ setToken }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState(false);
  const listLI = [
    { name: "Favoritos", to: "/productos" },
    { name: "Categorias", to: "/productos" },
    { name: "Checkout", to: "/checkout" },
    { name: "Iniciar Sesion", to: "/category" },
  ];

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
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

  return (
    <>
      {cart && <Cart />}

      <div className="sm:sticky top-0 bg-white z-10">
        <nav className="flex justify-evenly items-center h-14 sticky">
          <div className="bg-gray-200 h-12 px-5 flex items-center justify-center">
            <span onClick={() => navigate("/")}>Logo </span>
          </div>
          <button className="mdl:hidden">Abrir</button>
          <ul className="hidden ml-4 gap-6 mdl:flex">
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

          <div className={`${isOpen ? "" : "hidden"} md:flex gap-8`}>
            <Searching />
            <ul className="flex items-center justify-center gap-5 ">
              <div
                onClick={() => navigate("/checkout")}
                className="hover:scale-[1.2] cursor-pointer"
              >
                <BsMinecartLoaded />
              </div>

              <FaUser
                onClick={() => logInOrOut()}
                className="hover:scale-[1.2] cursor-pointer"
              />
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
