import React, { useEffect, useState } from "react";
import Card, { Card2 } from "../components/Card";
import DiscountHeader from "../components/DiscountHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Benefit from "../components/Benefit";
import Hero from "../components/Hero";
import SliderPromotion from "../components/SliderPromotion";
import { useSelector } from "react-redux";
import { LoaderCards2 } from "../components/LoaderCards";
import { benefits } from "../helpers/benefits";

export default function Home() {
  const { allProducts } = useSelector(state => state.counter);
  console.log(allProducts);


  const [token, setToken] = useState(false);
  let tokens = localStorage.getItem("token");


  useEffect(() => {
    if (tokens) {
      setToken(true);
      return;
    }
  }, [tokens]);

  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let arr2 = [1, 2, 3, 4];

  return (
    <>
      <section className="bg-slate-100 ">
        <DiscountHeader />
        <Header setToken={setToken} />
        <Hero />
        <div className="flex flex-col w-[1200px] mx-auto">
          <section className="flex flex-col overflow-hidden my-10">
            <SliderPromotion />
          </section>
          <section className="flex flex-col my-10">
            <p className="font-bold text-3xl mb-6">Nuestros Productos</p>
            <div className="grid grid-cols-4 gap-3">

              {arr.map((index, item) => {
                return <LoaderCards2 key={item} />;
              })}

            </div>
          </section>
          <section className="flex flex-col my-10">
            <p className="font-bold text-3xl mb-6">Productos Destacados</p>
            <div className="grid grid-cols-4 gap-3">
              {/* {arr2.map((item) => {
                return <Card2 key={item} />;
              })} */}

              {arr2.map((index, item) => {
                return <LoaderCards2 key={item} />;
              })}

            </div>
          </section>
          <section className="flex flex-col my-10">
            <p className="font-bold text-3xl mb-6">Últimas Ofertas</p>
            <div className="flex flex-wrap gap-2">
              {arr2.map((item) => {
                return <Card2 key={item} />;
              })}
            </div>
          </section>
          <section className="flex flex-col my-10">
            <p className="font-bold text-3xl mb-6">Accesorios</p>
            <div className="flex flex-wrap gap-2">
              {arr2.map((item) => {
                return <Card2 key={item} />;
              })}
            </div>
          </section>
          <section className="grid grid-cols-3 mt-20 gap-5">
            {benefits.map((item) => (
              <Benefit
                title={item.title}
                icon={item.icon}
                content={item.content}
              />
            ))}
          </section>
        </div>
        <Footer />
      </section>
    </>
  );
}
