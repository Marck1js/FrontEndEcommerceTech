import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import DiscountHeader from "../components/DiscountHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Benefit from "../components/Benefit";
import Hero from "../components/Hero";
import SliderPromotion from "../components/SliderPromotion";

export default function Home() {
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
          <section className="flex justify-center">
            <Card desc={true} />
            <Card desc={false} />
            <Card desc={true} />
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
