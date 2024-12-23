import{r as n,j as r,B as c}from"./index-660d126b.js";import{B as p}from"./ButtonGroup-07933ff6.js";import{C as w}from"./Card-0007d0c0.js";import{C as x}from"./CardBody-ff2bad32.js";import{F as v,L}from"./Label-4c846b7c.js";import{I as f}from"./Input-fbe04029.js";function d(e,o){if(e==null)return{};var l={},a=Object.keys(e),t,i;for(i=0;i<a.length;i++)t=a[i],!(o.indexOf(t)>=0)&&(l[t]=e[t]);return l}var j=["color"],P=n.forwardRef(function(e,o){var l=e.color,a=l===void 0?"currentColor":l,t=d(e,j);return n.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t,{ref:o}),n.createElement("path",{d:"M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z",fill:a,fillRule:"evenodd",clipRule:"evenodd"}))}),b=["color"],R=n.forwardRef(function(e,o){var l=e.color,a=l===void 0?"currentColor":l,t=d(e,b);return n.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t,{ref:o}),n.createElement("path",{d:"M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",fill:a,fillRule:"evenodd",clipRule:"evenodd"}))}),y=["color"],N=n.forwardRef(function(e,o){var l=e.color,a=l===void 0?"currentColor":l,t=d(e,y);return n.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t,{ref:o}),n.createElement("path",{d:"M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z",fill:a,fillRule:"evenodd",clipRule:"evenodd"}))}),E=["color"],I=n.forwardRef(function(e,o){var l=e.color,a=l===void 0?"currentColor":l,t=d(e,E);return n.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t,{ref:o}),n.createElement("path",{d:"M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z",fill:a,fillRule:"evenodd",clipRule:"evenodd"}))});const _=({pagedResult:e,onPageSelected:o,perPage:l,onPerPageSelected:a})=>{const{page:t,hasNext:i,hasPrevious:m,totalPages:g}=e,h=()=>{o(t-1)},C=()=>{o(t+1)};return r.jsx(w,{className:"border-0",children:r.jsxs(x,{className:"d-flex align-items-center",children:[r.jsxs(p,{className:"me-3",children:[r.jsx(c,{onClick:()=>{o(0)},disabled:!m,color:"primary",children:r.jsx(N,{})}),r.jsx(c,{onClick:h,disabled:!m,color:"primary",children:r.jsx(P,{})}),r.jsx(c,{onClick:C,disabled:!i,color:"primary",children:r.jsx(R,{})}),r.jsx(c,{onClick:()=>{o(g)},disabled:!i,color:"primary",children:r.jsx(I,{})})]}),r.jsxs("span",{className:"me-3",children:["Page"," ",r.jsxs("strong",{children:[t," of ",g]})," "]}),r.jsxs(v,{className:"mb-0 me-3",children:[r.jsx(L,{for:"gotoPage",className:"me-2",children:"Go to page:"}),r.jsx(f,{type:"number",id:"gotoPage",defaultValue:t,onChange:s=>{const u=s.target.value?Number(s.target.value):1;o(u)},style:{width:"100px"},min:1,max:g})]}),r.jsx(v,{className:"mb-0",children:r.jsx(f,{type:"select",value:l.toString(),onChange:s=>{const u=Number(s.target.value);window.localStorage.setItem("rowsPerPage",s.target.value),a(u)},children:[10,20,50,100].map(s=>r.jsxs("option",{value:s.toString(),children:["Show ",s]},s))})})]})})};function G(){const e=parseInt(window.localStorage.getItem("rowsPerPage")||"",10);if(e)return e;const o=20;return window.localStorage.setItem("rowsPerPage",o.toString()),o}export{_ as P,G as g};
