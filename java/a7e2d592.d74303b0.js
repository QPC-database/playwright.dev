(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{121:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(152)),o=(a(155),a(156),{id:"core-concepts",title:"Core concepts"}),c={unversionedId:"core-concepts",id:"core-concepts",isDocsHomePage:!1,title:"Core concepts",description:"Playwright provides a set of APIs to automate Chromium, Firefox and WebKit browsers. By using the Playwright API, you can write scripts to create new browser pages, navigate to URLs and then interact with elements on a page.",source:"@site/docs/core-concepts.mdx",slug:"/core-concepts",permalink:"/java/docs/core-concepts",version:"current",sidebar:"docs",previous:{title:"Getting Started",permalink:"/java/docs/intro"},next:{title:"Debugging tools",permalink:"/java/docs/debug"}},l=[{value:"Browser",id:"browser",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Browser contexts",id:"browser-contexts",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Pages and frames",id:"pages-and-frames",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Selectors",id:"selectors",children:[]},{value:"Auto-waiting",id:"auto-waiting",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Execution contexts: Playwright and Browser",id:"execution-contexts-playwright-and-browser",children:[]},{value:"Evaluation Argument",id:"evaluation-argument",children:[{value:"API reference",id:"api-reference-4",children:[]}]}],s={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Playwright provides a set of APIs to automate Chromium, Firefox and WebKit browsers. By using the Playwright API, you can write scripts to create new browser pages, navigate to URLs and then interact with elements on a page."),Object(i.b)("p",null,"Along with a test runner Playwright can be used to automate user interactions to validate and test web applications. The Playwright API enables this through the following primitives."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#browser"}),"Browser")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#browser-contexts"}),"Browser contexts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#pages-and-frames"}),"Pages and frames")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#selectors"}),"Selectors")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#auto-waiting"}),"Auto-waiting")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#execution-contexts-playwright-and-browser"}),"Execution contexts: Playwright and Browser")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#evaluation-argument"}),"Evaluation Argument"))),Object(i.b)("br",null),Object(i.b)("h2",{id:"browser"},"Browser"),Object(i.b)("p",null,"A ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-browser",title:"Browser"}),"Browser")," refers to an instance of Chromium, Firefox or WebKit. Playwright scripts generally start with launching a browser instance and end with closing the browser. Browser instances can be launched in headless (without a GUI) or headful mode."),Object(i.b)("p",null,"Launching a browser instance can be expensive, and Playwright is designed to maximize what a single instance can do through multiple browser contexts."),Object(i.b)("h3",{id:"api-reference"},"API reference"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-browser",title:"Browser"}),"Browser"))),Object(i.b)("br",null),Object(i.b)("h2",{id:"browser-contexts"},"Browser contexts"),Object(i.b)("p",null,"A ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," is an isolated incognito-alike session within a browser instance. Browser contexts are fast and cheap to create. Browser contexts can be used to parallelize isolated test executions."),Object(i.b)("p",null,"Browser contexts can also be used to emulate multi-page scenarios involving mobile devices, permissions, locale and color scheme."),Object(i.b)("h3",{id:"api-reference-1"},"API reference"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-browser#browsernewcontextoptions"}),"Browser.newContext([options])"))),Object(i.b)("br",null),Object(i.b)("h2",{id:"pages-and-frames"},"Pages and frames"),Object(i.b)("p",null,"A Browser context can have multiple pages. A ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page",title:"Page"}),"Page")," refers to a single tab or a popup window within a browser context. It should be used to navigate to URLs and interact with the page content."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Read more on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/navigations"}),"page navigation and loading"),".")),Object(i.b)("p",null,"A page can have one or more ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-frame",title:"Frame"}),"Frame")," objects attached to it. Each page has a main frame and page-level interactions (like ",Object(i.b)("inlineCode",{parentName:"p"},"click"),") are assumed to operate in the main frame."),Object(i.b)("p",null,"A page can have additional frames attached with the ",Object(i.b)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These frames can be accessed for interactions inside the frame."),Object(i.b)("h3",{id:"api-reference-2"},"API reference"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page",title:"Page"}),"Page")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-frame",title:"Frame"}),"Frame")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pageframename"}),"Page.frame(name)"))),Object(i.b)("br",null),Object(i.b)("h2",{id:"selectors"},"Selectors"),Object(i.b)("p",null,"Playwright can search for elements using CSS selectors, XPath selectors, HTML attributes like ",Object(i.b)("inlineCode",{parentName:"p"},"id"),", ",Object(i.b)("inlineCode",{parentName:"p"},"data-test-id")," and even text content."),Object(i.b)("p",null,"You can explicitly specify the selector engine you are using or let Playwright detect it."),Object(i.b)("p",null,"All selector engines except for XPath pierce shadow DOM by default. If you want to enforce regular DOM selection, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"*:light")," versions of the selectors. You don't typically need to though."),Object(i.b)("p",null,"Learn more about selectors and selector engines ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/selectors"}),"here"),"."),Object(i.b)("p",null,"Some examples below:"),Object(i.b)("p",null,"Selectors using the same or different engines can be combined using the ",Object(i.b)("inlineCode",{parentName:"p"},">>")," separator. For example,"),Object(i.b)("br",null),Object(i.b)("h2",{id:"auto-waiting"},"Auto-waiting"),Object(i.b)("p",null,"Actions like ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page#pageclickselector-options"}),"Page.click(selector[, options])")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page#pagefillselector-value-options"}),"Page.fill(selector, value[, options])")," auto-wait for the element to be visible and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/actionability"}),"actionable"),". For example, click will:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"wait for an element with the given selector to appear in the DOM"),Object(i.b)("li",{parentName:"ul"},"wait for it to become visible: have non-empty bounding box and no ",Object(i.b)("inlineCode",{parentName:"li"},"visibility:hidden")),Object(i.b)("li",{parentName:"ul"},"wait for it to stop moving: for example, wait until css transition finishes"),Object(i.b)("li",{parentName:"ul"},"scroll the element into view"),Object(i.b)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point: for example, wait until element becomes non-obscured by other elements"),Object(i.b)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),Object(i.b)("p",null,"You can explicitly wait for an element to appear in the DOM or to become visible:"),Object(i.b)("p",null,"... or to become hidden or detached"),Object(i.b)("h3",{id:"api-reference-3"},"API reference"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pageclickselector-options"}),"Page.click(selector[, options])")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pagefillselector-value-options"}),"Page.fill(selector, value[, options])")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pagewaitforselectorselector-options"}),"Page.waitForSelector(selector[, options])"))),Object(i.b)("br",null),Object(i.b)("h2",{id:"execution-contexts-playwright-and-browser"},"Execution contexts: Playwright and Browser"),Object(i.b)("p",null,"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers."),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page#pageevaluateexpression-arg"}),"Page.evaluate(expression[, arg])")," API can run a JavaScript function in the context of the web page and bring results back to the Playwright environment. Browser globals like ",Object(i.b)("inlineCode",{parentName:"p"},"window")," and ",Object(i.b)("inlineCode",{parentName:"p"},"document")," can be used in ",Object(i.b)("inlineCode",{parentName:"p"},"evaluate"),"."),Object(i.b)("p",null,"If the result is a Promise or if the function is asynchronous evaluate will automatically wait until it's resolved:"),Object(i.b)("h2",{id:"evaluation-argument"},"Evaluation Argument"),Object(i.b)("p",null,"Playwright evaluation methods like ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page#pageevaluateexpression-arg"}),"Page.evaluate(expression[, arg])")," take a single optional argument. This argument can be a mix of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable")," values and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle")," or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," instances. Handles are automatically converted to the value they represent."),Object(i.b)("p",null,"Right:"),Object(i.b)("p",null,"Wrong:"),Object(i.b)("h3",{id:"api-reference-4"},"API reference"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pageevaluateexpression-arg"}),"Page.evaluate(expression[, arg])")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-frame#frameevaluateexpression-arg"}),"Frame.evaluate(expression[, arg])")),Object(i.b)("li",{parentName:"ul"},"[EvaluationArgument]")),Object(i.b)("br",null))}b.isMDXComponent=!0},151:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},153:function(e,t,a){"use strict";var n=a(0),r=a(154);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},155:function(e,t,a){"use strict";a(0),a(153),a(151),a(55)},156:function(e,t,a){"use strict";a(3),a(0)}}]);