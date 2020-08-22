(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=p(n),O=r,d=u["".concat(c,".").concat(O)]||u[O]||m[O]||o;return n?a.a.createElement(d,l(l({ref:t},b),{},{components:n})):a.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=O;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(146)),c={id:"theemo.tools",title:"Tools",hide_title:!0},l={unversionedId:"api/theemo.tools",id:"api/theemo.tools",isDocsHomePage:!1,title:"Tools",description:"theemo &gt; Tools",source:"@site/../docs/api/theemo.tools.md",permalink:"/theemo/docs/api/theemo.tools",sidebar:"toolchain",previous:{title:"TokenType",permalink:"/theemo/docs/api/theemo.tokentype"},next:{title:"ReaderTool",permalink:"/theemo/docs/api/theemo.readertool"}},i=[{value:"Tools enum",id:"tools-enum",children:[]},{value:"Enumeration Members",id:"enumeration-members",children:[]}],b={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/theemo/docs/api/theemo"}),"theemo")," ",">"," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/theemo/docs/api/theemo.tools"}),"Tools")),Object(o.b)("h2",{id:"tools-enum"},"Tools enum"),Object(o.b)("p",null,"An list of known tools"),Object(o.b)("p",null,"Each tool can be a ",Object(o.b)("inlineCode",{parentName:"p"},"ReaderTool"),", ",Object(o.b)("inlineCode",{parentName:"p"},"WriterTool")," or ",Object(o.b)("inlineCode",{parentName:"p"},"BuilderTool")," (multiple of that are allowed) and can be further parametrized through respective configs"),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export declare enum Tools \n")),Object(o.b)("h2",{id:"enumeration-members"},"Enumeration Members"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Member"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Value"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Figma"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("code",null,'"',"figma",'"')),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"StyleDictionary"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("code",null,'"',"style-dictionary",'"')),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Unknown"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("code",null,'"',"unknown",'"')),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}))))))}p.isMDXComponent=!0}}]);