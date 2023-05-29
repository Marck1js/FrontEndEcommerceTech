import React from "react";
import StarFull from "../svgComponents/StarFull";
import Star from "../svgComponents/Star";
import IconCart from "../svgComponents/Cart";
import Favorite from "../svgComponents/Favorite";

const Card = ({ desc, imgProduct, nameProduct, priceProduct, id }) => {
  return (
    <div onClick={() => console.log(id)} className="hover:outline cursor-pointer min-w-[210px] max-w-[230px] h-[330px] shadow-md m-1 flex flex-col  justify-center px-3 py-3 bg-white">
      <div className="flex justify-center mb-3 relative">
        <img
          className="h-28"
          src={imgProduct}
          alt="Image Product Card"
        />

        <div
          className={`${desc ? "" : "hidden"
            } absolute left-0 bg-slate-600 text-white text-xs px-2 py-1 rounded-md`}
        >
          15%
        </div>
        <a href="" className="absolute right-0">
          <Favorite />
        </a>
      </div>
      <p className="font-bold text-sm line-clamp-2 mb-1">
        {nameProduct}
      </p>
      <div className="flex items-center mb-1">
        <div className="flex mr-1 gap-[0.1rem]">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star className="fill-slate-400" />
        </div>
        <div className="flex text-slate-400">
          <p className="text-xs">4.3</p>
          <p className="text-xs">(209)</p>
        </div>
      </div>
      <p className="text-lg mb-3">${priceProduct}</p>
      <button className="flex justify-center items-center bg-black text-white text-xs rounded-md p-1 mb-2">
        <IconCart className="fill-white pb-1" size="20" />
        Añadir el carrito
      </button>
      <a className="text-xs text-center font-bold" href="/login">
        Más información
      </a>
    </div>
  );
};

const Card2 = (props) => {
  return (
    <div className="min-w-[280px] max-w-[300px] flex-1 h-[400px] shadow-md m-1 flex flex-col  justify-center px-8 py-5 bg-white">
      <div className="flex justify-center mb-3 relative">
        <img
          className="h-32"
          src={props.img}
          alt="Image Product Card"
        />

        <div
          className={`${props.desc ? "" : "hidden"} absolute left-0 bg-slate-600 text-white text-xs px-2 py-1 rounded-md`}
        >
          15%
        </div>
        <div className="absolute right-0 top-0 rounded-full p-[2px] hover:cursor-pointer ">
          <Favorite size="20"/>
        </div>
      </div>
      <p className="font-bold text-[19px] line-clamp-2 mb-1">
        4K Webcam Web Camera 60FPS with Microphone EMEET S600 Ultra for
        Streaming
      </p>
      <div className="flex items-center mb-1">
        <div className="flex items-center gap-1 mr-2">
          <StarFull />
          <StarFull />
          <StarFull />
          <StarFull />
          <Star size="20" className="fill-slate-400" />
        </div>
        <div className="flex text-slate-400">
          <p className="text-xs">4.3</p>
          <p className="text-xs">(209)</p>
        </div>
      </div>
      <p className="text-[37px] mb-3">$166.99</p>
      <button className="flex justify-center items-center bg-[#2961EF] h-[48px] text-white text-xs rounded-[5px] gap-2 mb-2">
        <IconCart className="fill-white" size="20" />
        Añadir el carrito
      </button>
      <a className="text-xs text-center font-bold mt-[5px]" href="/login">
        Más información
      </a>
    </div>
  );
};

export default Card;
export { Card2 };
