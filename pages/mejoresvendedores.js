import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { gql, useQuery } from '@apollo/client';

const MEJORES_VENDEDORES = gql`
query mejoresVendedores {
    mejoresVendedores {
      vendedor {
        nombre
        apellido
        email
      }
      total
    }
  }
`;

const Mejoresvendedores = () => {

    const { data, loading, error, startPolling, stopPolling } = useQuery(MEJORES_VENDEDORES);

    useEffect(() => {
        startPolling(1000);
        return () => {
            stopPolling()
        }
    }, [startPolling, stopPolling])

    if (loading) return 'Cargando...';
    console.log(data);
    const { mejoresVendedores } = data;
    console.log(mejoresVendedores);
    const vendedorGrafica = [];
    mejoresVendedores.map((vendedor, index) => {
        vendedorGrafica[index] = {
            ...vendedor.vendedor[0],
            Total: vendedor.total,
            nombre: vendedor.vendedor[0].nombre + ' ' + vendedor.vendedor[0].apellido

        }
    });
    //console.log(vendedorGrafica)
    return (
        <Layout>
            <h1 className="text-2xl text-gray-800 font-light">Mejores Vendedores</h1>
            <ResponsiveContainer
                width={'99%'}
                height={550}
            >
                <BarChart
                    className="mt-10"
                    width={600}
                    height={400}
                    data={vendedorGrafica}
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

    );
}

export default Mejoresvendedores
