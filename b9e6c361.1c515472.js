(window.webpackJsonp=window.webpackJsonp||[]).push([[585],{656:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(890)),i=(n(894),n(895),{id:"auth",title:"Authentication"}),s={unversionedId:"auth",id:"version-1.9.0/auth",isDocsHomePage:!1,title:"Authentication",description:"Playwright can be used to automate scenarios that require authentication.",source:"@site/versioned_docs/version-1.9.0/auth.mdx",slug:"/auth",permalink:"/docs/1.9.0/auth",version:"1.9.0",sidebar:"version-1.9.0/docs",previous:{title:"Assertions",permalink:"/docs/1.9.0/assertions"},next:{title:"Dialogs",permalink:"/docs/1.9.0/dialogs"}},c=[{value:"Automate logging in",id:"automate-logging-in",children:[]},{value:"Reuse authentication state",id:"reuse-authentication-state",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Session storage",id:"session-storage",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Multi-factor authentication",id:"multi-factor-authentication",children:[{value:"Persistent authentication",id:"persistent-authentication",children:[]},{value:"Lifecycle",id:"lifecycle",children:[]},{value:"API reference",id:"api-reference-2",children:[]}]}],l={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright can be used to automate scenarios that require authentication."),Object(o.b)("p",null,"Tests written with Playwright execute in isolated clean-slate environments called ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.9.0/core-concepts#browser-contexts"}),"browser contexts"),". This isolation model improves reproducibility and prevents cascading test failures. New browser contexts can load existing authentication state. This eliminates the need to login in every context and speeds up test execution."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: This guide covers cookie/token-based authentication (logging in via the app UI). For ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"}),"HTTP authentication")," use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])"),".")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#automate-logging-in"}),"Automate logging in")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#reuse-authentication-state"}),"Reuse authentication state")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#session-storage"}),"Session storage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#multi-factor-authentication"}),"Multi-factor authentication"))),Object(o.b)("h2",{id:"automate-logging-in"},"Automate logging in"),Object(o.b)("p",null,"The Playwright API can automate interaction with a login form. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.9.0/input"}),"Input guide")," for more details."),Object(o.b)("p",null,"The following example automates login on GitHub. Once these steps are executed, the browser context will be authenticated."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const page = await context.newPage();\nawait page.goto('https://github.com/login');\n\n// Interact with login form\nawait page.click('text=Login');\nawait page.fill('input[name=\"login\"]', USERNAME);\nawait page.fill('input[name=\"password\"]', PASSWORD);\nawait page.click('text=Submit');\n// Verify app is logged in\n")),Object(o.b)("p",null,"These steps can be executed for every browser context. However, redoing login for every test can slow down test execution. To prevent that, we will reuse existing authentication state in new browser contexts."),Object(o.b)("h2",{id:"reuse-authentication-state"},"Reuse authentication state"),Object(o.b)("p",null,"Web apps use cookie-based or token-based authentication, where authenticated state is stored as ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies")," or in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage"}),"local storage"),". Playwright provides ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-browsercontext#browsercontextstoragestateoptions"}),"browserContext.storageState([options])")," method that can be used to retrieve storage state from authenticated contexts and then create new contexts with prepopulated state."),Object(o.b)("p",null,"Cookies and local storage state can be used across different browsers. They depend on your application's authentication model: some apps might require both cookies and local storage."),Object(o.b)("p",null,"The following code snippet retrieves state from an authenticated context and creates a new context with that state."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Save storage state and store as an env variable\nconst storage = await context.storageState();\nprocess.env.STORAGE = JSON.stringify(storage);\n\n// Create a new context with the saved storage state\nconst storageState = JSON.parse(process.env.STORAGE);\nconst context = await browser.newContext({ storageState });\n")),Object(o.b)("p",null,"Logging in via the UI and then reusing authentication state can be combined to implement ",Object(o.b)("strong",{parentName:"p"},"login once and run multiple scenarios"),". The lifecycle looks like:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Run tests (for example, with ",Object(o.b)("inlineCode",{parentName:"li"},"npm run test"),")."),Object(o.b)("li",{parentName:"ol"},"Login via UI and retrieve authentication state.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"In Jest, this can be executed in ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://jestjs.io/docs/en/configuration#globalsetup-string"}),Object(o.b)("inlineCode",{parentName:"a"},"globalSetup")),"."))),Object(o.b)("li",{parentName:"ol"},"In each test, load authentication state in ",Object(o.b)("inlineCode",{parentName:"li"},"beforeEach")," or ",Object(o.b)("inlineCode",{parentName:"li"},"beforeAll")," step.")),Object(o.b)("p",null,"This approach will also ",Object(o.b)("strong",{parentName:"p"},"work in CI environments"),", since it does not rely on any external state."),Object(o.b)("h3",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-browsercontext#browsercontextstoragestateoptions"}),"browserContext.storageState([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])"))),Object(o.b)("h2",{id:"session-storage"},"Session storage"),Object(o.b)("p",null,"Rarely, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"}),"session storage")," is used for storing information associated with the logged-in state. Session storage is specific to a particular domain and is not persisted across page loads. Playwright does not provide API to persist session storage, but the following snippet can be used to save/load session storage."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Get session storage and store as env variable\nconst sessionStorage = await page.evaluate(() => JSON.stringify(sessionStorage));\nprocess.env.SESSION_STORAGE = sessionStorage;\n\n// Set session storage in a new context\nconst sessionStorage = process.env.SESSION_STORAGE;\nawait context.addInitScript(storage => {\n  if (window.location.hostname === 'example.com') {\n    const entries = JSON.parse(storage);\n    Object.keys(entries).forEach(key => {\n      window.sessionStorage.setItem(key, entries[key]);\n    });\n  }\n}, sessionStorage);\n")),Object(o.b)("h3",{id:"api-reference-1"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-browsercontext#browsercontextstoragestateoptions"}),"browserContext.storageState([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page#pageevaluatepagefunction-arg"}),"page.evaluate(pageFunction[, arg])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-browsercontext#browsercontextaddinitscriptscript-arg"}),"browserContext.addInitScript(script[, arg])"))),Object(o.b)("h2",{id:"multi-factor-authentication"},"Multi-factor authentication"),Object(o.b)("p",null,"Accounts with multi-factor authentication (MFA) cannot be fully automated, and need manual intervention. Persistent authentication can be used to partially automate MFA scenarios."),Object(o.b)("h3",{id:"persistent-authentication"},"Persistent authentication"),Object(o.b)("p",null,"Note that persistent authentication is not suited for CI environments since it relies on a disk location. User data directories are specific to browser types and cannot be shared across browser types."),Object(o.b)("p",null,"User data directories can be used with the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-browsertype#browsertypelaunchpersistentcontextuserdatadir-options"}),"browserType.launchPersistentContext(userDataDir[, options])")," API."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');\n\nconst userDataDir = '/path/to/directory';\nconst context = await chromium.launchPersistentContext(userDataDir, { headless: false });\n// Execute login steps manually in the browser window\n")),Object(o.b)("h3",{id:"lifecycle"},"Lifecycle"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a user data directory on disk 2. Launch a persistent context with the user data directory and login the MFA account. 3. Reuse user data directory to run automation scenarios.")),Object(o.b)("h3",{id:"api-reference-2"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-browsertype#browsertypelaunchpersistentcontextuserdatadir-options"}),"browserType.launchPersistentContext(userDataDir[, options])"))))}b.isMDXComponent=!0},890:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,h=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},891:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},892:function(e,t,n){"use strict";var a=n(0),r=n(893);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},893:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},894:function(e,t,n){"use strict";n(0),n(892),n(891),n(55)},895:function(e,t,n){"use strict";n(3),n(0)}}]);