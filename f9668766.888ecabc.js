(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{138:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return p})),r.d(n,"default",(function(){return l}));var t=r(2),o=r(6),i=(r(0),r(146)),a={id:"theemo.figmareferencerconfig",title:"FigmaReferencerConfig",hide_title:!0},c={unversionedId:"api/theemo.figmareferencerconfig",id:"api/theemo.figmareferencerconfig",isDocsHomePage:!1,title:"FigmaReferencerConfig",description:"theemo &gt; FigmaReferencerConfig",source:"@site/../docs/api/theemo.figmareferencerconfig.md",permalink:"/theemo/docs/api/theemo.figmareferencerconfig",sidebar:"toolchain",previous:{title:"FigmaReaderConfig",permalink:"/theemo/docs/api/theemo.figmareaderconfig"},next:{title:"FigmaReferencerPluginConfig",permalink:"/theemo/docs/api/theemo.figmareferencerpluginconfig"}},p=[{value:"FigmaReferencerConfig type",id:"figmareferencerconfig-type",children:[]},{value:"Example",id:"example",children:[]}],f={rightToc:p};function l(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},f,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"/theemo/docs/api/theemo"}),"theemo")," ",">"," ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"/theemo/docs/api/theemo.figmareferencerconfig"}),"FigmaReferencerConfig")),Object(i.b)("h2",{id:"figmareferencerconfig-type"},"FigmaReferencerConfig type"),Object(i.b)("p",null,"Figma does not support references of tokens, as such this information is coming through another source, which is described here."),Object(i.b)("b",null,"Signature:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"export declare type FigmaReferencerConfig = FigmaReferencerPluginConfig & {\n    type: FigmaReferencerType;\n};\n")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"Use with the theemo plugin:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),"referencer: {\n  type: 'figma-plugin',\n  plugin: 'theemo',\n  pluginOptions: {\n    jsonbinFile: process.env.JSONBIN_FILE,\n    jsonbinSecret: process.env.JSONBIN_SECRET,\n    formats: {\n      color: 'hex',\n      colorAlpha: 'rgb'\n    }\n  }\n}\n\n")))}l.isMDXComponent=!0},146:function(e,n,r){"use strict";r.d(n,"a",(function(){return m})),r.d(n,"b",(function(){return s}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=o.a.createContext({}),l=function(e){var n=o.a.useContext(f),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},m=function(e){var n=l(e.components);return o.a.createElement(f.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},g=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,f=p(e,["components","mdxType","originalType","parentName"]),m=l(r),g=t,s=m["".concat(a,".").concat(g)]||m[g]||u[g]||i;return r?o.a.createElement(s,c(c({ref:n},f),{},{components:r})):o.a.createElement(s,c({ref:n},f))}));function s(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=g;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var f=2;f<i;f++)a[f]=r[f];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);