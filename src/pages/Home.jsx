import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import DiscountHeader from "../components/DiscountHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Benefit from "../components/Benefit";
import Hero from "../components/Hero";
import SliderPromotion from "../components/SliderPromotion";
import { useSelector } from "react-redux";
import LoaderCards from "../components/LoaderCards";

export default function Home() {
  const {allProducts} = useSelector(state => state.counter);
  console.log(allProducts);


  const [token, setToken] = useState(false);
  let tokens = localStorage.getItem("token");


  useEffect(() => {
    if (tokens) {
      setToken(true);
      return;
    }
  }, [tokens]);

  return (
    <>
      <section className="">
        <DiscountHeader />
        <Header setToken={setToken} />

        <div className="bg-slate-100">
          <Hero />
          <section className="flex justify-center items-center gap-3">
            {
              allProducts?.length > 0 ? allProducts.slice(0,4).map((item,index)=> {
                console.log(index)
                return (
            <Card 
            imgProduct={`data:image/jpeg;base64,${item.picture[0].content}`} 
            nameProduct={item.name} 
            id={item.id}
            priceProduct={item.price}
            desc={true} key={item.id} />
                )
              }) : [1,2,3,4   ].map(e => <LoaderCards/>)
            }

          </section>
          <section className="flex justify-center">
            <SliderPromotion />
          </section>
          <section className="flex justify-center">
            <Benefit />
            <Benefit />
            <Benefit />
          </section>
          <Footer />
        </div>
      </section>
    </>
  );
}
