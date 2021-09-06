import React, { useContext, useState, useEffect } from 'react';
import PedidosContext from '../../context/pedidos/PedidosContext';

const ProductoResumen = ({ producto }) => {

    //Context de pedidos
    const pedidosContext = useContext(PedidosContext);
    const { cantidadProductos, actualizarTotal } = pedidosContext;

    const [cantidad, setCantidad] = useState(0);

    useEffect(() => {
        actualizarCantidad();
        actualizarTotal();
    }, [cantidad]);

   const actualizarCantidad = () => {
        const nuevoProducto = { ...producto, cantidad: Number(cantidad) }
        cantidadProductos(nuevoProducto);
    }

    const { nombre, precio } = producto;

    return (
        <div className="md:flex md:justify-between md:items-center mt-5">
            <div className="md:w-2/4 mb-2 md:mb-0">
                <p className="text-lg">{nombre} </p>
                <p className="font-bold">{precio} €</p>
            </div>
            <input
                className=" text-center font-bold shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                type="number"
                placeholder="Cantidad"
                min="1"
                value={cantidad}
                onChange={e => setCantidad(e.target.value)}
            />
        </div>
    )
}

export default ProductoResumen;
