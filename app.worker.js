(()=>{"use strict";var e,t,r,n,o,a,i,s={451:(e,t,r)=>{var n=self;r.e(984).then(r.bind(r,984)).then((function(e){e.init(),n.addEventListener("message",(function(t){if("test"===t.data.type){console.log("Generating image data for...",t.data);var r=new ImageData(new Uint8ClampedArray(e.get_buffer(t.data.width,t.data.height,t.data.row0,t.data.rows).buffer),t.data.width,t.data.rows);n.postMessage({type:"image",width:t.data.width,height:t.data.height,row0:t.data.row0,rows:t.data.rows,data:r})}})),n.postMessage({type:"ready"})}))}},c={};function u(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={id:e,loaded:!1,exports:{}};return s[e](r,r.exports,u),r.loaded=!0,r.exports}u.m=s,u.c=c,u.d=(e,t)=>{for(var r in t)u.o(t,r)&&!u.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((t,r)=>(u.f[r](e,t),t)),[])),u.u=e=>e+".app.worker.js",u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;u.g.importScripts&&(e=u.g.location+"");var t=u.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),u.p=e})(),(()=>{var e={94:1};u.f.i=(t,r)=>{e[t]||importScripts(u.p+u.u(t))};var t=self.webpackChunklucifer=self.webpackChunklucifer||[],r=t.push.bind(t);t.push=t=>{var[n,o,a]=t;for(var i in o)u.o(o,i)&&(u.m[i]=o[i]);for(a&&a(u);n.length;)e[n.pop()]=1;r(t)}})(),o={},a={217:function(){return{"./index_bg.js":{__wbg_new_693216e109162396:function(){return void 0===e&&(e=u.c[41].exports),e.Ih()},__wbg_stack_0ddaca5d1abfb52f:function(e,r){return void 0===t&&(t=u.c[41].exports),t.yq(e,r)},__wbg_error_09919627ac0992f5:function(e,t){return void 0===r&&(r=u.c[41].exports),r.gk(e,t)},__wbindgen_object_drop_ref:function(e){return void 0===n&&(n=u.c[41].exports),n.ug(e)}}}}},i={984:[217]},u.w={},u.f.wasm=function(e,t){(i[e]||[]).forEach((function(r,n){var i=o[r];if(i)t.push(i);else{var s,c=a[r](),d=fetch(u.p+""+{984:{217:"a1ab4639e83c15d3de40"}}[e][r]+".module.wasm");s=c&&"function"==typeof c.then&&"function"==typeof WebAssembly.compileStreaming?Promise.all([WebAssembly.compileStreaming(d),c]).then((function(e){return WebAssembly.instantiate(e[0],e[1])})):"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(d,c):d.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,c)})),t.push(o[r]=s.then((function(e){return u.w[r]=(e.instance||e).exports})))}}))},u(451)})();