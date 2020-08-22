(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{118:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(2),o=r(6),a=(r(0),r(146)),i={id:"theemo.buildertool",title:"BuilderTool",hide_title:!0},l={unversionedId:"api/theemo.buildertool",id:"api/theemo.buildertool",isDocsHomePage:!1,title:"BuilderTool",description:"theemo &gt; BuilderTool",source:"@site/../docs/api/theemo.buildertool.md",permalink:"/theemo/docs/api/theemo.buildertool",sidebar:"toolchain",previous:{title:"WriterTool",permalink:"/theemo/docs/api/theemo.writertool"},next:{title:"TheemoConfig",permalink:"/theemo/docs/api/theemo.theemoconfig"}},c=[{value:"BuilderTool interface",id:"buildertool-interface",children:[]},{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[]}],u={rightToc:c};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/theemo/docs/api/theemo"}),"theemo")," ",">"," ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/theemo/docs/api/theemo.buildertool"}),"BuilderTool")),Object(a.b)("h2",{id:"buildertool-interface"},"BuilderTool interface"),Object(a.b)("p",null,"This is for tools used during the ",Object(a.b)("inlineCode",{parentName:"p"},"build")," command and trigger the execution of that tool."),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"export interface BuilderTool \n")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"Style Dictionary may be your builder tool and executes the build process"),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("a",Object(n.a)({parentName:"td"},{href:"/theemo/docs/api/theemo.buildertool.build"}),"build()")),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Executes the build of the tool")))))}b.isMDXComponent=!0},146:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return s}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(r),m=n,s=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return r?o.a.createElement(s,l(l({ref:t},u),{},{components:r})):o.a.createElement(s,l({ref:t},u))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);