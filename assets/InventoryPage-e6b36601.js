import{w as A,j as e,B as y,b as B,e as R,r as l,p as T}from"./index-29ebecb4.js";import{R as D,C as g}from"./Col-7106f25e.js";import{C as G,a as L}from"./CardBody-f79b7743.js";import{C as Q}from"./CardHeader-058da22c.js";import{T as z}from"./Table-2fae8ad2.js";import{t as M}from"./toQuery-95abe6fa.js";import{P as u}from"./types-9dadba29.js";import{g as U,P as W}from"./Pagination-f8b1ecd4.js";import{S as q}from"./Search-9d8b76b4.js";import{E as H}from"./ErrorDisplay-926af4d8.js";import{S as J}from"./Spinner-99079439.js";import{C as Y}from"./Currency-9311fda6.js";import{B as _}from"./ButtonGroup-cb6cbaf6.js";import{F as K}from"./FilterPanel-ecbb19ac.js";import"./Label-25c4d9a0.js";import"./Input-092d3532.js";import"./x-d20e24f6.js";import"./Alert-53afee14.js";import"./currency-symbol-map-2c95d993.js";import"./strings-0c217f2f.js";import"./floating-ui.dom-b7824c3c.js";import"./jewelleryClasses-0e5a29b0.js";const O=n=>{const{filters:c={category:"",eras:[],conditions:[],jewellery:[]},...i}=n,o=M({...i,...c});return A(`/api/inventory?${o}`,{errorMessage:"Failed to get inventory"})},V=({published:n,setPublished:c,className:i})=>{const o=[{value:u.Published,label:"Published"},{value:u.Unpublished,label:"Unpublished"},{value:u.Any,label:"Any"}],p=t=>{c(t)};return e.jsx(_,{size:"sm",className:i,children:o.map(t=>e.jsx(y,{color:n===t.value?"primary":"secondary",onClick:()=>p(t.value),children:t.label},t.value))})},Pe=({handle:n})=>{const{authData:c}=B(),i=R(),[o,p]=l.useState(""),[t,P]=l.useState(u.Any),[x,j]=l.useState(1),[m,C]=l.useState(U()),[s,b]=l.useState({}),v=r=>{j(1),C(r)},w=O({handle:n,search:o,published:t,page:x,perPage:m,filters:s}),{data:h,error:f,isLoading:S}=T(["inventory",n,o,t,x,m,s],w,{enabled:!!n&&c.isAuthenticated,keepPreviousData:!0});l.useEffect(()=>{j(1)},[o,t,s]);const I=r=>{i(`/store-admin/${n}/edit-listing/${r}`)},E=()=>{i(`/store-admin/${n}/edit-listing/_`)},$=r=>{b(r)},F=r=>r.filter(a=>{let d=!0;return s.category&&a.category!==s.category&&(d=!1),s.condition&&s.condition.length>0&&!s.condition.includes(a.condition)&&(d=!1),s.era&&s.era.length>0&&!s.era.includes(a.era)&&(d=!1),s.jewellery&&s.jewellery.length>0&&a.category==="jewellery"&&!s.jewellery.includes(a.jewelleryClass||"")&&(d=!1),d}),N=r=>{const a=[`Category: ${r.category}`,`Era: ${r.era}`,`Condition: ${r.condition}`];return r.category==="jewellery"&&r.jewelleryClass&&a.push(`Jewellery Type: ${r.jewelleryClass}`),a.join(`
`)};if(S)return e.jsx(J,{});if(f)return e.jsx(H,{error:f});const k=h?F(h.items):[];return e.jsxs(G,{children:[e.jsxs(Q,{className:"d-flex justify-content-between align-items-center",children:[e.jsx("h2",{children:"Inventory"}),e.jsx(y,{color:"primary",onClick:E,children:"Create New Listing"})]}),e.jsx(L,{children:e.jsxs(D,{children:[e.jsx(g,{md:3,children:e.jsx(K,{onFilterChange:$,filters:s})}),e.jsxs(g,{md:9,children:[e.jsx("div",{className:"mb-3",children:e.jsx(q,{searchText:o,onSearch:p,children:e.jsx(V,{published:t,setPublished:P})})}),e.jsxs(z,{responsive:!0,striped:!0,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Info"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Stock"}),e.jsx("th",{children:"Published"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:k.map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:r.name}),e.jsx("td",{className:"info-column",children:N(r)}),e.jsx("td",{children:e.jsx(Y,{currency:r.currency,val:r.price})}),e.jsx("td",{children:r.stockQuantity}),e.jsx("td",{children:r.publish?"Yes":"No"}),e.jsx("td",{children:e.jsx(y,{color:"secondary",size:"sm",onClick:()=>I(r.id),children:"Edit"})})]},r.id))})]}),h&&e.jsx(W,{pagedResult:h,onPageSelected:j,perPage:m,onPerPageSelected:v})]})]})})]})};export{Pe as default};
