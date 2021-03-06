import React from 'react';
import Layout from '../components/Layout';
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Cliente from '../components/Cliente';
import Link from 'next/link';


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

const Index = () => {

    //Router de next
    const router = useRouter();

    //Consulta de Apollo
    const { data, loading, error } = useQuery(OBTENER_CLIENTES_USUARIO);
    // console.log(data)
    // console.log(loading)
    // console.log(error)

    if (loading) return 'Cargando...';

    //Si no hay información
    if (!data.obtenerClientesVendedor) {
        return router.push('/login');
       
    }


    return (
        <div>
            <Layout>
                <div>
                    <h1 className="text-2xl text-gray-800 font-light">Clientes</h1>
                    <Link href='/nuevocliente'>
                        <a className="bg-blue-800 py-2 px-5 mt-5 inline-block text-white uppercase font-bold rounded text-sm hover:bg-gray-800 mb-3 text-center w-full md:w-auto">
                            Nuevo Cliente</a>
                    </Link>
                </div>
                <div className="overflow-x-scroll">
                    <table className="table-auto shadoq-md mt-10 w-full w-lg">
                        <thead className="bg-gray-800">
                            <tr className="text-white">
                                <th className="w-1/5 py-2">Nombre</th>
                                <th className="w-1/5 py-2">Empresa</th>
                                <th className="w-1/5 py-2">Email</th>
                                <th className="w-1/5 py-2">Eliminar</th>
                                <th className="w-1/5 py-2">Editar</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {data.obtenerClientesVendedor.map(cliente => (
                                <Cliente
                                    key={cliente.id}
                                    cliente={cliente}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </Layout>
        </div>
    )
}

export default Index;
