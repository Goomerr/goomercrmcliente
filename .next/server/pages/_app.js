"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PedidoContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PedidoContext);

/***/ }),

/***/ 230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
;// CONCATENATED MODULE: external "node-fetch"
const external_node_fetch_namespaceObject = require("node-fetch");
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_namespaceObject);
;// CONCATENATED MODULE: external "apollo-link-context"
const external_apollo_link_context_namespaceObject = require("apollo-link-context");
;// CONCATENATED MODULE: ./config/apollo.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const httpLink = (0,client_.createHttpLink)({
  uri: 'https://safe-atoll-98733.herokuapp.com/',
  fetch: (external_node_fetch_default())
});
const authLink = (0,external_apollo_link_context_namespaceObject.setContext)((_, {
  headers
}) => {
  //Leer el token almacenado en el storage
  const token = localStorage.getItem('token'); //console.log(token)

  return {
    headers: _objectSpread(_objectSpread({}, headers), {}, {
      authorization: token ? `Bearer ${token}` : ''
    })
  };
});
const client = new client_.ApolloClient({
  connectToDevTools: true,
  cache: new client_.InMemoryCache(),
  link: authLink.concat(httpLink)
});
/* harmony default export */ const apollo = (client);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./context/pedidos/PedidosContext.js
var PedidosContext = __webpack_require__(5502);
;// CONCATENATED MODULE: ./types/index.js
const SELECCIONAR_CLIENTE = 'SELECCIONAR_CLIENTE';
const SELECCIONAR_PRODUCTO = 'SELECCIONAR_PRODUCTO';
const CANTIDAD_PRODUCTOS = 'CANTIDAD_PRODUCTOS';
const ACTUALIZAR_TOTAL = 'ACTUALIZAR_TOTAL';
;// CONCATENATED MODULE: ./context/pedidos/PedidosReducer.js
function PedidosReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function PedidosReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PedidosReducer_ownKeys(Object(source), true).forEach(function (key) { PedidosReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PedidosReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PedidosReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const PedidosReducer = ((state, action) => {
  switch (action.type) {
    case SELECCIONAR_CLIENTE:
      return PedidosReducer_objectSpread(PedidosReducer_objectSpread({}, state), {}, {
        cliente: action.payload
      });

    case SELECCIONAR_PRODUCTO:
      return PedidosReducer_objectSpread(PedidosReducer_objectSpread({}, state), {}, {
        productos: action.payload
      });

    case CANTIDAD_PRODUCTOS:
      return PedidosReducer_objectSpread(PedidosReducer_objectSpread({}, state), {}, {
        productos: state.productos.map(producto => producto.id === action.payload.id ? producto = action.payload : producto)
      });

    case ACTUALIZAR_TOTAL:
      return PedidosReducer_objectSpread(PedidosReducer_objectSpread({}, state), {}, {
        //Calcular el total 
        total: state.productos.reduce((nuevoTotal, articulo) => nuevoTotal += articulo.precio * articulo.cantidad, 0)
      });

    default:
      return state;
  }
});
;// CONCATENATED MODULE: ./context/pedidos/PedidosState.js


function PedidosState_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function PedidosState_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PedidosState_ownKeys(Object(source), true).forEach(function (key) { PedidosState_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PedidosState_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PedidosState_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const PedidosState = ({
  children
}) => {
  //State de pedidos
  const initialSate = {
    cliente: {},
    productos: [],
    total: 0
  };
  const {
    0: state,
    1: dispatch
  } = (0,external_react_.useReducer)(PedidosReducer, initialSate); //Modificar el cliente en el state

  const agregarCliente = cliente => {
    //console.log(cliente)
    dispatch({
      type: SELECCIONAR_CLIENTE,
      payload: cliente
    });
  }; //Modificar el producto en el state


  const agregarProducto = productosSeleccionados => {
    //console.log(producto);
    //Agregar una variable nueva al arreglo de productos
    let nuevoState;

    if (state.productos.length > 0) {
      // tomar del segundo arreglo, una copia para asignarlo al primero
      nuevoState = productosSeleccionados.map(producto => {
        const nuevoObjeto = state.productos.find(productoState => productoState.id === producto.id);
        return PedidosState_objectSpread(PedidosState_objectSpread({}, producto), nuevoObjeto);
      });
    } else {
      nuevoState = productosSeleccionados;
    }

    dispatch({
      type: SELECCIONAR_PRODUCTO,
      payload: nuevoState
    });
  }; //Modificar la cantidad de productos 


  const cantidadProductos = nuevoProducto => {
    dispatch({
      type: CANTIDAD_PRODUCTOS,
      payload: nuevoProducto
    });
  };

  const actualizarTotal = () => {
    dispatch({
      type: ACTUALIZAR_TOTAL
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx(PedidosContext/* default.Provider */.Z.Provider, {
    value: {
      cliente: state.cliente,
      productos: state.productos,
      total: state.total,
      agregarCliente,
      agregarProducto,
      cantidadProductos,
      actualizarTotal
    },
    children: children
  });
};

/* harmony default export */ const pedidos_PedidosState = (PedidosState);
;// CONCATENATED MODULE: ./pages/_app.js


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(client_.ApolloProvider, {
    client: apollo,
    children: /*#__PURE__*/jsx_runtime_.jsx(pedidos_PedidosState, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 8074:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(230));
module.exports = __webpack_exports__;

})();