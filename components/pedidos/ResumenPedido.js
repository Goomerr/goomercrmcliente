import React, { useContext } from 'react'
import PedidosContext from '../../context/pedidos/PedidosContext';
import ProductoResumen from './ProductoResumen';

const ResumenPedido = () => {

    //Context de pedidos
    const pedidosContext = useContext(PedidosContext);
    const { productos } = pedidosContext;

   //console.log(productos)

    return (
        <>
            <p className="mt-4 my-2 bg-white border-l-4 border-gray-700 p-2 text-sm font-bold">3.- Resumen Pedido, Escoge la Cantidad de Cada Producto</p>
            {productos.length > 0 ? (
                <>
                    {productos.map(producto => (
                        <ProductoResumen
                            key={producto.id}
                            producto={producto}
                        />
                    ))}
                </>
            ) : (
                <p className="mt-5 text-sm font-bold">Aún no hay productos</p>
            )}
        </>
    )
}

export default ResumenPedido
