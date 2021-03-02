(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{85:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return u})),n.d(e,"toc",(function(){return s})),n.d(e,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(88)),c=n(90),i={id:"outputs-diagnostics",title:"Outputs and diagnostics"},u={unversionedId:"outputs-diagnostics",id:"outputs-diagnostics",isDocsHomePage:!1,title:"Outputs and diagnostics",description:"The MMM code will automatically generate & select models and then autorank the",source:"@site/docs/outputs-diagnostics.md",slug:"/outputs-diagnostics",permalink:"/Robyn/docs/outputs-diagnostics",editUrl:"https://github.com/facebookexperimental/Robyn/docs/outputs-diagnostics.md",version:"current",sidebar:"someSidebar",previous:{title:"Calibration using experimental results",permalink:"/Robyn/docs/calibration"},next:{title:"Getting help and contributing",permalink:"/Robyn/docs/contributing"}},s=[],l={toc:s};function p(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The MMM code will automatically generate & select models and then autorank the\ntop models according to statistical properties ",Object(a.b)("img",{alt:"Model output",src:Object(c.a)("/img/output1.png")})),Object(a.b)("p",null,"MMM Code will produce following visual output graphs:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Sales decomp (Waterfall chart)")),Object(a.b)("img",{alt:"Model charts",src:Object(c.a)("/img/bestDecomp2.png")}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Sales decomp over time ",Object(a.b)("img",{alt:"Model charts",src:Object(c.a)("/img/plotBestDecomp.png")}))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Response curves ",Object(a.b)("img",{alt:"Model charts",src:Object(c.a)("/img/bestAdstock.png")})))))}p.isMDXComponent=!0},88:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=o.a.createContext({}),l=function(t){var e=o.a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return o.a.createElement(s.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},d=o.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(f,i(i({ref:e},s),{},{components:n})):o.a.createElement(f,i({ref:e},s))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return c}));var r=n(22),o=n(92);function a(){const{siteConfig:{baseUrl:t="/",url:e}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(t,e,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return e+n;const c=n.startsWith(e)?n:e+n.replace(/^\//,"");return a?t+c:c}(e,t,n,r)}}function c(t,e={}){const{withBaseUrl:n}=a();return n(t,e)}},92:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!r(t)}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}))}}]);