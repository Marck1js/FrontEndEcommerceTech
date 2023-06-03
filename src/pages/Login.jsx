import React, { useState, useEffect } from "react";
import Google from "../svgComponents/Google";
import Apple from "../svgComponents/Apple";
import Facebook from "../svgComponents/Facebook2";
import { useNavigate } from "react-router-dom";
import x from "./Login.module.css";
import imagenLogo from "../assets/isotech_logo_nombre.png";
import loginwireframe from "../assets/login-wireframe.png";
import { BiHide, BiShowAlt } from "react-icons/bi";

const Login = () => {
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {
    if (user.password.length < 1) {
      setShowPass(false);
    }
  }, [user.password]);

  const handleFetch = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((e) => e.json())
      .then((e) => {
        localStorage.setItem("token", e.token);
      });
    setUser({ ...user, username: "", password: "" });
    navigate("/");
  };

  return (
    <div className="h-screen grid grid-cols-2">
      <div className={x.right_side}>
        <span>
          <img src={loginwireframe} alt="wireframe" />
        </span>
      </div>

      <section className="flex justify-center items-center">
        <div className={`${x.left_side}`}>
          <div className={`${x.logo}`}>
            <img
              onClick={() => navigate("/")}
              src={imagenLogo}
              alt="logo"
              color="black"
              className="h-[100px] w-[220px] cursor-pointer"
            />
          </div>

          <div className={x.wel}>
            <p>Bienvenido</p>
            <h5>Puede Iniciar Sesion</h5>
          </div>

          <form onSubmit={(e) => handleFetch(e)}>
            <div className={x.allMail}>
              <p>Email</p>
              <div>
                <div className={x.allMailInput}>
                  <input
                    onChange={(e) => handleChange(e)}
                    type="text"
                    placeholder="Escribe tu email"
                    value={user.username}
                    name="username"
                  />
                  <i></i>
                </div>
              </div>

              <p>Contraseña</p>
              <div>
                <div className={x.allMailInput}>
                  <input
                    onChange={(e) => handleChange(e)}
                    type={showPass ? "text" : "password"}
                    placeholder="Escribe tu contraseña"
                    value={user.password}
                    name="password"
                  />
                  <button
                    className={x.show}
                    onClick={() => setShowPass(!showPass)}
                  >
                    {user.password < 1 ? null : showPass ? (
                      <BiShowAlt size={25} />
                    ) : (
                      <BiHide size={25} />
                    )}
                  </button>
                </div>
              </div>

              <div className={x.check}>
                <div className={x.remember}>
                  <div className={x.checkbox}>
                    <input type="checkbox" />
                  </div>
                  <label htmlFor="">Recordar Contraseña</label>
                </div>
                <p>¿Olvidaste la contraseña?</p>
              </div>

              <button className={x.continuar}>Iniciar Sesion</button>
            </div>

            <div className={x.separador}>
              <div></div>
              <p>Ó</p>
              <div></div>
            </div>

            <ul className={x.social}>
              <li>
                <Google />
              </li>
              <li>
                <Facebook/>
              </li>
              <li>
                <Apple />
              </li>
            </ul>
            <p className={x.registro}>
              ¿No tienes una cuenta?{" "}
              <span onClick={() => navigate("/register")}>Registrame</span>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
