(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{146:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(d,l(l({ref:t},s),{},{components:n})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(146)),i={id:"figma",title:"Figma"},l={unversionedId:"design/figma",id:"design/figma",isDocsHomePage:!1,title:"Figma",description:"Theemo offers a figma plugin to automate your styles.",source:"@site/../docs/design/figma.md",permalink:"/theemo/docs/design/figma",sidebar:"design",previous:{title:"Overview",permalink:"/theemo/docs/design/overview"}},c=[{value:"1. Manage References",id:"1-manage-references",children:[{value:"Transforms",id:"transforms",children:[]}]},{value:"2. Export",id:"2-export",children:[]},{value:"3. Import",id:"3-import",children:[]},{value:"4. Contexts",id:"4-contexts",children:[{value:"Workflow Suggestion",id:"workflow-suggestion",children:[]}]},{value:"Things to Know",id:"things-to-know",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Theemo offers a figma plugin to automate your styles."),Object(a.b)("p",null,Object(a.b)("a",{class:"button button--primary button-lg",target:"_blank",href:"https://www.figma.com/community/plugin/791262205400516364/Theemo---Style-Automator"},"Theemo Plugin for Figma")),Object(a.b)("p",null,"This plugin will let you do this:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Manage style references on a selected node"),Object(a.b)("li",{parentName:"ol"},"Auto-update all references as you change origins (keep the plugin open for this)"),Object(a.b)("li",{parentName:"ol"},"Export references to make it available for third-party consumers"),Object(a.b)("li",{parentName:"ol"},"Import references (in case you duplicated a document)"),Object(a.b)("li",{parentName:"ol"},"Switch contexts")),Object(a.b)("h2",{id:"1-manage-references"},"1. Manage References"),Object(a.b)("p",null,'Select a node for which you want to manage references, eg. a rectangle. Open the\n"Theemo" plugin and a dialog will appear that let you do it. Currently\nthese styles are supported:'),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Fill Style"),Object(a.b)("li",{parentName:"ul"},"Stroke Style"),Object(a.b)("li",{parentName:"ul"},"Effect Style")),Object(a.b)("p",null,"For each of those there is a section in the dialog where you can manage the\norigin style to the reference."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Origin")," That's the ",Object(a.b)("em",{parentName:"li"},"original")," style."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Reference")," That's the style to which the origin is copied over when\nreferences are updated.")),Object(a.b)("h3",{id:"transforms"},"Transforms"),Object(a.b)("p",null,"For paint styles (Fill and Stroke) transforms are available. When styles\nare referenced from origin to reference you can put transforms in between.\nAvailabe are HSL + Opacity values. They will be applied during\nreferencing."),Object(a.b)("p",null,'Use this to automate your color palette. Make one color swatch for your\nbase value (e.g. "Brand / 500"). A darker color would take your base value as\nreference and set lightness to "-20" - name it for example "Brand / 300".'),Object(a.b)("h2",{id:"2-export"},"2. Export"),Object(a.b)("p",null,"You can export your references to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://jsonbin.io"}),"jsonbin.io")," and by that\nmake it available for third-party consumers, e.g. if you want to update your\ndesign tokens in your code. Here is how:"),Object(a.b)("p",null,"Enter credentials in settngs:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create an account and copy the API Key"),Object(a.b)("li",{parentName:"ol"},"Create a bin and copy the bin URL")),Object(a.b)("p",null,"On the tools tab the ",Object(a.b)("inlineCode",{parentName:"p"},"Export Settings")," button becomes available. Clicking the\nbutton will export your references."),Object(a.b)("h2",{id:"3-import"},"3. Import"),Object(a.b)("p",null,"You can import your earlier exported references from\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://jsonbin.io"}),"jsonbin.io"),". That is really helpful when you duplicated\nyour document - figma will not copy over your stored references. Here is how to\nimport references:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Duplicate a document"),Object(a.b)("li",{parentName:"ol"},"Open the old document, open the plugin, go to settings and copy the Bin URL"),Object(a.b)("li",{parentName:"ol"},"Go the new new document (the plugin should still be opened), paste the URL\ninto the input for import and click the button next to it."),Object(a.b)("li",{parentName:"ol"},"A notification will appear telling you how much references were imported."),Object(a.b)("li",{parentName:"ol"},"You can work with your new document the same way as the old one now - win!")),Object(a.b)("h2",{id:"4-contexts"},"4. Contexts"),Object(a.b)("p",null,"Contexts are a lightweight way to organize various theme modes within one\ndocument. E.g. if you have light and dark mode in one document, you may want to\ngive styles for respective styles a specific suffix, e.g. ",Object(a.b)("inlineCode",{parentName:"p"},".$dark")," - With\ndefined contexts, you can swap between them quickly and then use\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.figma.com/c/plugin/731176732337510831/Themer"}),"Themer")," to export\nthem."),Object(a.b)("h3",{id:"workflow-suggestion"},"Workflow Suggestion"),Object(a.b)("p",null,"Use it in combination with Themer:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Set your variants for each context (",Object(a.b)("inlineCode",{parentName:"li"},"$light")," and ",Object(a.b)("inlineCode",{parentName:"li"},"$dark"),")"),Object(a.b)("li",{parentName:"ol"},"Select a context"),Object(a.b)("li",{parentName:"ol"},"Use ",Object(a.b)("inlineCode",{parentName:"li"},"Theemo"),' to map those "compiled" styles'),Object(a.b)("li",{parentName:"ol"},"Use ",Object(a.b)("inlineCode",{parentName:"li"},"Themer")," to export and apply them")),Object(a.b)("h2",{id:"things-to-know"},"Things to Know"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"When setting the origin style the suggestions only show local styles, that is\nalso due to limitations of the current figma API, given security reasons for\nshared team libraries. That's fair - figma keeps us safe, give them credit for\nthat :)"),Object(a.b)("p",{parentName:"li"},"It still is possible to use library styles, then you can't use the style\nreferences manage dialog, instead manually assign those style and THEN use the\ntheemo dialog in order to persist it.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'Once you have one node "under management", you may want to change the local\nstyle but once you update references, those new ones will be overridden. Re-select\nthe node again and the references dialog will provide you options for migrating\nstyles, to either keep the old one or use the new one.')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Once you link origin to reference the node itself will show the reference as\nits local style, which might give you wonders, yet is expected and the correct behavior."))))}u.isMDXComponent=!0}}]);