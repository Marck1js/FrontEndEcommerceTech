import React, { useState } from 'react'
import DiscountHeader from '../components/DiscountHeader'
import Header from '../components/Header'
import PreviewImg from '../components/PreviewImg';
import { FiChevronLeft,  FiChevronRight} from "react-icons/fi";


import { imagenProducto } from '../helpers/imagenes';
const DescriptionProduct = () => {
    const [imgMain, setImgMain] = useState(0);
    return (
        <>
            <DiscountHeader />
            <Header />


            <div className='flex mt-2 outline justify-center'>

            <div className='max-w-6xl my-0 mx-auto w-[50%] flex flex-col items-center' >
                <div className='bg-gray-400 w-[400px] h-[330px]'>
                    <img src={imagenProducto[imgMain].img} className='w-full h-full block object-fill'/>
                     </div>
                <div className='flex gap-3 mt-2 items-center justify-center'>
                    <div className='h-[32px] w-[32px] flex items-center justify-center border-[2px] border-solid bottom-[#000] hover:scale-[1.1] cursor-pointer'>
                        <FiChevronLeft size={30}/>
                    </div>
                    {
                        imagenProducto?.length > 0 && imagenProducto.map((item, index) => {
                            return (
                                <button onClick={()=> setImgMain(index)}>
                                <PreviewImg key={index} image={item.img} />
                                </button>
                            )
                        })
                    }
                    <div className='h-[32px] w-[32px] flex items-center justify-center border-[2px] border-solid bottom-[#000] hover:scale-[1.1] cursor-pointer'>
                        <FiChevronRight size={30} color='black'/>
                    </div>
                </div>
            </div>

            <div className='max-w-6xl my-0 mx-auto w-[50%]'>
                <p className='text-[400]'>ASUS VivoBook 15 OLED K513 - Portátil delgado y ligero, pantalla OLED de 15.6, CPU Intel i5-1135G7, gráficos Intel Iris Xe, 12 GB de RAM, SSD PCIe de 512 GB, lector de huellas dactilares, Windows 10 Home, Indie Black, K513EA-AB54</p>
            </div>

            </div>

        </>
    )
}

export default DescriptionProduct
