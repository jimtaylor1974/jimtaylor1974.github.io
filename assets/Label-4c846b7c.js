import{P as o,t as _,m as P,c as x,R as $,a5 as E}from"./index-660d126b.js";var F=["className","cssModule","row","disabled","check","inline","floating","tag","switch"];function k(){return k=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},k.apply(this,arguments)}function R(e,a){if(e==null)return{};var r=G(e,a),t,n;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(a.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function G(e,a){if(e==null)return{};var r={},t=Object.keys(e),n,l;for(l=0;l<t.length;l++)n=t[l],!(a.indexOf(n)>=0)&&(r[n]=e[n]);return r}var I={children:o.node,row:o.bool,check:o.bool,switch:o.bool,inline:o.bool,floating:o.bool,disabled:o.bool,tag:_,className:o.string,cssModule:o.object};function q(e){var a=e.className,r=e.cssModule,t=e.row,n=e.disabled,l=e.check,m=e.inline,y=e.floating,u=e.tag,c=u===void 0?"div":u,h=e.switch,d=R(e,F),i=l||h,v=P(x(a,t?"row":!1,i?"form-check":"mb-3",h?"form-switch":!1,i&&m?"form-check-inline":!1,i&&n?"disabled":!1,y&&"form-floating"),r);return c==="fieldset"&&(d.disabled=n),$.createElement(c,k({},d,{className:v}))}q.propTypes=I;var A=["className","cssModule","hidden","widths","tag","check","size","for"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},T.apply(this,arguments)}function w(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function B(e,a){if(e==null)return{};var r=D(e,a),t,n;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(a.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function D(e,a){if(e==null)return{};var r={},t=Object.keys(e),n,l;for(l=0;l<t.length;l++)n=t[l],!(a.indexOf(n)>=0)&&(r[n]=e[n]);return r}var H=["xs","sm","md","lg","xl","xxl"],j=o.oneOfType([o.number,o.string]),f=o.oneOfType([o.bool,o.string,o.number,o.shape({size:j,order:j,offset:j})]),J={children:o.node,hidden:o.bool,check:o.bool,size:o.string,for:o.string,tag:_,className:o.string,cssModule:o.object,xs:f,sm:f,md:f,lg:f,xl:f,xxl:f,widths:o.array},C=function(a,r,t){return t===!0||t===""?a?"col":"col-".concat(r):t==="auto"?a?"col-auto":"col-".concat(r,"-auto"):a?"col-".concat(t):"col-".concat(r,"-").concat(t)};function K(e){var a=e.className,r=e.cssModule,t=e.hidden,n=e.widths,l=n===void 0?H:n,m=e.tag,y=m===void 0?"label":m,u=e.check,c=e.size,h=e.for,d=B(e,A),i=[];l.forEach(function(b,z){var s=e[b];if(delete d[b],!(!s&&s!=="")){var p=!z,O;if(E(s)){var g,M=p?"-":"-".concat(b,"-");O=C(p,b,s.size),i.push(P(x((g={},w(g,O,s.size||s.size===""),w(g,"order".concat(M).concat(s.order),s.order||s.order===0),w(g,"offset".concat(M).concat(s.offset),s.offset||s.offset===0),g))),r)}else O=C(p,b,s),i.push(O)}});var v=c||i.length,N=!(u||v),L=P(x(a,t?"visually-hidden":!1,u?"form-check-label":!1,c?"col-form-label-".concat(c):!1,i,v?"col-form-label":!1,N?"form-label":!1),r);return $.createElement(y,T({htmlFor:h},d,{className:L}))}K.propTypes=J;export{q as F,K as L};
