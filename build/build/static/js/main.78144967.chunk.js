(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t(14),i=t.n(c),r=t(2),u=t(3),a=function(e){return Object(o.jsx)("div",{children:Object(o.jsxs)("p",{children:[e.henkil\u00f6.name," ",e.henkil\u00f6.number," ",Object(o.jsx)("button",{onClick:e.handlePoista,id:e.henkil\u00f6.id,type:"submit",children:"delete"})]})})},l=function(e,n){return e.filter((function(e){return-1!==e.name.toLowerCase().indexOf(n.toLowerCase())}))},s=function(e,n){for(var t=0;t<n.length;t++)if(e.name.toUpperCase().trim()===n[t].name.toUpperCase().trim())return t;return-1},d=t(4),j=t.n(d),b="/api/persons",f=function(){return j.a.get(b).then((function(e){return e.data}))},h=function(e){return j.a.post(b,e).then((function(e){return e.data}))},m=function(e){return j.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},O=function(e){return j.a.put("".concat(b,"/").concat(e.id),e).then((function(e){return e.data}))},p=function(e){var n=e.message;return null===n?null:Object(o.jsx)("div",{className:"error",children:n})},g=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],i=Object(r.useState)([]),d=Object(u.a)(i,2),j=d[0],b=d[1],g=Object(r.useState)(""),v=Object(u.a)(g,2),x=v[0],w=v[1],k=Object(r.useState)(""),C=Object(u.a)(k,2),y=C[0],S=C[1],D=Object(r.useState)(null),T=Object(u.a)(D,2),N=T[0],P=T[1];Object(r.useEffect)((function(){console.log("effect"),f().then((function(e){c(e)}))}),[]),console.log("persons"),console.log(t);var E=y.length<1?t:l(t,y),J=function(e){var n=t.filter((function(n){return n.id===e.target.id}));window.confirm("Delete "+n[0].name+" ?")&&(m(e.target.id).then((function(n){c(t.filter((function(n){return n.id!==e.target.id})))})),P("Deleted ".concat(n[0].name)),setTimeout((function(){P(null)}),5e3))};return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Phonebook"}),Object(o.jsx)(p,{message:N}),Object(o.jsxs)("p",{children:[" filter shown with: ",Object(o.jsx)("input",{onChange:function(e){e.preventDefault(),S(e.target.value)}})]}),Object(o.jsx)("h3",{children:"add a new"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={name:j,number:x,id:String};if(console.log("numberObject.name"),console.log(n.name),console.log(n.number),console.log(n.number.length),console.log(n.name.lentgh),void 0===typeof n.name||void 0===typeof n.number)return console.log("testi"),P("Nimi tai numero ei voi olla tyhj\xe4!"),void setTimeout((function(){P(null)}),5e3);if(-1===s(n,t))h(n).then((function(e){c(t.concat(e)),b(""),w("")})),P("Added ".concat(n.name)),setTimeout((function(){P(null)}),5e3);else{var o=s(n,t);if(window.confirm(j+" is already added to phonebook, replace the old number with a new one?")){var i={name:t[o].name,number:n.number,id:n.id};O(i).then((function(e){c(t.map((function(e){return e.id===i.id?i:e})))})),P("".concat(n.name," number change")),setTimeout((function(){P(null)}),5e3)}}},children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:[" name: ",Object(o.jsx)("input",{value:j,onChange:function(e){b(e.target.value)}})]}),Object(o.jsxs)("p",{children:[" number: ",Object(o.jsx)("input",{value:x,onChange:function(e){w(e.target.value)}})]})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"add"})})]}),Object(o.jsx)("h3",{children:"Numbers"}),Object(o.jsx)("div",{children:E.map((function(e){return Object(o.jsx)(a,{"henkil\xf6":e,handlePoista:J},e.name)}))})]})};t(37);i.a.render(Object(o.jsx)(g,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.78144967.chunk.js.map