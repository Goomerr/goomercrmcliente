import React, { useState } from 'react'
import Layout from '../components/Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';


const NUEVO_PRODUCTO = gql`
mutation nuevoProducto($nuevoProductoInput: ProductoInput) {
    nuevoProducto(input: $nuevoProductoInput) {
      nombre
      existencia
      precio
    }
  }
`;

const OBTENER_PRODUCTOS = gql`
query obtenerProductos {
    obtenerProductos {
      nombre
      existencia
      precio
      id
    }
  }
`;

const NuevoProducto = () => {

    //Routing de next
    const router = useRouter();

    //Mensajes de alerta
    const [mensaje, guardarMensaje] = useState(null);


    //useMutation para crear nuevos clientes
    const [nuevoProducto] = useMutation(NUEVO_PRODUCTO, {
        //actualizar el cache de apollo para que los nuevos clientes aparezcan sin necesidad de recargar pagina
        update(cache, { data: { nuevoProducto } }) {
            //Obtener una copia del objeto de cache que se desea actualizar
            const { obtenerProductos } = cache.readQuery({ query: OBTENER_PRODUCTOS });
            //Reescribir el cache (el cache nunca se debe modificar solo reescribir)
            cache.writeQuery({
                query: OBTENER_PRODUCTOS,
                data: {
                    obtenerProductos: [...obtenerProductos, nuevoProducto]
                }
            })
        }
    });

    const formik = useFormik({
        initialValues: {
            nombre: '',
            existencia: '',
            precio: ''
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required('El nombre es obligatorio'),
            existencia: Yup.number().required('Indica las Existencias')
                .positive('No se aceptan números negativos')
                .integer('No se aceptan decimales'),
            precio: Yup.number().required('Indica el precio')
                .positive('No se aceptan números negativos'),
        }),
        onSubmit: async valores => {
            //console.log(valores)
            const { nombre, existencia, precio } = valores;
            try {
                const { data } = await nuevoProducto({
                    variables: {
                        nuevoProductoInput: {
                            nombre,
                            existencia,
                            precio
                        }
                    }
                });
                //console.log(data.nuevoProducto);
                router.push('/productos');
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
                                placeholder="Nombre Producto"
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
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="existencia">
                                Existencias
                            </label>
                            <input
                                className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                                id="existencia"
                                type="number"
                                placeholder="Existencias"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.existencia}
                            />
                        </div>
                        {formik.touched.existencia && formik.errors.existencia ? (
                            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2">
                                <p className="font-bold">Error:</p>
                                <p>{formik.errors.existencia} </p>
                            </div>
                        ) : (
                            null
                        )}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">
                                Precio
                            </label>
                            <input
                                className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                                id="precio"
                                type="number"
                                placeholder="precio"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.precio}
                            />
                        </div>
                        {formik.touched.precio && formik.errors.precio ? (
                            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2">
                                <p className="font-bold">Error:</p>
                                <p>{formik.errors.precio} </p>
                            </div>
                        ) : (
                            null
                        )}
                        <input
                            type="submit"
                            className="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900 cursor-pointer"
                            value="Nuevo Producto"
                        />
                        <input
                            onClick={() => router.push('/productos')}
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

export default NuevoProducto;
