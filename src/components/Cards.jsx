import React from "react";
import Categoria from "./Categoria";
import Card from "./Card";

const Cards = () => {
  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 1, 123, 12, 2, 2, 3, 3, 45, 5, 4, 1, 3, 45, 1, 1,
    23, 4, 45,
  ];
  return (
    <div className="max-w-6xl my-0 mx-auto mt-[20px] flex justify-between">
      <div className="bg-white w-[250px] h-max">
        <p className="text-[20px] font-bold">Categorias</p>
        <Categoria />
        <Categoria />
        <Categoria />
        <Categoria />
        <Categoria />
        <hr className="bg-red-200 my-2" />
        <p>Categorias</p>
        <Categoria />
        <Categoria />
        <Categoria />
        <Categoria />
        <Categoria />
        <hr className="bg-red-200 my-2" />
        <p>Categorias</p>
        <Categoria />
        <Categoria />
        <Categoria />
        <Categoria />
        <Categoria />
        <hr className="bg-red-200 my-2" />
      </div>

      <div className="w-[900px] h-[max-content] flex justify-center">
        <div className="flex flex-wrap justify-evenly">
          {arr?.length > 0
            ? arr.map((item) => {
                return <Card key={item} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Cards;
