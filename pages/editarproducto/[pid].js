import React from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { gql, useQuery, useMutation } from '@apollo/client';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const OBTENER_PRODUCTO = gql`
query obtenerProducto($id: ID!) {
    obtenerProducto(id: $id) {
      nombre
      existencia
      precio
    }
  }
`;

const ACTUALIZAR_PRODUCTO = gql`
mutation actualizarProducto($id: ID!, $input: ProductoInput) {
    actualizarProducto(id: $id, input: $input) {
      id
      nombre
      existencia
      precio
    }
  }
`;

const EditarProducto = () => {

    //obtener el ID actual
    const router = useRouter();
    const { query: { pid } } = router;
    //console.log(pid);
    const id = pid;
    //consultar para obtener el cliente a editar
    const { data, loading, error } = useQuery(OBTENER_PRODUCTO, {
        variables: {
            id
        }
    });
    // console.log(data)
    // console.log(loading)
    // console.log(error)

    //Actualizar el Producto
    const [actualizarProducto] = useMutation(ACTUALIZAR_PRODUCTO, {

    });

    const schemaValidacion = Yup.object({
        nombre: Yup.string().required('El nombre es obligatorio'),
        existencia: Yup.string().required('Indica las Existencias'),
        precio: Yup.string().required('Indica el precio')
    });

    if (loading) return 'Cargando...';
    //console.log(data.obtenerProducto)
    if (!data) {
        return 'Acción no permitida';
    }

    const { obtenerProducto } = data;

    //Modificar el cliente en la BD
    const actualizarInfoProducto = async valores => {
        const { nombre, existencia, precio } = valores;


        try {
            const { data } = await actualizarProducto({
                variables: {
                    id,
                    input: {
                        nombre,
                        existencia,
                        precio
                    }
                }
            });
            //console.log(data)

            //Mostrar la alerta
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El producto se actualizo correctamente',
                showConfirmButton: false,
                timer: 1500
            })
            //redireccionar
            setTimeout(() => {
                router.push('/productos');
            }, 1500)

        } catch (error) {
            console.log(error);
        }
    }

    const cancelar = () => {

        router.push('/productos');
    }

    return (
        <Layout>
            <h1 className="text-2xl text-gray-800 font-light">Editar Producto</h1>

            <div className="flex justify-center mt-5">
                <div className="w-full max-w-lg">
                    <Formik
                        validationSchema={schemaValidacion}
                        enableReinitialize
                        initialValues={obtenerProducto}
                        onSubmit={(valores) => {
                            actualizarInfoProducto(valores)
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
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="existencia">
                                            Existencias
                                        </label>
                                        <input
                                            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                                            id="existencia"
                                            type="number"
                                            placeholder="Nombre Cliente"
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            value={props.values.existencia}
                                        />
                                    </div>
                                    {props.touched.existencia && props.errors.existencia ? (
                                        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2">
                                            <p className="font-bold">Error:</p>
                                            <p>{props.errors.existencia} </p>
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
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            value={props.values.precio}
                                        />
                                    </div>
                                    {props.touched.precio && props.errors.precio ? (
                                        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2">
                                            <p className="font-bold">Error:</p>
                                            <p>{props.errors.precio} </p>
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

export default EditarProducto;
