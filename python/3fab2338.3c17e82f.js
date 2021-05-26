(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{149:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),o=(t(0),t(393)),c=(t(396),t(397),{id:"class-error",title:"Error"}),i={unversionedId:"api/class-error",id:"version-1.11.0/api/class-error",isDocsHomePage:!1,title:"Error",description:"* extends: [Exception]",source:"@site/versioned_docs/version-1.11.0/api/class-error.mdx",slug:"/api/class-error",permalink:"/python/docs/api/class-error",version:"1.11.0",sidebar:"version-1.11.0/api",previous:{title:"ElementHandle",permalink:"/python/docs/api/class-elementhandle"},next:{title:"FileChooser",permalink:"/python/docs/api/class-filechooser"}},s=[{value:"error.message",id:"errormessage",children:[]},{value:"error.name",id:"errorname",children:[]},{value:"error.stack",id:"errorstack",children:[]}],l={toc:s};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"extends: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/exceptions.html#Exception",title:"Exception"}),"Exception"))),Object(o.b)("p",null,"Error is raised whenever certain operations are terminated abnormally, e.g. browser closes while ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageevaluateexpression-kwargs"}),"page.evaluate(expression, **kwargs)")," is running. All Playwright exceptions inherit from this class."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-error#errormessage"}),"error.message")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-error#errorname"}),"error.name")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-error#errorstack"}),"error.stack"))),Object(o.b)("h2",{id:"errormessage"},"error.message"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"type: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">")),Object(o.b)("p",null,"Message of the error."),Object(o.b)("h2",{id:"errorname"},"error.name"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"type: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">")),Object(o.b)("p",null,"Name of the error which got thrown inside the browser. Optional."),Object(o.b)("h2",{id:"errorstack"},"error.stack"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"type: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">")),Object(o.b)("p",null,"Stack of the error which got thrown inside the browser. Optional."))}u.isMDXComponent=!0},392:function(e,r,t){"use strict";function n(e){var r,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(a&&(a+=" "),a+=t);else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}r.a=function(){for(var e,r,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(a&&(a+=" "),a+=r);return a}},393:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=n,m=p["".concat(c,".").concat(f)]||p[f]||b[f]||o;return t?a.a.createElement(m,i(i({ref:r},l),{},{components:t})):a.a.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},394:function(e,r,t){"use strict";var n=t(0),a=t(395);r.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,r,t){"use strict";var n=t(0),a=Object(n.createContext)(void 0);r.a=a},396:function(e,r,t){"use strict";var n=t(0),a=t.n(n),o=t(394),c=t(392),i=t(53),s=t.n(i),l=37,u=39;r.a=function(e){var r=e.lazy,t=e.block,i=e.defaultValue,p=e.values,b=e.groupId,f=e.className,m=Object(o.a)(),d=m.tabGroupChoices,h=m.setTabGroupChoices,O=Object(n.useState)(i),y=O[0],j=O[1],v=n.Children.toArray(e.children);if(null!=b){var g=d[b];null!=g&&g!==y&&p.some((function(e){return e.value===g}))&&j(g)}var w=function(e){j(e),null!=b&&h(b,e)},x=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},f)},p.map((function(e){var r=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===r,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===r}),key:r,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,r,t){switch(t.keyCode){case u:!function(e,r){var t=e.indexOf(r)+1;e[t]?e[t].focus():e[0].focus()}(e,r);break;case l:!function(e,r){var t=e.indexOf(r)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,r)}}(x,e.target,e)},onFocus:function(){return w(r)},onClick:function(){w(r)}},t)}))),r?Object(n.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,r){return Object(n.cloneElement)(e,{key:r,hidden:e.props.value!==y})}))))}},397:function(e,r,t){"use strict";var n=t(3),a=t(0),o=t.n(a);r.a=function(e){var r=e.children,t=e.hidden,a=e.className;return o.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:a}),r)}}}]);