import{P as i,t as l,m as p,c as u,R as f}from"./index-29ebecb4.js";var g=["className","cssModule","tag"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},o.apply(this,arguments)}function m(e,n){if(e==null)return{};var a=d(e,n),t,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function d(e,n){if(e==null)return{};var a={},t=Object.keys(e),r,s;for(s=0;s<t.length;s++)r=t[s],!(n.indexOf(r)>=0)&&(a[r]=e[r]);return a}var v={className:i.string,cssModule:i.object,tag:l};function b(e){var n=e.className,a=e.cssModule,t=e.tag,r=t===void 0?"div":t,s=m(e,g),c=p(u(n,"card-header"),a);return f.createElement(r,o({},s,{className:c}))}b.propTypes=v;export{b as C};