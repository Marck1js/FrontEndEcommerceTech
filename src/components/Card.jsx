import React from "react";
import Star from "../svgComponents/Star";
import IconCart from "../svgComponents/Cart";
import Favorite from "../svgComponents/Favorite";

const Card = (props) => {
  return (
    <div className="w-[210px] h-[330px] shadow-md m-1 flex flex-col  justify-center px-3 py-3 bg-white">
      <div className="flex justify-center mb-3 relative">
        <img
          className="h-28"
          src="https://i5.walmartimages.com/asr/32d517e5-1f0c-4116-a6eb-256f127b3944.60cd0a8add9b6bc677faaeb8954befe5.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
          alt="Image Product Card"
        />

        <div
          className={`${
            props.desc ? "" : "hidden"
          } absolute left-0 bg-slate-600 text-white text-xs px-2 py-1 rounded-md`}
        >
          15%
        </div>
        <a href="" className="absolute right-0">
          <Favorite />
        </a>
      </div>
      <p className="font-bold text-sm line-clamp-2 mb-1">
        4K Webcam Web Camera 60FPS with Microphone EMEET S600 Ultra for
        Streaming
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
      <p className="text-lg mb-3">$166.99</p>
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

export default Card;
