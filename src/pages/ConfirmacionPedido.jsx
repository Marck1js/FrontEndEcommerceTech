import React from 'react'
import Confirmation from '../components/Confirmation'
import DiscountHeader from '../components/DiscountHeader'
import Header from '../components/Header'
import AsideCheckout from '../components/AsideCheckout'
import Loading from '../components/Loading'
import Footer from '../components/Footer'
const ConfirmacionPedido = () => {

    return (
        <>
     
            <DiscountHeader />
            <Header />

            {/* <CheckoutSteps/> */}
            <main className='max-w-6xl h-auto mx-auto my-0 mt-[20px] flex justify-between'>
                <div className='w-[800px] '>
                    <Confirmation />

                </div>
                <AsideCheckout />
            </main>

            <Footer/>
        </>
    )
}

export default ConfirmacionPedido
