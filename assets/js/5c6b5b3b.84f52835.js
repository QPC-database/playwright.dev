(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[137],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=c(r),m=i,h=f["".concat(s,".").concat(m)]||f[m]||u[m]||n;return r?a.createElement(h,l(l({ref:t},p),{},{components:r})):a.createElement(h,l({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<n;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},58215:function(e,t,r){"use strict";var a=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:i},t)}},41395:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var a=r(67294),i=r(80944),n=r(86010),l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,c=39;var p=function(e){var t=e.lazy,r=e.block,p=e.defaultValue,u=e.values,f=e.groupId,m=e.className,h=(0,i.Z)(),d=h.tabGroupChoices,v=h.setTabGroupChoices,b=(0,a.useState)(p),g=b[0],k=b[1],y=a.Children.toArray(e.children),N=[];if(null!=f){var C=d[f];null!=C&&C!==g&&u.some((function(e){return e.value===C}))&&k(C)}var O=function(e){var t=e.currentTarget,r=N.indexOf(t),a=u[r].value;k(a),null!=f&&(v(f,a),setTimeout((function(){var e,r,a,i,n,l,s,c;(e=t.getBoundingClientRect(),r=e.top,a=e.left,i=e.bottom,n=e.right,l=window,s=l.innerHeight,c=l.innerWidth,r>=0&&n<=c&&i<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},S=function(e){var t,r;switch(e.keyCode){case c:var a=N.indexOf(e.target)+1;r=N[a]||N[0];break;case s:var i=N.indexOf(e.target)-1;r=N[i]||N[N.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},m)},u.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,n.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:S,onFocus:O,onClick:O},r)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,r){"use strict";var a=(0,r(67294).createContext)(void 0);t.Z=a},80944:function(e,t,r){"use strict";var a=r(67294),i=r(79443);t.Z=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},26742:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return p}});var a=r(22122),i=r(19756),n=(r(67294),r(3905)),l=(r(41395),r(58215),{id:"class-filechooser",title:"FileChooser"}),o={unversionedId:"api/class-filechooser",id:"version-1.12.0/api/class-filechooser",isDocsHomePage:!1,title:"FileChooser",description:"FileChooser] objects are dispatched by the page in the [page.on('filechooser') event.",source:"@site/versioned_docs/version-1.12.0/api/class-filechooser.mdx",sourceDirName:"api",slug:"/api/class-filechooser",permalink:"/docs/api/class-filechooser",version:"1.12.0",frontMatter:{id:"class-filechooser",title:"FileChooser"},sidebar:"version-1.12.0/api",previous:{title:"ElementHandle",permalink:"/docs/api/class-elementhandle"},next:{title:"Frame",permalink:"/docs/api/class-frame"}},s=[{value:"fileChooser.element()",id:"file-chooser-element",children:[]},{value:"fileChooser.isMultiple()",id:"file-chooser-is-multiple",children:[]},{value:"fileChooser.page()",id:"file-chooser-page",children:[]},{value:"fileChooser.setFiles(files, options)",id:"file-chooser-set-files",children:[]}],c={toc:s};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-filechooser",title:"FileChooser"},"FileChooser")," objects are dispatched by the page in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-page#page-event-file-chooser"},"page.on('filechooser')")," event."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const [fileChooser] = await Promise.all([\n  page.waitForEvent('filechooser'),\n  page.click('upload')\n]);\nawait fileChooser.setFiles('myfile.pdf');\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-filechooser#file-chooser-element"},"fileChooser.element()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-filechooser#file-chooser-is-multiple"},"fileChooser.isMultiple()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-filechooser#file-chooser-page"},"fileChooser.page()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-filechooser#file-chooser-set-files"},"fileChooser.setFiles(files[, options])"))),(0,n.kt)("h2",{id:"file-chooser-element"},"fileChooser.element()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: ","<",(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),">")),(0,n.kt)("p",null,"Returns input element associated with this file chooser."),(0,n.kt)("h2",{id:"file-chooser-is-multiple"},"fileChooser.isMultiple()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">")),(0,n.kt)("p",null,"Returns whether this file chooser accepts multiple files."),(0,n.kt)("h2",{id:"file-chooser-page"},"fileChooser.page()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: ","<",(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-page",title:"Page"},"Page"),">")),(0,n.kt)("p",null,"Returns page this file chooser belongs to."),(0,n.kt)("h2",{id:"file-chooser-set-files"},"fileChooser.setFiles(files","[, options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"files")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," File name"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mimeType")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," File type"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"buffer")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">"," File content"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"noWaitAfter")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Maximum time in milliseconds, defaults to 30 seconds, pass ",(0,n.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-browsercontext#browser-context-set-default-timeout"},"browserContext.setDefaultTimeout(timeout)")," or ",(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-set-default-timeout"},"page.setDefaultTimeout(timeout)")," methods."))),(0,n.kt)("li",{parentName:"ul"},"returns: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">")),(0,n.kt)("p",null,"Sets the value of the file input this chooser is associated with. If some of the ",(0,n.kt)("inlineCode",{parentName:"p"},"filePaths")," are relative paths, then they are resolved relative to the the current working directory. For empty array, clears the selected files."))}p.isMDXComponent=!0},86010:function(e,t,r){"use strict";function a(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}r.d(t,{Z:function(){return i}})}}]);