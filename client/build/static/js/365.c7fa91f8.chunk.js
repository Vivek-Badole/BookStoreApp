"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[365],{2365:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(4165),s=t(5861),c=t(3433),a=t(9439),l=t(2791),i=t(4459),o=t(6224),d=t(8241),u=t(7689),h=t(1046),m=t(3263),v=t(3402),p=t(184),x=function(){var e,n,t,x,f=(0,d.a)(),j=(0,a.Z)(f,2),b=j[0],g=(j[1],(0,o.j)()),k=(0,a.Z)(g,2),N=k[0],y=k[1],Z=(0,l.useState)(""),w=(0,a.Z)(Z,2),C=w[0],S=w[1],P=(0,l.useState)(""),I=(0,a.Z)(P,2),_=I[0],U=I[1],A=(0,l.useState)(!1),H=(0,a.Z)(A,2),L=H[0],T=H[1],z=(0,u.s0)(),E=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Z.get("/api/v1/product/braintree/token");case 3:n=e.sent,t=n.data,S(null===t||void 0===t?void 0:t.clientToken),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){E()}),[null===b||void 0===b?void 0:b.token]);var F=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var n,t,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(!0),e.next=4,_.requestPaymentMethod();case 4:return n=e.sent,t=n.nonce,e.next=8,m.Z.post("/api/v1/product/braintree/payment",{nonce:t,cart:N});case 8:s=e.sent,s.data,T(!1),localStorage.removeItem("cart"),y([]),z("/dashboard/user/orders"),v.ZP.success("Payment Completed Successfully "),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0),T(!1);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();return(0,p.jsx)(i.Z,{title:"Cart - Books ",children:(0,p.jsxs)("div",{className:" cart-page",children:[(0,p.jsx)("div",{className:"row",children:(0,p.jsx)("div",{className:"col-md-12",children:(0,p.jsxs)("h1",{className:"text-center bg-light p-2 mb-1",children:[null!==b&&void 0!==b&&b.user?"Hello  ".concat((null===b||void 0===b?void 0:b.token)&&(null===b||void 0===b||null===(e=b.user)||void 0===e?void 0:e.name)):"Hello Guest",(0,p.jsx)("p",{className:"text-center",children:null!==N&&void 0!==N&&N.length?"You Have ".concat(N.length," items in your cart ").concat(null!==b&&void 0!==b&&b.token?"":"please login to checkout !"):" Your Cart Is Empty"})]})})}),(0,p.jsx)("div",{className:"container mt-3",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-md-6  p-0 m-0",children:null===N||void 0===N?void 0:N.map((function(e){return(0,p.jsxs)("div",{className:"row card flex-row",children:[(0,p.jsx)("div",{className:"col-md-4",children:(0,p.jsx)("img",{src:"/api/v1/product/product-photo/".concat(e._id),className:"card-img-top",alt:e.name,width:"100%",height:"130px",loading:"lazy"})}),(0,p.jsxs)("div",{className:"col-md-4",children:[(0,p.jsx)("p",{children:e.name}),(0,p.jsx)("p",{children:e.description.substring(0,30)}),(0,p.jsxs)("p",{children:["Price : $",e.price]})]}),(0,p.jsx)("div",{className:"col-md-4 cart-remove-btn",children:(0,p.jsx)("button",{className:"btn btn-danger",onClick:function(){return function(e){try{var n=(0,c.Z)(N),t=n.findIndex((function(n){return n._id===e}));n.splice(t,1),y(n),localStorage.setItem("cart",JSON.stringify(n))}catch(r){console.log(r)}}(e._id)},children:"Remove"})})]},e._id)}))}),(0,p.jsxs)("div",{className:"col-md-5 cart-summary ml-3",style:{marginLeft:"20px"},children:[(0,p.jsx)("h2",{children:"Cart Summary"}),(0,p.jsx)("p",{children:"Total | Checkout | Payment"}),(0,p.jsx)("hr",{}),(0,p.jsxs)("h4",{children:["Total : ",function(){try{return null===N||void 0===N||N.map((function(e){e._id})),(0).toLocaleString("en-US",{style:"currency",currency:"USD"})}catch(e){console.log(e)}}()," "]}),null!==b&&void 0!==b&&null!==(n=b.user)&&void 0!==n&&n.address?(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)("h4",{children:"Current Address"}),(0,p.jsx)("h5",{children:null===b||void 0===b||null===(t=b.user)||void 0===t?void 0:t.address}),(0,p.jsx)("button",{className:"btn btn-outline-warning",onClick:function(){return z("/dashboard/user/profile")},children:"Update Address"})]})}):(0,p.jsx)("div",{className:"mb-3",children:null!==b&&void 0!==b&&b.token?(0,p.jsx)("button",{className:"btn btn-outline-warning",onClick:function(){return z("/dashboard/user/profile")},children:"Update Address"}):(0,p.jsx)("button",{className:"btn btn-outline-warning",onClick:function(){return z("/login",{state:"/cart"})},children:"Plase Login to checkout"})}),(0,p.jsx)("div",{className:"mt-2",children:C&&null!==b&&void 0!==b&&b.token&&null!==N&&void 0!==N&&N.length?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(h.Z,{options:{authorization:C,paypal:{flow:"vault"}},onInstance:function(e){return U(e)}}),(0,p.jsx)("button",{className:"btn btn-primary",onClick:F,disabled:L||!_||!(null!==b&&void 0!==b&&null!==(x=b.user)&&void 0!==x&&x.address),children:L?"Processing ....":"Make Payment"})]}):""})]})]})})]})})}}}]);
//# sourceMappingURL=365.c7fa91f8.chunk.js.map