"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[133],{4425:function(e,t,r){r(2791);var a=r(1087),n=r(184);t.Z=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"text-center",children:(0,n.jsxs)("div",{className:"list-group dashboard-menu",children:[(0,n.jsx)("h4",{children:"Admin Panel"}),(0,n.jsx)(a.OL,{to:"/dashboard/admin/create-category",className:"list-group-item list-group-item-action",children:"Create Category"}),(0,n.jsx)(a.OL,{to:"/dashboard/admin/create-product",className:"list-group-item list-group-item-action",children:"Create Product"}),(0,n.jsx)(a.OL,{to:"/dashboard/admin/products",className:"list-group-item list-group-item-action",children:"Products"}),(0,n.jsx)(a.OL,{to:"/dashboard/admin/orders",className:"list-group-item list-group-item-action",children:"Orders"})]})})})}},2133:function(e,t,r){r.r(t);var a=r(4165),n=r(5861),c=r(9439),s=r(2791),o=r(4459),i=r(4425),l=r(3402),u=r(3263),d=r(466),p=r(7689),m=r(184),h=d.Z.Option;t.default=function(){var e=(0,p.s0)(),t=(0,p.UO)(),r=(0,s.useState)([]),v=(0,c.Z)(r,2),g=v[0],x=v[1],f=(0,s.useState)(""),j=(0,c.Z)(f,2),b=j[0],N=j[1],Z=(0,s.useState)(""),w=(0,c.Z)(Z,2),y=w[0],S=w[1],C=(0,s.useState)(""),P=(0,c.Z)(C,2),k=P[0],O=P[1],U=(0,s.useState)(""),D=(0,c.Z)(U,2),E=D[0],L=D[1],_=(0,s.useState)(""),z=(0,c.Z)(_,2),R=z[0],T=z[1],q=(0,s.useState)(""),A=(0,c.Z)(q,2),F=A[0],Y=A[1],B=(0,s.useState)(""),G=(0,c.Z)(B,2),H=G[0],I=G[1],J=(0,s.useState)(""),K=(0,c.Z)(J,2),M=K[0],Q=K[1],V=(0,s.useState)(""),W=(0,c.Z)(V,2),X=W[0],$=W[1],ee=(0,s.useState)(""),te=(0,c.Z)(ee,2),re=te[0],ae=te[1],ne=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){var r,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/api/v1/product/get-product/".concat(t.slug));case 3:r=e.sent,n=r.data,N(n.product.name),Q(n.product._id),S(n.product.description),O(n.product.price),O(n.product.price),T(n.product.quantity),Y(n.product.shipping),L(n.product.category._id),$(n.product.author),ae(n.product.rating),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){ne()}),[]);var ce=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){var t,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/api/v1/category/get-category");case 3:t=e.sent,null!==(r=t.data)&&void 0!==r&&r.success&&x(null===r||void 0===r?void 0:r.category),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),l.ZP.error("Something wwent wrong in getting catgeory");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){ce()}),[]);var se=function(){var t=(0,n.Z)((0,a.Z)().mark((function t(r){var n,c,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.preventDefault();try{(n=new FormData).append("name",b),n.append("auhtor",X),n.append("description",y),n.append("price",k),n.append("quantity",R),H&&n.append("photo",H),n.append("category",E),n.append("rating",re),c=u.Z.put("/api/v1/product/update-product/".concat(M),n),null!==(s=c.data)&&void 0!==s&&s.success?l.ZP.error(null===s||void 0===s?void 0:s.message):(l.ZP.success("Product Updated Successfully"),e("/dashboard/admin/products"))}catch(a){console.log(a),l.ZP.error("something went wrong")}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),oe=function(){var t=(0,n.Z)((0,a.Z)().mark((function t(){var r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,window.prompt("Are You Sure want to delete this product ? ")){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,u.Z.delete("/api/v1/product/delete-product/".concat(M));case 6:r=t.sent,r.data,l.ZP.success("Product DEleted Succfully"),e("/dashboard/admin/products"),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),l.ZP.error("Something went wrong");case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();return(0,m.jsx)(o.Z,{title:"Dashboard - Create Product",children:(0,m.jsx)("div",{className:"container-fluid m-3 p-3",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-md-3",children:(0,m.jsx)(i.Z,{})}),(0,m.jsxs)("div",{className:"col-md-9",children:[(0,m.jsx)("h1",{children:"Update Product"}),(0,m.jsxs)("div",{className:"m-1 w-75",children:[(0,m.jsx)(d.Z,{bordered:!1,placeholder:"Select a category",size:"large",showSearch:!0,className:"form-select mb-3",onChange:function(e){L(e)},value:E,children:null===g||void 0===g?void 0:g.map((function(e){return(0,m.jsx)(h,{value:e._id,children:e.name},e._id)}))}),(0,m.jsx)("div",{className:"mb-3",children:(0,m.jsxs)("label",{className:"btn btn-outline-secondary col-md-12",children:[H?H.name:"Upload Photo",(0,m.jsx)("input",{type:"file",name:"photo",accept:"image/*",onChange:function(e){return I(e.target.files[0])},hidden:!0})]})}),(0,m.jsx)("div",{className:"mb-3",children:H?(0,m.jsx)("div",{className:"text-center",children:(0,m.jsx)("img",{src:URL.createObjectURL(H),alt:"product_photo",height:"200px",className:"img img-responsive",loading:"lazy"})}):(0,m.jsx)("div",{className:"text-center",children:(0,m.jsx)("img",{src:"/api/v1/product/product-photo/".concat(M),alt:"product_photo",height:"200px",className:"img img-responsive",loading:"lazy"})})}),(0,m.jsx)("div",{className:"mb-3",children:(0,m.jsx)("input",{type:"text",value:b,placeholder:"write a name",className:"form-control",onChange:function(e){return N(e.target.value)}})}),(0,m.jsx)("div",{className:"mb-3",children:(0,m.jsx)("input",{type:"text",value:X,placeholder:"write author name",className:"form-control",onChange:function(e){return $(e.target.value)}})}),(0,m.jsx)("div",{className:"mb-3",children:(0,m.jsx)("textarea",{type:"text",value:y,placeholder:"write a description",className:"form-control",onChange:function(e){return S(e.target.value)}})}),(0,m.jsx)("div",{className:"mb-3",children:(0,m.jsx)("input",{type:"number",value:k,placeholder:"write a Price",className:"form-control",onChange:function(e){return O(e.target.value)}})}),(0,m.jsx)("div",{className:"mb-3",children:(0,m.jsx)("input",{type:"number",value:R,placeholder:"write a quantity",className:"form-control",onChange:function(e){return T(e.target.value)}})}),(0,m.jsx)("div",{className:"mb-3",children:(0,m.jsx)("input",{type:"number",value:re,placeholder:"write a rating",className:"form-control",onChange:function(e){return ae(e.target.value)}})}),(0,m.jsx)("div",{className:"mb-3",children:(0,m.jsxs)(d.Z,{bordered:!1,placeholder:"Select Shipping ",size:"large",showSearch:!0,className:"form-select mb-3",onChange:function(e){Y(e)},value:F?"yes":"No",children:[(0,m.jsx)(h,{value:"0",children:"No"}),(0,m.jsx)(h,{value:"1",children:"Yes"})]})}),(0,m.jsx)("div",{className:"mb-3",children:(0,m.jsx)("button",{className:"btn btn-primary",onClick:se,children:"UPDATE PRODUCT"})}),(0,m.jsx)("div",{className:"mb-3",children:(0,m.jsx)("button",{className:"btn btn-danger",onClick:oe,children:"DELETE PRODUCT"})})]})]})]})})})}}}]);
//# sourceMappingURL=133.6729e370.chunk.js.map