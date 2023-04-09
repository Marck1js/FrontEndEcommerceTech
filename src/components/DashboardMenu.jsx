import React from 'react'

import Statistics from '../svgComponents/Statistics';
import Products from '../svgComponents/Products';
import Orders from '../svgComponents/Orders';
import Clients from '../svgComponents/Clients'
import Comments from '../svgComponents/Comments'
import Wallet from '../svgComponents/Wallet'
import Offers from '../svgComponents/Offers'
import Appearance from '../svgComponents/Appearance';
import Settings from '../svgComponents/Settings';
import Board from '../svgComponents/Board';

const DashboardMenu = () => {
  return (
    <>
  
      <section className='w-[240px] h-screen flex flex-col justify-evenly dsds3 fixed top-0 bottom-0 bg-white'>
        <nav className='flex flex-col items-center'>
          <ul className=''>
            <li className='h-[40px] w-[160px] cursor-pointer hover:scale-125 hover:border-[1px] border-solid border-[#000] hover:bg-[#E7E7E7] flex justify-center items-center my-[20px] rounded-[8px] gap-2'> <Board /> Tablero </li>
            <li className='h-[40px] w-[160px] cursor-pointer hover:scale-125 hover:border-[1px] border-solid border-[#000] hover:bg-[#E7E7E7] flex justify-center items-center my-[20px] rounded-[8px] gap-2'> <Products /> Productos</li>
            <li className='h-[40px] w-[160px] cursor-pointer hover:scale-125 hover:border-[1px] border-solid border-[#000] hover:bg-[#E7E7E7] flex justify-center items-center my-[20px] rounded-[8px] gap-2'>  <Orders /> Pedidos</li>
            <li className='h-[40px] w-[160px] cursor-pointer hover:scale-125 hover:border-[1px] border-solid border-[#000] hover:bg-[#E7E7E7] flex justify-center items-center my-[20px] rounded-[8px] gap-2'> <Clients /> Clientes</li>
            <li className='h-[40px] w-[160px] cursor-pointer hover:scale-125 hover:border-[1px] border-solid border-[#000] hover:bg-[#E7E7E7] flex justify-center items-center my-[20px] rounded-[8px] gap-2'> <Statistics /> Estadisticas</li>
            <li className='h-[40px] w-[160px] cursor-pointer hover:scale-125 hover:border-[1px] border-solid border-[#000] hover:bg-[#E7E7E7] flex justify-center items-center my-[20px] rounded-[8px] gap-2'> <Comments />Reseñas</li>
            <li className='h-[40px] w-[160px] cursor-pointer hover:scale-125 hover:border-[1px] border-solid border-[#000] hover:bg-[#E7E7E7] flex justify-center items-center my-[20px] rounded-[8px] gap-2'> <Wallet /> Transacciones</li>
            <li className='h-[40px] w-[160px] cursor-pointer hover:scale-125 hover:border-[1px] border-solid border-[#000] hover:bg-[#E7E7E7] flex justify-center items-center my-[20px] rounded-[8px] gap-2'> <Offers /> Ofertas</li>
          </ul>
          <hr className=' w-full [bg-[#d1d1d1] my-[20px]' />
          <ul>
            <li className='h-[40px] w-[160px] cursor-pointer hover:scale-125 hover:border-[1px] border-solid border-[#000] hover:bg-[#E7E7E7] flex justify-center items-center my-[20px] rounded-[8px] gap-2'> <Appearance /> Apariencia</li>
            <li className='h-[40px] w-[160px] cursor-pointer hover:scale-125 hover:border-[1px] border-solid border-[#000] hover:bg-[#E7E7E7] flex justify-center items-center my-[20px] rounded-[8px] gap-2'> <Settings /> Configuracion</li>
          </ul>
        </nav>
        <div></div>
      </section>
    </>
  )
}

export default DashboardMenu
