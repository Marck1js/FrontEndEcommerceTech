import React from "react";
import Star from "../svgComponents/Star";

const Benefit = () => {
  return (
    <div className="w-[300px] h-[180px] px-7 py-3 m-3  flex flex-col  justify-center  rounded-md bg-white">
      <div className="bg-slate-200 w-10 h-10 mb-1 rounded-[50%] flex justify-center items-center">
        <Star className="fill-black" size="20" />
      </div>
      <p className="text-sm font-bold py-2">Envios a todo destino</p>
      <p className="text-xs">
        Se hace el envio a todo destino a nivel nacional con 10% de descuento
      </p>
    </div>
  );
};

export default Benefit;
