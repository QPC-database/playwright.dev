(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{112:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),i=(r(0),r(152)),o=(r(155),r(156),{id:"class-playwright",title:"Playwright"}),c={unversionedId:"api/class-playwright",id:"api/class-playwright",isDocsHomePage:!1,title:"Playwright",description:"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:",source:"@site/docs/api/class-playwright.mdx",slug:"/api/class-playwright",permalink:"/dotnet/docs/api/class-playwright",version:"current",sidebar:"api",next:{title:"Browser",permalink:"/dotnet/docs/api/class-browser"}},s=[{value:"Playwright.Chromium",id:"playwrightchromium",children:[]},{value:"Playwright.Devices",id:"playwrightdevices",children:[]},{value:"Playwright.Firefox",id:"playwrightfirefox",children:[]},{value:"Playwright.Selectors",id:"playwrightselectors",children:[]},{value:"Playwright.Webkit",id:"playwrightwebkit",children:[]}],l={toc:s};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass PlaywrightExample\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        var page = await browser.NewPageAsync();\n\n        await page.GotoAsync("https://www.microsoft.com");\n        // other actions...\n    }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/api/class-playwright#playwrightchromium"}),"Playwright.Chromium")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/api/class-playwright#playwrightdevices"}),"Playwright.Devices")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/api/class-playwright#playwrightfirefox"}),"Playwright.Firefox")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/api/class-playwright#playwrightselectors"}),"Playwright.Selectors")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/api/class-playwright#playwrightwebkit"}),"Playwright.Webkit"))),Object(i.b)("h2",{id:"playwrightchromium"},"Playwright.Chromium"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to Chromium, returning instances of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/api/class-browser",title:"Browser"}),"Browser"),"."),Object(i.b)("h2",{id:"playwrightdevices"},"Playwright.Devices"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <","[IReadOnlyDictionary]","<",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),", ","[BrowserNewContextOptions]",">>")),Object(i.b)("p",null,"Returns a dictionary of devices to be used with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/api/class-browser#browsernewcontextasyncoptions"}),"Browser.NewContextAsync(options)")," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/api/class-browser#browsernewpageasyncoptions"}),"Browser.NewPageAsync(options)"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass PlaywrightExample\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Webkit.LaunchAsync();\n        await using var context = await browser.NewContextAsync(Playwright.Devices["iPhone 6"]);\n\n        var page = await context.NewPageAsync();\n        await page.GotoAsync("https://www.theverge.com");\n        // other actions...\n    }\n}\n')),Object(i.b)("h2",{id:"playwrightfirefox"},"Playwright.Firefox"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to Firefox, returning instances of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/api/class-browser",title:"Browser"}),"Browser"),"."),Object(i.b)("h2",{id:"playwrightselectors"},"Playwright.Selectors"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/api/class-selectors",title:"Selectors"}),"Selectors"),">")),Object(i.b)("p",null,"Selectors can be used to install custom selector engines. See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/selectors"}),"Working with selectors")," for more information."),Object(i.b)("h2",{id:"playwrightwebkit"},"Playwright.Webkit"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to WebKit, returning instances of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/api/class-browser",title:"Browser"}),"Browser"),"."))}p.isMDXComponent=!0},151:function(e,t,r){"use strict";function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}},152:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return y}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},w=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(r),w=a,y=b["".concat(o,".").concat(w)]||b[w]||u[w]||i;return r?n.a.createElement(y,c(c({ref:t},l),{},{components:r})):n.a.createElement(y,c({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=w;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}w.displayName="MDXCreateElement"},153:function(e,t,r){"use strict";var a=r(0),n=r(154);t.a=function(){var e=Object(a.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,r){"use strict";var a=r(0),n=Object(a.createContext)(void 0);t.a=n},155:function(e,t,r){"use strict";r(0),r(153),r(151),r(53)},156:function(e,t,r){"use strict";r(3),r(0)}}]);