import React from "react";
import ClaimBook from "../svgComponents/LibroReclamos";
import Tiktok from "../svgComponents/Tiktok";
import Facebook from "../svgComponents/Facebook";
import Twitter from "../svgComponents/Twitter";
import Instagram from "../svgComponents/Instagram";
import iShopTech from '../assets/isotech_logo_nombre.svg';
import { BsChevronUp } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="bg-[#092877] mt-[40px] pb-[10px]">
      <footer className="max-w-6xl my-0 mx-auto h-[336px] flex flex-col justify-evenly">
        <div className="flex justify-between">
          <div className="flex justify-center items-center w-[180px] h-[130px]">
          <img src={iShopTech} className='h-full w-full block'/>
          </div>

          <ul
            className={`flex gap-[25px] text-white uppercase  items-center`}
          >
            <li className="cursor-pointer hover:underline underline-offset-8">nosotros</li>
            <li className="cursor-pointer hover:underline underline-offset-8">productos</li>
            <li className="cursor-pointer hover:underline underline-offset-8">soporte</li>
            <li className="cursor-pointer hover:underline underline-offset-8">faqs</li>
            <li className="cursor-pointer hover:underline underline-offset-8">contacto</li>
          </ul>

          <div className="flex">
            <ul className="flex gap-[20px] items-center">
              <li className="hover:scale-125 cursor-pointer w-[30px] h-[30px] flex justify-center items-center rounded-[50%] border-[1px] border-[#ffffffaf]">
                <a href="https://www.facebook.com"><Facebook/></a>
              </li>
              <li className="hover:scale-125 cursor-pointer w-[30px] h-[30px] flex justify-center items-center rounded-[50%] border-[1px] border-[#ffffffaf]">
              <a href="https://www.tiktok.com"><Tiktok/></a>
              </li>
              <li className="hover:scale-125 cursor-pointer w-[30px] h-[30px] flex justify-center items-center rounded-[50%] border-[1px] border-[#ffffffaf]">
              <a href="https://www.twitter.com"><Twitter/></a>
              </li>
              <li className="hover:scale-125 cursor-pointer w-[30px] h-[30px] flex justify-center items-center rounded-[50%] border-[1px] border-[#ffffffaf]">
              <a href="https://www.instagram.com"><Instagram/></a>
              </li>
            </ul>

            <div className="w-[48px] h-[48px] flex justify-center items-center rounded-[50%]  bg-[#ffffff15]">
              <BsChevronUp size={25} color="white" />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <ClaimBook />
        </div>

        <hr className="opacity-30" />

        <div className="flex justify-center text-white gap-[20px] capitalize">
          <p>©iShoptech Todos los derechos reservados</p>
          <p>condiciones de uso</p>
          <p>políticas de privacidad</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
