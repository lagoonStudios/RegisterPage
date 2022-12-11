"use strict";(self.webpackChunkregister_page=self.webpackChunkregister_page||[]).push([[66],{2066:function(e,s,r){r.r(s),r.d(s,{default:function(){return T}});var t=r(885),a=r(2791),n=r(5705),l=r(1724),o=r(1694),i=r.n(o),u=r(184);function c(e){var s=e.children,r=e.customClassNames,t=e.onClick,a=e.onClickValue,n=e.isDisabled,l=e.type;return(0,u.jsx)("button",{type:null!==l&&void 0!==l?l:"button",className:i()(r),onClick:function(){return t(a)},disabled:n,children:s})}function d(e){var s=e.children,r=e.customClassNames;return(0,u.jsx)("div",{className:i()(r),children:s})}function m(e){var s=e.children,r=e.customClassNames;return(0,u.jsx)("h1",{className:i()(r),children:s})}function x(e){var s=e.name,r=e.customClassNames,t=e.type,a=e.onChange,n=e.max,l=e.min,o=e.placeholder,c=e.pattern;return(0,u.jsx)("input",{name:s,type:t,max:n,min:l,className:i()(r),onChange:a,placeholder:o,pattern:c})}function f(e){var s=e.children,r=e.customClassNames;return(0,u.jsx)("main",{className:i()(r),children:s})}var h=[{UserName:"User01",Password:"wnqf2c"},{UserName:"User02",Password:"ay29fh"},{UserName:"User03",Password:"ygr2bc"},{UserName:"User04",Password:"gmkz33"},{UserName:"User05",Password:"emtzck"},{UserName:"User06",Password:"9hzmsj"},{UserName:"User07",Password:"xsaj9"},{UserName:"User08",Password:"9tgfu6"},{UserName:"User09",Password:"dspfa6"},{UserName:"User10",Password:"7gswsw"},{UserName:"User11",Password:"rf7768"},{UserName:"User12",Password:"x3jb8d"},{UserName:"User13",Password:"xz5b3p"},{UserName:"User14",Password:"fgpggx"},{UserName:"User15",Password:"gv92x5"}];function g(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{role:"status",className:"flex justify-center items-center",children:[(0,u.jsxs)("svg",{"aria-hidden":"true",className:"mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,u.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,u.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),(0,u.jsx)("span",{className:"sr-only",children:"Loading..."})]})})}function p(e){var s=e.children,r=e.customClassNames;return(0,u.jsx)("span",{className:i()(r),children:s})}var C=function(e){return{"flex flex-col w-full px-5 gap-5 justify-center items-center":!0,"gap-2":e}},v=function(e){return{"w-full rounded-xl bg-gray-200 p-2 lg:p-5 text-lg":!0,"border border-red-600":e}};function j(e){var s,r,o,i,j=e.setState,w=l.Ry().shape({username:l.Z_().required("Este Campo es requerido"),password:l.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Este Campo es requerido")}),b=(0,n.TA)({initialValues:{username:"",password:""},onSubmit:function(e){U(!0);var s=h.find((function(s){return s.UserName===e.username&&s.Password===e.password}));setTimeout((function(){void 0!==s&&j(1),U(!1)}),2500)},validationSchema:w}),N=(0,a.useState)(!1),y=(0,t.Z)(N,2),k=y[0],U=y[1],Z=Boolean(b.errors.password)||Boolean(b.errors.username);return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(f,{customClassNames:"bg-desktop h-screen flex flex-1 justify-center items-center",children:(0,u.jsxs)("form",{onSubmit:b.handleSubmit,className:"bg-white w-4/5 lg:w-2/5 h-3/5 lg:h-4/5 lg:p-5 flex flex-col items-center gap-5 md:gap-10 justify-center rounded-lg overflow-y-scroll",children:[(0,u.jsx)(m,{customClassNames:"text-3xl",children:"Inicio de Sesi\xf3n"}),(0,u.jsxs)(d,{customClassNames:C(Z),children:[(0,u.jsx)(x,{id:"username",name:"username",type:"text",value:b.values.username,onBlur:b.handleBlur,onChange:b.handleChange,customClassNames:v(Z),placeholder:"Usuario"}),(null===b||void 0===b||null===(s=b.errors)||void 0===s?void 0:s.username)&&(0,u.jsx)(p,{customClassNames:"text-red-600",children:null===b||void 0===b||null===(r=b.errors)||void 0===r?void 0:r.username}),(0,u.jsx)(x,{id:"password",name:"password",type:"password",value:b.values.password,onBlur:b.handleBlur,onChange:b.handleChange,customClassNames:v(Z),placeholder:"Contrase\xf1a"}),(null===b||void 0===b||null===(o=b.errors)||void 0===o?void 0:o.password)&&(0,u.jsx)(p,{customClassNames:"text-red-600",children:null===b||void 0===b||null===(i=b.errors)||void 0===i?void 0:i.password}),(0,u.jsx)(c,{onClick:function(){},onClickValue:!0,customClassNames:"bg-medium-turquoise p-4 mt-3 w-full lg:w-96 rounded-full text-white text-lg",type:"submit",isDisabled:k,children:k?(0,u.jsx)(g,{}):"Ingresar"})]})]})})})}var w,b=r(4165),N=r(5861),y=r(9062),k=r(9098),U=r(5218),Z=r(2426),S=r(2191),P=(0,Z.ZF)({apiKey:"AIzaSyDlszimD_kJl3gvig5Kp9-sA-Iq7vapQ6U",authDomain:"ticketscann.firebaseapp.com",projectId:"ticketscann",storageBucket:"ticketscann.appspot.com",messagingSenderId:"425710992126",appId:"1:425710992126:web:476972027670f4bdeb43af",measurementId:"G-LT0B306Y3B"}),q=(0,y.ad)(P),B=((0,S.IH)(P),r(7530)),I=function(e,s,r){var t={to_name:e,to_email:s,qr:"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl="+r};console.log("template: ",t),B.ZP.send("service_5cted8p","template_ri8cnoo",t,"cgmGhlqI_1tJf45Y3").then((function(e){console.log("respuesta de emailJs: ",e)}),(function(e){console.log("error de emailJs: ",e)}))},E=r(1413),_={control:function(e){return(0,E.Z)((0,E.Z)({},e),{},{padding:"0.2rem 0rem",borderRadius:"0",borderColor:"black",border:"0.5"})},indicatorsContainer:function(e){return(0,E.Z)((0,E.Z)({},e),{},{color:"black"})},placeholder:function(e){return(0,E.Z)((0,E.Z)({},e),{},{fontSize:"0.9rem",color:"black"})},singleValue:function(e){return(0,E.Z)((0,E.Z)({},e),{},{fontSize:"0.9rem",color:"black"})},indicatorSeparator:function(e){return(0,E.Z)((0,E.Z)({},e),{},{display:"none"})}},D=[{value:"juguete",label:"Instrumento Musical o Juguetes"},{value:"ropa",label:"Vestimenta"},{value:"medicina",label:"Insumos Medicos"},{value:"alimentos",label:"Alimentos No Perecederos"},{value:"otro",label:"Otro"}],R=function(e){return{"w-full border-b border-black":!0,"border-red-600":e}};function V(e){var s=e.data,r=e.onSubmit;return(0,u.jsx)(d,{customClassNames:"z-10 absolute w-full h-full bg-gray-500/70 flex justify-center items-center",children:(0,u.jsxs)(d,{customClassNames:"bg-white w-4/5 lg:w-2/5 h-3/6 px-4 py-2 flex flex-col justify-center items-center gap-3 rounded-lg overflow-y-scroll",children:[(0,u.jsx)(p,{customClassNames:"font-bold text-xl md:text-2xl mb-3",children:"Confirmaci\xf3n"}),(0,u.jsxs)(p,{customClassNames:"font-base text-base md:text-xl",children:["Documento de Identidad: ",(0,u.jsx)("strong",{children:null===s||void 0===s?void 0:s.id})]}),(0,u.jsxs)(p,{customClassNames:"font-base text-base md:text-xl",children:["Correo Electronico: ",(0,u.jsx)("strong",{children:null===s||void 0===s?void 0:s.email})]}),(0,u.jsx)(p,{customClassNames:"font-base text-base md:text-lg my-3",children:"Esta seguro de que son correctos sus datos?"}),(0,u.jsx)(c,{onClick:function(){return r()},onClickValue:!0,customClassNames:"bg-medium-turquoise p-4 w-full lg:w-96 rounded-full text-white text-lg",type:"button",children:"Aceptar"})]})})}function z(e){var s=e.setState,r=l.Ry().shape({name:l.Z_().required("Este Campo es requerido"),id:l.Rx().typeError("Ingresa un documento v\xe1lido").min(0,"Ingresa un documento v\xe1lido").required("Este Campo es requerido"),email:l.Z_().email("Ingresa un correo v\xe1lido").required("Este Campo es requerido")}),o=(0,n.TA)({initialValues:{name:"",email:"",id:""},onSubmit:function(){var e=(0,N.Z)((0,b.Z)().mark((function e(){return(0,b.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v(!0));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),validationSchema:r}),i=(0,a.useState)(!1),h=(0,t.Z)(i,2),C=h[0],v=h[1],j=(0,a.useState)(D[0]),w=(0,t.Z)(j,2),Z=w[0],S=w[1],P=(0,a.useState)(!1),B=(0,t.Z)(P,2),E=B[0],z=B[1],F=Boolean(o.errors.name)||Boolean(o.errors.email)||Boolean(o.errors.id);return(0,u.jsxs)(u.Fragment,{children:[C&&(0,u.jsx)(V,{onSubmit:function(){v(!1),z(!0),(0,y.QT)((0,y.JU)(q,"Registers",o.values.id)).then(function(){var e=(0,N.Z)((0,b.Z)().mark((function e(r){return(0,b.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==r.exists()){e.next=5;break}return e.next=3,(0,y.pl)((0,y.JU)(q,"Registers",o.values.id),{name:o.values.name,email:o.values.email,id:o.values.id,donative:!0,donative_type:null===Z||void 0===Z?void 0:Z.value,attendance:!1}).then((function(){s(2),z(!1),U.ZP.success("Datos registrado Exitosamente!"),I(o.values.name,o.values.email,o.values.id)})).catch((function(){z(!1),U.ZP.error("Error Registrando Datos")}));case 3:e.next=7;break;case 5:U.ZP.error("El usuario ya est\xe1 registrado"),z(!1);case 7:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}())},data:{email:o.values.email,id:o.values.id}}),(0,u.jsx)(f,{customClassNames:"bg-desktop h-screen flex flex-1 justify-center items-center",children:(0,u.jsxs)("form",{onSubmit:o.handleSubmit,className:"bg-white w-4/5 lg:w-2/5 h-5/6 p-5 flex flex-col justify-center items-center gap-5 rounded-lg overflow-y-scroll",children:[(0,u.jsx)(m,{customClassNames:"text-2xl font-bold mt-5",children:"Formato de Registro"}),(0,u.jsxs)(d,{customClassNames:"flex flex-col flex-1 w-full px-5 gap-5 justify-center",children:[(0,u.jsx)(p,{children:"Nombre"}),(0,u.jsx)(x,{id:"name",name:"name",type:"text",value:o.values.name,onBlur:o.handleBlur,onChange:o.handleChange,customClassNames:R(F)}),o.errors.name&&(0,u.jsx)(p,{customClassNames:"text-red-600",children:o.errors.name}),(0,u.jsx)(p,{children:"Correo Electronico"}),(0,u.jsx)(x,{id:"email",name:"email",type:"text",value:o.values.email,onBlur:o.handleBlur,onChange:o.handleChange,customClassNames:R(F)}),o.errors.name&&(0,u.jsx)(p,{customClassNames:"text-red-600",children:o.errors.email}),(0,u.jsx)(p,{children:"Documento de Identidad"}),(0,u.jsxs)(d,{customClassNames:"flex flex-row gap-2",children:[(0,u.jsx)(p,{children:"V-"}),(0,u.jsx)(x,{id:"id",name:"id",type:"text",pattern:"\\d*",value:o.values.id,onBlur:o.handleBlur,onChange:o.handleChange,customClassNames:R(F)})]}),o.errors.name&&(0,u.jsx)(p,{customClassNames:"text-red-600",children:o.errors.id}),(0,u.jsx)(p,{children:"Tipo de Donativo"}),(0,u.jsx)(k.ZP,{options:D,styles:_,onChange:function(e){return function(e){return S(e)}(e)},defaultValue:D[0]})]}),(0,u.jsx)(c,{onClick:function(){},onClickValue:!0,customClassNames:"bg-medium-turquoise p-4 w-full lg:w-96 rounded-full text-white text-lg",type:"submit",isDisabled:E,children:E?(0,u.jsx)(g,{}):"Registrar"})]})})]})}function F(e){var s=e.setState;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(f,{customClassNames:"bg-desktop h-screen flex flex-1 justify-center items-center",children:(0,u.jsxs)(d,{customClassNames:"bg-white w-4/5 lg:w-2/5 h-3/5 lg:h-4/5 lg:p-5 flex flex-col items-center gap-10 justify-center rounded-lg overflow-y-scroll",children:[(0,u.jsx)(m,{customClassNames:"text-xl md:text-3xl",children:"Datos Registrados Exitosamente"}),(0,u.jsx)(d,{customClassNames:"flex flex-col w-full px-5 gap-10 justify-center items-center",children:(0,u.jsx)(c,{onClick:function(){return s(1)},onClickValue:!0,customClassNames:"bg-medium-turquoise p-4 w-full lg:w-96 rounded-full text-white text-base md:text-lg",type:"submit",children:"Volver al Formulario"})})]})})})}function T(){var e=(0,a.useState)(w.Login),s=(0,t.Z)(e,2),r=s[0],n=s[1],l={0:(0,u.jsx)(j,{setState:n}),1:(0,u.jsx)(z,{setState:n}),2:(0,u.jsx)(F,{setState:n})};return(0,u.jsx)(u.Fragment,{children:l[r]})}!function(e){e[e.Login=0]="Login",e[e.Register=1]="Register",e[e.Success=2]="Success"}(w||(w={}))}}]);
//# sourceMappingURL=66.da1bf1db.chunk.js.map