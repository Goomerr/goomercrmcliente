import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/router';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password'
YupPassword(Yup) // extend yup

const NUEVA_CUENTA = gql`
mutation NuevoUsuarioMutation($nuevoUsuarioInput: UsuarioInput) {
    nuevoUsuario(input: $nuevoUsuarioInput) {
      nombre
      apellido
      email
    }
  }
`;

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


const mostrarConfirmar = () => {
    const tipo = document.querySelector('#confirmar_password');
    let boton2 = document.querySelector('#btn2');
    let boton3 = document.querySelector('#btn3');
    if (tipo.type == "password") {
        tipo.type = "text";
        boton2.style.display = "block"
        boton3.style.display = "none"

    } else {
        tipo.type = "password";
        boton2.style.display = "none"
        boton3.style.display = "block"

    }
}
const NuevaCuenta = () => {

    //Routing de next
    const router = useRouter();

    //State para los mensajes 
    const [mensaje, guardarMensaje] = useState(null);

    //Mutation para crear nuevos usuarios
    const [nuevoUsuario] = useMutation(NUEVA_CUENTA);

    //Validación del formulario con yup y formik
    const formik = useFormik({
        initialValues: {
            nombre: '',
            apellido: '',
            email: '',
            password: '',
            confirmar_password: ''
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                .required('El nombre es obligatorio'),
            apellido: Yup.string()
                .required('El apellido es obligatorio'),
            email: Yup.string().email('Introduce un email valido')
                .required('El email es obligatorio'),
            password: Yup.string()
                .required('El password es obligatorio, debe contener al menos 8 caracteres, una letra mayúscula, una minúscula y un carácter especial')
                .min(8, 'El passwor debe ser de un mínimo de 8 caracteres')
                .minUppercase(1, 'Debe contener al menos una letra mayúscula')
                .minLowercase(1, 'Debe contener al menos una letra minúscula')
                .minSymbols(1, 'Debe contener al menos una carácter especial '),
            confirmar_password: Yup.string()
                .required('Confirme el password')

        }),
        onSubmit: async valores => {
            // console.log('Enviando...')
            // console.log(valores)
            const { nombre, apellido, email, password } = valores;
            try {
                const { data } = await nuevoUsuario({
                    variables: {
                        nuevoUsuarioInput: {
                            nombre,
                            apellido,
                            email,
                            password
                        }
                    }
                });
                console.log(data);
                //Usuario creado correctamente
                guardarMensaje(`El Usuario: ${data.nuevoUsuario.nombre} ${data.nuevoUsuario.apellido}, Se Creo Correctamente`);
                setTimeout(() => {
                    guardarMensaje(null);
                    //Redirigir a iniciar sesión
                    router.push('/login')
                }, 3000);


            } catch (error) {
                guardarMensaje(error.message);
                // console.log(error);
                setTimeout(() => {
                    guardarMensaje(null);
                }, 3000);
            }
        }
    });

    //if (loading) return 'Cargando...';
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
                <h1 className="text-center text-2xl text-white font-light">Nueva Cuenta</h1>
                <div className="flex justify-center mt-5">
                    <div className="w-full sm:max-w-lg">
                        <form
                            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
                            onSubmit={formik.handleSubmit}
                        >
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                                    Nombre
                                </label>
                                <input
                                    className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                                    id="nombre"
                                    type="text"
                                    placeholder="Nombre Usuario"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.nombre}
                                />
                            </div>
                            {formik.touched.nombre && formik.errors.nombre ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2">
                                    <p className="font-bold">Error:</p>
                                    <p>{formik.errors.nombre} </p>
                                </div>
                            ) : (
                                null
                            )}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
                                    Apellido
                                </label>
                                <input
                                    className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                                    id="apellido"
                                    type="text"
                                    placeholder="Apellido Usuario"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.apellido}
                                />
                            </div>
                            {formik.touched.apellido && formik.errors.apellido ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2">
                                    <p className="font-bold">Error:</p>
                                    <p>{formik.errors.apellido} </p>
                                </div>
                            ) : (
                                null
                            )}
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
                            <div className="mb-4 relative ">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
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
                            <div className="mb-4 relative">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmar_password">
                                    Confirmar Password
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                                    id="confirmar_password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.confirmar_password}
                                />
                                <button
                                    id="btn2"
                                    type="button"
                                    className="cursor-pointer absolute right-0 rounded bottom-0 bg-gray-800 text-white text-xs"
                                    onClick={() => mostrarConfirmar()}
                                ><img src="eye.png" width="28" /></button>
                                <button
                                    id="btn3"
                                    type="button"
                                    className="cursor-pointer absolute right-0 rounded bottom-0 bg-gray-800 text-white text-xs"
                                    onClick={() => mostrarConfirmar()}
                                ><img src="eye-slash.png" width="28" /></button>
                            </div>
                            {formik.values.password !== formik.values.confirmar_password ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2">
                                    <p className="font-bold">Error:</p>
                                    <p>Los password no son iguales </p>
                                </div>
                            ) : (
                                null
                            )}
                            {formik.touched.confirmar_password && formik.errors.confirmar_password ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2">
                                    <p className="font-bold">Error:</p>
                                    <p>{formik.errors.confirmar_password} </p>
                                </div>
                            ) : (
                                null
                            )}
                            <input
                                type="submit"
                                className="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900 cursor-pointer"
                                value="Crear Cuenta"
                            />

                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default NuevaCuenta
