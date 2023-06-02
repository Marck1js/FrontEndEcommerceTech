import React from "react";
import ClaimBook from "../svgComponents/LibroReclamos";
import Tiktok from "../svgComponents/Tiktok";
import Facebook from "../svgComponents/Facebook";
import Twitter from "../svgComponents/Twitter";
import Instagram from "../svgComponents/Instagram";
import { BsChevronUp } from "react-icons/bs";

const getSizeAttribute = () => {
  if (window.innerWidth > 575) {
    return null; // Si el ancho de la pantalla es 550, no se aplicará el atributo 'size'
  } else {
    return "70"; // Para cualquier otro ancho de pantalla, se aplicará el atributo 'size="80"'
  }
};

const getSizeAttributeBsChevronUp = () => {
  if (window.innerWidth > 575) {
    return "25"; // Si el ancho de la pantalla es 550, no se aplicará el atributo 'size'
  } else {
    return "14"; // Para cualquier otro ancho de pantalla, se aplicará el atributo 'size="80"'
  }
};

const Footer = () => {
  return (
    <section className="bg-[#0A0B0D] mt-10 ">
      <footer className="h-auto md:h-80 flex flex-col justify-evenly ">
        <div className="flex justify-center flex-row items-center px-8 pt-12 md:p-0 ">
          <div className="flex justify-center flex-col md:flex-row w-10/12 md:flex-wrap lg:justify-between">
            <div className="flex justify-center items-center w-[50px] h-[50px] bg-gray-800 px-[60px]">
              <p className="text-white">Logo</p>
            </div>

            <ul className="flex flex-col md:flex-row gap-10 md:gap-7 text-white uppercase md:items-center cursor-pointer py-10 md:py-0 md:px-10">
              <li>nosotros</li>
              <li>productos</li>
              <li>soporte</li>
              <li>faqs</li>
              <li>contacto</li>
            </ul>

            <div className="flex">
              <ul className="flex  gap-5  items-center lg:translate-x-[-40px]">
                <li className="w-[30px] h-[30px] flex justify-center items-center rounded-full border border-[#787878]">
                  <Facebook color="#787878" />
                </li>
                <li className="w-[30px] h-[30px] flex justify-center items-center rounded-full border border-[#787878]">
                  <Tiktok />
                </li>
                <li className="w-[30px] h-[30px] flex justify-center items-center rounded-full border border-[#787878]">
                  <Twitter />
                </li>
                <li className="w-[30px] h-[30px] flex justify-center items-center rounded-full border border-[#787878]">
                  <Instagram />
                </li>
              </ul>
            </div>
          </div>

          <div className="w-12 h-12 flex justify-center items-center rounded-full  bg-[#ffffff15]">
            <BsChevronUp size={getSizeAttributeBsChevronUp()} color="white" />
          </div>
        </div>

        <div className="flex md:justify-center items-center p-8 sm:px-12 md:p-0">
          <ClaimBook size={getSizeAttribute()} />
        </div>

        <hr className="opacity-30 w-screen" />

        <div className="flex justify-center text-md py-10 md:py-0">
          <div className="flex text-white w-screen justify-evenly capitalize flex-col md:flex-row items-center md:px-40 gap-4 md:gap-0">
            <p>&copy; Logo inc. Todos los derechos reservados</p>
            <div className="flex justify-between md:w-2/5 gap-5">
              <p>condiciones de uso</p>
              <div className="w-[0.5px] bg-white"></div>
              <p>políticas de privacidad</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
