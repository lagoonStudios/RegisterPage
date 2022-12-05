"use strict";(self.webpackChunkregister_page=self.webpackChunkregister_page||[]).push([[12],{4012:function(e,n,a){a.r(n),a.d(n,{default:function(){return B}});var s=a(885),t=a(2791),r=a(5705),l=a(1724),i=a(1694),o=a.n(i),u=a(184);function c(e){var n=e.children,a=e.customClassNames,s=e.onClick,t=e.onClickValue,r=e.isDisabled,l=e.type;return(0,u.jsx)("button",{type:null!==l&&void 0!==l?l:"button",className:o()(a),onClick:function(){return s(t)},disabled:r,children:n})}function m(e){var n=e.children,a=e.customClassNames;return(0,u.jsx)("div",{className:o()(a),children:n})}function d(e){var n=e.children,a=e.customClassNames;return(0,u.jsx)("h1",{className:o()(a),children:n})}function h(e){var n=e.name,a=e.customClassNames,s=e.type,t=e.onChange,r=e.max,l=e.min,i=e.placeholder;return(0,u.jsx)("input",{name:n,type:s,max:r,min:l,className:o()(a),onChange:t,placeholder:i})}function p(e){var n=e.children,a=e.customClassNames;return(0,u.jsx)("main",{className:o()(a),children:n})}function g(e){var n=e.setState,a=l.Ry().shape({username:l.Z_().required("Required"),password:l.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required")}),s=(0,r.TA)({initialValues:{username:"",password:""},onSubmit:function(e){n(1)},validationSchema:a});return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(p,{customClassNames:"bg-desktop h-screen flex flex-1 justify-center items-center",children:(0,u.jsxs)("form",{onSubmit:s.handleSubmit,className:"bg-white w-4/5 lg:w-2/5 h-3/5 lg:h-4/5 lg:p-5 flex flex-col items-center gap-10 justify-center",children:[(0,u.jsx)(d,{customClassNames:"text-3xl",children:"Inicio de Sesi\xf3n"}),(0,u.jsxs)(m,{customClassNames:"flex flex-col w-full px-5 gap-10 justify-center items-center",children:[(0,u.jsx)(h,{id:"username",name:"username",type:"text",value:s.values.username,onBlur:s.handleBlur,onChange:s.handleChange,customClassNames:"w-full rounded-xl bg-gray-200 p-2 lg:p-5 text-lg",placeholder:"Usuario"}),(0,u.jsx)(h,{id:"password",name:"password",type:"password",value:s.values.password,onBlur:s.handleBlur,onChange:s.handleChange,customClassNames:"w-full rounded-xl bg-gray-200 p-2 lg:p-5 text-lg",placeholder:"Contrase\xf1a"}),(0,u.jsx)(c,{onClick:function(){},onClickValue:!0,customClassNames:"bg-medium-turquoise p-4 w-full lg:w-96 rounded-lg text-white text-lg",type:"submit",children:"Ingresar"})]})]})})})}var x=a(4165),f=a(5861),b=a(9062),C=a(3402);function j(e){var n=e.children,a=e.customClassNames;return(0,u.jsx)("span",{className:o()(a),children:n})}var v,w=a(2426),N=a(2191),k=(0,w.ZF)({apiKey:"AIzaSyDlszimD_kJl3gvig5Kp9-sA-Iq7vapQ6U",authDomain:"ticketscann.firebaseapp.com",projectId:"ticketscann",storageBucket:"ticketscann.appspot.com",messagingSenderId:"425710992126",appId:"1:425710992126:web:476972027670f4bdeb43af",measurementId:"G-LT0B306Y3B"}),y=(0,b.ad)(k),q=((0,N.IH)(k),a(7530)),S=function(e,n,a){var s={to_name:e,to_email:n,qr:"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl="+a};console.log("template: ",s),q.ZP.send("service_8rujj47","template_ri8cnoo",s,"cgmGhlqI_1tJf45Y3").then((function(e){console.log("respuesta de emailJs: ",e)}),(function(e){console.log("error de emailJs: ",e)}))};function Z(){var e=l.Ry().shape({name:l.Z_().required("Required"),id:l.Z_().required("Required"),email:l.Z_().email("Invalid email").required("Required")}),n=(0,r.TA)({initialValues:{name:"",email:"",id:""},onSubmit:function(){var e=(0,f.Z)((0,x.Z)().mark((function e(n,a){var s,t,r,l;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=a.setValues,t=a.resetForm,r=(0,b.IO)((0,b.hJ)(y,"Registers"),(0,b.ar)("id","==",n.id)),l=(0,b.cf)(r,function(){var e=(0,f.Z)((0,x.Z)().mark((function e(a){return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==a.size){e.next=5;break}return e.next=3,(0,b.ET)((0,b.hJ)(y,"Registers"),{name:n.name,email:n.email,id:n.id,donative:!0,attendance:!1}).then((function(e){l(),C.ZP.success("Datos registrado Exitosamente!"),S(n.name,n.email,n.id),s({name:"",email:"",id:""}),t({values:{name:"",email:"",id:""}})}));case 3:e.next=6;break;case 5:return e.abrupt("return");case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),(function(e){console.log("error: ",e)}));case 3:case"end":return e.stop()}}),e)})));return function(n,a){return e.apply(this,arguments)}}(),validationSchema:e});return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(p,{customClassNames:"bg-desktop h-screen flex flex-1 justify-center items-center",children:(0,u.jsxs)("form",{onSubmit:n.handleSubmit,className:"bg-white w-4/5 lg:w-2/5 h-4/5 p-5 flex flex-col justify-center items-center gap-5",children:[(0,u.jsx)(d,{customClassNames:"text-2xl",children:"Formato de Registro"}),(0,u.jsxs)(m,{customClassNames:"flex flex-col flex-1 w-full px-5 gap-5 justify-center",children:[(0,u.jsx)(j,{children:"Nombre"}),(0,u.jsx)(h,{id:"name",name:"name",type:"text",value:n.values.name,onBlur:n.handleBlur,onChange:n.handleChange,customClassNames:"w-full border-b-2 border-black"}),(0,u.jsx)(j,{children:"Correo Electronico"}),(0,u.jsx)(h,{id:"email",name:"email",type:"text",value:n.values.email,onBlur:n.handleBlur,onChange:n.handleChange,customClassNames:"w-full border-b-2 border-black"}),(0,u.jsx)(j,{children:"Documento de Identidad"}),(0,u.jsx)(h,{id:"id",name:"id",type:"text",value:n.values.id,onBlur:n.handleBlur,onChange:n.handleChange,customClassNames:"w-full border-b-2 border-black"}),(0,u.jsx)(j,{children:"Tipo de Donativo"})]}),(0,u.jsx)(c,{onClick:function(){},onClickValue:!0,customClassNames:"bg-medium-turquoise p-4 w-full lg:w-96 rounded-lg text-white text-lg",type:"submit",children:"Registrar"})]})})})}function B(){var e=(0,t.useState)(v.Login),n=(0,s.Z)(e,2),a=n[0],r=n[1];return(0,u.jsx)(u.Fragment,{children:a===v.Login?(0,u.jsx)(g,{setState:r}):(0,u.jsx)(Z,{})})}!function(e){e[e.Login=0]="Login",e[e.Register=1]="Register"}(v||(v={}))}}]);
//# sourceMappingURL=12.b98198a0.chunk.js.map