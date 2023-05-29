import React, {useLayoutEffect, useRef, useState} from "react";
import Categoria from "./Categoria";
import Card from "./Card";
import LoaderCards from "./LoaderCards";
import Paginacion from "../utils/Paginacion";
import ScrollToTop from "react-scroll-to-top";
const Cards = () => {
  const but = useRef(null);
  let arrs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107];
  const [show, setShow] = useState(24);
  const [index,setIndex] = useState(0);
  const [maxIndex,setMaxIndex] = useState(Math.floor((arrs.length - 1) / show));

  let arr = arrs.splice(index * show, show)


  const showMore =  () => {
      const rect = but.current.getBoundingClientRect();
      window.scrollTo({
        top: 0, // Ajusta la posición según sea necesario
        behavior: 'smooth'
      });
  };




  return (
    <>

    <div className="max-w-6xl my-0 mx-auto mt-[20px] flex justify-between items-stretch">
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

      <section className="flex flex-col" >

        <div className="w-[900px] h-[max-content] grid grid-cols-4 gap-1 outline">

          {/* {arr?.length > 0
              ? arr.map((item) => {
                return <Card key={item} />;
              })
            : arr.map(e => <LoaderCards/>)} */}
          {arr.map((e,index) => <LoaderCards index={e}/>)}

        </div>
        <div className="outline flex justify-end my-[20px]">
          <Paginacion />
        </div>
      </section>

    </div>
    <button ref={but} o nClick={showMore}>
            <ScrollToTop smooth className="flex items-center justify-center"/>
    </button>
    </>
  
  );
};

export default Cards;
