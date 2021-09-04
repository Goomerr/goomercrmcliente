import React, { useState, useEffect, useContext } from 'react';
import Select from 'react-select';
import { gql, useQuery } from '@apollo/client';
import PedidosContext from '../../context/pedidos/PedidosContext';

const OBTENER_PRODUCTOS_USUARIO = gql`
query obtenerProductos {
    obtenerProductos {
      id
      nombre
      existencia
      precio
    }
  }
`;

const AsignarProducto = () => {
    const [productos, setProductos] = useState([]);

    //Context de pedidos
    const pedidosContext = useContext(PedidosContext);
    const { agregarProducto } = pedidosContext;

    //Consultar la BD
    const { data, loading, error } = useQuery(OBTENER_PRODUCTOS_USUARIO);
    // console.log(data)
    // console.log(loading)
    // console.log(error)

    useEffect(() => {
        agregarProducto(productos);
    }, [productos])

    const seleccionarProducto = productos => {
        setProductos(productos);
    }

    //resultado de la consulta a la BD
    if (loading) return null;

    const { obtenerProductos } = data;

    return (
        <>
            <p className="mt-4 my-2 bg-white border-l-4 border-gray-700 p-2 text-sm font-bold">2.- Asigna un Producto al Pedido</p>
            <Select
                isMulti={true}
                options={obtenerProductos}
                onChange={opcion => seleccionarProducto(opcion)}
                getOptionValue={opciones => opciones.id}
                getOptionLabel={opciones => `${opciones.nombre} - ${opciones.existencia} Disponibles`}
                placeholder='Busque o Seleccione un Producto'
                noOptionsMessage={() => 'No hay resultados'}
            />
        </>
    )
}

export default AsignarProducto;