import{w as j,r as i,p as P,j as e,S as f,L as b}from"./index-660d126b.js";import{T as v}from"./Table-cbaeae2a.js";import{A as w}from"./Alert-e5aa8ee6.js";import{S as A}from"./Search-68c612fa.js";import{S as L}from"./StatusButtons-01a826e5.js";import{g as R,P as k}from"./Pagination-a5b0422f.js";import{S as p}from"./types-9dadba29.js";import"./Label-4c846b7c.js";import"./Input-fbe04029.js";import"./x-a6635ec2.js";import"./ButtonGroup-07933ff6.js";import"./Card-0007d0c0.js";import"./CardBody-ff2bad32.js";const y=(a,o,r,n)=>{const s=new URLSearchParams;return s.append("page",String(a)),s.append("perPage",String(o)),r&&s.append("search",r),n&&s.append("status",n),j(`/api/paged-stores?${s.toString()}`,{errorMessage:"Failed to get paged stores"})},Q=()=>{const[a,o]=i.useState(1),[r,n]=i.useState(R()),[s,h]=i.useState(p.Active),[d,l]=i.useState(""),m=y(a,r,d,s?p[s]:void 0),{data:c,error:g,isLoading:u,refetch:x}=P(["stores",a,r,s,d],m,{keepPreviousData:!0}),S=t=>{o(1),n(t)};return u?e.jsx(f,{className:"d-block mx-auto"}):g?e.jsx(w,{color:"danger",toggle:()=>x(),children:"Unable to fetch stores"}):e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"mb-4",children:"Stores"}),c&&e.jsxs(e.Fragment,{children:[e.jsx(A,{searchText:d,onSearch:l,children:e.jsx(L,{status:s,setStatus:h})}),e.jsxs(v,{responsive:!0,striped:!0,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Handle"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"# Admins"}),e.jsx("th",{children:"Status"})]})}),e.jsx("tbody",{children:c.items.map(t=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:e.jsx(b,{to:`/store-admin/${t.handle}`,children:t.handle})}),e.jsx("td",{children:t.name}),e.jsx("td",{children:t.adminsCount}),e.jsx("td",{children:p[t.status]})]},t.id))})]}),e.jsx(k,{pagedResult:c,onPageSelected:o,perPage:r,onPerPageSelected:S})]})]})};export{Q as default};
