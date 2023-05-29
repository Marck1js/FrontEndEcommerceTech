import React from "react";
import Promotion from "./Promotion";
import frame1 from '../assets/imagenes-ecommerce/frame1.png'
import frame2 from '../assets/imagenes-ecommerce/frame2.png'
const SliderPromotion = () => {
  const promos = [
    {
      urlImg:
        "https://www.plazavea.com.pe/arquivos/Screenshot_1-2.jpg?v=637462610748500000",
      desc: "Hola",
    },
    {
      urlImg:
        "https://ofertadescuentos.com/wp-content/uploads/2014/09/Linio-Cup%C3%B3n-200-App.jpg",
      desc: "Holas",
    },
  ];

  return (
    <div>
      <p className="font-bold text-3xl mb-4">Promociones</p>
      <div className="flex gap-6 mb-8">
        {/* {promos.map((item) => (
          <Promotion img={item.urlImg} desc={item.desc} />
        ))} */}

        <Promotion img={frame1} desc={promos[0].desc} />
        <Promotion img={frame2} desc={promos[1].desc} />

      </div>
      <div className="flex justify-center gap-1 absolute right-0 left-0">
        {promos.map(() => {
          return <div className="w-2 h-2 bg-gray-300 rounded-[50%] "></div>;
        })}
      </div>
    </div>
  );
};

export default SliderPromotion;
