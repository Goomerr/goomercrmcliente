import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router'; 

const OBTENER_USUARIO = gql`
query obtenerUsuario {
    obtenerUsuario {
      nombre
      apellido
    }
  }  
`;


const Header = () => {

    //Router de next
    const router = useRouter();

    //Query de apollo
    const { data, loading, error } = useQuery(OBTENER_USUARIO);
    // console.log(data)
    // console.log(loading)
    // console.log(error)

    //Proteger el acceso a data hasta tener resultados para evitar error undefined
    if (loading) return 'Cragando...';

    //Si no hay información
    if(!data){
        router.push('/login');
    }

    const { nombre, apellido } = data.obtenerUsuario;

    const cerrarSesion = () => {
        localStorage.removeItem('token');
        router.push('/login');
    }
    return (
        <div className="sm:flex sm:justify-between mb-6">
            <p className="mr-2 mb-3 sm:mb-0" >Hola: {nombre} {apellido} </p>
            <button
                type="button"
                className="bg-blue-800 hover:bg-gray-800 font-bold uppercase text-xs rounded p-3 text-white shadow-md w-full sm:w-auto"
                onClick={() => cerrarSesion()}
            >Cerrar Sesión</button>
        </div>
    )
}

export default Header;
