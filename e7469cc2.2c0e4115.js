(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(146)),c={id:"theemo.lexerconfig",title:"LexerConfig",hide_title:!0},i={unversionedId:"api/theemo.lexerconfig",id:"api/theemo.lexerconfig",isDocsHomePage:!1,title:"LexerConfig",description:"theemo &gt; LexerConfig",source:"@site/../docs/api/theemo.lexerconfig.md",permalink:"/theemo/docs/api/theemo.lexerconfig",sidebar:"toolchain",previous:{title:"ReaderConfig",permalink:"/theemo/docs/api/theemo.readerconfig"},next:{title:"WriterConfig",permalink:"/theemo/docs/api/theemo.writerconfig"}},l=[{value:"LexerConfig interface",id:"lexerconfig-interface",children:[]},{value:"Properties",id:"properties",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/theemo/docs/api/theemo"}),"theemo")," ",">"," ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/theemo/docs/api/theemo.lexerconfig"}),"LexerConfig")),Object(a.b)("h2",{id:"lexerconfig-interface"},"LexerConfig interface"),Object(a.b)("p",null,"The lexer config is used for you to configure the tokens to what they mean for you and to further process them"),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export default interface LexerConfig \n")),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("a",Object(r.a)({parentName:"td"},{href:"/theemo/docs/api/theemo.lexerconfig.classifytoken"}),"classifyToken")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(token: Token, tokens: { raw: TokenCollection; normalized: TokenCollection; }) =",">"," Token"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Describe your tokens:","- What's the type? - What's the color scheme?")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("a",Object(r.a)({parentName:"td"},{href:"/theemo/docs/api/theemo.lexerconfig.filtertoken"}),"filterToken")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(token: Token, tokens: { raw: TokenCollection; normalized: TokenCollection; classified: TokenCollection; }) =",">"," boolean"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Filter callback to only keep the tokens you need.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("a",Object(r.a)({parentName:"td"},{href:"/theemo/docs/api/theemo.lexerconfig.groupfortoken"}),"groupForToken")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(token: Token) =",">"," string"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Return the group for a token (e.g. if you want to group them by color scheme)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("a",Object(r.a)({parentName:"td"},{href:"/theemo/docs/api/theemo.lexerconfig.normalizetoken"}),"normalizeToken")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(token: Token, tokens: { raw: TokenCollection; }) =",">"," Token"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"This is to normalize tokens and remove some glibberish off of it. Comes with a default, if you don't provide one (see in the example)")))))}p.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,s=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?o.a.createElement(s,i(i({ref:t},b),{},{components:n})):o.a.createElement(s,i({ref:t},b))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<a;b++)c[b]=n[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);