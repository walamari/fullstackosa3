(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t(14),r=t.n(i),o=t(2),u=t(3),a=function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("p",{children:[e.henkil\u00f6.name," ",e.henkil\u00f6.number," ",Object(c.jsx)("button",{onClick:e.handlePoista,id:e.henkil\u00f6.id,type:"submit",children:"delete"})]})})},l=function(e,n){return e.filter((function(e){return-1!==e.name.toLowerCase().indexOf(n.toLowerCase())}))},s=function(e,n){for(var t=0;t<n.length;t++)if(e.name.toUpperCase().trim()===n[t].name.toUpperCase().trim())return t;return-1},d=t(4),j=t.n(d),f="/api/persons",h=function(){return j.a.get(f).then((function(e){return e.data}))},b=function(e){return j.a.post(f,e).then((function(e){return e.data}))},m=function(e){return j.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},O=function(e){return j.a.put("".concat(f,"/").concat(e.id),e).then((function(e){return e.data}))},p=function(e){var n=e.message;return null===n?null:Object(c.jsx)("div",{className:"error",children:n})},v=function(){var e=Object(o.useState)([]),n=Object(u.a)(e,2),t=n[0],i=n[1],r=Object(o.useState)(""),d=Object(u.a)(r,2),j=d[0],f=d[1],v=Object(o.useState)(""),g=Object(u.a)(v,2),x=g[0],w=g[1],k=Object(o.useState)(""),C=Object(u.a)(k,2),S=C[0],y=C[1],D=Object(o.useState)(null),T=Object(u.a)(D,2),N=T[0],P=T[1];Object(o.useEffect)((function(){console.log("effect"),h().then((function(e){i(e)}))}),[]),console.log("persons"),console.log(t);var E=S.length<1?t:l(t,S),J=function(e){var n=t.filter((function(n){return n.id===e.target.id}));window.confirm("Delete "+n[0].name+" ?")&&(m(e.target.id).then((function(n){i(t.filter((function(n){return n.id!==e.target.id})))})),P("Deleted ".concat(n[0].name)),setTimeout((function(){P(null)}),5e3))};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(p,{message:N}),Object(c.jsxs)("p",{children:[" filter shown with: ",Object(c.jsx)("input",{onChange:function(e){e.preventDefault(),y(e.target.value)}})]}),Object(c.jsx)("h3",{children:"add a new"}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={name:j,number:x,id:String}.catch((function(e){console.log(e.response.data)}));if(0===n.number.length||0===n.name.length)return P("Nimi tai numero ei voi olla tyhj\xe4!"),void setTimeout((function(){P(null)}),5e3);if(-1===s(n,t))b(n).then((function(e){i(t.concat(e)),f(""),w("")})),P("Added ".concat(n.name)),setTimeout((function(){P(null)}),5e3);else{var c=s(n,t);if(window.confirm(j+" is already added to phonebook, replace the old number with a new one?")){var r={name:t[c].name,number:n.number,id:n.id};O(r).then((function(e){i(t.map((function(e){return e.id===r.id?r:e})))})),P("".concat(n.name," number change")),setTimeout((function(){P(null)}),5e3)}}},children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:[" name: ",Object(c.jsx)("input",{value:j,onChange:function(e){f(e.target.value)}})]}),Object(c.jsxs)("p",{children:[" number: ",Object(c.jsx)("input",{value:x,onChange:function(e){w(e.target.value)}})]})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]}),Object(c.jsx)("h3",{children:"Numbers"}),Object(c.jsx)("div",{children:E.map((function(e){return Object(c.jsx)(a,{"henkil\xf6":e,handlePoista:J},e.name)}))})]})};t(37);r.a.render(Object(c.jsx)(v,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.02bfc89a.chunk.js.map