(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(14),r=n.n(i),u=n(2),o=n(3),a=function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("p",{children:[e.henkil\u00f6.name," ",e.henkil\u00f6.number," ",Object(c.jsx)("button",{onClick:e.handlePoista,id:e.henkil\u00f6.id,type:"submit",children:"delete"})]})})},s=function(e,t){return e.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())}))},l=n(4),j=n.n(l),d="/api/persons",b=function(){return j.a.get(d).then((function(e){return e.data}))},h=function(e){return j.a.post(d,e).then((function(e){return e.data}))},f=function(e){return j.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},O=function(e){var t=e.message;return null===t?null:Object(c.jsx)("div",{className:"error",children:t})},m=function(){var e=Object(u.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(u.useState)(""),l=Object(o.a)(r,2),j=l[0],d=l[1],m=Object(u.useState)(""),x=Object(o.a)(m,2),p=x[0],g=x[1],v=Object(u.useState)(""),w=Object(o.a)(v,2),k=w[0],S=w[1],C=Object(u.useState)(null),y=Object(o.a)(C,2),D=y[0],P=y[1];Object(u.useEffect)((function(){console.log("effect"),b().then((function(e){i(e)}))}),[]),console.log("persons"),console.log(n);var E=k.length<1?n:s(n,k),J=function(e){var t=n.filter((function(t){return t.id===e.target.id}));window.confirm("Delete "+t[0].name+" ?")&&(f(e.target.id).then((function(t){i(n.filter((function(t){return t.id!==e.target.id})))})),P("Deleted ".concat(t[0].name)),setTimeout((function(){P(null)}),5e3))};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(O,{message:D}),Object(c.jsxs)("p",{children:[" filter shown with: ",Object(c.jsx)("input",{onChange:function(e){e.preventDefault(),S(e.target.value)}})]}),Object(c.jsx)("h3",{children:"add a new"}),Object(c.jsxs)("form",{onSubmit:function(e){var t={name:j,number:p,id:String};h(t).then((function(e){i(n.concat(e)),d(""),g("")})),P("Added ".concat(t.name)),setTimeout((function(){P(null)}),5e3)},children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:[" name: ",Object(c.jsx)("input",{value:j,onChange:function(e){d(e.target.value)}})]}),Object(c.jsxs)("p",{children:[" number: ",Object(c.jsx)("input",{value:p,onChange:function(e){g(e.target.value)}})]})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]}),Object(c.jsx)("h3",{children:"Numbers"}),Object(c.jsx)("div",{children:E.map((function(e){return Object(c.jsx)(a,{"henkil\xf6":e,handlePoista:J},e.name)}))})]})};n(37);r.a.render(Object(c.jsx)(m,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.b29c0545.chunk.js.map