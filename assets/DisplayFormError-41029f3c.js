import{j as t}from"./index-29ebecb4.js";const a=({error:e,fieldDisplayName:r})=>{if(!e)return null;let s=e.message;return!s&&e.type==="required"&&(s=`${r} is required`),t.jsx("div",{className:"text-danger small",children:s})};export{a as D};