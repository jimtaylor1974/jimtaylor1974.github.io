import{p as y}from"./index-660d126b.js";async function f(){try{const o=window.localStorage.getItem("location_info");if(o)return JSON.parse(o);const c="https://ipapi.co/json/",e=await window.fetch(c,{method:"GET",headers:{"Content-Type":"application/json"}}),{city:a,region:r,country_name:i,postal:s,country_code_iso3:n,currency:u,currency_name:l}=await e.json(),t={city:a,region:r,countryName:i,postal:s,locale:n&&n==="USA"?"en-US":"en-GB",currency:u,currencyName:l};return window.localStorage.setItem("location_info",JSON.stringify(t)),t}catch{return{city:"",region:"",countryName:"",postal:"",locale:"en-GB",currency:"",currencyName:""}}}const d=()=>{const{data:o}=y("locationInfo",f);return o??{city:"",region:"",countryName:"",postal:"",locale:"en-GB",currency:"",currencyName:""}};export{d as u};
