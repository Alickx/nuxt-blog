import{o as l,c as m,n as E,g as f,u as s,d as n,_ as o}from"./entry.8d85a088.js";const g={__name:"nuxt-error-page",props:{error:Object},setup(c){const{error:t}=c;(t.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const r=Number(t.statusCode||500),a=r===404,u=t.statusMessage??(a?"Page Not Found":"Internal Server Error"),i=t.message||t.toString(),p=void 0,_=a?n(()=>o(()=>import("./error-404.8508b0f4.js"),["./error-404.8508b0f4.js","./nuxt-link.41882d25.js","./entry.8d85a088.js","./entry.babd1e27.css","./error-404.1474f64e.css"],import.meta.url).then(e=>e.default||e)):n(()=>o(()=>import("./error-500.390fb677.js"),["./error-500.390fb677.js","./entry.8d85a088.js","./entry.babd1e27.css","./error-500.070dde72.css"],import.meta.url).then(e=>e.default||e));return(e,d)=>(l(),m(s(_),E(f({statusCode:s(r),statusMessage:s(u),description:s(i),stack:s(p)})),null,16))}},x=g;export{x as default};