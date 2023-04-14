import React from 'react'
import DiscountHeader from '../components/DiscountHeader'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Information from '../components/Information'
import DeliveryMethod from '../components/DeliveryMethod'
import Pay from '../components/Pay'
import Confirmation from '../components/Confirmation'
import AsideCheckout from '../components/AsideCheckout'
import CheckoutSteps from '../components/CheckoutSteps'
const Shop = () => {
  return (
    <>
      <DiscountHeader />
      <Header />


      {/* <CheckoutSteps/> */}
      <main className='max-w-6xl h-auto mx-auto my-0 mt-[20px] flex'>
        <div className='w-[800px] '>
          <Information />
          <DeliveryMethod />
          {/* <Pay /> */}

        </div>
        <AsideCheckout />




        {/* 
        
        <div className='bg-red-100 h-[600px] my-[20px]'>

        </div>
        <Confirmation /> */}
      </main>

      <Footer />
    </>
  )
}

export default Shop
