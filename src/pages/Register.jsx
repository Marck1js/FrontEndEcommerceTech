import React, { useEffect, useRef, useState } from 'react'
import Google from '../svgComponents/Google'
import Linkedin from '../svgComponents/Linkedin'
import Facebook from '../svgComponents/Facebook'
import x from './Register.module.css';
import PopUpPrivacyPolicy from '../components/PopUpPrivacyPolicy';
import { BiHide, BiShowAlt } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

// Expresiones regulares
import { nombreRegex, apellidoRegex, emailRegex, passwordRegex } from '../helpers/regex';
// Sweet Alert 2
import Swal from 'sweetalert2';



const Register = () => {

    const nameRef = useRef(null);
    const apellidoRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);
    const [isAccept, setIsAccept] = useState(false);
    // Politicas de Privacidad
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
    // Terminos y condiciones
    const [showTermsAndConditions, setShowTermsAndConditions] = useState(false);
    // Boton al hacer click
    const [alreadySubmit, setAlreadySubmit] = useState(false);

    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });

    const handleChange = (e, field) => {
        const { name, value } = e.target
        if (field === 'nombre') {
            nombreRegex.test(value)
                ? nameRef.current.style.border = `2px solid #007700`
                : nameRef.current.style.border = `2px solid #770000`;
        }
        if (field === 'apellido') {
            apellidoRegex.test(value)
                ? apellidoRef.current.style.border = `2px solid #007700`
                : apellidoRef.current.style.border = `2px solid #770000`;
        }
        if (field === 'email') {
            emailRegex.test(value)
                ? emailRef.current.style.border = `2px solid #007700`
                : emailRef.current.style.border = `2px solid #770000`;
        }
        if (field === 'password') {
            passwordRegex.test(value)
                ? passwordRef.current.style.border = `2px solid #007700`
                : passwordRef.current.style.border = `2px solid #770000`;
        }

        setUser({
            ...user,
            [name]: value
        })

    };

    useEffect(() => {
        if (user.password.length < 1) {
            setShowPass(false)
            passwordRef.current.style.border = `2px solid #D9D9D9`

        }
        if (user.firstname.length < 1) {
            nameRef.current.style.border = `2px solid #D9D9D9`
        }
        if (user.lastname.length < 1) {
            apellidoRef.current.style.border = `2px solid #D9D9D9`
        }
        if (user.email.length < 1) {
            emailRef.current.style.border = `2px solid #D9D9D9`
        }

    }, [user]);


    const handleFetch = async (e) => {
        e.preventDefault();

        // Validaciones desde el front para la creacion de usuarios
        if (Object.values(user).includes('')) {
            Swal.fire({
                title: 'Campos Incompletos',
                text: 'Asegurese de completar los campos',
                icon: 'error',
                confirmButtonText: 'Entendido'
            });
            return;
        }

        if (!nombreRegex.test(user.firstname) || !apellidoRegex.test(user.lastname) || !emailRegex.test(user.email) || !passwordRegex.test(user.password)) {
            Swal.fire({
                title: 'Errores en algun campo',
                text: 'Asegurese de completar los campos adecuadamente',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            return;
        }
        if (!isAccept) {
            Swal.fire({
                title: 'Error!',
                text: 'Debe aceptar los terminos y condiciones',
                icon: 'error',
                confirmButtonText: 'Entendido'
            })
            return;
        }





        try {
        
        if (alreadySubmit === false) {

            setAlreadySubmit(true);
            console.log('Creando user')
            // Peticion POST
            const data = await fetch('http://localhost:8080/auth/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...user, username: `${user.firstname.split(' ')[0]} ${user.lastname.split(' ')[0]}` })
            }).then(e => e.json()).then(e => {
                Swal.fire({
                    title: 'Usuario Creado Exitosamente',
                    text: 'Confirme su usuario en la bandeja de entrada',
                    icon: 'success',
                    confirmButtonText: 'Ok!'
                }).then((result) => {
                    if(result.isConfirmed) {
                        navigate('/');
                    }
                })
            
            })
        }
    } catch (error) {
        Swal.fire({
            title: 'Algo ha ocurrido',
            text: 'Error con el servidor, intente mas tarde',
            icon: 'warning',
            confirmButtonText: 'Ok!'
        }).then(e => {
            if(e.isConfirmed){
                navigate('/')
            }
        })
    }
    }



    return (
        <div className="h-screen grid grid-cols-2">

            <div className={x.left_side}>
                <div className={x.logo}>
                    <span>logo</span>
                </div>

                <div className={x.wel}>
                    <p>Crear una cuenta</p>
                    {/* <h5>Registrate para comprar productos</h5> */}
                </div>

                <form onSubmit={(e) => handleFetch(e)} >
                    <div className={x.allMail}>
                        <p>Nombre(s)</p>
                        <div>
                            <div ref={nameRef} className={x.allMailInput}>
                                <input onChange={(e) => handleChange(e, 'nombre')} type='text' placeholder='Mark' value={user.firstname} name='firstname' />
                                <i></i>
                            </div>
                        </div>

                        <p>Apellidos</p>
                        <div>
                            <div ref={apellidoRef} className={x.allMailInput}>
                                <input onChange={(e) => handleChange(e, 'apellido')} type='text' placeholder='Jackson' value={user.lastname} name='lastname' />
                                <i></i>
                            </div>
                        </div>

                        <p>Email</p>
                        <div>
                            <div ref={emailRef} className={x.allMailInput}>
                                <input onChange={(e) => handleChange(e, 'email')} type='text' placeholder='email@example.com' value={user.email} name='email' />
                                <i></i>
                            </div>
                        </div>

                        <p>Contraseña</p>
                        <div>
                            <div ref={passwordRef} className={x.allMailInput}>
                                <input onChange={(e) => handleChange(e, 'password')} type={showPass ? 'text' : 'password'} placeholder='yourPassword.1234' value={user.password} name='password' />
                                <div className={x.show} onClick={() => setShowPass(!showPass)}>
                                    {
                                        user.password < 1 ?
                                            null :
                                            showPass ?
                                                <BiShowAlt size={25} /> :
                                                <BiHide size={25} />
                                    }
                                </div>
                            </div>
                        </div>

                        <div className={x.check}>
                            <div className={x.checkbox}><input value={isAccept} onChange={(e) => setIsAccept(e.target.checked)} type='checkbox' /></div>
                            <p>Acepto los <span onClick={() => setShowTermsAndConditions(true)}>terminos de servicio</span> y <span onClick={() => setShowPrivacyPolicy(true)}>politica de privacidad</span></p>
                        </div>

                        <button className={x.continuar}>Registrarme</button>
                    </div>
                </form>

                <div className={x.separador}>
                    <div></div>
                    <p className='select-none'>Ó</p>
                    <div></div>
                </div>

                <ul className={x.social}>
                    <li><Google /></li>
                    <li><Facebook /></li>
                    <li><Linkedin /></li>
                </ul>
                <p className={x.registro}>¿Ya tienes una cuenta? <span onClick={() => navigate('/login')}>Entrar</span></p>

            </div>

            <div className={x.right_side}>
                <p className={x.text}>Lorem Ipsum</p>

            </div>


            {
                showPrivacyPolicy ? <PopUpPrivacyPolicy setShow={setShowPrivacyPolicy} title='Politica de Privacidad' content='Esto es una prueba del componente de las politicas de privacidad' /> : null
            }

            {
                showTermsAndConditions ? <PopUpPrivacyPolicy setShow={setShowTermsAndConditions} title='Terminos y condiciones' content='Esto es una prueba del componente para los terminos y condiciones de la pagina web' /> : null
            }

        </div>
    )
}

export default Register
