exports.id = 415;
exports.ids = [415];
exports.modules = {

/***/ 8445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/Sidebar.js






const Sidebar = () => {
  //Routing de next
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("aside", {
    className: "bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen sm:block  p-5",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-white text-2xl font-black",
        children: "CRM Clientes"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: "mt-5 list-none",
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        className: router.pathname === '/' ? "bg-blue-800 border-b-2 border-gray-200 p-2" : "p-2",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "text-white block",
            children: "Clientes"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: router.pathname === '/pedidos' ? "bg-blue-800 border-b-2 border-gray-200 p-2" : "p-2",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/pedidos",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "text-white block",
            children: "Pedidos"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: router.pathname === '/productos' ? "bg-blue-800 border-b-2 border-gray-200 p-2" : "p-2",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/productos",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "text-white block",
            children: "Productos"
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "sm:mt-10",
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-white text-2xl font-black",
        children: "Gr\xE1ficas"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: "mt-5 list-none",
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        className: router.pathname === '/mejoresvendedores' ? "bg-blue-800 border-b-2 border-gray-200 p-2" : "p-2",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/mejoresvendedores",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "text-white block",
            children: "Mejores Vendedores"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: router.pathname === '/mejoresclientes' ? "bg-blue-800 border-b-2 border-gray-200 p-2" : "p-2",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/mejoresclientes",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "text-white block",
            children: "Mejores Clientes"
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const components_Sidebar = (Sidebar);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
;// CONCATENATED MODULE: ./components/Header.js





const OBTENER_USUARIO = client_.gql`
query obtenerUsuario {
    obtenerUsuario {
      nombre
      apellido
    }
  }  
`;

const Header = () => {
  //Router de next
  const router = (0,router_.useRouter)(); //Query de apollo

  const {
    data,
    loading,
    error
  } = (0,client_.useQuery)(OBTENER_USUARIO); // console.log(data)
  // console.log(loading)
  // console.log(error)
  //Proteger el acceso a data hasta tener resultados para evitar error undefined

  if (loading) return 'Cragando...'; //Si no hay información

  if (!data) {
    router.push('/login');
  }

  const {
    nombre,
    apellido
  } = data.obtenerUsuario;

  const cerrarSesion = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "sm:flex sm:justify-between mb-6",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      className: "mr-2 mb-3 sm:mb-0",
      children: ["Hola: ", nombre, " ", apellido, " "]
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      type: "button",
      className: "bg-blue-800 hover:bg-gray-800 font-bold uppercase text-xs rounded p-3 text-white shadow-md w-full sm:w-auto",
      onClick: () => cerrarSesion(),
      children: "Cerrar Sesi\xF3n"
    })]
  });
};

/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: ./components/Layout.js









const Layout = ({
  children
}) => {
  //Routing de next
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Goomer CRM Administracion de Clientes"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css",
        integrity: "sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==",
        crossOrigin: "anonymous",
        referrerPolicy: "no-referrer"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
        rel: "stylesheet"
      })]
    }), router.pathname === '/login' || router.pathname === '/nuevacuenta' ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bg-gray-800 min-h-screen flex flex-col justify-center",
      children: children
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bg-gray-200 min-h-screen",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "block sm:flex ",
        children: [/*#__PURE__*/jsx_runtime_.jsx(components_Sidebar, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
          className: " sm:w-2/3 xl:w-4/5 sm:min-h-screen p-5",
          children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "grid",
            children: children
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const components_Layout = (Layout);

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;