import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { gql, useQuery, useMutation } from '@apollo/client';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const OBTENER_CLIENTE = gql`
query obtenerCliente($id: ID) {
    obtenerCliente(id: $id) {
      nombre
      apellido
      empresa
      email
      telefono
    }
  } 
`;

const ACTUALIZAR_CLIENTE = gql`
mutation actualizarCliente($id: ID!, $input: ClienteInput) {
    actualizarCliente(id: $id, input: $input) {
      nombre
      apellido
      empresa
      email
      telefono
    }
  }
`;


const EditarCliente = () => {

    //obtener el ID actual
    const router = useRouter();
    const { query: { pid } } = router;
    //console.log(pid);
    const id = pid;
    //consultar para obtener el cliente a editar
    const { data, loading, error } = useQuery(OBTENER_CLIENTE, {
        variables: {
            id
        }
    });
    // console.log(data)
    // console.log(loading)
    // console.log(error)

    //Actualizar el cliente
    const [actualizarCliente] = useMutation(ACTUALIZAR_CLIENTE, {

    });

    const schemaValidacion = Yup.object({
        nombre: Yup.string().required('El nombre es obligatorio'),
        apellido: Yup.string().required('El nombre es obligatorio'),
        empresa: Yup.string().required('El nombre es obligatorio'),
        email: Yup.string().email('Introduce un email valido')
            .required('El email es obligatorio')
    });

    if (loading) return 'Cargando...';
    //console.log(data.obtenerCliente)

    const { obtenerCliente } = data;

    //Modificar el cliente en la BD
    const actualizarInfoCliente = async valores => {
        const { nombre, apellido, email, empresa, telefono } = valores;


        try {
            const { data } = await actualizarCliente({
                variables: {
                    id,
                    input: {
                        nombre,
                        apellido,
                        email,
                        empresa,
                        telefono
                    }
                }
            });
            console.log(data)

            //Mostrar la alerta
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El cliente se actualizo correctamente',
                showConfirmButton: false,
                timer: 1500
              })
            //redireccionar
            setTimeout(() => {
                router.push('/');
            }, 1500)

        } catch (error) {
            console.log(error);
        }
    }
    const cancelar = () => {
        router.push('/');
    }
    return (
        <Layout>
            <h1 className="text-2xl text-gray-800 font-light">Editar Cliente</h1>
            {/* {mensaje && mostrarMensaje()} */}
            <div className="flex justify-center mt-5">
                <div className="w-full max-w-lg">
                    <Formik
                        validationSchema={schemaValidacion}
                        enableReinitialize
                        initialValues={obtenerCliente}
                        onSubmit={(valores) => {
                            actualizarInfoCliente(valores)
                        }}
                    >
                        {props => {
                            // console.log(props);
                            return (


                                <form
                                    onSubmit={props.handleSubmit}
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
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            value={props.values.nombre}
                                        />
                                    </div>
                                    {props.touched.nombre && props.errors.nombre ? (
                                        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2">
                                            <p className="font-bold">Error:</p>
                                            <p>{props.errors.nombre} </p>
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
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            value={props.values.apellido}
                                        />
                                    </div>
                                    {props.touched.apellido && props.errors.apellido ? (
                                        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2">
                                            <p className="font-bold">Error:</p>
                                            <p>{props.errors.apellido} </p>
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
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            value={props.values.empresa}
                                        />
                                    </div>
                                    {props.touched.empresa && props.errors.empresa ? (
                                        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2">
                                            <p className="font-bold">Error:</p>
                                            <p>{props.errors.empresa} </p>
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
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            value={props.values.email}
                                        />
                                    </div>
                                    {props.touched.email && props.errors.email ? (
                                        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2">
                                            <p className="font-bold">Error:</p>
                                            <p>{props.errors.email} </p>
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
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            value={props.values.telefono}
                                        />
                                    </div>
                                    {props.touched.telefono && props.errors.telefono ? (
                                        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2">
                                            <p className="font-bold">Error:</p>
                                            <p>{props.errors.telefono} </p>
                                        </div>
                                    ) : (
                                        null
                                    )}
                                    <input
                                        type="submit"
                                        className="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900 cursor-pointer"
                                        value="Guardar Cambios"
                                    />
                                    <input
                                        onClick={() => cancelar()}
                                        type="button"
                                        className="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900 cursor-pointer"
                                        value="Cancelar"
                                    />
                                </form>
                            )
                        }}
                    </Formik>


                </div>
            </div>
        </Layout>

    )
}

export default EditarCliente;
