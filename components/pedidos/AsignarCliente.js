import React, { useState, useEffect, useContext } from 'react';
import Select from 'react-select';
import { gql, useQuery } from '@apollo/client';
import PedidosContext from '../../context/pedidos/PedidosContext';

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

// const clientes = [
//     { id: 1, nombre: 'Jose' },
//     { id: 2, nombre: 'Pedro' },
//     { id: 3, nombre: 'Juan' }
// ]


const AsignarCliente = () => {
    const [cliente, setCliente] = useState([]);

    //Context de pedidos
    const pedidosContext = useContext(PedidosContext);
    const { agregarCliente } = pedidosContext;

    //Consultar la BD
    const { data, loading, error } = useQuery(OBTENER_CLIENTES_USUARIO);
    // console.log(data)
    // console.log(loading)
    // console.log(error)

    useEffect(() => {
      agregarCliente(cliente);
    }, [cliente])

    const seleccionarProducto = clientes => {
        setCliente(clientes);
    }

    //resultado de la consulta a la BD
    if (loading) return null;

    const { obtenerClientesVendedor } = data;

    return (
        <>
            <p className="mt-10 my-2 bg-white border-l-4 border-gray-700 p-2 text-sm font-bold">1.- Asigna un Cliente al Pedido</p>
            <Select
                options={obtenerClientesVendedor}
                onChange={opcion => seleccionarProducto(opcion)}
                getOptionValue={opciones => opciones.id}
                getOptionLabel={opciones => `${opciones.nombre} ${opciones.apellido}` }
                placeholder='Busque o Seleccione un Cliente'
                noOptionsMessage={() => 'No hay resultados'}
            />
        </>
    )
}

export default AsignarCliente;
