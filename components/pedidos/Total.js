import React, {useContext} from 'react';
import PedidosContext from '../../context/pedidos/PedidosContext';

const Total = () => {

    //Context de pedidos
    const pedidosContext = useContext(PedidosContext);
    const { total } = pedidosContext;
   
    return (
        <div className="flex items-center mt-5 justify-between bg-white border-solid border-2 p-3 border-gray-100">
            <h2 className="text-gray-800 text-lg">Total a Pagar: </h2>
            <p className="font-bold"> {total} €</p>
        </div>
    )
}

export default Total
