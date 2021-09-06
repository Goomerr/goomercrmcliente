import React, { useState } from 'react'
import Layout from '../components/Layout';
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';


const NUEVO_CLIENTE = gql`
mutation nuevoCliente($nuevoClienteInput: ClienteInput) {
    nuevoCliente(input: $nuevoClienteInput) {
        telefono
        email
        empresa
        apellido
        nombre
        id
        }
  }
`;

const OBTENER_CLIENTES_USUARIO = gql`
    query obtenerClientesVendedor {
        obtenerClientesVendedor {
        id
        nombre
        apellido
        empresa
        email
        }
    }  
`;

const NuevoCliente = () => {

    //Routing de next
    const router = useRouter();

    //Mensajes de alerta
    const [mensaje, guardarMensaje] = useState(null);


    //useMutation para crear nuevos clientes
    const [nuevoCliente] = useMutation(NUEVO_CLIENTE, {
        //actualizar el cache de apollo para que los nuevos clientes aparezcan sin necesidad de recargar pagina
        update(cache, { data: { nuevoCliente } }) {
            //Obtener una copia del objeto de cache que se desea actualizar
            const { obtenerClientesVendedor } = cache.readQuery({ query: OBTENER_CLIENTES_USUARIO });
            //Reescribir el cache (el cache nunca se debe modificar solo reescribir)
            cache.writeQuery({
                query: OBTENER_CLIENTES_USUARIO,
                data: {
                    obtenerClientesVendedor: [...obtenerClientesVendedor, nuevoCliente]
                }
            })
        }
    });

    const formik = useFormik({
        initialValues: {
            nombre: '',
            apellido: '',
            empresa: '',
            email: '',
            telefono: '',
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required('El nombre es obligatorio'),
            apellido: Yup.string().required('El nombre es obligatorio'),
            empresa: Yup.string().required('El nombre es obligatorio'),
            email: Yup.string().email('Introduce un email valido')
                .required('El email es obligatorio')
        }),
        onSubmit: async valores => {
            // console.log(valores)
            const { nombre, apellido, email, empresa, telefono } = valores;
            try {
                const { data } = await nuevoCliente({
                    variables: {
                        nuevoClienteInput: {
                            telefono,
                            email,
                            empresa,
                            apellido,
                            nombre
                        }
                    }
                });
                //console.log(data.nuevoCliente);
                router.push('/');
            } catch (error) {
                console.log(error);
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
        <Layout>
            <h1 className="text-2xl text-gray-800 font-light">Nuevo Cliente</h1>
            {mensaje && mostrarMensaje()}
            <div className="flex justify-center mt-5">
                <div className="w-full max-w-lg">
                    <form
                        onSubmit={formik.handleSubmit}
                        className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                                Nombre
                            </label>
                            <input
                                className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                                id="nombre"
                                type="text"
                                placeholder="Nombre Cliente"
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
                                placeholder="Nombre Cliente"
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
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="empresa">
                                Empresa
                            </label>
                            <input
                                className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                                id="empresa"
                                type="text"
                                placeholder="Empresa"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.empresa}
                            />
                        </div>
                        {formik.touched.empresa && formik.errors.empresa ? (
                            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2">
                                <p className="font-bold">Error:</p>
                                <p>{formik.errors.empresa} </p>
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
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
                                Teléfono
                            </label>
                            <input
                                className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                                id="telefono"
                                type="tel"
                                placeholder="Teléfono"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.telefono}
                            />
                        </div>
                        {formik.touched.telefono && formik.errors.telefono ? (
                            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2">
                                <p className="font-bold">Error:</p>
                                <p>{formik.errors.telefono} </p>
                            </div>
                        ) : (
                            null
                        )}
                        <input
                            type="submit"
                            className="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900 cursor-pointer"
                            value="Nuevo Cliente"
                        />
                        <input
                            onClick={() => router.push('/')}
                            type="button"
                            className="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900 cursor-pointer"
                            value="Cancelar"
                        />
                    </form>

                </div>
            </div>
        </Layout>

    )
}

export default NuevoCliente;
