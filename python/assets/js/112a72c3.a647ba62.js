(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4350],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),a=n(944),o=n(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var i=37,c=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,u=e.values,m=e.groupId,d=e.className,f=(0,a.Z)(),g=f.tabGroupChoices,h=f.setTabGroupChoices,y=(0,r.useState)(p),k=y[0],v=y[1],b=r.Children.toArray(e.children),N=[];if(null!=m){var C=g[m];null!=C&&C!==k&&u.some((function(e){return e.value===C}))&&v(C)}var _=function(e){var t=e.currentTarget,n=N.indexOf(t),r=u[n].value;v(r),null!=m&&(h(m,r),setTimeout((function(){var e,n,r,a,o,s,i,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,s=window,i=s.innerHeight,c=s.innerWidth,n>=0&&o<=c&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case c:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case i:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:_,onClick:_},n)}))),t?(0,r.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},826:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return i},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s=(n(1395),n(8215),{id:"class-consolemessage",title:"ConsoleMessage"}),l={unversionedId:"api/class-consolemessage",id:"version-1.10.0/api/class-consolemessage",isDocsHomePage:!1,title:"ConsoleMessage",description:'ConsoleMessage] objects are dispatched by page via the [page.on("console") event.',source:"@site/versioned_docs/version-1.10.0/api/class-consolemessage.mdx",sourceDirName:"api",slug:"/api/class-consolemessage",permalink:"/python/docs/1.10.0/api/class-consolemessage",version:"1.10.0",frontMatter:{id:"class-consolemessage",title:"ConsoleMessage"},sidebar:"version-1.10.0/api",previous:{title:"ChromiumBrowserContext",permalink:"/python/docs/1.10.0/api/class-chromiumbrowsercontext"},next:{title:"Dialog",permalink:"/python/docs/1.10.0/api/class-dialog"}},i=[{value:"console_message.args",id:"console_messageargs",children:[]},{value:"console_message.location",id:"console_messagelocation",children:[]},{value:"console_message.text",id:"console_messagetext",children:[]},{value:"console_message.type",id:"console_messagetype",children:[]}],c={toc:i};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.10.0/api/class-consolemessage",title:"ConsoleMessage"},"ConsoleMessage")," objects are dispatched by page via the ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.10.0/api/class-page#pageonconsole"},'page.on("console")')," event."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.10.0/api/class-consolemessage#console_messageargs"},"console_message.args")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.10.0/api/class-consolemessage#console_messagelocation"},"console_message.location")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.10.0/api/class-consolemessage#console_messagetext"},"console_message.text")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.10.0/api/class-consolemessage#console_messagetype"},"console_message.type"))),(0,o.kt)("h2",{id:"console_messageargs"},"console_message.args"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns: <",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"},"List"),"[",(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.10.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),"]",">")),(0,o.kt)("h2",{id:"console_messagelocation"},"console_message.location"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns: <",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url")," <",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"> URL of the resource."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lineNumber")," <",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),"> 0-based line number in the resource."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"columnNumber")," <",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),"> 0-based column number in the resource.")))),(0,o.kt)("h2",{id:"console_messagetext"},"console_message.text"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns: <",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">")),(0,o.kt)("h2",{id:"console_messagetype"},"console_message.type"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns: <",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">")),(0,o.kt)("p",null,"One of the following values: ",(0,o.kt)("inlineCode",{parentName:"p"},"'log'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'debug'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'info'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'error'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'warning'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'dir'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'dirxml'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'table'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'trace'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'clear'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'startGroup'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'startGroupCollapsed'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'endGroup'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'assert'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'profile'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'profileEnd'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'count'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'timeEnd'"),"."))}p.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);