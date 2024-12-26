import{w as y,r as c,p as E,j as o,B as m,Q as R}from"./index-29ebecb4.js";import{R as p,C as P}from"./Col-7106f25e.js";import{C as x,a as g}from"./CardBody-f79b7743.js";import{C as U}from"./CardHeader-058da22c.js";import{M as b,a as v,b as B}from"./ModalBody-4728dbd0.js";import{S as O}from"./Spinner-99079439.js";import{E as k}from"./ErrorDisplay-926af4d8.js";import{L as j,E as D}from"./EditListing-0157d9e5.js";import"./Alert-53afee14.js";import"./index.esm-28c77aa9.js";import"./useMutation-742de80f.js";import"./Form-feffa48a.js";import"./Label-25c4d9a0.js";import"./types-9dadba29.js";import"./GenericInput-69b8ebf0.js";import"./Input-092d3532.js";import"./jewelleryClasses-0e5a29b0.js";import"./DisplayFormError-41029f3c.js";import"./UnitType-2ae5b94b.js";import"./Badge-dcfa0ac5.js";import"./CardImg-0d61cdbd.js";import"./CardTitle-03adcecb.js";const G=s=>y(`/api/unlisted-photos?handle=${s}`,{errorMessage:"Failed to get unlisted photos"}),no=({handle:s,storeInfo:u})=>{const[r,l]=c.useState([]),[f,i]=c.useState(!1),S=G(s),{data:a,isLoading:I,error:h,refetch:n}=E(["unlistedPhotos",s],()=>S()),C=()=>{n(),R.success("Photo uploaded successfully")},M=()=>{n()},L=e=>{l(t=>t.some(d=>d.photoId===e.photoId)?t.filter(d=>d.photoId!==e.photoId):[...t,e])},N=()=>{i(!0)},w=()=>{i(!1),l([]),n()};return I?o.jsx(O,{}):h?o.jsx(k,{error:h}):o.jsxs(x,{children:[o.jsx(U,{children:o.jsx("h2",{children:"Unlisted Photos"})}),o.jsxs(g,{children:[o.jsx(p,{className:"mb-3",children:o.jsx(P,{children:o.jsx(j,{handle:s,photoId:null,isMain:!1,onPhotoUploaded:C,onPhotoRemoved:()=>{},onSetMainPhoto:()=>{},onPhotoProcessingStart:()=>{},onPhotoProcessingEnd:()=>{}})})}),o.jsx(p,{children:a==null?void 0:a.map(e=>o.jsx(P,{md:4,className:"mb-3",children:o.jsx(x,{children:o.jsxs(g,{children:[o.jsx(j,{handle:s,photoId:e.photoId,isMain:!1,onPhotoUploaded:()=>{},onPhotoRemoved:()=>M(),onSetMainPhoto:()=>{},onPhotoProcessingStart:()=>{},onPhotoProcessingEnd:()=>{}}),o.jsx("div",{className:"mt-2",children:o.jsx(m,{color:r.some(t=>t.photoId===e.photoId)?"primary":"secondary",onClick:()=>L(e),children:r.some(t=>t.photoId===e.photoId)?"Selected":"Select"})})]})})},e.photoId))}),o.jsx(m,{color:"primary",onClick:N,disabled:r.length===0,className:"mt-3",children:"Create New Listing with Selected Photos"})]}),o.jsxs(b,{isOpen:f,toggle:()=>i(!1),size:"lg",children:[o.jsx(v,{toggle:()=>i(!1),children:"Create New Listing"}),o.jsx(B,{children:o.jsx(D,{handle:s,storeInfo:u,itemId:"_",onSave:w,onCancel:()=>i(!1),initialPhotos:r,onPhotoDeleted:()=>n()})})]})]})};export{no as default};
