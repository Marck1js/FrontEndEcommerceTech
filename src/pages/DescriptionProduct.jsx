import React, { useState } from 'react'
import DiscountHeader from '../components/DiscountHeader'
import Header from '../components/Header'
import PreviewImg from '../components/PreviewImg';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Star from '../svgComponents/Star';
import Comments from '../svgComponents/Comments';
import { imagenProducto } from '../helpers/imagenes';
import Favorite from '../svgComponents/Favorite';
import Footer from '../components/Footer';
import Card from '../components/Card';
const DescriptionProduct = () => {
    const [imgMain, setImgMain] = useState(0);
    return (
        <>
            <DiscountHeader />
            <Header />

            <div className=' flex mt-2 justify-center items-center h-[auto] max-w-6xl my-0 mx-auto gap-4'>

                {/* LEFT SIDE */}
                <div className='flex flex-col self-start items-center my-[40px]' >
                    <div className='bg-gray-400 w-[400px] h-[330px] '>
                        <img src={imagenProducto[imgMain].img} className='w-full h-full block object-fill' />
                    </div>
                    <div className='flex gap-3 mt-2 items-center justify-center'>
                        <div className='h-[32px] w-[32px] flex items-center justify-center border-[2px] border-solid bottom-[#000] hover:scale-[1.1] cursor-pointer'>
                            <FiChevronLeft size={30} />
                        </div>
                        {
                            imagenProducto?.length > 0 && imagenProducto.map((item, index) => {
                                return (
                                    <button onClick={() => setImgMain(index)}>
                                        <PreviewImg key={index} image={item.img} />
                                    </button>
                                )
                            })
                        }
                        <div className='h-[32px] w-[32px] flex items-center justify-center border-[2px] border-solid bottom-[#000] hover:scale-[1.1] cursor-pointer'>
                            <FiChevronRight size={30} color='black' />
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div>
                    <div className=''>

                        <p className='text-[30px] dsds'>ASUS VivoBook 15 OLED K513 - Portátil delgado y ligero, pantalla OLED de 15.6, CPU Intel i5-1135G7, gráficos Intel Iris Xe, 12 GB de RAM, SSD PCIe de 512 GB, lector de huellas dactilares, Windows 10 Home, Indie Black, K513EA-AB54</p>
                        <div className='flex gap-3 my-[15px]'>
                            <Star width={'16px'} height={'16px'} />
                            <Star width={'16px'} height={'16px'} />
                            <Star width={'16px'} height={'16px'} />
                            <Star width={'16px'} height={'16px'} />
                            <Star width={'16px'} height={'16px'} />
                            <p>{'4.3 (209)'}</p>

                        </div>
                        <div className='mb-[40px]'>
                            <p className='text-[37px] dsds'>$795.27</p>
                        </div>
                    </div>

                    <hr className='h[1px] bg-[#E2E2E2] my-[20px]' />

                    <div className='flex flex-col h-[100px] justify-evenly my-[15px] '>
                        <p className='text-[19px] dsds'>Cantidad</p>
                        <div className='flex max-w-[90%] justify-between items-center'>
                            <div className='flex h-[40px] w-[150px] justify-between items-center border-[1px] border-[#D7DAD]'>
                                <div className='w-[40px] flex items-center justify-center h-full border-r-[1px] border-[#D7DAD]'>-</div>
                                <div className='w-[70px] flex items-center justify-center h-full'>0</div>
                                <div className='w-[40px] flex items-center justify-center h-full border-l-[1px] border-[#D7DAD]'>+</div>
                            </div>
                            <button className='bg-[#0A0B0D] text-white py-[16px] px-[40px] rounded-[5px]'>
                                {'<- Añadir al carrito ->'}
                            </button>
                            <div className='w-[40px] h-[40px] flex items-center justify-center rounded-[50%] border-[1px] border-[#D9D9D9] border-solid'>
                                <Favorite width={'25px'} height={'25px'} />
                            </div>
                        </div>
                    </div>

                    <hr className='h[1px] bg-[#E2E2E2] my-[20px]' />

                    <div className='w-[400px] h-[64px] flex flex-col justify-between '>
                        <div className='flex justify-start items-center gap-1'>
                            <div className='w-[30px] h-[30px]flex items-center justify-center'>
                                <Star width={'25px'} height={'25px'} />
                            </div>
                            <p className='capitalize'>compra protegida, compra 100% segura</p>
                        </div>
                        <div className='flex gap-2'>
                            <div className='w-[40px] h-[24px] bg-gray-200'></div>
                            <div className='w-[40px] h-[24px] bg-gray-200'></div>
                            <div className='w-[40px] h-[24px] bg-gray-200'></div>
                            <div className='w-[40px] h-[24px] bg-gray-200'></div>
                        </div>
                    </div>

                    <hr className='h[1px] bg-[#E2E2E2] my-[20px]' />

                    <div className=' w-[400px] h-[50px] flex gap-2'>
                        <div className='self-start'>
                            <Star width={'25px'} height={'25px'} />
                        </div>
                        <div className='h-full flex flex-col justify-between'>
                            <p>Consultenos al WhatsApp o comprar</p>
                            <p>Vía Callcenter  (03) 223-5321</p>
                        </div>

                    </div>

                    <hr className='h[1px] bg-[#E2E2E2] my-[20px]' />


                    <div className='w-[400px] h-[90px] flex flex-col  justify-between mb-[100px]'>
                        <p className='uppercase text-[19px] dsds leading-[28px]'>opciones de envio</p>
                        <div className='flex justify-between '>
                            <div className='w-[120px] flex flex-col items-center justify-evenly border-r-[1px] border-[#D9D9D9]'>
                                <p>Envio</p>
                                <p>Las 24 horas</p>
                            </div>
                            <div className='w-[160px] flex flex-col items-center justify-evenly '>
                                <p>Envio</p>
                                <p>Las 24 horas</p>
                            </div>
                            <div className='w-[120px] flex flex-col items-center justify-evenly border-l-[1px] border-[#D9D9D9]'>
                                <p>Envio</p>
                                <p>Las 24 horas</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <div className='max-w-6xl my-0 mx-auto'>
                <ul className='flex items-center gap-[64px] capitalize text-[gray]'>
                    <li>descripcion</li>
                    <li>detalle del producto</li>
                    <li>acerca de la marca</li>
                    <li>garantia</li>
                    <li  className='text-[black] border-b-[1px] border-solid border-[#000]'>reseñas (1500)</li>
                </ul>
                <hr className='h[1px] bg-[#E2E2E2] my-[10px]' />

                                    {/* RESEÑAS */}


                {/* <div className={`text-[19px] flex justify-between mt-[60px] capitalize tracking-[1px]`}>
                    <p>todas las reseñas</p>
                    <p>revision de evaluacion</p>
                </div>
                <hr className='h[1px] bg-[#E2E2E2] my-[10px]' /> */}

                        {/* Reseñas de los usuarios */}

                <div className='max-w-[75%]'>

                    <div className='flex flex-col'>

                        <div className='flex gap-[14px]'>
                            <div className='w-[300px] h-[80px] flex flex-col  justify-evenly'>

                                <label>Nombres</label>
                                <div className='h-[40px] border-solid border-[1px] border-[##7C858E] rounded-[6px]'>
                                    <input type='text' placeholder='Escribe tu texto' className='w-full h-full focus:outline-none bg-inherit border-none text-[18px] dsds px-[10px]' />
                                </div>
                            </div>

                            <div className='w-[300px] h-[80px] flex flex-col justify-evenly'>

                                <label>Apellidos</label>
                                <div className='h-[40px] border-solid border-[1px] border-[##7C858E] rounded-[6px]'>
                                    <input type='text' placeholder='Escribe tu texto' className='w-full h-full focus:outline-none bg-inherit border-none text-[18px] dsds px-[10px]' />
                                </div>
                            </div>


                        </div>


                        <div className='h-[130px] w-full border-[1px] border-solid border-[#d1d1d1] mt-[10px] rounded-[10px] overflow-hidden'>
                            <textarea placeholder='Escribe un mensaje' className='text-[20px] w-full h-full focus:outline-none bg-inherit resize-none mx-[10px] mt-[4px]' />
                        </div>

                        <button className='hover:scale-105 cursor-pointer w-[200px] h-[40px] bg-[#0A0B0D] text-white rounded-[6px] capitalize dsds flex justify-center items-center  mt-[20px]'>dejar reseñas</button>

                    </div>

                    <hr className='h[1px] bg-[#E2E2E2] mt-[40px] mb-[20px]' />

                    <div className=' flex justify-between gap-1 min-h-[140px]'>
                    <div className='w-[200px] h-[60px] flex gap-3 items-center ml-[5px]'>
                        <div className='w-[48px] h-[48px] rounded-[50%] bg-gray-100'></div>
                        <div className='flex flex-col items-center gap-1'>
                            <p>Nombre</p>
                            <div className='flex gap-2'>
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                            </div>
                        </div>
                    </div>

                    <div className='w-[700px] flex flex-col justify-between mx-[10px]'>
                    <p>The space afforded by desktop screens is perfect for product grids. Grids align with scanning and enable shoppers to compare multiple products quickly. They are especially effective for items that are easy to explain in pictures.</p>

                    <div className='flex justify-between mt-[10px]'>
                    <div className='flex items-center gap-5'>
                        <span className='flex gap-2 items-center'><Favorite size={25}/> 15</span>
                        <span className='flex gap-2 items-center'><Comments size={25}/> 15</span>
                    </div>
                    <p>18, Marzo 2023</p>
                    </div>
                    </div>
                    </div>

                    <hr className='h[1px] bg-[#E2E2E2] my-[20px]' />

                    <div className=' flex justify-between gap-1 min-h-[140px]'>
                    <div className='w-[200px] h-[60px] flex gap-3 items-center ml-[5px]'>
                        <div className='w-[48px] h-[48px] rounded-[50%] bg-gray-100'></div>
                        <div className='flex flex-col items-center gap-1'>
                            <p>Nombre</p>
                            <div className='flex gap-2'>
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                            </div>
                        </div>
                    </div>

                    <div className='w-[700px] flex flex-col justify-between mx-[10px]'>
                    <p>The space afforded by desktop screens is perfect for product grids. Grids align with scanning and enable shoppers to compare multiple products quickly. They are especially effective for items that are easy to explain in pictures.</p>

                    <div className='flex justify-between mt-[10px]'>
                    <div className='flex items-center gap-5'>
                        <span className='flex gap-2 items-center'><Favorite size={25}/> 15</span>
                        <span className='flex gap-2 items-center'><Comments size={25}/> 15</span>
                    </div>
                    <p>18, Marzo 2023</p>
                    </div>
                    </div>
                    </div>

                    <hr className='h[1px] bg-[#E2E2E2] my-[20px]' />
                    <div className=' flex justify-between gap-1 min-h-[140px]'>
                    <div className='w-[200px] h-[60px] flex gap-3 items-center ml-[5px]'>
                        <div className='w-[48px] h-[48px] rounded-[50%] bg-gray-100'></div>
                        <div className='flex flex-col items-center gap-1'>
                            <p>Nombre</p>
                            <div className='flex gap-2'>
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                            </div>
                        </div>
                    </div>

                    <div className='w-[700px] flex flex-col justify-between mx-[10px]'>
                    <p>The space afforded by desktop screens is perfect for product grids. Grids align with scanning and enable shoppers to compare multiple products quickly. They are especially effective for items that are easy to explain in pictures.</p>

                    <div className='flex justify-between mt-[10px]'>
                    <div className='flex items-center gap-5'>
                        <span className='flex gap-2 items-center'><Favorite size={25}/> 15</span>
                        <span className='flex gap-2 items-center'><Comments size={25}/> 15</span>
                    </div>
                    <p>18, Marzo 2023</p>
                    </div>
                    </div>
                    </div>

                    <hr className='h[1px] bg-[#E2E2E2] my-[20px]' />
                    <div className=' flex justify-between gap-1 min-h-[140px]'>
                    <div className='w-[200px] h-[60px] flex gap-3 items-center ml-[5px]'>
                        <div className='w-[48px] h-[48px] rounded-[50%] bg-gray-100'></div>
                        <div className='flex flex-col items-center gap-1'>
                            <p>Nombre</p>
                            <div className='flex gap-2'>
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                            </div>
                        </div>
                    </div>

                    <div className='w-[700px] flex flex-col justify-between mx-[10px]'>
                    <p>The space afforded by desktop screens is perfect for product grids. Grids align with scanning and enable shoppers to compare multiple products quickly. They are especially effective for items that are easy to explain in pictures.</p>

                    <div className='flex justify-between mt-[10px]'>
                    <div className='flex items-center gap-5'>
                        <span className='flex gap-2 items-center'><Favorite size={25}/> 15</span>
                        <span className='flex gap-2 items-center'><Comments size={25}/> 15</span>
                    </div>
                    <p>18, Marzo 2023</p>
                    </div>
                    </div>
                    </div>

                    <hr className='h[1px] bg-[#E2E2E2] my-[20px]' />
                    <div className=' flex justify-between gap-1 min-h-[140px]'>
                    <div className='w-[200px] h-[60px] flex gap-3 items-center ml-[5px]'>
                        <div className='w-[48px] h-[48px] rounded-[50%] bg-gray-100'></div>
                        <div className='flex flex-col items-center gap-1'>
                            <p>Nombre</p>
                            <div className='flex gap-2'>
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                            </div>
                        </div>
                    </div>

                    <div className='w-[700px] flex flex-col justify-between mx-[10px]'>
                    <p>The space afforded by desktop screens is perfect for product grids. Grids align with scanning and enable shoppers to compare multiple products quickly. They are especially effective for items that are easy to explain in pictures.</p>

                    <div className='flex justify-between mt-[10px]'>
                    <div className='flex items-center gap-5'>
                        <span className='flex gap-2 items-center'><Favorite size={25}/> 15</span>
                        <span className='flex gap-2 items-center'><Comments size={25}/> 15</span>
                    </div>
                    <p>18, Marzo 2023</p>
                    </div>
                    </div>
                    </div>

                    <hr className='h[1px] bg-[#E2E2E2] my-[20px]' />
                    <div className=' flex justify-between gap-1 min-h-[140px]'>
                    <div className='w-[200px] h-[60px] flex gap-3 items-center ml-[5px]'>
                        <div className='w-[48px] h-[48px] rounded-[50%] bg-gray-100'></div>
                        <div className='flex flex-col items-center gap-1'>
                            <p>Nombre</p>
                            <div className='flex gap-2'>
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                                <Star width={15} height={15} />
                            </div>
                        </div>
                    </div>

                    <div className='w-[700px] flex flex-col justify-between mx-[10px]'>
                    <p>The space afforded by desktop screens is perfect for product grids. Grids align with scanning and enable shoppers to compare multiple products quickly. They are especially effective for items that are easy to explain in pictures.</p>

                    <div className='flex justify-between mt-[10px]'>
                    <div className='flex items-center gap-5'>
                        <span className='flex gap-2 items-center'><Favorite size={25}/> 15</span>
                        <span className='flex gap-2 items-center'><Comments size={25}/> 15</span>
                    </div>
                    <p>18, Marzo 2023</p>
                    </div>
                    </div>
                    </div>

                    <hr className='h[1px] bg-[#E2E2E2] my-[20px]' />
                    
                </div>

                            {/* Descripcion del producto */}
                                                        
                <p className='text-[19px] dsds leading-[28px] text-[#0A0B0D]'>La vida es más brillante y clara con Zenbook 14X OLED, la computadora portátil delgada, liviana y compacta con una hermosa pantalla táctil 16:10 4K OLED HDR NanoEdge que le brinda los negros más profundos y los colores más vívidos. Desarrollado por la última generación de Intel de 11a generación® procesador Core™ y hasta NVIDIA® GeForce® Gráficos discretos MX450, Zenbook 14X OLED ofrece el máximo rendimiento con la tecnología ASUS Intelligent Performance. El 180 °de ingeniería de precisión. ErgoLift facilita compartir contenido y el innovador ASUS ScreenPad™ mejora su productividad sobre la marcha. Deje que Zenbook 14X OLED ilumine su trabajo o juego, en cualquier lugar.</p>
                <p className='text-[19px] dsds leading-[30px] text-[#0A0B0D] max-w-[50%] my-[20px]'>Pantalla OLED    HDR 4K 16:10
                    14" líder en el mundo
                    Resolución 4K UHD de 3840 x 2400, gama de colores 100% DCI-P3
                    Windows 10 Pro
                    Hasta 11va gen
                    Intel® Core™ i7 procesador
                    Hasta NVIDIA GeForce MX450 gráficos discretos
                    Rendimiento CPU hasta 40W con 70% Impulso de AIPT
                    SSD de alta velocidad hasta 1TB con 3500 MB / s de velocidad de lectura
                    16.9mm / 1.4kg delgada & ligera</p>
            </div>

            <div className='bg-[#F5F5F7] max-w-6xl my-0 mx-auto pb-[30px]'>
                <p className='text-[37px] dsds2 first-letter:capitalize'>lo mas destacado</p>
                <div className='flex justify-center gap-[30px]'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>


            <Footer />
        </>
    )
}

export default DescriptionProduct
