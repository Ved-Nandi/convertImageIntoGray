(()=>{var e,t,r,n,o,a,i,s={},l={};function c(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={id:e,loaded:!1,exports:{}};return s[e](r,r.exports,c),r.loaded=!0,r.exports}c.m=s,e="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r=e=>{e&&(e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},n=e=>!--e.r&&e(),o=(e,t)=>e?e.push(t):n(t),c.a=(a,i,s)=>{var l,c,u,p=s&&[],d=a.exports,f=!0,m=!1,b=(t,r,n)=>{m||(m=!0,r.r+=t.length,t.map(((t,o)=>t[e](r,n))),m=!1)},h=new Promise(((e,t)=>{u=t,c=()=>(e(d),r(p),p=0)}));h[t]=d,h[e]=(e,t)=>{if(f)return n(e);l&&b(l,e,t),o(p,e),h.catch(t)},a.exports=h,i((a=>{if(!a)return c();var i,s;l=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var i=[];a.then((e=>{s[t]=e,r(i),i=0}));var s={};return s[e]=(e,t)=>(o(i,e),a.catch(t)),s}}var l={};return l[e]=e=>n(e),l[t]=a,l})))(a);var u=new Promise(((e,r)=>{(i=()=>e(s=l.map((e=>e[t])))).r=0,b(l,i,r)}));return i.r?u:s})).then(c,u),f=!1},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>e+".index.js",c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},i="pro:",c.l=(e,t,r,n)=>{if(a[e])a[e].push(t);else{var o,s;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var p=l[u];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==i+r){o=p;break}}o||(s=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.setAttribute("data-webpack",i+r),o.src=e),a[e]=[t];var d=(t,r)=>{o.onerror=o.onload=null,clearTimeout(f);var n=a[e];if(delete a[e],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),s&&document.head.appendChild(o)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.v=(e,t,r,n)=>{var o=fetch(c.p+""+r+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(o,n).then((t=>Object.assign(e,t.instance.exports))):o.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,n))).then((t=>Object.assign(e,t.instance.exports)))},(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e})(),(()=>{var e={179:0};c.f.j=(t,r)=>{var n=c.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=c.p+c.u(t),i=new Error;c.l(a,(r=>{if(c.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,i,s]=r,l=0;if(a.some((t=>0!==e[t]))){for(n in i)c.o(i,n)&&(c.m[n]=i[n]);s&&s(c)}for(t&&t(r);l<a.length;l++)o=a[l],c.o(e,o)&&e[o]&&e[o][0](),e[a[l]]=0},r=self.webpackChunkpro=self.webpackChunkpro||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),console.log("hello"),async function(){let e=null;try{e=await c.e(235).then(c.bind(c,235))}catch(e){return void console.error(e)}console.log(e);const t=document.getElementById("upload"),r=new FileReader;r.onloadend=()=>{let n=r.result.replace(/^data:image\/(png|jpeg|jpg);base64,/,"");console.log(t.files[0]);const o=e.gray_scale(n);document.getElementById("new-img").setAttribute("src",o)},t.addEventListener("change",(()=>{r.readAsDataURL(t.files[0])}))}()})();