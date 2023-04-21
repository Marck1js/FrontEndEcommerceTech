import React, { useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import x from "./css/Information.module.css";
import Loading from "./Loading";

function Information({details, save, saveInfo}) {

  return (
    <details ref={details} id="info" open={true}  className={`${x.details} mb-[20px] outline-[#000] outline relative overflow-hidden`}>
      <summary className={` ${x.summary} select-none flex justify-between items-center h-[50px] px-[20px]  pb-[3px] cursor-pointer`}>
        <i className={'text-[24px] font-bold capitalize tracking-[2px] dsds'}>Información</i>
        <div className="w-[30px] h-[30px] flex items-center justify-center"><BsChevronDown size={25}/></div>
      </summary>
  
    <div className="max-w-[700px] my-0 mx-auto">

      { save ? <Loading/> : null}


      <form className="w-[600px] mt-[20px]" onSubmit={(e)=> saveInfo(e) }>

        <fieldset className="mb-[10px]">

          <div className="flex gap-[20px] items-center justify-between mb-[10px]">

            <div className="w-[280px] h-[64px]  flex flex-col justify-evenly">
              <label htmlFor="name">Nombres</label>
              <div className="border-[2px] border-[#D&DADD] w-full h-[40px] py-[5px] rounded-[6px]">
                <input type="text" id="name" className="px-[10px] bg-inherit border-none w-full h-full focus:outline-none" placeholder="Placeholder" />
              </div>
            </div>

            <div className="w-[280px] h-[64px]  flex flex-col justify-evenly">
              <label htmlFor="lastname">Apellidos</label>
              <div className="border-[2px] border-[#D&DADD] w-full h-[40px] py-[5px]  rounded-[6px]">
                <input type="text" id="lastname" className="px-[10px] bg-inherit border-none w-full h-full  focus:outline-none" placeholder="Placeholder" />
              </div>
            </div>

          </div>

          <div className="w-full h-[64px]  flex flex-col justify-evenly mb-[10px]">
            <label htmlFor="email">Email</label>
            <div className="border-[2px] border-[#D&DADD] w-full h-[40px] py-[5px] rounded-[6px]">
              <input type="text" id="email" className="px-[10px] bg-inherit border-none w-full h-full focus:outline-none" placeholder="Placeholder" />
            </div>
          </div>


          <div className="flex gap-[20px] items-center justify-between mb-[10px]">

            <div className="w-[280px] h-[64px]  flex flex-col justify-evenly">
              <label htmlFor="phone">Telefono</label>
              <div className="border-[2px] border-[#D&DADD] w-full h-[40px] py-[5px] rounded-[6px]">
                <input type="text" id="phone" className="px-[10px] bg-inherit border-none w-full h-full focus:outline-none" placeholder="Placeholder" />
              </div>
            </div>

            <div className="w-[280px] h-[64px]  flex flex-col justify-evenly">
              <label htmlFor="zip">Codigo Zip</label>
              <div className="border-[2px] border-[#D&DADD] w-full h-[40px] py-[5px]  rounded-[6px]">
                <input type="text" id="zip" className="px-[10px] bg-inherit border-none w-full h-full  focus:outline-none" placeholder="Placeholder" />
              </div>
            </div>

          </div>

        </fieldset>

        <fieldset>
          <div className="space-x-2">
            <input type="checkbox" name="opcion1" value="valor1" />
            <label>Acepto los <strong>Términos de Servicio</strong> y{" "}<strong>Politica de Privacidad</strong></label>
          </div>
          <p className="my-[20px]">Este sitio esta protegido por reCAPTCHA</p>

        </fieldset>


        <fieldset className="flex justify-end mb-[10px]">
          <button type="submit" className="bg-[#0A0B0D] text-white w-[200px] h-[48px] rounded-[5px] text-[19px]" >Guardar</button>
        </fieldset>

      </form>
   
    </div>
    <hr/>
    
    </details>
  );
}

export default Information;