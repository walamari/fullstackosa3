(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var i=t(0),c=t(14),o=t.n(c),r=t(2),u=t(3),a=function(e){return Object(i.jsx)("div",{children:Object(i.jsxs)("p",{children:[e.henkil\u00f6.name," ",e.henkil\u00f6.number," ",Object(i.jsx)("button",{onClick:e.handlePoista,id:e.henkil\u00f6.id,type:"submit",children:"delete"})]})})},l=function(e,n){return e.filter((function(e){return-1!==e.name.toLowerCase().indexOf(n.toLowerCase())}))},s=function(e,n){for(var t=0;t<n.length;t++)if(e.name.toUpperCase().trim()===n[t].name.toUpperCase().trim())return t;return-1},d=t(4),j=t.n(d),b="/api/persons",f=function(){return j.a.get(b).then((function(e){return e.data}))},h=function(e){return j.a.post(b,e).then((function(e){return e.data}))},m=function(e){return j.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},O=function(e){return j.a.put("".concat(b,"/").concat(e.id),e).then((function(e){return e.data}))},p=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"error",children:n})},v=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)([]),d=Object(u.a)(o,2),j=d[0],b=d[1],v=Object(r.useState)(""),g=Object(u.a)(v,2),x=g[0],w=g[1],k=Object(r.useState)(""),C=Object(u.a)(k,2),S=C[0],y=C[1],D=Object(r.useState)(null),T=Object(u.a)(D,2),N=T[0],P=T[1];Object(r.useEffect)((function(){console.log("effect"),f().then((function(e){c(e)}))}),[]),console.log("persons"),console.log(t);var E=S.length<1?t:l(t,S),J=function(e){var n=t.filter((function(n){return n.id===e.target.id}));window.confirm("Delete "+n[0].name+" ?")&&(m(e.target.id).then((function(n){c(t.filter((function(n){return n.id!==e.target.id})))})),P("Deleted ".concat(n[0].name)),setTimeout((function(){P(null)}),5e3))};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(p,{message:N}),Object(i.jsxs)("p",{children:[" filter shown with: ",Object(i.jsx)("input",{onChange:function(e){e.preventDefault(),y(e.target.value)}})]}),Object(i.jsx)("h3",{children:"add a new"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={name:j,number:x,id:String};if(console.log("numberObject.name"),console.log(n.name),console.log(n.number),void 0===n.name||void 0===n.number)return P("Nimi tai numero ei voi olla tyhj\xe4!"),void setTimeout((function(){P(null)}),5e3);if(-1===s(n,t))h(n).then((function(e){c(t.concat(e)),b(""),w("")})),P("Added ".concat(n.name)),setTimeout((function(){P(null)}),5e3);else{var i=s(n,t);if(window.confirm(j+" is already added to phonebook, replace the old number with a new one?")){var o={name:t[i].name,number:n.number,id:n.id};O(o).then((function(e){c(t.map((function(e){return e.id===o.id?o:e})))})),P("".concat(n.name," number change")),setTimeout((function(){P(null)}),5e3)}}},children:[Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:[" name: ",Object(i.jsx)("input",{value:j,onChange:function(e){b(e.target.value)}})]}),Object(i.jsxs)("p",{children:[" number: ",Object(i.jsx)("input",{value:x,onChange:function(e){w(e.target.value)}})]})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]}),Object(i.jsx)("h3",{children:"Numbers"}),Object(i.jsx)("div",{children:E.map((function(e){return Object(i.jsx)(a,{"henkil\xf6":e,handlePoista:J},e.name)}))})]})};t(37);o.a.render(Object(i.jsx)(v,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.03458b62.chunk.js.map