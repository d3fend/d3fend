import{e as a}from"./index.2defaa64.js";async function r({fetch:t}){const e=await t("/faq/faq.json"),o=await e.json();if(e.status!==200)throw a(500,o.message);return{faq:o}}const n=Object.freeze(Object.defineProperty({__proto__:null,load:r},Symbol.toStringTag,{value:"Module"}));export{n as _,r as l};