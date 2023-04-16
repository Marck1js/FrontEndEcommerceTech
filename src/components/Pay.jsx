import React from "react";
import x from "./css/Information.module.css";
import { tarjetas } from "../helpers/tarjetas";
import { BsChevronDown } from "react-icons/bs";
import Favorite from '../svgComponents/Favorite'


function Pay() {
    return (

        <details open={false} className={`${x.details} outline-[#000] outline`}>

            <summary className={` ${x.summary} select-none flex justify-between items-center h-[50px] px-[20px]  pb-[3px] cursor-pointer`}>
                <i className={'text-[24px] font-bold capitalize tracking-[2px] dsds'}>Pago</i>
                <div className="w-[30px] h-[30px] flex items-center justify-center"><BsChevronDown size={25} /></div>
            </summary>

            <div className="max-w-[700px] my-0 mx-auto">

                <p className="text-start mt-[20px] text-[20px] tracking-[1px]">Tarjeta de Credito o Debito</p>
                <fieldset className="w-[600px] flex justify-between items-center">
                    {tarjetas.map((item,index) => {
                        return (
                            <figure key={index} className="w-[140px] h-[70px] flex justify-center items-center rounded-[4px] border-[##fff] border-[1px] mt-[10px] mb-[20px] cursor-pointer hover:scale-105 hover:border-[#0e83d2] grayscale-[100%] hover:grayscale-0">
                                <img src={item} className='w-[80px] h-[40px] block '/>
                            </figure>   
                        );
                    })}
                </fieldset>
                <form className="w-[600px]">



                    <fieldset className="mb-[10px]">
                        <div className="mb-5">
                            <label htmlFor="card" className="flex items-center justify-start" > Numero de Tarjeta</label>
                            <div className="border-[2px] border-[#D&DADD] w-full h-[40px] py-[5px] rounded-[6px]">
                                <input type="text" id="card" className="px-[10px] bg-inherit border-none w-full h-full focus:outline-none" placeholder="XXXX - XXXX - XXXX - XXXX" />
                            </div>
                        </div>


                        <div className="flex gap-[20px] items-center justify-start mb-[10px]">

                            <div className="w-[300px] h-[64px]  flex flex-col justify-evenly">
                                <label htmlFor="date">Fecha de expiracion</label>
                                <div className="border-[2px] border-[#D&DADD] w-full h-[40px] py-[5px] rounded-[6px]">
                                    <input type="text" id="date" className="px-[10px] bg-inherit border-none w-full h-full focus:outline-none" placeholder="MM/AA" />
                                </div>
                            </div>

                            <div className="w-[300px] h-[64px]  flex flex-col justify-evenly">
                                <label htmlFor="code">Codigo de seguridad</label>
                                <div className="border-[2px] border-[#D&DADD] w-full h-[40px] py-[5px]  rounded-[6px]">
                                    <input type="text" placeholder="123" id="code" className="px-[10px] bg-inherit border-none w-full h-full  focus:outline-none" />
                                </div>
                            </div>

                        </div>

                    </fieldset>

                    <hr />

                    <fieldset className="w-[600px] mt-[20px] text-[24px] font-bold flex justify-between items-center">
                        <p className="dsds">Total del Pedido</p>
                        <p className="dsds">$0.00</p>
                    </fieldset>
                    <fieldset className="flex justify-start mt-[20px] pb-[20px]">
                        <button className="bg-[#0A0B0D] text-white w-[300px] h-[48px] rounded-[5px] text-[19px] capitalize">pagar ahora</button>
                    </fieldset>
                </form>
            </div>
        </details>

    );
}

export default Pay;
