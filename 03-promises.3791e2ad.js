function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("7Y9D8");function l(e,n){return new Promise(((t,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}function u({position:n,delay:t}){e(i).Notify.success(`✅ Fulfilled promise ${n} in ${t}ms`)}function a({position:n,delay:t}){e(i).Notify.failure(`❌ Rejected promise ${n} in ${t}ms`)}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(e){e.preventDefault();const{elements:{delay:n,step:t,amount:o}}=e.currentTarget;let r=Number(n.value),i=Number(t.value),d=Number(o.value);for(let e=0;e<d;e+=1){l(e+1,r+i*e).then(u).catch(a)}}));
//# sourceMappingURL=03-promises.3791e2ad.js.map
