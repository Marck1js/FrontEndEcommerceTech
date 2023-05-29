import React, {useState} from 'react'

const Paginacion = () => {
    const arreglo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    let mostrar = 3;
    const maxIndex = Math.floor((arreglo.length - 1) / mostrar)
    let indice = maxIndex;
    let current = arreglo.splice(indice * mostrar, mostrar)
    console.log(indice);

  return (
    <div className='flex gap-2 outline w-[280px] justify-evenly items-center'>
        <button className='bg-red-100 w-[32px] h-[32px] flex items-center justify-center cursor-pointer hover:scale-110'>{'1'}</button>

        <button className='bg-red-100 w-[32px] h-[32px] flex items-center justify-center cursor-pointer hover:scale-110'>{'<'}</button>
        <button className='bg-red-100 w-[32px] h-[32px] flex items-center justify-center cursor-pointer hover:scale-110'>1</button>
        <button className='bg-red-100 w-[32px] h-[32px] flex items-center justify-center cursor-pointer hover:scale-110'>2</button>
        <button className='bg-red-100 w-[32px] h-[32px] flex items-center justify-center cursor-pointer hover:scale-110'>3</button>
        <button className='bg-red-100 w-[32px] h-[32px] flex items-center justify-center cursor-pointer hover:scale-110'>4</button>
        <p className='bg-red-100 w-[32px] h-[32px] flex items-center justify-center cursor-pointer hover:scale-110'>...</p>
        <button className='bg-red-100 w-[32px] h-[32px] flex items-center justify-center cursor-pointer hover:scale-110'>8</button>
        <button className='bg-red-100 w-[32px] h-[32px] flex items-center justify-center cursor-pointer hover:scale-110'>{'Last'}</button>
    </div>
  )
}

export default Paginacion

