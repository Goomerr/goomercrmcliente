import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { gql, useQuery } from '@apollo/client';

const MEJORES_CLIENTES = gql`
query Query {
    mejoresClientes {
      total
      cliente {
        nombre
        apellido
        email
      }
    }
  }  
`;



const Mejoresclientes = () => {

    const { data, loading, error, startPolling, stopPolling } = useQuery(MEJORES_CLIENTES);

    useEffect(() => {
        startPolling(1000);
        return () => {
            stopPolling()
        }
    }, [startPolling, stopPolling])

    if (loading) return 'Cargando...';
    console.log(data);
    const { mejoresClientes } = data;
    console.log(mejoresClientes);
    const clientesGrafica = [];
    mejoresClientes.map((cliente, index) => {
        clientesGrafica[index] = {
            ...cliente.cliente[0],
            Total: cliente.total,
            nombre: cliente.cliente[0].nombre + ' ' + cliente.cliente[0].apellido
        }
    });

    return (
        <Layout>
            <h1 className="text-2xl text-gray-800 font-light">Mejores Clientes</h1>
            <ResponsiveContainer
            width={'99%'}
            height={550}
            >
                <BarChart
                    className="mt-10"
                    width={600}
                    height={400}
                    data={clientesGrafica}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="nombre" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Total" fill="#1E40AF" />
                </BarChart>
            </ResponsiveContainer>
        </Layout>
    )
}

export default Mejoresclientes;
