import React from "react";
import x from "./css/Information.module.css";
import { BsChevronDown } from "react-icons/bs";
import Favorite from '../svgComponents/Favorite'
function DeliveryMethod() {
  return (

    <details open={false} className={`${x.details} mb-[20px] outline-[#000] outline`}>
      <summary className={` ${x.summary} select-none flex justify-between items-center h-[50px] px-[20px]  pb-[3px] cursor-pointer`}>
        <i className={'text-[24px] font-bold capitalize tracking-[2px] dsds'}>Metodo de Envio</i>
        <div className="w-[30px] h-[30px] flex items-center justify-center"><BsChevronDown size={25} /></div>
      </summary>


      <div className="max-w-[700px] my-0 mx-auto mt-[20]">

        <section>
          <div className="w-[600px] flex justify-evenly gap-3 my-[20px]">
            <div className="border-[2px] w-[300px] h-[80px] border-[#D&DADD] flex items-center gap-2 justify-center rounded-[6px]">
              <input type="radio"></input>
              <span class="text">Delivery</span>
            </div>

            <div className="border-[2px] w-[300px] h-[80px] border-[#D&DADD] flex items-center gap-2 justify-center rounded-[6px]">
              <input type="radio"></input>
              <span class="text">Mi Ubicacion Actual</span>
            </div>

          </div>

          <div className="w-[600px] h-[160px] border-[2px] border-[#D&DADD] flex flex-col items-start justify-evenly pl-[40px] rounded-[6px]">
            <p>Mis domicilios guardados</p>
            <div className="border-[2px] border-[#D&DADD] w-[500px] h-[100px] flex items-center gap-2 justify-evenly rounded-[6px]">
              <input type="radio" ></input>
              <span className="w-[450px] leading-[28px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus earum provident tenetur maxime.
              </span>
            </div>
          </div>

        </section>

        <form className="w-[600px]">
          <p className="my-[15px] dsds text-[20px] underline">Domicilio Nuevo</p>
          <fieldset >

            <div className="mb-5">
              <label htmlFor="city" className="flex items-center justify-start gap-2" ><span> <Favorite size={15} /> </span>  Ciudad</label>
              <div className="border-[2px] border-[#D&DADD] w-full h-[40px] py-[5px] rounded-[6px]">
                <input type="text" id="city" className="px-[10px] bg-inherit border-none w-full h-full focus:outline-none" placeholder="Placeholder" />
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="floor" className="flex items-center justify-start gap-2" ><span> <Favorite size={15} /> </span>Piso / Departamento</label>
              <div className="border-[2px] border-[#D&DADD] w-full h-[40px] py-[5px] rounded-[6px]">
                <input type="text" id="floor" className="px-[10px] bg-inherit border-none w-full h-full focus:outline-none" placeholder="Placeholder" />
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="address1" className="flex items-center justify-start gap-2" ><span> <Favorite size={15} /> </span>Direccion 1</label>
              <div className="border-[2px] border-[#D&DADD] w-full h-[40px] py-[5px] rounded-[6px]">
                <input type="text" id="address1" className="px-[10px] bg-inherit border-none w-full h-full focus:outline-none" placeholder="Placeholder" />
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="address2" className="flex items-center justify-start gap-2" ><span> <Favorite size={15} /> </span>Direccion 2 Referencia</label>
              <div className="border-[2px] border-[#D&DADD] w-full h-[40px] py-[5px] rounded-[6px]">
                <input type="text" id="address2" className="px-[10px] bg-inherit border-none w-full h-full focus:outline-none" placeholder="Placeholder" />
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="zip" className="flex items-center justify-start gap-2" ><span> <Favorite size={15} /> </span>Codigo Zip</label>
              <div className="border-[2px] border-[#D&DADD] w-[300px] h-[40px] py-[5px] rounded-[6px]">
                <input type="text" id="zip" className="px-[10px] bg-inherit border-none w-full h-full focus:outline-none" placeholder="Placeholder" />
              </div>
            </div>

          </fieldset>

          <fieldset className="flex justify-end mb-[10px]">
            <button className="bg-[#0A0B0D] text-white w-[200px] h-[48px] rounded-[5px] text-[19px]">Guardar</button>
          </fieldset>
        </form>

        <div className="mt-[40px] flex w-[300px] h-[72px] items-center justify-evenly border-[1px] border-[#D&DADD] rounded-[6px]">
          <input type="checkbox" />
          <p className="w-[225px]">Guardar mi informacion para mi proxima compra</p>
        </div>
      </div>


      <hr className="mt-[10px]" />
    </details>
  );
}

export default DeliveryMethod;
