import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsMinecartLoaded } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import Cart from "../pages/Cart";
import Searching from "./Searching";
import { CiGrid41 } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import iShopTech from "../assets/isotech_logo_nombre.png";

function Header({ setToken }) {
  const paginasI = useRef(null);
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const [optionLog, setOptionLog] = useState(false);
  const [cart, setCart] = useState(false);
  const [menu, setMenu] = useState(false);
  const listLI = [
    { name: "Favoritos", to: "/productos" },
    { name: "Categorias", to: "/productos" },
    { name: "Checkout", to: "/checkout" },
    { name: "Iniciar Sesion", to: "/category" },
  ];

  const openMenu = () => {
    setMenu(!menu);
    if (menu === false) {
      setOptionLog(false);
    }
  };

  const logInOrOut = () => {
    setOptionLog(!optionLog);
    if (optionLog === false) {
      setMenu(false);
    }
  };
  useLayoutEffect(() => {
    paginasI.current.childNodes.forEach((e) =>
      e.classList.remove("lg2:text-[#2961EF]", "text-[#141414d1]")
    );
    paginasI.current.childNodes.forEach(
      (e) =>
        e.id === pathname &&
        e.classList.add("lg2:text-[#2961EF]", "text-[#141414d1]")
    );
  }, [pathname]);

  const getSizeAiOutlineHeart = () => {
    return window.innerWidth > 1536 ? "32" : "22";
  };
  const getSizeIcons = () => {
    return window.innerWidth > 1536 ? "30" : "20";
  };

  return (
    <>
      {cart && <Cart />}

      <div className="md:sticky top-0 bg-white z-10 flex justify-center">
        <nav className="flex justify-between w-[90vw]  items-center min-h-[3.5rem] flex-wrap">
          <button
            onClick={() => navigate("/")}
            className="hover:scale-105 cursor-pointer w-28 my-2"
          >
            <img src={iShopTech} />
          </button>

          <ul
            ref={paginasI}
            className={`ml-4 gap-6 lg2:flex ${
              menu === true
                ? "absolute right-0 top-[6.9rem] sm:top-[6.5rem] md:top-14  space-y-4 text-xl bg-[#2961ef] rounded-lg text-white p-10 z-10 "
                : "hidden"
            }`}
          >
            <li
              id="/"
              className="select-none dsds cursor-pointer hover:text-[#444444d1] lg2:hover:text-[#2961EF70]"
              onClick={() => navigate("/")}
            >
              Inicio
            </li>
            <li
              id="/laptops"
              className="select-none dsds cursor-pointer hover:text-[#444444d1] lg2:hover:text-[#2961EF70]"
              onClick={() => navigate("/laptops")}
            >
              Laptops
            </li>
            <li
              id="/desktop"
              className="select-none dsds cursor-pointer hover:text-[#444444d1] lg2:hover:text-[#2961EF70]"
              onClick={() => navigate("/desktop")}
            >
              PCs de Escritorio
            </li>
            <li
              id="/tablets"
              className="select-none dsds cursor-pointer hover:text-[#444444d1] lg2:hover:text-[#2961EF70]"
              onClick={() => navigate("/tablets")}
            >
              Tablets
            </li>
            <li
              id="/accessory"
              className="select-none dsds cursor-pointer hover:text-[#444444d1] lg2:hover:text-[#2961EF70]"
              onClick={() => navigate("/accessory")}
            >
              Accesorios
            </li>
            <li
              id="/faqs"
              className="select-none dsds cursor-pointer hover:text-[#444444d1] lg2:hover:text-[#2961EF70]"
              onClick={() => navigate("/faqs")}
            >
              FAQS
            </li>
          </ul>

          <div className="order-5 md:order-[0]">
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
            <div className="relative">
              <BiUser
                onClick={() => logInOrOut()}
                size={getSizeIcons()}
                className="hover:scale-[1.2] cursor-pointer"
              />
              <div
                className={`${
                  optionLog
                    ? "absolute top-[130%] left-2/4 -ml-[7px] xl2:-ml-[12px] w-4 h-4 bg-[#dddddd] z-20 rotate-[45deg]"
                    : "hidden"
                }`}
              ></div>
              <div
                className={`${
                  optionLog
                    ? "rounded-md absolute z-30 -right-3 top-[110%]  w-32 h-20 bg-[#dddddd] my-[10px] flex flex-col justify-evenly items-center"
                    : "hidden"
                }`}
              >
                <p
                  className="text-[#030303] border-b-[1px] border-solid border-transparent cursor-pointer hover:border-[#000]"
                  onClick={() => navigate("/login")}
                >
                  Ingresar
                </p>
                <p
                  className="text-[#030303] border-b-[1px] border-solid border-transparent cursor-pointer  hover:border-[#000] whitespace-nowrap"
                  onClick={() => navigate("/register")}
                >
                  Crear Cuenta
                </p>
              </div>
            </div>

            <div className="flex relative">
              <button className="lg2:hidden" onClick={openMenu}>
                <CiGrid41
                  size="22"
                  className="hover:scale-[1.2] cursor-pointer"
                />
              </button>
              <div
                className={`${
                  menu
                    ? "absolute left-2/4 -ml-[6px] sm:-ml-[8px] xl2:-ml-[12px] top-[120%]  sm:right-[2.4rem] w-4 h-4 bg-[#2961ef] z-20 rotate-[45deg]"
                    : "hidden"
                }`}
              ></div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
