import React from "react";
import Shipping from "../svgComponents/Shipping";
import Security from "../svgComponents/Security";
import Support from "../svgComponents/Support";

const Benefit = ({ icon, title, content }) => {
  let ic =
    icon === "Envios" ? (
      <Shipping size="60" />
    ) : icon === "Seguridad" ? (
      <Security size="50" />
    ) : (
      <Support size="50" />
    );

  return (
    <div className="w-[390px] h-[260px] px-7 py-3 flex flex-col  justify-center  rounded-md bg-white">
      <div className="bg-slate-200 w-20 h-20 mb-1 rounded-[50%] flex justify-center items-center">
        {ic}
      </div>
      <span className="text-lg font-bold py-2">{title}</span>
      <p className="text-sm">{content}</p>
    </div>
  );
};

export default Benefit;
