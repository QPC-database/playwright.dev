(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{272:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},273:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return a?r.a.createElement(d,i(i({ref:t},s),{},{components:a})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},274:function(e,t,a){"use strict";var n=a(0),r=a(275);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},275:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},276:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(274),c=a(272),i=a(53),l=a.n(i),s=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,p=e.values,u=e.groupId,m=e.className,d=Object(o.a)(),g=d.tabGroupChoices,j=d.setTabGroupChoices,h=Object(n.useState)(i),O=h[0],f=h[1],v=n.Children.toArray(e.children);if(null!=u){var w=g[u];null!=w&&w!==O&&p.some((function(e){return e.value===w}))&&f(w)}var y=function(e){f(e),null!=u&&j(u,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},m)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},a)}))),t?Object(n.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},277:function(e,t,a){"use strict";var n=a(3),r=a(0),o=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return o.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},95:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(273)),c=(a(276),a(277),{id:"core-concepts",title:"Core concepts"}),i={unversionedId:"core-concepts",id:"version-1.11.0/core-concepts",isDocsHomePage:!1,title:"Core concepts",description:"Playwright provides a set of APIs to automate Chromium, Firefox and WebKit browsers. By using the Playwright API, you can write scripts to create new browser pages, navigate to URLs and then interact with elements on a page.",source:"@site/versioned_docs/version-1.11.0/core-concepts.mdx",slug:"/core-concepts",permalink:"/java/docs/core-concepts",version:"1.11.0",sidebar:"version-1.11.0/docs",previous:{title:"Getting Started",permalink:"/java/docs/intro"},next:{title:"Debugging tools",permalink:"/java/docs/debug"}},l=[{value:"Browser",id:"browser",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Browser contexts",id:"browser-contexts",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Pages and frames",id:"pages-and-frames",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Selectors",id:"selectors",children:[]},{value:"Auto-waiting",id:"auto-waiting",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Execution contexts: Playwright and Browser",id:"execution-contexts-playwright-and-browser",children:[]},{value:"Evaluation Argument",id:"evaluation-argument",children:[{value:"API reference",id:"api-reference-4",children:[]}]}],s={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright provides a set of APIs to automate Chromium, Firefox and WebKit browsers. By using the Playwright API, you can write scripts to create new browser pages, navigate to URLs and then interact with elements on a page."),Object(o.b)("p",null,"Along with a test runner Playwright can be used to automate user interactions to validate and test web applications. The Playwright API enables this through the following primitives."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#browser"}),"Browser")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#browser-contexts"}),"Browser contexts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#pages-and-frames"}),"Pages and frames")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#selectors"}),"Selectors")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#auto-waiting"}),"Auto-waiting")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#execution-contexts-playwright-and-browser"}),"Execution contexts: Playwright and Browser")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#evaluation-argument"}),"Evaluation Argument"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"browser"},"Browser"),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-browser",title:"Browser"}),"Browser")," refers to an instance of Chromium, Firefox or WebKit. Playwright scripts generally start with launching a browser instance and end with closing the browser. Browser instances can be launched in headless (without a GUI) or headed mode."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Browser browser = chromium.launch(new BrowserType.LaunchOptions().setHeadless(false));\n      browser.close();\n    }\n  }\n}\n")),Object(o.b)("p",null,"Launching a browser instance can be expensive, and Playwright is designed to maximize what a single instance can do through multiple browser contexts."),Object(o.b)("h3",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-browser",title:"Browser"}),"Browser"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"browser-contexts"},"Browser contexts"),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," is an isolated incognito-alike session within a browser instance. Browser contexts are fast and cheap to create. Browser contexts can be used to parallelize isolated test executions."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"Browser browser = chromium.launch();\nBrowserContext context = browser.newContext();\n")),Object(o.b)("p",null,"Browser contexts can also be used to emulate multi-page scenarios involving mobile devices, permissions, locale and color scheme."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// FIXME\nimport com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType devices = playwright.devices();\n      BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n        .setUserAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1")\n        .setViewportSize(375, 812)\n        .setDeviceScaleFactor(3)\n        .setIsMobile(true)\n        .setHasTouch(true)\n        .setPermissions(Arrays.asList("geolocation"))\n        .setGeolocation(52.52, 13.39)\n        .setColorScheme(ColorScheme.DARK)\n        .setLocale("de-DE"));\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"api-reference-1"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-browser#browsernewcontextoptions"}),"Browser.newContext([options])"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"pages-and-frames"},"Pages and frames"),Object(o.b)("p",null,"A Browser context can have multiple pages. A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page",title:"Page"}),"Page")," refers to a single tab or a popup window within a browser context. It should be used to navigate to URLs and interact with the page content."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Create a page.\nPage page = context.newPage();\n\n// Navigate explicitly, similar to entering a URL in the browser.\npage.navigate("http://example.com");\n// Fill an input.\npage.fill("#search", "query");\n\n// Navigate implicitly by clicking a link.\npage.click("#submit");\n// Expect a new url.\nSystem.out.println(page.url());\n\n// Page can navigate from the script - this will be picked up by Playwright.\n// window.location.href = "https://example.com";\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Read more on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/navigations"}),"page navigation and loading"),".")),Object(o.b)("p",null,"A page can have one or more ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-frame",title:"Frame"}),"Frame")," objects attached to it. Each page has a main frame and page-level interactions (like ",Object(o.b)("inlineCode",{parentName:"p"},"click"),") are assumed to operate in the main frame."),Object(o.b)("p",null,"A page can have additional frames attached with the ",Object(o.b)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These frames can be accessed for interactions inside the frame."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Get frame using the frame"s name attribute\nFrame frame = page.frame("frame-login");\n\n// Get frame using frame"s URL\nFrame frame = page.frameByUrl(Pattern.compile(".*domain.*"));\n\n// Get frame using any other selector\nElementHandle frameElementHandle = page.querySelector(".frame-class");\nFrame frame = frameElementHandle.contentFrame();\n\n// Interact with the frame\nframe.fill("#username-input", "John");\n')),Object(o.b)("h3",{id:"api-reference-2"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page",title:"Page"}),"Page")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-frame",title:"Frame"}),"Frame")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pageframename"}),"Page.frame(name)"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"selectors"},"Selectors"),Object(o.b)("p",null,"Playwright can search for elements using CSS selectors, XPath selectors, HTML attributes like ",Object(o.b)("inlineCode",{parentName:"p"},"id"),", ",Object(o.b)("inlineCode",{parentName:"p"},"data-test-id")," and even text content."),Object(o.b)("p",null,"You can explicitly specify the selector engine you are using or let Playwright detect it."),Object(o.b)("p",null,"All selector engines except for XPath pierce shadow DOM by default. If you want to enforce regular DOM selection, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"*:light")," versions of the selectors. You don't typically need to though."),Object(o.b)("p",null,"Learn more about selectors and selector engines ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/selectors"}),"here"),"."),Object(o.b)("p",null,"Some examples below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Using data-test-id= selector engine\npage.click("data-test-id=foo");\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// CSS and XPath selector engines are automatically detected\npage.click("div");\npage.click("//html/body/div");\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Find node by text substring\npage.click("text=Hello w");\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Explicit CSS and XPath notation\npage.click("css=div");\npage.click("xpath=//html/body/div");\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Only search light DOM, outside WebComponent shadow DOM:\npage.click("css:light=div");\n')),Object(o.b)("p",null,"Selectors using the same or different engines can be combined using the ",Object(o.b)("inlineCode",{parentName:"p"},">>")," separator. For example,"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Click an element with text "Sign Up" inside of a #free-month-promo.\npage.click("#free-month-promo >> text=Sign Up");\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Capture textContent of a section that contains an element with text "Selectors".\nString sectionText = (String) page.evalOnSelector("*css=section >> text=Selectors", "e => e.textContent");\n')),Object(o.b)("br",null),Object(o.b)("h2",{id:"auto-waiting"},"Auto-waiting"),Object(o.b)("p",null,"Actions like ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page#pageclickselector-options"}),"Page.click(selector[, options])")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page#pagefillselector-value-options"}),"Page.fill(selector, value[, options])")," auto-wait for the element to be visible and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/actionability"}),"actionable"),". For example, click will:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"wait for an element with the given selector to appear in the DOM"),Object(o.b)("li",{parentName:"ul"},"wait for it to become visible: have non-empty bounding box and no ",Object(o.b)("inlineCode",{parentName:"li"},"visibility:hidden")),Object(o.b)("li",{parentName:"ul"},"wait for it to stop moving: for example, wait until css transition finishes"),Object(o.b)("li",{parentName:"ul"},"scroll the element into view"),Object(o.b)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point: for example, wait until element becomes non-obscured by other elements"),Object(o.b)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Playwright waits for #search element to be in the DOM\npage.fill("#search", "query");\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Playwright waits for element to stop animating\n// and accept clicks.\npage.click("#search");\n')),Object(o.b)("p",null,"You can explicitly wait for an element to appear in the DOM or to become visible:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Wait for #search to appear in the DOM.\npage.waitForSelector("#search", new Page.WaitForSelectorOptions()\n  .setState(WaitForSelectorState.ATTACHED));\n// Wait for #promo to become visible, for example with "visibility:visible".\npage.waitForSelector("#promo");\n')),Object(o.b)("p",null,"... or to become hidden or detached"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Wait for #details to become hidden, for example with "display:none".\npage.waitForSelector("#details", new Page.WaitForSelectorOptions()\n  .setState(WaitForSelectorState.HIDDEN));\n// Wait for #promo to be removed from the DOM.\npage.waitForSelector("#promo", new Page.WaitForSelectorOptions()\n  .setState(WaitForSelectorState.DETACHED));\n')),Object(o.b)("h3",{id:"api-reference-3"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pageclickselector-options"}),"Page.click(selector[, options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pagefillselector-value-options"}),"Page.fill(selector, value[, options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pagewaitforselectorselector-options"}),"Page.waitForSelector(selector[, options])"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"execution-contexts-playwright-and-browser"},"Execution contexts: Playwright and Browser"),Object(o.b)("p",null,"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers."),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page#pageevaluateexpression-arg"}),"Page.evaluate(expression[, arg])")," API can run a JavaScript function in the context of the web page and bring results back to the Playwright environment. Browser globals like ",Object(o.b)("inlineCode",{parentName:"p"},"window")," and ",Object(o.b)("inlineCode",{parentName:"p"},"document")," can be used in ",Object(o.b)("inlineCode",{parentName:"p"},"evaluate"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'String href = (String) page.evaluate("document.location.href");\n')),Object(o.b)("p",null,"If the result is a Promise or if the function is asynchronous evaluate will automatically wait until it's resolved:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'int status = (int) page.evaluate("async () => {\\n" +\n  "  const response = await fetch(location.href);\\n" +\n  "  return response.status;\\n" +\n  "}");\n')),Object(o.b)("h2",{id:"evaluation-argument"},"Evaluation Argument"),Object(o.b)("p",null,"Playwright evaluation methods like ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page#pageevaluateexpression-arg"}),"Page.evaluate(expression[, arg])")," take a single optional argument. This argument can be a mix of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable")," values and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle")," or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," instances. Handles are automatically converted to the value they represent."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// A primitive value.\npage.evaluate("num => num", 42);\n\n// An array.\npage.evaluate("array => array.length", Arrays.asList(1, 2, 3));\n\n// An object.\nMap<String, Object> obj = new HashMap<>();\nobj.put("foo", "bar");\npage.evaluate("object => object.foo", obj);\n\n// A single handle.\nElementHandle button = page.querySelector("button");\npage.evaluate("button => button.textContent", button);\n\n// Alternative notation using elementHandle.evaluate.\nbutton.evaluate("(button, from) => button.textContent.substring(from)", 5);\n\n// Object with multiple handles.\nElementHandle button1 = page.querySelector(".button1");\nElementHandle button2 = page.querySelector(".button2");\nMap<String, ElementHandle> arg = new HashMap<>();\narg.put("button1", button1);\narg.put("button2", button2);\npage.evaluate("o => o.button1.textContent + o.button2.textContent", arg);\n\n// Object destructuring works. Note that property names must match\n// between the destructured object and the argument.\n// Also note the required parenthesis.\nMap<String, ElementHandle> arg = new HashMap<>();\narg.put("button1", button1);\narg.put("button2", button2);\npage.evaluate("({ button1, button2 }) => button1.textContent + button2.textContent", arg);\n\n// Array works as well. Arbitrary names can be used for destructuring.\n// Note the required parenthesis.\npage.evaluate(\n  "([b1, b2]) => b1.textContent + b2.textContent",\n  Arrays.asList(button1, button2));\n\n// Any non-cyclic mix of serializables and handles works.\nMap<String, Object> arg = new HashMap<>();\narg.put("button1", button1);\narg.put("list", Arrays.asList(button2));\narg.put("foo", 0);\npage.evaluate(\n  "x => x.button1.textContent + x.list[0].textContent + String(x.foo)",\n  arg);\n')),Object(o.b)("p",null,"Right:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Map<String, Object> data = new HashMap<>();\ndata.put("text", "some data");\ndata.put("value", 1);\n// Pass |data| as a parameter.\nObject result = page.evaluate("data => {\\n" +\n  "  window.myApp.use(data);\\n" +\n  "}", data);\n')),Object(o.b)("p",null,"Wrong:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Map<String, Object> data = new HashMap<>();\ndata.put("text", "some data");\ndata.put("value", 1);\nObject result = page.evaluate("() => {\\n" +\n  "  // There is no |data| in the web page.\\n" +\n  "  window.myApp.use(data);\\n" +\n  "}");\n')),Object(o.b)("h3",{id:"api-reference-4"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pageevaluateexpression-arg"}),"Page.evaluate(expression[, arg])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-frame#frameevaluateexpression-arg"}),"Frame.evaluate(expression[, arg])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/core-concepts#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"))),Object(o.b)("br",null))}b.isMDXComponent=!0}}]);