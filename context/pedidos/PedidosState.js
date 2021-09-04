import React, { useReducer } from 'react';
import PedidoContext from './PedidosContext';
import PedidosReducer from './PedidosReducer';
import {
    SELECCIONAR_CLIENTE,
    SELECCIONAR_PRODUCTO,
    CANTIDAD_PRODUCTOS,
    ACTUALIZAR_TOTAL
} from '../../types/index';


const PedidosState = ({ children }) => {

    //State de pedidos
    const initialSate = {
        cliente: {},
        productos: [],
        total: 0
    }

    const [state, dispatch] = useReducer(PedidosReducer, initialSate);

    //Modificar el cliente en el state
    const agregarCliente = cliente => {
        //console.log(cliente)
        dispatch({
            type: SELECCIONAR_CLIENTE,
            payload: cliente
        })
    }

    //Modificar el producto en el state
    const agregarProducto = productosSeleccionados => {
        //console.log(producto);
        //Agregar una variable nueva al arreglo de productos
        let nuevoState;
        if (state.productos.length > 0) {
            // tomar del segundo arreglo, una copia para asignarlo al primero
            nuevoState = productosSeleccionados.map(producto => {
                const nuevoObjeto = state.productos.find(productoState => productoState.id === producto.id);
                return { ...producto, ...nuevoObjeto }
            })
        } else {
            nuevoState = productosSeleccionados
        }

        dispatch({
            type: SELECCIONAR_PRODUCTO,
            payload: nuevoState
        })
    }

    //Modificar la cantidad de productos 
    const cantidadProductos = nuevoProducto => {
        dispatch({
            type: CANTIDAD_PRODUCTOS,
            payload: nuevoProducto
        })
    }

    const actualizarTotal = () => {
        dispatch({
            type: ACTUALIZAR_TOTAL
        })
    }

    return (
        <PedidoContext.Provider
            value={{
                cliente: state.cliente,
                productos: state.productos,
                total: state.total,
                agregarCliente,
                agregarProducto,
                cantidadProductos,
                actualizarTotal
            }}
        >
            {children}
        </PedidoContext.Provider>
    )
}

export default PedidosState;
