import{w as y,r as c,p as E,j as o,B as m,Q as R}from"./index-660d126b.js";import{R as p,C as P}from"./Col-95c4f5db.js";import{C as x}from"./Card-0007d0c0.js";import{C as g}from"./CardBody-ff2bad32.js";import{C as U}from"./CardHeader-07a4f72e.js";import{M as b,a as v,b as B}from"./ModalBody-ed0339e4.js";import{S as O}from"./Spinner-f4f30a5b.js";import{E as k}from"./ErrorDisplay-52780e50.js";import{L as j,E as D}from"./EditListing-0c0d3a29.js";import"./Alert-e5aa8ee6.js";import"./index.esm-12fca3ed.js";import"./useMutation-e7c8b84b.js";import"./Form-d6175283.js";import"./Label-4c846b7c.js";import"./types-9dadba29.js";import"./GenericInput-6d7d494b.js";import"./Input-fbe04029.js";import"./jewelleryClasses-470ac029.js";import"./DisplayFormError-c2d4e36b.js";import"./UnitType-2ae5b94b.js";import"./Badge-d2d27bae.js";import"./CardImg-423f9db5.js";const G=s=>y(`/api/unlisted-photos?handle=${s}`,{errorMessage:"Failed to get unlisted photos"}),no=({handle:s,storeInfo:f})=>{const[r,l]=c.useState([]),[u,i]=c.useState(!1),S=G(s),{data:a,isLoading:C,error:h,refetch:n}=E(["unlistedPhotos",s],()=>S()),I=()=>{n(),R.success("Photo uploaded successfully")},M=()=>{n()},L=e=>{l(t=>t.some(d=>d.photoId===e.photoId)?t.filter(d=>d.photoId!==e.photoId):[...t,e])},N=()=>{i(!0)},w=()=>{i(!1),l([]),n()};return C?o.jsx(O,{}):h?o.jsx(k,{error:h}):o.jsxs(x,{children:[o.jsx(U,{children:o.jsx("h2",{children:"Unlisted Photos"})}),o.jsxs(g,{children:[o.jsx(p,{className:"mb-3",children:o.jsx(P,{children:o.jsx(j,{handle:s,photoId:null,isMain:!1,onPhotoUploaded:I,onPhotoRemoved:()=>{},onSetMainPhoto:()=>{},onPhotoProcessingStart:()=>{},onPhotoProcessingEnd:()=>{}})})}),o.jsx(p,{children:a==null?void 0:a.map(e=>o.jsx(P,{md:4,className:"mb-3",children:o.jsx(x,{children:o.jsxs(g,{children:[o.jsx(j,{handle:s,photoId:e.photoId,isMain:!1,onPhotoUploaded:()=>{},onPhotoRemoved:()=>M(),onSetMainPhoto:()=>{},onPhotoProcessingStart:()=>{},onPhotoProcessingEnd:()=>{}}),o.jsx("div",{className:"mt-2",children:o.jsx(m,{color:r.some(t=>t.photoId===e.photoId)?"primary":"secondary",onClick:()=>L(e),children:r.some(t=>t.photoId===e.photoId)?"Selected":"Select"})})]})})},e.photoId))}),o.jsx(m,{color:"primary",onClick:N,disabled:r.length===0,className:"mt-3",children:"Create New Listing with Selected Photos"})]}),o.jsxs(b,{isOpen:u,toggle:()=>i(!1),size:"lg",children:[o.jsx(v,{toggle:()=>i(!1),children:"Create New Listing"}),o.jsx(B,{children:o.jsx(D,{handle:s,storeInfo:f,itemId:"_",onSave:w,onCancel:()=>i(!1),initialPhotos:r,onPhotoDeleted:()=>n()})})]})]})};export{no as default};
