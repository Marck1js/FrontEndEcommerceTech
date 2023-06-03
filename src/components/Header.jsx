import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsMinecartLoaded } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Cart from "../pages/Cart";
import Searching from "./Searching";
import iShopTech from '../assets/isotech_logo_nombre.png'


function Header({ setToken }) {
  const paginasI = useRef(null);
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [optionLog, setOptionLog] = useState(false);
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
    if (optionLog === true) {
      setOptionLog(false);
      return
    };
    if (optionLog === false) {
      setOptionLog(true);
      return
    }
  }

useLayoutEffect(() => {
  paginasI.current.childNodes.forEach(e => e.classList.remove('activePage'));
  paginasI.current.childNodes.forEach(e => e.id === pathname && e.classList.add('activePage'));
},[pathname])
  
  return (
    <>
      {cart && <Cart />}

      <div className="sticky top-0 bg-white z-10">
        <nav className=" max-w-6xl my-0 mx-auto flex justify-between items-center h-[60px] sticky top-0">

          <button onClick={()=> navigate('/')} className="hover:scale-105 cursor-pointer bg-transparent h-[48px] w-[100px]  flex items-center justify-center">
            <img src={iShopTech} className='w-full scale-125' />
          </button>

          <ul ref={paginasI} className="flex ml-[30px] space-x-6">
            <li id='/' className="select-none dsds cursor-pointer hover:text-[#2961EF70]" onClick={()=> navigate('/')}>Inicio</li>
            <li id='/laptops' className="select-none dsds cursor-pointer hover:text-[#2961EF70]" onClick={()=> navigate('/laptops')}>Laptops</li>
            <li id='/desktop' className="select-none dsds cursor-pointer hover:text-[#2961EF70]" onClick={()=> navigate('/desktop')}>PCs de Escritorio</li>
            <li id='/tablets' className="select-none dsds cursor-pointer hover:text-[#2961EF70]" onClick={()=> navigate('/tablets')}>Tablets</li>
            <li id='/accessory' className="select-none dsds cursor-pointer hover:text-[#2961EF70]" onClick={()=> navigate('/accessory')}>Accesorios</li>
            <li id='/faqs' className="select-none dsds cursor-pointer hover:text-[#2961EF70]" onClick={()=> navigate('/faqs')}>FAQS</li>
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

          <div
            className={`${isOpen ? "" : "hidden"
              } w-full block flex-grow md:flex md:items-center md:w-auto justify-end space-x-8`}
          >
            <Searching />
            <ul className="flex items-center justify-center gap-[20px]">
              <div onClick={() => navigate("/checkout")}>
                <BsMinecartLoaded />
              </div>
              <div onClick={() => logInOrOut()} className="relative cursor-pointer">
                <FaUser className="hover:scale-110" />
                <div className={`${optionLog ? "visible" : "hidden"}`}>
                  <div className="absolute w-[15px] h-[15px] bg-[#dddddd] top-[28.4px] right-0 z-20 rotate-[45deg]"></div>
                  <div className=" rounded-[5px] absolute top-[23px] z-10 right-[-10px] w-[120px] h-[70px] bg-[#dddddd] my-[10px] mx-auto flex flex-col justify-evenly items-center  rounded-[5px">
                    <p className="text-[#030303] border-b-[1px] border-solid border-transparent cursor-pointer hover:border-[#000]" onClick={() => navigate('/login')}>Ingresar</p>
                    <p className="text-[#030303] border-b-[1px] border-solid border-transparent cursor-pointer  hover:border-[#000] whitespace-nowrap" onClick={() => navigate('/register')}>Crear Cuenta</p>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </nav>

      </div>
    </>
  );
}

export default Header;
