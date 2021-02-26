(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{151:function(e,t,r){"use strict";function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}},152:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return j}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(r),d=a,j=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return r?n.a.createElement(j,i(i({ref:t},s),{},{components:r})):n.a.createElement(j,i({ref:t},s))}));function j(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},153:function(e,t,r){"use strict";var a=r(0),n=r(154);t.a=function(){var e=Object(a.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,r){"use strict";var a=r(0),n=Object(a.createContext)(void 0);t.a=n},155:function(e,t,r){"use strict";r(0),r(153),r(151),r(55)},156:function(e,t,r){"use strict";r(3),r(0)},94:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),o=(r(0),r(152)),c=(r(155),r(156),{id:"network",title:"Network"}),i={unversionedId:"network",id:"network",isDocsHomePage:!1,title:"Network",description:"Playwright provides APIs to monitor and modify network traffic, both HTTP and HTTPS. Any requests that page does, including XHRs and fetch requests, can be tracked, modified and handled.",source:"@site/docs/network.mdx",slug:"/network",permalink:"/java/docs/network",version:"current",sidebar:"docs",previous:{title:"Navigations",permalink:"/java/docs/navigations"},next:{title:"Page Object Models",permalink:"/java/docs/pom"}},l=[{value:"HTTP Authentication",id:"http-authentication",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Network events",id:"network-events",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Handle requests",id:"handle-requests",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Modify requests",id:"modify-requests",children:[]},{value:"Abort requests",id:"abort-requests",children:[{value:"API reference",id:"api-reference-3",children:[]}]}],s={toc:l};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright provides APIs to ",Object(o.b)("strong",{parentName:"p"},"monitor")," and ",Object(o.b)("strong",{parentName:"p"},"modify")," network traffic, both HTTP and HTTPS. Any requests that page does, including ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"}),"XHRs")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"fetch")," requests, can be tracked, modified and handled."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#http-authentication"}),"HTTP Authentication")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#network-events"}),"Network events")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#handle-requests"}),"Handle requests")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#modify-requests"}),"Modify requests")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#abort-requests"}),"Abort requests"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"http-authentication"},"HTTP Authentication"),Object(o.b)("h3",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-browser#browsernewcontextoptions"}),"Browser.newContext([options])"))),Object(o.b)("h2",{id:"network-events"},"Network events"),Object(o.b)("p",null,"You can monitor all the requests and responses:"),Object(o.b)("p",null,"Or wait for a network response after the button click:"),Object(o.b)("h4",{id:"variations"},"Variations"),Object(o.b)("h3",{id:"api-reference-1"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-request",title:"Request"}),"Request")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-response",title:"Response"}),"Response")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-page#pageonrequesthandler"}),"Page.onRequest(handler)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-page#pageonresponsehandler"}),"Page.onResponse(handler)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-page#pagewaitforrequesturlorpredicate-options-callback"}),"Page.waitForRequest(urlOrPredicate[, options, callback])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-page#pagewaitforresponseurlorpredicate-options-callback"}),"Page.waitForResponse(urlOrPredicate[, options, callback])"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"handle-requests"},"Handle requests"),Object(o.b)("p",null,"You can mock API endpoints via handling the network quests in your Playwright script."),Object(o.b)("h4",{id:"variations-1"},"Variations"),Object(o.b)("h3",{id:"api-reference-2"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-browsercontext#browsercontextrouteurl-handler"}),"BrowserContext.route(url, handler)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-browsercontext#browsercontextunrouteurl-handler"}),"BrowserContext.unroute(url[, handler])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-page#pagerouteurl-handler"}),"Page.route(url, handler)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-page#pageunrouteurl-handler"}),"Page.unroute(url[, handler])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-route",title:"Route"}),"Route"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"modify-requests"},"Modify requests"),Object(o.b)("p",null,"You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests."),Object(o.b)("h2",{id:"abort-requests"},"Abort requests"),Object(o.b)("h3",{id:"api-reference-3"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-page#pagerouteurl-handler"}),"Page.route(url, handler)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-browsercontext#browsercontextrouteurl-handler"}),"BrowserContext.route(url, handler)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-route#routeaborterrorcode"}),"Route.abort([errorCode])"))),Object(o.b)("br",null))}b.isMDXComponent=!0}}]);