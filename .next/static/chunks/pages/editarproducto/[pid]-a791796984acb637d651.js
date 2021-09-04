(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[759],{8445:function(e,r,n){"use strict";n.d(r,{Z:function(){return x}});var s=n(5893),t=(n(7294),n(9008)),a=n(1664),i=n(1163),o=function(){var e=(0,i.useRouter)();return(0,s.jsxs)("aside",{className:"bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen sm:block  p-5",children:[(0,s.jsx)("div",{children:(0,s.jsx)("p",{className:"text-white text-2xl font-black",children:"CRM Clientes"})}),(0,s.jsxs)("nav",{className:"mt-5 list-none",children:[(0,s.jsx)("li",{className:"/"===e.pathname?"bg-blue-800 border-b-2 border-gray-200 p-2":"p-2",children:(0,s.jsx)(a.default,{href:"/",children:(0,s.jsx)("a",{className:"text-white block",children:"Clientes"})})}),(0,s.jsx)("li",{className:"/pedidos"===e.pathname?"bg-blue-800 border-b-2 border-gray-200 p-2":"p-2",children:(0,s.jsx)(a.default,{href:"/pedidos",children:(0,s.jsx)("a",{className:"text-white block",children:"Pedidos"})})}),(0,s.jsx)("li",{className:"/productos"===e.pathname?"bg-blue-800 border-b-2 border-gray-200 p-2":"p-2",children:(0,s.jsx)(a.default,{href:"/productos",children:(0,s.jsx)("a",{className:"text-white block",children:"Productos"})})})]}),(0,s.jsx)("div",{className:"sm:mt-10",children:(0,s.jsx)("p",{className:"text-white text-2xl font-black",children:"Gr\xe1ficas"})}),(0,s.jsxs)("nav",{className:"mt-5 list-none",children:[(0,s.jsx)("li",{className:"/mejoresvendedores"===e.pathname?"bg-blue-800 border-b-2 border-gray-200 p-2":"p-2",children:(0,s.jsx)(a.default,{href:"/mejoresvendedores",children:(0,s.jsx)("a",{className:"text-white block",children:"Mejores Vendedores"})})}),(0,s.jsx)("li",{className:"/mejoresclientes"===e.pathname?"bg-blue-800 border-b-2 border-gray-200 p-2":"p-2",children:(0,s.jsx)(a.default,{href:"/mejoresclientes",children:(0,s.jsx)("a",{className:"text-white block",children:"Mejores Clientes"})})})]})]})},l=n(168),c=n(5333),d=n(570);function u(){var e=(0,l.Z)(["\nquery obtenerUsuario {\n    obtenerUsuario {\n      nombre\n      apellido\n    }\n  }  \n"]);return u=function(){return e},e}var m=(0,c.Ps)(u()),h=function(){var e=(0,i.useRouter)(),r=(0,d.a)(m),n=r.data,t=r.loading;r.error;if(t)return"Cragando...";n||e.push("/login");var a=n.obtenerUsuario,o=a.nombre,l=a.apellido;return(0,s.jsxs)("div",{className:"sm:flex sm:justify-between mb-6",children:[(0,s.jsxs)("p",{className:"mr-2 mb-3 sm:mb-0",children:["Hola: ",o," ",l," "]}),(0,s.jsx)("button",{type:"button",className:"bg-blue-800 hover:bg-gray-800 font-bold uppercase text-xs rounded p-3 text-white shadow-md w-full sm:w-auto",onClick:function(){return localStorage.removeItem("token"),void e.push("/login")},children:"Cerrar Sesi\xf3n"})]})},x=function(e){var r=e.children,n=(0,i.useRouter)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.default,{children:[(0,s.jsx)("title",{children:"Goomer CRM Administracion de Clientes"}),(0,s.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css",integrity:"sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==",crossOrigin:"anonymous",referrerPolicy:"no-referrer"}),(0,s.jsx)("link",{href:"https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",rel:"stylesheet"})]}),"/login"===n.pathname||"/nuevacuenta"===n.pathname?(0,s.jsx)("div",{className:"bg-gray-800 min-h-screen flex flex-col justify-center",children:r}):(0,s.jsx)("div",{className:"bg-gray-200 min-h-screen",children:(0,s.jsxs)("div",{className:"block sm:flex ",children:[(0,s.jsx)(o,{}),(0,s.jsxs)("main",{className:" sm:w-2/3 xl:w-4/5 sm:min-h-screen p-5",children:[(0,s.jsx)(h,{}),(0,s.jsx)("div",{className:"grid",children:r})]})]})})]})}},675:function(e,r,n){"use strict";n.r(r);var s=n(5893),t=n(7757),a=n.n(t),i=n(5861),o=n(1013),l=n(168),c=(n(7294),n(8445)),d=n(1163),u=n(5333),m=n(570),h=n(5709),x=n(659),b=n(7561),p=n(6455),f=n.n(p);function j(){var e=(0,l.Z)(["\nmutation actualizarProducto($id: ID!, $input: ProductoInput) {\n    actualizarProducto(id: $id, input: $input) {\n      id\n      nombre\n      existencia\n      precio\n    }\n  }\n"]);return j=function(){return e},e}function g(){var e=(0,l.Z)(["\nquery obtenerProducto($id: ID!) {\n    obtenerProducto(id: $id) {\n      nombre\n      existencia\n      precio\n    }\n  }\n"]);return g=function(){return e},e}var v=(0,u.Ps)(g()),N=(0,u.Ps)(j());r.default=function(){var e=(0,d.useRouter)(),r=e.query.pid,n=(0,m.a)(v,{variables:{id:r}}),t=n.data,l=n.loading,u=(n.error,(0,h.D)(N,{})),p=(0,o.Z)(u,1)[0],j=b.object({nombre:b.string().required("El nombre es obligatorio"),existencia:b.string().required("Indica las Existencias"),precio:b.string().required("Indica el precio")});if(l)return"Cargando...";if(!t)return"Acci\xf3n no permitida";var g=t.obtenerProducto,y=function(){var n=(0,i.Z)(a().mark((function n(s){var t,i,o,l;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.nombre,i=s.existencia,o=s.precio,n.prev=1,n.next=4,p({variables:{id:r,input:{nombre:t,existencia:i,precio:o}}});case 4:l=n.sent,l.data,f().fire({position:"center",icon:"success",title:"El producto se actualizo correctamente",showConfirmButton:!1,timer:1500}),setTimeout((function(){e.push("/productos")}),1500),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}();return(0,s.jsxs)(c.Z,{children:[(0,s.jsx)("h1",{className:"text-2xl text-gray-800 font-light",children:"Editar Producto"}),(0,s.jsx)("div",{className:"flex justify-center mt-5",children:(0,s.jsx)("div",{className:"w-full max-w-lg",children:(0,s.jsx)(x.J9,{validationSchema:j,enableReinitialize:!0,initialValues:g,onSubmit:function(e){y(e)},children:function(r){return(0,s.jsxs)("form",{onSubmit:r.handleSubmit,className:"bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4",children:[(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"nombre",children:"Nombre"}),(0,s.jsx)("input",{className:" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring",id:"nombre",type:"text",placeholder:"Nombre Cliente",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.nombre})]}),r.touched.nombre&&r.errors.nombre?(0,s.jsxs)("div",{className:"my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2",children:[(0,s.jsx)("p",{className:"font-bold",children:"Error:"}),(0,s.jsxs)("p",{children:[r.errors.nombre," "]})]}):null,(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"existencia",children:"Existencias"}),(0,s.jsx)("input",{className:" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring",id:"existencia",type:"number",placeholder:"Nombre Cliente",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.existencia})]}),r.touched.existencia&&r.errors.existencia?(0,s.jsxs)("div",{className:"my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2",children:[(0,s.jsx)("p",{className:"font-bold",children:"Error:"}),(0,s.jsxs)("p",{children:[r.errors.existencia," "]})]}):null,(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"precio",children:"Precio"}),(0,s.jsx)("input",{className:" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring",id:"precio",type:"number",placeholder:"precio",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.precio})]}),r.touched.precio&&r.errors.precio?(0,s.jsxs)("div",{className:"my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2",children:[(0,s.jsx)("p",{className:"font-bold",children:"Error:"}),(0,s.jsxs)("p",{children:[r.errors.precio," "]})]}):null,(0,s.jsx)("input",{type:"submit",className:"bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900 cursor-pointer",value:"Guardar Cambios"}),(0,s.jsx)("input",{onClick:function(){e.push("/productos")},type:"button",className:"bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900 cursor-pointer",value:"Cancelar"})]})}})})})]})}},5362:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/editarproducto/[pid]",function(){return n(675)}])}},function(e){e.O(0,[26,524,969,455,774,888,179],(function(){return r=5362,e(e.s=r);var r}));var r=e.O();_N_E=r}]);