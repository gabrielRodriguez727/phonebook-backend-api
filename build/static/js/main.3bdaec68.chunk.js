(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{11:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var c=t(1),o=t.n(c),r=t(5),a=t.n(r),i=t(3),s=t(2),u=t(0),l=function(e){var n=e.onChangeFilterHandler;console.log({onChangeFilterHandler:n});var t=Object(c.useState)(""),o=Object(s.a)(t,2),r=o[0],a=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("strong",{children:"Filter show by: "}),Object(u.jsx)("input",{onChange:function(e){console.log(e.target.value),a(e.target.value),n(e.target.value)},value:r})]})},j=function(e){var n=e.id,t=e.name,c=e.number,o=e.onClickDeleteHandler;return console.log(t,c),Object(u.jsxs)("li",{children:[t," ",c," ",Object(u.jsx)("button",{onClick:function(){o({id:n,name:t})},children:"delete"})]})},d=function(e){var n=e.onSubmitHandler,t=Object(c.useState)(""),o=Object(s.a)(t,2),r=o[0],a=o[1],i=Object(c.useState)(""),l=Object(s.a)(i,2),j=l[0],d=l[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n({name:r,number:j}),a(""),d("")},children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{onChange:function(e){console.log(e.target.value),a(e.target.value)},value:r})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{onChange:function(e){console.log(e.target.value),d(e.target.value)},value:j})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},f={ERROR:"red",SUCCESS:"green"},b=function(e){var n=e.message,t={color:e.colorType,background:"lightgrey",fontSize:"20",borderStyle:"solid",borderRadius:"5",padding:"10",marginBottom:"10"};return n?Object(u.jsx)("div",{style:t,children:n}):null},m="/api/persons";t(11);var h=function(){console.log({NotificationColorTypes:f});var e=Object(c.useState)([]),n=Object(s.a)(e,2),t=n[0],o=n[1],r=Object(c.useState)(""),a=Object(s.a)(r,2),h=a[0],O=a[1],g=Object(c.useState)({}),p=Object(s.a)(g,2),v=p[0],S=p[1];Object(c.useEffect)((function(){new Promise((function(e,n){fetch(m).then((function(n){e(n.json())})).catch((function(e){return n(e)}))})).then((function(e){o(e)}))}),[]);Object(c.useEffect)((function(){v.message&&setTimeout((function(){return S({message:""})}),3500)}),[v]);var x=function(e){var n,c=e.id,r=e.name;window.confirm("Borrar a ".concat(r))&&(n=c,new Promise((function(e,t){fetch(m+"/".concat(n),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(n){e(n)})).catch((function(e){return t(e)}))}))).then((function(){var e=t.find((function(e){return e.id===c}));o(t.filter((function(e){return e.id!==c}))),S({message:"".concat(e.name," fue eliminado correctamete"),colorType:f.SUCCESS})})).catch((function(e){console.error(e),S({message:e.message,colorType:f.ERROR})}))},y=h?t.filter((function(e){return e.name.toLowerCase().includes(h)})):t;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Phonebook"}),Object(u.jsx)(l,{onChangeFilterHandler:function(e){O(e)}}),Object(u.jsx)("h2",{children:"Add new"}),Object(u.jsx)(b,{message:v.message,colorType:v.colorType}),Object(u.jsx)(d,{onSubmitHandler:function(e){var n,c=e.name,r=e.number,a=t.find((function(e){return e.name===c}));a?window.confirm("Actualizar a ".concat(c))&&(n=Object(i.a)(Object(i.a)({},a),{},{number:r}),new Promise((function(e,t){fetch(m+"/".concat(n.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){200===n.status?e(n.json()):t(n.json())})).catch((function(e){return t(e)}))}))).then((function(e){o(t.map((function(n){return n.name!==c?n:e}))),S({message:"".concat(c," fue actualizado correctamente"),colorType:f.SUCCESS})})).catch((function(e){console.error(e),S({message:e.message,colorType:f.ERROR})})):function(e){return new Promise((function(n,t){fetch(m,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){201===e.status?n(e.json()):t(e.json())})).catch((function(e){return t(e)}))}))}({name:c,number:r}).then((function(){o(t.concat({name:c,number:r})),S({message:"".concat(c," fue agregado correctamente"),colorType:f.SUCCESS})})).catch((function(e){console.error(e),S({message:e.message,colorType:f.ERROR})}))}}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)("ul",{children:y.map((function(e){return Object(u.jsx)(j,Object(i.a)({onClickDeleteHandler:x},e),e.id)}))})]})};a.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.3bdaec68.chunk.js.map