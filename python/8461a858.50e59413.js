(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{234:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(393)),c=(r(396),r(397),{id:"class-error",title:"Error"}),i={unversionedId:"api/class-error",id:"api/class-error",isDocsHomePage:!1,title:"Error",description:"* extends: [Exception]",source:"@site/docs/api/class-error.mdx",slug:"/api/class-error",permalink:"/python/docs/next/api/class-error",version:"current",sidebar:"api",previous:{title:"ElementHandle",permalink:"/python/docs/next/api/class-elementhandle"},next:{title:"FileChooser",permalink:"/python/docs/next/api/class-filechooser"}},s=[{value:"error.message",id:"errormessage",children:[]},{value:"error.name",id:"errorname",children:[]},{value:"error.stack",id:"errorstack",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"extends: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/exceptions.html#Exception",title:"Exception"}),"Exception"))),Object(o.b)("p",null,"Error is raised whenever certain operations are terminated abnormally, e.g. browser closes while ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pageevaluateexpression-kwargs"}),"page.evaluate(expression, **kwargs)")," is running. All Playwright exceptions inherit from this class."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-error#errormessage"}),"error.message")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-error#errorname"}),"error.name")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-error#errorstack"}),"error.stack"))),Object(o.b)("h2",{id:"errormessage"},"error.message"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"type: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">")),Object(o.b)("p",null,"Message of the error."),Object(o.b)("h2",{id:"errorname"},"error.name"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"type: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">")),Object(o.b)("p",null,"Name of the error which got thrown inside the browser. Optional."),Object(o.b)("h2",{id:"errorstack"},"error.stack"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"type: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">")),Object(o.b)("p",null,"Stack of the error which got thrown inside the browser. Optional."))}u.isMDXComponent=!0},392:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},393:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,m=p["".concat(c,".").concat(f)]||p[f]||b[f]||o;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},394:function(e,t,r){"use strict";var n=r(0),a=r(395);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},396:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(394),c=r(392),i=r(53),s=r.n(i),l=37,u=39;t.a=function(e){var t=e.lazy,r=e.block,i=e.defaultValue,p=e.values,b=e.groupId,f=e.className,m=Object(o.a)(),d=m.tabGroupChoices,h=m.setTabGroupChoices,O=Object(n.useState)(i),y=O[0],j=O[1],v=n.Children.toArray(e.children);if(null!=b){var g=d[b];null!=g&&g!==y&&p.some((function(e){return e.value===g}))&&j(g)}var x=function(e){j(e),null!=b&&h(b,e)},w=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":r},f)},p.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case u:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},r)}))),t?Object(n.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},397:function(e,t,r){"use strict";var n=r(3),a=r(0),o=r.n(a);t.a=function(e){var t=e.children,r=e.hidden,a=e.className;return o.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:r,className:a}),t)}}}]);