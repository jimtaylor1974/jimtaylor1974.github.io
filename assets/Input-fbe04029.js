import{P as i,t as $,R as P,ag as R,m as B,c as D}from"./index-660d126b.js";function d(t){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(t)}var W=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"];function v(){return v=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},v.apply(this,arguments)}function L(t,e){if(t==null)return{};var o=V(t,e),r,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function V(t,e){if(t==null)return{};var o={},r=Object.keys(t),n,a;for(a=0;a<r.length;a++)n=r[a],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}function q(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function j(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function A(t,e,o){return e&&j(t.prototype,e),o&&j(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function C(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},h(t,e)}function F(t){var e=H();return function(){var r=y(t),n;if(e){var a=y(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return G(this,n)}}function G(t,e){if(e&&(d(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return g(t)}function g(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function H(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},y(t)}var J={children:i.node,type:i.string,size:i.oneOfType([i.number,i.string]),bsSize:i.string,valid:i.bool,invalid:i.bool,tag:$,innerRef:i.oneOfType([i.object,i.func,i.string]),plaintext:i.bool,addon:i.bool,className:i.string,cssModule:i.object},w=function(t){C(o,t);var e=F(o);function o(r){var n;return q(this,o),n=e.call(this,r),n.getRef=n.getRef.bind(g(n)),n.focus=n.focus.bind(g(n)),n}return A(o,[{key:"getRef",value:function(n){this.props.innerRef&&this.props.innerRef(n),this.ref=n}},{key:"focus",value:function(){this.ref&&this.ref.focus()}},{key:"render",value:function(){var n=this.props,a=n.className,x=n.cssModule,m=n.type,f=m===void 0?"text":m,l=n.bsSize,S=n.valid,O=n.invalid,p=n.tag,z=n.addon,_=n.plaintext,I=n.innerRef,s=L(n,W),T=["switch","radio","checkbox"].indexOf(f)>-1,k=/\D/g,N=f==="textarea",b=f==="select",E=f==="range",u=p||(b||N?f:"input"),c="form-control";_?(c="".concat(c,"-plaintext"),u=p||"input"):E?c="form-range":b?c="form-select":T&&(z?c=null:c="form-check-input"),s.size&&k.test(s.size)&&(R(`Please use the prop "bsSize" instead of the "size" to bootstrap's input sizing.`),l=s.size,delete s.size);var M=B(D(a,O&&"is-invalid",S&&"is-valid",l?b?"form-select-".concat(l):"form-control-".concat(l):!1,c),x);return(u==="input"||p&&typeof p=="function")&&(s.type=f==="switch"?"checkbox":f),s.children&&!(_||f==="select"||typeof u!="string"||u==="select")&&(R('Input with a type of "'.concat(f,'" cannot have children. Please use "value"/"defaultValue" instead.')),delete s.children),P.createElement(u,v({},s,{ref:I,className:M,"aria-invalid":O}))}}]),o}(P.Component);w.propTypes=J;const Q=w;export{Q as I};
