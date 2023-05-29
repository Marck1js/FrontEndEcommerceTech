import React from "react";
import Shipping from "../svgComponents/Shipping";
import Security from "../svgComponents/Security";
import Support from "../svgComponents/Support";

const Benefit = ({ icon, title, content, fill}) => {
  let ic =
    icon === "Envios" ? (
      <Shipping size="60" fill={fill}/>
    ) : icon === "Seguridad" ? (
      <Security size="50" fill={fill}/>
    ) : (
      <Support size="50" fill={fill}/>
    );

  return (
    <div className="w-[390px] h-[260px] px-7 py-3 flex flex-col  justify-center  rounded-md bg-white">
      <div className="bg-[#E6FCFE] w-20 h-20 mb-1 rounded-[50%] flex justify-center items-center">
        {ic}
      </div>
      <span className="text-lg font-bold py-2 text-[#2961EF]">{title}</span>
      <p className="text-sm">{content}</p>
    </div>
  );
};

export default Benefit;
