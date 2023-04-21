import React, { useState, useRef } from 'react'
import DiscountHeader from '../components/DiscountHeader'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Information from '../components/Information'
import DeliveryMethod from '../components/DeliveryMethod'
import Pay from '../components/Pay'
import Confirmation from '../components/Confirmation'
import AsideCheckout from '../components/AsideCheckout'
import CheckoutSteps from '../components/CheckoutSteps'
import { useNavigate } from 'react-router-dom'
const Shop = () => {

  const [save, setSave] = useState(false);
  const navigate = useNavigate();

  const info = useRef(null);
  const delivery = useRef(null);
  const pay = useRef(null);

  const saveInfo = (e) => {
    e.preventDefault();
    setSave(true);
    setTimeout(() => {
      setSave(false);

      info.current.toggleAttribute('open');
      delivery.current.toggleAttribute('open');
    }, 2000)
  }

  const saveDelivery = (e) => {
    e.preventDefault();
    setSave(true);
    setTimeout(() => {
      setSave(false);

      delivery.current.toggleAttribute('open');
      pay.current.toggleAttribute('open');
    }, 2000)
  }

  const savePay = (e) => {
    e.preventDefault();
    setSave(true);
    setTimeout(() => {
      setSave(false);

      pay.current.toggleAttribute('open');
      navigate('/confirm')
    }, 2000)
  }

  return (
    <>
      <DiscountHeader />
      <Header />


      {/* <CheckoutSteps/> */}
      <main className='max-w-6xl h-auto mx-auto my-0 mt-[20px] flex justify-between'>
        <div className='w-[800px] '>
          <div className='w-[800px] mb-[20px]' >
            <p className='text-[30px] font-bold tracking-[5px] text-starrt first-letter:text-red-800'>TIENDA</p>
            <hr />
          </div>
          <Information details={info} save={save} saveInfo={saveInfo} />
          <DeliveryMethod details={delivery} save={save} saveDelivery={saveDelivery} />
          <Pay details={pay} save={save} savePay={savePay} />

        </div>
        <AsideCheckout />




        {/* 
        
        <div className='bg-red-100 h-[600px] my-[20px]'>
        
        </div>
      */}
      </main>

      <Footer />
    </>
  )
}

export default Shop
