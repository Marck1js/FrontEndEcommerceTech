import React, { useEffect, useState, useRef } from "react";
import "../index.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { images } from "../helpers/imagenes";
const Hero = () => {
  const sliderI = useRef();
  const intervalRef = useRef();

  const Next = () => {
    const slider = sliderI.current;
    const sliderFirst = slider.children[0];

    slider.style.marginLeft = `-200%`;
    slider.style.transition = `margin-left 150ms linear`;
    setTimeout(() => {
      slider.style.transition = `none`;
      slider.insertAdjacentElement("beforeend", sliderFirst);
      slider.style.marginLeft = `-100%`;
    }, 150);
  };

  const Prev = () => {
    const slider = sliderI.current;
    // const sliderFirst = slider.children[0];
    const sliderLast = slider.children[slider.children.length - 1];
    slider.style.marginLeft = `0`;
    slider.style.transition = `margin-left 150ms linear`;
    setTimeout(() => {
      slider.style.transition = `none`;
      slider.insertAdjacentElement("afterbegin", sliderLast);
      slider.style.marginLeft = `-100%`;
    }, 150);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      Next();
    }, 5000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <section
        id="cont"
        className="max-w-[1440px] mb-4 mx-auto relative overflow-hidden"
      >
        <div ref={sliderI} className="h-[400px] flex w-[400%] ml-[-100%]">
          {images?.length > 0 &&
            images.map((item, index) => {
              return (
                <div className="w-full">
                  <img
                    src={item.img}
                    alt="img"
                    className="block w-[100%] h-full object-fill"
                  />
                </div>
              );
            })}
        </div>

        <button
          className="w-[40px] h-[40px] bg-[#ffffffa0] absolute top-[50%] translate-y-[-50%] flex justify-center items-center  cursor-pointer border-none hover:bg-[#fff] left-[40px] shadow-md"
          onClick={() => Prev()}
        >
          <BsChevronLeft size={25} />
        </button>
        <button
          className="w-[40px] h-[40px] bg-[#ffffffa0] absolute top-[50%] translate-y-[-50%] flex justify-center items-center  cursor-pointer border-none hover:bg-[#fff] right-[40px] shadow-md"
          onClick={() => Next()}
        >
          <BsChevronRight size={25} />
        </button>
      </section>
      <div className="flex justify-center gap-1 absolute right-0 left-0">
        {images?.length > 0 &&
          images.map((item, index) => {
            return <div className={`w-2 h-2 ${index === 0 ? 'bg-[#20E3F8]' : 'bg-gray-300'}  rounded-[50%]`}></div>;
          })}
      </div>
    </>
  );
};

export default Hero;
