import React, { useEffect, useState } from "react";
import Card, { Card2 } from "../components/Card";
import DiscountHeader from "../components/DiscountHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Benefit from "../components/Benefit";
import Hero from "../components/Hero";
import SliderPromotion from "../components/SliderPromotion";
import { useDispatch, useSelector } from "react-redux";
import { LoaderCards2 } from "../components/LoaderCards";
import { benefits } from "../helpers/benefits";
import { saveJsonServerProducts } from "../redux/reducers/counterReducer";
import ScrollToTop from "react-scroll-to-top";
import foto1 from "../assets/imagenes-ecommerce/foto1.png";
import foto2 from "../assets/imagenes-ecommerce/foto2.png";
import foto3 from "../assets/imagenes-ecommerce/foto3.png";
import foto4 from "../assets/imagenes-ecommerce/foto4.png";
import foto5 from "../assets/imagenes-ecommerce/foto5.png";
import foto6 from "../assets/imagenes-ecommerce/foto6.png";
import foto7 from "../assets/imagenes-ecommerce/foto7.png";
import foto8 from "../assets/imagenes-ecommerce/foto8.png";
import foto9 from "../assets/imagenes-ecommerce/foto9.png";
import foto10 from "../assets/imagenes-ecommerce/foto10.png";
import foto11 from "../assets/imagenes-ecommerce/foto11.png";
import foto12 from "../assets/imagenes-ecommerce/foto12.png";
export default function Home() {
  const dispatch = useDispatch();
  const { jsonserverProducts } = useSelector((state) => state.counter);
  const [token, setToken] = useState(false);
  let tokens = localStorage.getItem("token");

  useEffect(() => {
    if (tokens) {
      setToken(true);
      return;
    }
  }, [tokens]);

  useEffect(() => {
    dispatch(saveJsonServerProducts());
  }, []);

  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let arr2 = [1, 2, 3, 4];

  return (
    <>
      <ScrollToTop smooth className="flex items-center justify-center" />
      <section className="bg-slate-100 ">
        <DiscountHeader />
        <Header setToken={setToken} />
        <Hero />
        <div className="flex flex-col w-[1200px] mx-auto">
          <section className="flex flex-col overflow-hidden my-10">
            <SliderPromotion />
          </section>
          <section className="flex flex-col my-10">
            <div className="flex justify-between items-center">
              <p className="font-bold text-3xl mb-6">Nuestros Productos</p>
              <button className="mr-[1rem] p-[3px] border-[1px] border-solid text-[#2961EF]">
                Ver todos
              </button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {/* {arr.map((index, item) => {
                return <LoaderCards2 key={item} />;
              })} */}

              <Card2 img={foto1} />
              <Card2 img={foto2} />
              <Card2 img={foto3} />
              <Card2 img={foto4} />
              <Card2 img={foto5} />
              <Card2 img={foto6} />
              <Card2 img={foto7} />
              <Card2 img={foto8} />
            </div>
          </section>
          <section className="flex flex-col my-10">
            <div className="flex justify-between items-center">
              <p className="font-bold text-3xl mb-6">Productos Destacados</p>
              <button className="mr-[1rem] p-[3px] border-[1px] border-solid text-[#2961EF]">
                Ver todos
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {/* {arr2.map((item, index) => {
                return <Card2 key={item} img={`foto${index}`}/>;
              })} */}

              <Card2 img={foto3} />
              <Card2 img={foto4} />
              <Card2 img={foto12} />
              <Card2 img={foto10} />

              {/* {arr2.map((index, item) => {
                return <LoaderCards2 key={item} />;
              })} */}
            </div>
          </section>
          <section className="flex flex-col my-10">
            <p className="font-bold text-3xl mb-6">Últimas Ofertas</p>
            <div className="flex flex-wrap gap-2">
              {/* {arr2.map((item) => {
                return <Card2 key={item} />;
              })} */}

              {/* {arr2.map((index, item) => {
                return <LoaderCards2 key={item} />;
              })} */}

              <Card2 img={foto7} />
              <Card2 img={foto8} />
              <Card2 img={foto9} />
              <Card2 img={foto2} />
            </div>
          </section>
          <section className="flex flex-col my-10">
            <p className="font-bold text-3xl mb-6">Accesorios</p>
            <div className="flex flex-wrap gap-2">
              {/* {arr2.map((item) => {
                return <Card2 key={item} />;
              })} */}

              {/* {arr2.map((index, item) => {
                return <LoaderCards2 key={item} />;
              })} */}
              <Card2 img={foto9} />
              <Card2 img={foto10} />
              <Card2 img={foto11} />
              <Card2 img={foto12} />
            </div>
          </section>
          <section className="grid grid-cols-3 mt-20 gap-5 ">
            {benefits.map((item) => (
              <Benefit
                title={item.title}
                icon={item.icon}
                content={item.content}
                fill={item.fill}
              />
            ))}
          </section>
        </div>
        <Footer />
      </section>
    </>
  );
}
