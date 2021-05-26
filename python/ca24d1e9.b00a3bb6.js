(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{333:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(393)),o=(n(396),n(397),{id:"intro",title:"Getting Started"}),c={unversionedId:"intro",id:"version-1.10.0/intro",isDocsHomePage:!1,title:"Getting Started",description:"- Installation",source:"@site/versioned_docs/version-1.10.0/intro.mdx",slug:"/intro",permalink:"/python/docs/1.10.0/intro",version:"1.10.0",sidebar:"version-1.10.0/docs",previous:{title:"Why Playwright?",permalink:"/python/docs/1.10.0/why-playwright"},next:{title:"Core concepts",permalink:"/python/docs/1.10.0/core-concepts"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"First script",id:"first-script",children:[]},{value:"Record scripts",id:"record-scripts",children:[]},{value:"System requirements",id:"system-requirements",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#installation"}),"Installation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#usage"}),"Usage")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#first-script"}),"First script")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#record-scripts"}),"Record scripts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#system-requirements"}),"System requirements")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.10.0/release-notes"}),"Release notes"))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Use pip to install Playwright in your Python project. See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#system-requirements"}),"system requirements"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ pip install playwright\n$ playwright install\n")),Object(i.b)("p",null,"These commands download the Playwright package and install browser binaries for Chromium, Firefox and WebKit. To modify this behavior see ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/1.10.0/installation"}),"installation parameters"),"."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Once installed, you can ",Object(i.b)("inlineCode",{parentName:"p"},"import")," Playwright in a Python script, and launch any of the 3 browsers (",Object(i.b)("inlineCode",{parentName:"p"},"chromium"),", ",Object(i.b)("inlineCode",{parentName:"p"},"firefox")," and ",Object(i.b)("inlineCode",{parentName:"p"},"webkit"),")."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto("http://playwright.dev")\n    print(page.title())\n    browser.close()\n')),Object(i.b)("p",null,"Playwright supports two variations of the API: synchronous and asynchronous. If your modern project uses ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.python.org/3/library/asyncio.html"}),"asyncio"),", you should use async API:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def main():\n    async with async_playwright() as p:\n        browser = await p.chromium.launch()\n        page = await browser.new_page()\n        await page.goto("http://playwright.dev")\n        print(await page.title())\n        await browser.close()\n\nasyncio.run(main())\n')),Object(i.b)("h2",{id:"first-script"},"First script"),Object(i.b)("p",null,"In our first script, we will navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"whatsmyuseragent.org")," and take a screenshot in WebKit."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.webkit.launch()\n    page = browser.new_page()\n    page.goto("http://whatsmyuseragent.org/")\n    page.screenshot(path="example.png")\n    browser.close()\n')),Object(i.b)("p",null,"By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the ",Object(i.b)("inlineCode",{parentName:"p"},"headless=False")," flag while launching the browser. You can also use ",Object(i.b)("inlineCode",{parentName:"p"},"slow_mo")," to slow down execution. Learn more in the debugging tools ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/1.10.0/debug"}),"section"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"firefox.launch(headless=False, slow_mo=50)\n")),Object(i.b)("h2",{id:"record-scripts"},"Record scripts"),Object(i.b)("p",null,"Command Line Interface ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/1.10.0/cli"}),"CLI")," can be used to record user interactions and generate Python code."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ playwright codegen wikipedia.org\n")),Object(i.b)("h2",{id:"system-requirements"},"System requirements"),Object(i.b)("p",null,"Playwright requires Python version 3.7 or above. The browser binaries for Chromium, Firefox and WebKit work across the 3 platforms (Windows, macOS, Linux):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Windows"),": Works with Windows and Windows Subsystem for Linux (WSL)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"macOS"),": Requires 10.14 or above."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Linux"),": Depending on your Linux distribution, you might need to install additional dependencies to run the browsers.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Firefox requires Ubuntu 18.04+"),Object(i.b)("li",{parentName:"ul"},"For Ubuntu 18.04, the additional dependencies are defined in ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.bionic"}),"our Docker image"),", which is based on Ubuntu.")))))}p.isMDXComponent=!0},392:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},394:function(e,t,n){"use strict";var r=n(0),a=n(395);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},396:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(394),o=n(392),c=n(53),s=n.n(c),l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,u=e.values,b=e.groupId,m=e.className,d=Object(i.a)(),h=d.tabGroupChoices,f=d.setTabGroupChoices,y=Object(r.useState)(c),O=y[0],g=y[1],j=r.Children.toArray(e.children);if(null!=b){var w=h[b];null!=w&&w!==O&&u.some((function(e){return e.value===w}))&&g(w)}var v=function(e){g(e),null!=b&&f(b,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},n)}))),t?Object(r.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},397:function(e,t,n){"use strict";var r=n(3),a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);