(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{340:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),c=(r(0),r(393)),o=(r(396),r(397),{id:"class-websocket",title:"WebSocket"}),i={unversionedId:"api/class-websocket",id:"version-1.11.0/api/class-websocket",isDocsHomePage:!1,title:"WebSocket",description:"The [WebSocket] class represents websocket connections in the page.",source:"@site/versioned_docs/version-1.11.0/api/class-websocket.mdx",slug:"/api/class-websocket",permalink:"/docs/api/class-websocket",version:"1.11.0",sidebar:"version-1.11.0/api",previous:{title:"Video",permalink:"/docs/api/class-video"},next:{title:"Worker",permalink:"/docs/api/class-worker"}},l=[{value:"webSocket.on(&#39;close&#39;)",id:"websocketonclose",children:[]},{value:"webSocket.on(&#39;framereceived&#39;)",id:"websocketonframereceived",children:[]},{value:"webSocket.on(&#39;framesent&#39;)",id:"websocketonframesent",children:[]},{value:"webSocket.on(&#39;socketerror&#39;)",id:"websocketonsocketerror",children:[]},{value:"webSocket.isClosed()",id:"websocketisclosed",children:[]},{value:"webSocket.url()",id:"websocketurl",children:[]},{value:"webSocket.waitForEvent(event, optionsOrPredicate)",id:"websocketwaitforeventevent-optionsorpredicate",children:[]}],b={toc:l};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/class-websocket",title:"WebSocket"}),"WebSocket")," class represents websocket connections in the page."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/class-websocket#websocketonclose"}),"webSocket.on('close')")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/class-websocket#websocketonframereceived"}),"webSocket.on('framereceived')")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/class-websocket#websocketonframesent"}),"webSocket.on('framesent')")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/class-websocket#websocketonsocketerror"}),"webSocket.on('socketerror')")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/class-websocket#websocketisclosed"}),"webSocket.isClosed()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/class-websocket#websocketurl"}),"webSocket.url()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/class-websocket#websocketwaitforeventevent-optionsorpredicate"}),"webSocket.waitForEvent(event[, optionsOrPredicate])"))),Object(c.b)("h2",{id:"websocketonclose"},"webSocket.on('close')"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"type: <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/class-websocket",title:"WebSocket"}),"WebSocket"),">")),Object(c.b)("p",null,"Fired when the websocket closes."),Object(c.b)("h2",{id:"websocketonframereceived"},"webSocket.on('framereceived')"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"type: <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"payload")," <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"}),"Buffer"),"> frame payload")))),Object(c.b)("p",null,"Fired when the websocket receives a frame."),Object(c.b)("h2",{id:"websocketonframesent"},"webSocket.on('framesent')"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"type: <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"payload")," <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"}),"Buffer"),"> frame payload")))),Object(c.b)("p",null,"Fired when the websocket sends a frame."),Object(c.b)("h2",{id:"websocketonsocketerror"},"webSocket.on('socketerror')"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"type: <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"String"),">")),Object(c.b)("p",null,"Fired when the websocket has an error."),Object(c.b)("h2",{id:"websocketisclosed"},"webSocket.isClosed()"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">")),Object(c.b)("p",null,"Indicates that the web socket has been closed."),Object(c.b)("h2",{id:"websocketurl"},"webSocket.url()"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(c.b)("p",null,"Contains the URL of the WebSocket."),Object(c.b)("h2",{id:"websocketwaitforeventevent-optionsorpredicate"},"webSocket.waitForEvent(event","[, optionsOrPredicate]",")"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"event")," <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Event name, same one would pass into ",Object(c.b)("inlineCode",{parentName:"li"},"webSocket.on(event)"),"."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"optionsOrPredicate")," <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> Either a predicate that receives an event or an options object. Optional.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"predicate")," <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"> receives the event data and resolves to truthy value when the waiting should resolve."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"timeout")," <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> maximum time to wait for in milliseconds. Defaults to ",Object(c.b)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",Object(c.b)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/class-browsercontext#browsercontextsetdefaulttimeouttimeout"}),"browserContext.setDefaultTimeout(timeout)"),"."))),Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">>")),Object(c.b)("p",null,"Waits for event to fire and passes its value into the predicate function. Returns when the predicate returns truthy value. Will throw an error if the webSocket is closed before the event is fired. Returns the event data value."))}s.isMDXComponent=!0},392:function(e,t,r){"use strict";function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}},393:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(o,".").concat(d)]||u[d]||p[d]||c;return r?n.a.createElement(f,i(i({ref:t},b),{},{components:r})):n.a.createElement(f,i({ref:t},b))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<c;b++)o[b]=r[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},394:function(e,t,r){"use strict";var a=r(0),n=r(395);t.a=function(){var e=Object(a.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,t,r){"use strict";var a=r(0),n=Object(a.createContext)(void 0);t.a=n},396:function(e,t,r){"use strict";var a=r(0),n=r.n(a),c=r(394),o=r(392),i=r(55),l=r.n(i),b=37,s=39;t.a=function(e){var t=e.lazy,r=e.block,i=e.defaultValue,u=e.values,p=e.groupId,d=e.className,f=Object(c.a)(),m=f.tabGroupChoices,O=f.setTabGroupChoices,j=Object(a.useState)(i),v=j[0],h=j[1],w=a.Children.toArray(e.children);if(null!=p){var k=m[p];null!=k&&k!==v&&u.some((function(e){return e.value===k}))&&h(k)}var N=function(e){h(e),null!=p&&O(p,e)},S=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":r},d)},u.map((function(e){var t=e.value,r=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return S.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case s:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(S,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},r)}))),t?Object(a.cloneElement)(w.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},397:function(e,t,r){"use strict";var a=r(3),n=r(0),c=r.n(n);t.a=function(e){var t=e.children,r=e.hidden,n=e.className;return c.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:r,className:n}),t)}}}]);