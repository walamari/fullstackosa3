(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t(14),r=t.n(i),o=t(2),a=t(3),u=function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("p",{children:[e.henkil\u00f6.name," ",e.henkil\u00f6.number," ",Object(c.jsx)("button",{onClick:e.handlePoista,id:e.henkil\u00f6.id,type:"submit",children:"delete"})]})})},l=function(e,n){return e.filter((function(e){return-1!==e.name.toLowerCase().indexOf(n.toLowerCase())}))},s=function(e,n){for(var t=0;t<n.length;t++)if(e.name.toUpperCase().trim()===n[t].name.toUpperCase().trim())return t;return-1},d=t(4),j=t.n(d),b="/api/persons",h=function(){return j.a.get(b).then((function(e){return e.data}))},f=function(e){return j.a.post(b,e).then((function(e){return e.data}))},m=function(e){return j.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},O=function(e){return j.a.put("".concat(b,"/").concat(e.id),e).then((function(e){return e.data}))},p=function(e){var n=e.message;return null===n?null:Object(c.jsx)("div",{className:"error",children:n})},g=function(){var e=Object(o.useState)([]),n=Object(a.a)(e,2),t=n[0],i=n[1],r=Object(o.useState)([]),d=Object(a.a)(r,2),j=d[0],b=d[1],g=Object(o.useState)(""),x=Object(a.a)(g,2),v=x[0],w=x[1],k=Object(o.useState)(""),C=Object(a.a)(k,2),S=C[0],y=C[1],D=Object(o.useState)(null),P=Object(a.a)(D,2),T=P[0],E=P[1];Object(o.useEffect)((function(){console.log("effect"),h().then((function(e){i(e)}))}),[]),console.log("persons"),console.log(t);var J=S.length<1?t:l(t,S),L=function(e){console.log("event.target.id"),console.log(e.target.id),window.confirm("Delete "+e.target.name+" ?")&&(m(e.target.id).then((function(n){i(t.filter((function(n){return n.id!==e.target.id})))})),E("Deleted ".concat(e.target.name)),setTimeout((function(){E(null)}),5e3))};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(p,{message:T}),Object(c.jsxs)("p",{children:[" filter shown with: ",Object(c.jsx)("input",{onChange:function(e){e.preventDefault(),y(e.target.value)}})]}),Object(c.jsx)("h3",{children:"add a new"}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={name:j,number:v,id:String};if(-1===s(n,t))f(n).then((function(e){i(t.concat(e)),b(""),w("")})),E("Added ".concat(n.name)),setTimeout((function(){E(null)}),5e3);else{var c=s(n,t);if(window.confirm(j+" is already added to phonebook, replace the old number with a new one?")){var r={name:t[c].name,number:n.number,id:n.id};O(r).then((function(e){i(t.map((function(e){return e.id===r.id?r:e})))})),E("".concat(n.name," number change")),setTimeout((function(){E(null)}),5e3)}}},children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:[" name: ",Object(c.jsx)("input",{value:j,onChange:function(e){b(e.target.value)}})]}),Object(c.jsxs)("p",{children:[" number: ",Object(c.jsx)("input",{value:v,onChange:function(e){w(e.target.value)}})]})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]}),Object(c.jsx)("h3",{children:"Numbers"}),Object(c.jsx)("div",{children:J.map((function(e){return Object(c.jsx)(u,{"henkil\xf6":e,handlePoista:L},e.name)}))})]})};t(37);r.a.render(Object(c.jsx)(g,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.12209740.chunk.js.map