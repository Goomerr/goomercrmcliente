(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{8445:function(e,t,s){"use strict";s.d(t,{Z:function(){return p}});var n=s(5893),r=(s(7294),s(9008)),a=s(1664),i=s(1163),l=function(){var e=(0,i.useRouter)();return(0,n.jsxs)("aside",{className:"bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen sm:block  p-5",children:[(0,n.jsx)("div",{children:(0,n.jsx)("p",{className:"text-white text-2xl font-black",children:"CRM Clientes"})}),(0,n.jsxs)("nav",{className:"mt-5 list-none",children:[(0,n.jsx)("li",{className:"/"===e.pathname?"bg-blue-800 border-b-2 border-gray-200 p-2":"p-2",children:(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{className:"text-white block",children:"Clientes"})})}),(0,n.jsx)("li",{className:"/pedidos"===e.pathname?"bg-blue-800 border-b-2 border-gray-200 p-2":"p-2",children:(0,n.jsx)(a.default,{href:"/pedidos",children:(0,n.jsx)("a",{className:"text-white block",children:"Pedidos"})})}),(0,n.jsx)("li",{className:"/productos"===e.pathname?"bg-blue-800 border-b-2 border-gray-200 p-2":"p-2",children:(0,n.jsx)(a.default,{href:"/productos",children:(0,n.jsx)("a",{className:"text-white block",children:"Productos"})})})]}),(0,n.jsx)("div",{className:"sm:mt-10",children:(0,n.jsx)("p",{className:"text-white text-2xl font-black",children:"Gr\xe1ficas"})}),(0,n.jsxs)("nav",{className:"mt-5 list-none",children:[(0,n.jsx)("li",{className:"/mejoresvendedores"===e.pathname?"bg-blue-800 border-b-2 border-gray-200 p-2":"p-2",children:(0,n.jsx)(a.default,{href:"/mejoresvendedores",children:(0,n.jsx)("a",{className:"text-white block",children:"Mejores Vendedores"})})}),(0,n.jsx)("li",{className:"/mejoresclientes"===e.pathname?"bg-blue-800 border-b-2 border-gray-200 p-2":"p-2",children:(0,n.jsx)(a.default,{href:"/mejoresclientes",children:(0,n.jsx)("a",{className:"text-white block",children:"Mejores Clientes"})})})]})]})},o=s(168),c=s(5333),d=s(570);function u(){var e=(0,o.Z)(["\nquery obtenerUsuario {\n    obtenerUsuario {\n      nombre\n      apellido\n    }\n  }  \n"]);return u=function(){return e},e}var m=(0,c.Ps)(u()),h=function(){var e=(0,i.useRouter)(),t=(0,d.a)(m),s=t.data,r=t.loading;t.error;if(r)return"Cragando...";s||e.push("/login");var a=s.obtenerUsuario,l=a.nombre,o=a.apellido;return(0,n.jsxs)("div",{className:"sm:flex sm:justify-between mb-6",children:[(0,n.jsxs)("p",{className:"mr-2 mb-3 sm:mb-0",children:["Hola: ",l," ",o," "]}),(0,n.jsx)("button",{type:"button",className:"bg-blue-800 hover:bg-gray-800 font-bold uppercase text-xs rounded p-3 text-white shadow-md w-full sm:w-auto",onClick:function(){return localStorage.removeItem("token"),void e.push("/login")},children:"Cerrar Sesi\xf3n"})]})},p=function(e){var t=e.children,s=(0,i.useRouter)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.default,{children:[(0,n.jsx)("title",{children:"Goomer CRM Administracion de Clientes"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css",integrity:"sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==",crossOrigin:"anonymous",referrerPolicy:"no-referrer"}),(0,n.jsx)("link",{href:"https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",rel:"stylesheet"})]}),"/login"===s.pathname||"/nuevacuenta"===s.pathname?(0,n.jsx)("div",{className:"bg-gray-800 min-h-screen flex flex-col justify-center",children:t}):(0,n.jsx)("div",{className:"bg-gray-200 min-h-screen",children:(0,n.jsxs)("div",{className:"block sm:flex ",children:[(0,n.jsx)(l,{}),(0,n.jsxs)("main",{className:" sm:w-2/3 xl:w-4/5 sm:min-h-screen p-5",children:[(0,n.jsx)(h,{}),(0,n.jsx)("div",{className:"grid",children:t})]})]})})]})}},1162:function(e,t,s){"use strict";s.r(t);var n=s(5893),r=s(7757),a=s.n(r),i=s(5861),l=s(1013),o=s(168),c=s(7294),d=s(8445),u=s(1163),m=s(5333),h=s(5709),p=s(659),x=s(7561),b=s(9620);function g(){var e=(0,o.Z)(["\nmutation AutenticarUsuarioMutation($autenticarUsuarioInput: AutenticarInput) {\n    autenticarUsuario(input: $autenticarUsuarioInput) {\n      token\n    }\n  }\n"]);return g=function(){return e},e}s.n(b)()(x);var f=(0,m.Ps)(g()),j=function(){var e=document.querySelector("#password"),t=document.querySelector("#btn"),s=document.querySelector("#btn1");"password"==e.type?(e.type="text",t.style.display="block",s.style.display="none"):(e.type="password",t.style.display="none",s.style.display="block")};t.default=function(){var e=(0,c.useState)(null),t=e[0],s=e[1],r=(0,h.D)(f),o=(0,l.Z)(r,1)[0],m=(0,u.useRouter)(),b=(0,p.TA)({initialValues:{email:"",password:""},validationSchema:x.object({email:x.string().email("Introduce un email valido").required("El email es obligatorio"),password:x.string().required("El password es obligatorio")}),onSubmit:function(){var e=(0,i.Z)(a().mark((function e(t){var n,r,i,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,r=t.password,e.prev=1,e.next=4,o({variables:{autenticarUsuarioInput:{email:n,password:r}}});case 4:i=e.sent,l=i.data,s("Sesi\xf3n Iniciada Correctamente"),setTimeout((function(){var e=l.autenticarUsuario.token;localStorage.setItem("token",e)}),1e3),setTimeout((function(){s(null),m.push("/")}),1500),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),s(e.t0.message),setTimeout((function(){s(null)}),3e3);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()});return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(d.Z,{children:[t&&(0,n.jsx)("div",{className:"font-bold bg-white py-2 px-3 w-full my-3 max-w-lg rounded text-center mx-auto",children:(0,n.jsxs)("p",{children:[t," "]})}),(0,n.jsx)("h1",{className:"text-center text-2xl text-white font-light",children:"Login"}),(0,n.jsx)("div",{className:"flex justify-center mt-5",children:(0,n.jsx)("div",{className:"w-full md:max-w-lg",children:(0,n.jsxs)("form",{onSubmit:b.handleSubmit,className:"bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4",children:[(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),(0,n.jsx)("input",{className:" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring",id:"email",type:"email",placeholder:"Email Usuario",onChange:b.handleChange,onBlur:b.handleBlur,value:b.values.email})]}),b.touched.email&&b.errors.email?(0,n.jsxs)("div",{className:"my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2",children:[(0,n.jsx)("p",{className:"font-bold",children:"Error:"}),(0,n.jsxs)("p",{children:[b.errors.email," "]})]}):null,(0,n.jsxs)("div",{className:"mb-4 relative",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password",children:"Password"}),(0,n.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring",id:"password",type:"password",placeholder:"Password",onChange:b.handleChange,onBlur:b.handleBlur,value:b.values.password}),(0,n.jsx)("button",{id:"btn",type:"button",className:"cursor-pointer absolute right-0 rounded bottom-0 bg-gray-800 text-white text-xs",onClick:function(){return j()},children:(0,n.jsx)("img",{src:"eye.png",width:"28"})}),(0,n.jsx)("button",{id:"btn1",type:"button",className:"cursor-pointer absolute right-0 rounded bottom-0 bg-gray-800 text-white text-xs",onClick:function(){return j()},children:(0,n.jsx)("img",{src:"eye-slash.png",width:"28"})})]}),b.touched.password&&b.errors.password?(0,n.jsxs)("div",{className:"my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2",children:[(0,n.jsx)("p",{className:"font-bold",children:"Error:"}),(0,n.jsxs)("p",{children:[b.errors.password," "]})]}):null,(0,n.jsx)("input",{type:"submit",className:"bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900 cursor-pointer",value:"Iniciar Sesi\xf3n"})]})})})]})})}},7156:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return s(1162)}])},9620:function(e){"use strict";const t=function(e,t){return 1===t?e:`${e}s`},s=function(e){return null===e||void 0===e};function n(e=1,n){const r=n||"${path} must contain at least ${length} lowercase "+t("letter",e);return this.test({name:"minLowercase",exclusive:!0,message:r,params:{length:e},test:t=>s(t)||(t.match(/[a-z]/g)||[]).length>=e})}function r(e=1,n){const r=n||"${path} must contain at least ${length} uppercase "+t("letter",e);return this.test({name:"minUppercase",exclusive:!0,message:r,params:{length:e},test:t=>s(t)||(t.match(/[A-Z]/g)||[]).length>=e})}function a(e=1,n){const r=n||"${path} must contain at least ${length} "+t("number",e);return this.test({name:"minNumber",exclusive:!0,message:r,params:{length:e},test:t=>s(t)||(t.match(/[0-9]/g)||[]).length>=e})}function i(e=1,n){const r=n||"${path} must contain at least ${length} "+t("symbol",e);return this.test({name:"minSymbol",exclusive:!0,message:r,params:{length:e},test:t=>s(t)||(t.match(/[^a-zA-Z0-9\s]/g)||[]).length>=e})}function l(e=2,n){const r=n||"${path} must not contain sequences of more than ${length} repeated "+t("character",e);return this.test({name:"minRepeating",exclusive:!0,message:r,params:{length:e},test:t=>s(t)||!new RegExp(`(.)\\1{${e},}`).test(t)})}function o(e=2,n){const r=n||"${path} must contain at least ${length} "+t("word",e),a=new RegExp("[a-zA-Z0-9]");return this.test({name:"minWords",exclusive:!0,message:r,params:{length:e},test:t=>s(t)||t.split(" ").filter((e=>!!e&&a.test(e))).length>=e})}function c(){return this.min(8).max(250).minLowercase(1).minUppercase(1).minNumbers(1).minSymbols(1)}e.exports=function(e){e.addMethod(e.string,"minLowercase",n),e.addMethod(e.string,"minUppercase",r),e.addMethod(e.string,"minNumber",a),e.addMethod(e.string,"minNumbers",a),e.addMethod(e.string,"minSymbol",i),e.addMethod(e.string,"minSymbols",i),e.addMethod(e.string,"minRepeating",l),e.addMethod(e.string,"minWords",o),e.addMethod(e.string,"password",c)}}},function(e){e.O(0,[26,524,969,774,888,179],(function(){return t=7156,e(e.s=t);var t}));var t=e.O();_N_E=t}]);