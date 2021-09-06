import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { useMutation, gql } from '@apollo/client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password'
YupPassword(Yup) // extend yup

const AUTENTICAR_USUARIO = gql`
mutation AutenticarUsuarioMutation($autenticarUsuarioInput: AutenticarInput) {
    autenticarUsuario(input: $autenticarUsuarioInput) {
      token
    }
  }
`;


//console.log(mostrar)
const mostrarPassword = () => {
    const tipo = document.querySelector('#password');
    let boton = document.querySelector('#btn');
    let boton1 = document.querySelector('#btn1');
    if (tipo.type == "password") {
        tipo.type = "text";
        boton.style.display = "block"
        boton1.style.display = "none"

    } else {
        tipo.type = "password";
        boton.style.display = "none"
        boton1.style.display = "block"

    }
}

const Login = () => {

    //State para los mensajes 
    const [mensaje, guardarMensaje] = useState(null);

    //Mutation para autenticar usuarios en apollo
    const [autenticarUsuario] = useMutation(AUTENTICAR_USUARIO);

    //Routing de next
    const router = useRouter();

    //Validación del formulario con yup y formik
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Introduce un email valido')
                .required('El email es obligatorio'),
            password: Yup.string()
                .required('El password es obligatorio')
        }),
        onSubmit: async valores => {

            // console.log(valores)
            const { email, password } = valores;
            try {
                const { data } = await autenticarUsuario({
                    variables: {
                        autenticarUsuarioInput: {
                            email,
                            password
                        }
                    }
                });
                //  console.log(data);
                //Usuario creado correctamente
                guardarMensaje('Sesión Iniciada Correctamente');

                // console.log(token)
                setTimeout(() => {
                    //Guardar el Token de autenticación en el storage
                    const token = data.autenticarUsuario.token;
                    localStorage.setItem('token', token);
                }, 1000)
  
                //Redirigir a pagina principal(clientes)
                setTimeout(() => {
                    guardarMensaje(null);
                    router.push('/');
                }, 1500);
            } catch (error) {
                console.log(error)
                guardarMensaje(error.message);
                // console.log(error);
                setTimeout(() => {
                    guardarMensaje(null);
                }, 3000);
            }
        }
    });

    //Mostrar mensajes de alerta
    const mostrarMensaje = () => {
        return (
            <div className="font-bold bg-white py-2 px-3 w-full my-3 max-w-lg rounded text-center mx-auto">
                <p>{mensaje} </p>
            </div>
        )
    }



    return (
        <>
            <Layout>
                {mensaje && mostrarMensaje()}
                <h1 className="text-center text-2xl text-white font-light">Login</h1>
                <div className="flex justify-center mt-5">
                    <div className="w-full md:max-w-lg">
                        <form
                            onSubmit={formik.handleSubmit}
                            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                                    id="email"
                                    type="email"
                                    placeholder="Email Usuario"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                            </div>
                            {formik.touched.email && formik.errors.email ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2">
                                    <p className="font-bold">Error:</p>
                                    <p>{formik.errors.email} </p>
                                </div>
                            ) : (
                                null
                            )}
                            <div className="mb-4 relative">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                                <button
                                    id="btn"
                                    type="button"
                                    className="cursor-pointer absolute right-0 rounded bottom-0 bg-gray-800 text-white text-xs"
                                    onClick={() => mostrarPassword()}
                                ><img src="eye.png" width="28" /></button>
                                <button
                                    id="btn1"
                                    type="button"
                                    className="cursor-pointer absolute right-0 rounded bottom-0 bg-gray-800 text-white text-xs"
                                    onClick={() => mostrarPassword()}
                                ><img src="eye-slash.png" width="28" /></button>
                            </div>
                            {formik.touched.password && formik.errors.password ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2">
                                    <p className="font-bold">Error:</p>
                                    <p>{formik.errors.password} </p>
                                </div>
                            ) : (
                                null
                            )}
                            <input
                                type="submit"
                                className="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900 cursor-pointer"
                                value="Iniciar Sesión"
                            />

                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Login
