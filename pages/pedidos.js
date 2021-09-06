import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';
import Pedido from '../components/pedidos/Pedido';

const OBTENER_PEDIDOS = gql`
query obtenerPedidosVendedor {
    obtenerPedidosVendedor {
      id
      pedido {
        id
        cantidad
        nombre
      }
      total
      cliente {
          id
          nombre
          apellido
          telefono
          email
      }
      vendedor
      estado
      fecha
    }
  } 
`;

const Pedidos = () => {

    const { data, loading, error } = useQuery(OBTENER_PEDIDOS);
    // console.log(data)
    // console.log(loading)
    // console.log(error)
    if (loading) return 'Cargando...';
    const { obtenerPedidosVendedor } = data
    return (
        <div>
            <Layout>
                <div className="order-first">
                    <h1 className="text-2xl text-gray-800 font-light">Pedidos</h1>
                    <Link href='/nuevopedido'>
                        <a className="text-center bg-blue-800 py-2 px-5 mt-5 inline-block text-white uppercase font-bold rounded text-sm hover:bg-gray-800 mb-3 w-full md:w-auto">
                            Nuevo Pedido</a>
                    </Link>
                </div>


                {obtenerPedidosVendedor.length === 0 ? (
                    <p className="mt-5 text-center text-lg">Aún no hay pedidos</p>
                ) : (
                    obtenerPedidosVendedor.map(pedido => (
                        <Pedido
                            key={pedido.id}
                            pedido={pedido}
                        />
                    ))
                )}
            </Layout>
        </div>
    )
}

export default Pedidos;
