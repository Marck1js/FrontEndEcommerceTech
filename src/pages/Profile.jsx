import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Profile = () => {
  return (
    <div className="">
      <Header />
      <section className="h-[700px]  max-w-[1152px] mx-auto mt-[20px] flex justify-between gap-[20px]">
        <aside className="w-[200px] h-full flex flex-col items-center justify-evenly">
          <p className="dsds text-[24px] font-[400]">Mi Cuenta</p>
          <ul className="flex flex-col gap-[30px] w-[200px]">
            <li className="dsds rounded-[10px] text-white bg-[#2961EF] h-[40px] flex justify-start items-center pl-[10px] w-[180px] self-center">
              Perfil
            </li>
            <li className="dsds rounded-[10px] text-[#7C858E] h-[40px] flex justify-start items-center pl-[10px] w-[180px] self-center">
              Mis pedidos
            </li>
            <li className="dsds rounded-[10px] text-[#7C858E] h-[40px] flex justify-start items-center pl-[10px] w-[180px] self-center">
              Devoluciones
            </li>
            <li className="dsds rounded-[10px] text-[#7C858E] h-[40px] flex justify-start items-center pl-[10px] w-[180px] self-center">
              Guardados
            </li>
            <li className="dsds rounded-[10px] text-[#7C858E] h-[40px] flex justify-start items-center pl-[10px] w-[180px] self-center">
              Preferecias
            </li>
            <li className="dsds rounded-[10px] text-[#7C858E] h-[40px] flex justify-start items-center pl-[10px] w-[180px] self-center">
              Mi direccion
            </li>
          </ul>
          <button className="dsds rounded-[5px] text-[#2961EF] border-[#2961EF] border-[1px] px-[5px] py-[3px]">
            Cerrar Sesion
          </button>
        </aside>

        <main className="flex-1  pl-[50px] border-[1px]">
          <p className="dsds tracking-[1px]  h-[100px] text-[37px] flex items-center">
            Perfil
          </p>
          <hr />

          <div className="w-[80px] h-[80px] rounded-[50%] bg-blue-200 my-[30px] flex justify-center items-center text-[24px] tracking-[2px] font-[600]">
            {" "}
            JS
          </div>

          <section className="mb-[30px]">
            <div className="w-[500px] flex justify-between py-[10px]">
              <p className="text-[24px] font-[600]">Mis datos</p>
              <button className="text-[#2961EF] hover:text-[#2961EF70]">
                Editar
              </button>
            </div>
            <div className="w-[350px] flex justify-between py-[10px]">
              <p>Nombres</p>
              <p>Jhon Sben</p>
            </div>
            <div className="w-[350px] flex justify-between py-[10px]">
              <p>Apellidos</p>
              <p>Batista Locelso</p>
            </div>
            <div className="w-[350px] flex justify-between py-[10px]">
              <p>Sexo</p>
              <p>Hombre</p>
            </div>
          </section>

          <section className="">
            <div className="w-[500px] flex justify-between py-[10px]">
              <p className="text-[24px] font-[600]">Email</p>
              <button className="text-[#2961EF] hover:text-[#2961EF70]">
                Editar
              </button>
            </div>
            <div className="w-[350px] flex justify-between py-[10px]">
              <p>Nombre de usuario</p>
              <p>jhonsben</p>
            </div>
            <div className="w-[350px] flex justify-between py-[10px]">
              <p>Email</p>
              <p>locelso@ejemplo.com</p>
            </div>
            <div className="w-[350px] flex justify-between py-[10px]">
              <p>Contraseña</p>
              <p>********</p>
            </div>
          </section>
        </main>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;
