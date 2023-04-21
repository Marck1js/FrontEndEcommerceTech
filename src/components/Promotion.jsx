import React from "react";

const Promotion = ({ img, desc }) => {
  return (
    <div className="w-[600px] h-[450px] text-white flex flex-col  justify-center bg-neutral-800">
      <img src={img} alt={desc} className="object-cover h-full" />
    </div>
  );
};

export default Promotion;
