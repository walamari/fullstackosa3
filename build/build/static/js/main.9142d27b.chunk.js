(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(14),r=n.n(i),o=n(2),u=n(3),a=function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("p",{children:[e.henkil\u00f6.name," ",e.henkil\u00f6.number," ",Object(c.jsx)("button",{id:e.henkil\u00f6.id,type:"submit",children:"delete"})]})})},l=function(e,t){return e.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())}))},s=function(e,t){for(var n=0;n<t.length;n++)if(e.name.toUpperCase().trim()===t[n].name.toUpperCase().trim())return n;return-1},d=n(4),j=n.n(d),b="/api/persons",f=function(){return j.a.get(b).then((function(e){return e.data}))},h=function(e){return j.a.post(b,e).then((function(e){return e.data}))},m=function(e){return j.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},O=function(e){return j.a.put("".concat(b,"/").concat(e.id),e).then((function(e){return e.data}))},p=function(e){var t=e.message;return null===t?null:Object(c.jsx)("div",{className:"error",children:t})},g=function(){var e=Object(o.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(o.useState)([]),d=Object(u.a)(r,2),j=d[0],b=d[1],g=Object(o.useState)(""),x=Object(u.a)(g,2),v=x[0],w=x[1],k=Object(o.useState)(""),C=Object(u.a)(k,2),S=C[0],y=C[1],D=Object(o.useState)(null),T=Object(u.a)(D,2),E=T[0],J=T[1];Object(o.useEffect)((function(){console.log("effect"),f().then((function(e){i(e)}))}),[]),console.log("persons"),console.log(n);var L=S.length<1?n:l(n,S);return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(p,{message:E}),Object(c.jsxs)("p",{children:[" filter shown with: ",Object(c.jsx)("input",{onChange:function(e){e.preventDefault(),y(e.target.value)}})]}),Object(c.jsx)("h3",{children:"add a new"}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={name:j,number:v,id:j};if(-1===s(t,n))h(t).then((function(e){i(n.concat(e)),b(""),w("")})),J("Added ".concat(t.name)),setTimeout((function(){J(null)}),5e3);else{var c=s(t,n);if(window.confirm(j+" is already added to phonebook, replace the old number with a new one?")){var r={name:n[c].name,number:t.number,id:n[c].id};O(r).then((function(e){i(n.map((function(e){return e.id===r.id?r:e})))})),J("".concat(t.name," number change")),setTimeout((function(){J(null)}),5e3)}}},children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:[" name: ",Object(c.jsx)("input",{value:j,onChange:function(e){b(e.target.value)}})]}),Object(c.jsxs)("p",{children:[" number: ",Object(c.jsx)("input",{value:v,onChange:function(e){w(e.target.value)}})]})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]}),Object(c.jsx)("h3",{children:"Numbers"}),Object(c.jsx)("div",{onClick:function(e){console.log("event.target.id"),console.log(e.target.id),window.confirm("Delete "+e.target.id+" ?")&&(m(e.target.id).then((function(t){i(n.filter((function(t){return t.id!==e.target.id})))})),J("Deleted ".concat(e.target.id)),setTimeout((function(){J(null)}),5e3))},children:L.map((function(e){return Object(c.jsx)(a,{"henkil\xf6":e},e.name)}))})]})};n(37);r.a.render(Object(c.jsx)(g,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.9142d27b.chunk.js.map