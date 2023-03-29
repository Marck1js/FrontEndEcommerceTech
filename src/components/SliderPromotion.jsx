import React from "react";
import Promotion from "./Promotion";

const SliderPromotion = () => {
  return (
    <div className="flex flex-col overflow-hidden p-5">
      <p className="font-bold text-lg">Promociones:</p>
      <div className="flex gap-4">
        <Promotion />
        <Promotion />
        <Promotion />
        <Promotion />
      </div>
    </div>
  );
};

export default SliderPromotion;
