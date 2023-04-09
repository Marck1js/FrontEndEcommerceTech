import React from 'react'
import { BsSearch } from "react-icons/bs";
import { BiChevronDown } from 'react-icons/bi';
const AdminHeader = () => {
  return (
    <nav className='bg-neutral-100 flex justify-between px-[20px] dsds3 py-[4px] sticky top-0'>

    <div className='flex w-[400px] h-[40px] items-center gap-2 rounded-[12px] border-[1px] border-[#d1d4f2] '>
      <button className='w-[40px] h-[40px] flex justify-center items-center ml-[10px]'>
      <BsSearch size={25} className='hover:scale-110'/>
      </button>
      <div className='w-full h-full mr-[20px]'>
        <input type='text' placeholder='Buscar Aqui' className='bg-inherit w-full h-full border-none focus:outline-none px-[5px] text-[20px]'/>
      </div>
    </div>


    <ul className='w-[200px] h-[40px] bg-emerald-100 flex items-center justify-evenly ml-[10px]'>
        <li className='w-[24px] h-[24px] outline'></li>
        <li className='w-[24px] h-[24px] outline'></li>
        <li className='w-[24px] h-[24px] outline'></li>
        <li className='w-[24px] h-[24px] outline'></li>
    </ul>

  </nav>
  )
}

export default AdminHeader
