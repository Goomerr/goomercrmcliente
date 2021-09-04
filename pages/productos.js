import React from 'react';
import Layout from '../components/Layout';
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Producto from '../components/Producto';
import Link from 'next/link';

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

const Productos = () => {

    //Router de next
    const router = useRouter();

    //Consulta de Apollo
    const { data, loading, error } = useQuery(OBTENER_PRODUCTOS);
    // console.log(data)
    // console.log(loading)
    // console.log(error)

    if (loading) return 'Cargando...';

    //Si no hay información
    if (!data.obtenerProductos) {
        router.push('/login');
    }

    return (
        <div>
            <Layout>
                <div>
                    <h1 className="text-2xl text-gray-800 font-light">Productos</h1>
                    <Link href='/nuevoproducto'>
                        <a className="w-full md:w-auto text-center bg-blue-800 py-2 px-5 mt-5 inline-block text-white uppercase font-bold rounded text-sm hover:bg-gray-800 mb-3">
                            Nuevo Producto</a>
                    </Link>
                </div>
                <div className="overflow-x-scroll">
                    <table className="table-auto shadoq-md mt-10 w-full w-lg">
                        <thead className="bg-gray-800">
                            <tr className="text-white">
                                <th className="w-1/5 py-2">Nombre</th>
                                <th className="w-1/5 py-2">Existencias</th>
                                <th className="w-1/5 py-2">Precio</th>
                                <th className="w-1/5 py-2">Eliminar</th>
                                <th className="w-1/5 py-2">Editar</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {data.obtenerProductos.map(producto => (
                                <Producto
                                    key={producto.id}
                                    producto={producto}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </Layout>
        </div>
    )
}

export default Productos
