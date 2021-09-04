import React, { useContext, useState } from 'react';
import Layout from '../components/Layout';
import AsignarCliente from '../components/pedidos/AsignarCliente';
import AsignarProducto from '../components/pedidos/AsignarProducto';
import ResumenPedido from '../components/pedidos/ResumenPedido';
import Total from '../components/pedidos/Total';
import { useRouter } from 'next/router';
import { gql, useMutation } from '@apollo/client';
import Swal from 'sweetalert2';

//context de pedidos
import PedidoContext from '../context/pedidos/PedidosContext';

const NUEVO_PEDIDO = gql`
    mutation nuevoPedido($input: PedidoInput) {
        nuevoPedido(input: $input) {
          id
        }
    }
`;
const OBTENER_PEDIDOS_VENDEDOR = gql`
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

const NuevoPedido = () => {
    //Routing de next
    const router = useRouter();

    const [mensaje, setMensaje] = useState(null);

    //Utilizar el context y extraer sus valores
    const pedidoContext = useContext(PedidoContext);
    const { cliente, productos, total } = pedidoContext;
    //console.log(cliente)
    // console.log(productos)

    const { id } = cliente;

    //MUtation para crear un pedido
    const [nuevoPedido] = useMutation(NUEVO_PEDIDO, {
        update(cache, { data: { nuevoPedido } }) {
            //Obtener una copia del objeto de cache que queremos actualizar
            const { obtenerPedidosVendedor } = cache.readQuery({ query: OBTENER_PEDIDOS_VENDEDOR });

            //Reescribir el cache
            cache.writeQuery({
                query: OBTENER_PEDIDOS_VENDEDOR,
                data: {
                    obtenerPedidosVendedor: [...obtenerPedidosVendedor, nuevoPedido]
                }
            })

        }
    });

    //Validar
    const validarPedido = () => {
        return !productos.every(producto => producto.cantidad > 0) || total === 0 || cliente.length === 0 ? " opacity-50 cursor-not-allowed " : "";
    }

    //Crear un nuevo pedido
    const crearNuevoPedido = async () => {

        //Eliminar lo no deseado de productos
        const pedido = productos.map(({ __typename, existencia, ...producto }) => producto)
        //console.log(pedido)
        try {
            const { data } = await nuevoPedido({
                variables: {
                    input: {
                        cliente: id,
                        total,
                        pedido
                    }

                }
            });
            //console.log(data)
            //Motrar alerta 
            Swal.fire(
                'Correcto',
                'El Pedido se registro correctamente',
                'success'
            )

            setTimeout(() => {
                //redireccionar
                router.push('/pedidos');
            }, 1500)



        } catch (error) {
            setMensaje(error.message);
            setTimeout(() => {
                setMensaje(null);
            }, 3000)
        }
    }

    //Mostrar mensajes de alerta
    const mostrarMensaje = () => {
        return (
            <div className="font-bold bg-white py-2 px-3 w-full my-3 max-w-lg rounded text-center mx-auto">
                <p>{mensaje} </p>
            </div>
        )
    }

    return (
        <Layout>
            <h1 className="text-2xl text-gray-800 font-light">Nuevo Pedido</h1>
            {mensaje && mostrarMensaje()}
            <div className="flex justify-center mt-5">
                <div className="w-full max-w-lg">
                    <AsignarCliente />
                    <AsignarProducto />
                    <ResumenPedido />
                    <Total />
                    <button
                        type="button"
                        className={` bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold ${validarPedido()}`}
                        onClick={() => crearNuevoPedido()}
                    >Guardar Pedido </button>
                    <button
                        onClick={() => router.push('/pedidos')}
                        type="button"
                        className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold "
                    > cancelar </button>
                </div>

            </div>

        </Layout>
    )
}

export default NuevoPedido;
