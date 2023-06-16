import React from "react";

const DiscountHeader = () => {
  return (
    <div className='bg-[#0336FF]'>
        <div className='h-12 flex flex-col sm:flex-row items-center justify-center gap-1 sm:justify-around w-screen mx-auto text-white'>
            <p className="hidden md:inline">30% de descuento a envios a otros destinos</p>
            <p>Servicio al cliente: +56(01)2106900</p>
        </div>
    </div>
  );
};

export default DiscountHeader;
