(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{325:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(347)),o=(n(350),n(351),{id:"intro",title:"Getting Started"}),c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Getting Started",description:"- Installation",source:"@site/docs/intro.mdx",slug:"/intro",permalink:"/python/docs/next/intro",version:"current",sidebar:"docs",previous:{title:"Why Playwright?",permalink:"/python/docs/next/why-playwright"},next:{title:"Core concepts",permalink:"/python/docs/next/core-concepts"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"First script",id:"first-script",children:[]},{value:"Record scripts",id:"record-scripts",children:[]},{value:"System requirements",id:"system-requirements",children:[{value:"Windows",id:"windows",children:[]},{value:"macOS",id:"macos",children:[]},{value:"Linux",id:"linux",children:[]}]}],l={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#installation"}),"Installation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#usage"}),"Usage")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#first-script"}),"First script")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#record-scripts"}),"Record scripts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#system-requirements"}),"System requirements")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/next/release-notes"}),"Release notes"))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Use pip to install Playwright in your Python project. See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#system-requirements"}),"system requirements"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pip install playwright\nplaywright install\n")),Object(i.b)("p",null,"These commands download the Playwright package and install browser binaries for Chromium, Firefox and WebKit. To modify this behavior see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/next/installation"}),"installation parameters"),"."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Once installed, you can ",Object(i.b)("inlineCode",{parentName:"p"},"import")," Playwright in a Python script, and launch any of the 3 browsers (",Object(i.b)("inlineCode",{parentName:"p"},"chromium"),", ",Object(i.b)("inlineCode",{parentName:"p"},"firefox")," and ",Object(i.b)("inlineCode",{parentName:"p"},"webkit"),")."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto("http://playwright.dev")\n    print(page.title())\n    browser.close()\n')),Object(i.b)("p",null,"Playwright supports two variations of the API: synchronous and asynchronous. If your modern project uses ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.python.org/3/library/asyncio.html"}),"asyncio"),", you should use async API:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def main():\n    async with async_playwright() as p:\n        browser = await p.chromium.launch()\n        page = await browser.new_page()\n        await page.goto("http://playwright.dev")\n        print(await page.title())\n        await browser.close()\n\nasyncio.run(main())\n')),Object(i.b)("h2",{id:"first-script"},"First script"),Object(i.b)("p",null,"In our first script, we will navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"whatsmyuseragent.org")," and take a screenshot in WebKit."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.webkit.launch()\n    page = browser.new_page()\n    page.goto("http://whatsmyuseragent.org/")\n    page.screenshot(path="example.png")\n    browser.close()\n')),Object(i.b)("p",null,"By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the ",Object(i.b)("inlineCode",{parentName:"p"},"headless=False")," flag while launching the browser. You can also use ",Object(i.b)("inlineCode",{parentName:"p"},"slow_mo")," to slow down execution. Learn more in the debugging tools ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/next/debug"}),"section"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"firefox.launch(headless=False, slow_mo=50)\n")),Object(i.b)("h2",{id:"record-scripts"},"Record scripts"),Object(i.b)("p",null,"Command Line Interface ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/next/cli"}),"CLI")," can be used to record user interactions and generate Python code."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"playwright codegen wikipedia.org\n")),Object(i.b)("h2",{id:"system-requirements"},"System requirements"),Object(i.b)("p",null,"Playwright requires Python 3.7 or above. The browser binaries for Chromium, Firefox and WebKit work across the 3 platforms (Windows, macOS, Linux):"),Object(i.b)("h3",{id:"windows"},"Windows"),Object(i.b)("p",null,"Works with Windows and Windows Subsystem for Linux (WSL)."),Object(i.b)("h3",{id:"macos"},"macOS"),Object(i.b)("p",null,"Requires 10.14 (Mojave) or above."),Object(i.b)("h3",{id:"linux"},"Linux"),Object(i.b)("p",null,"Depending on your Linux distribution, you might need to install additional dependencies to run the browsers."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Only Ubuntu 18.04 and Ubuntu 20.04 are officially supported."))),Object(i.b)("p",null,"See also in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/next/cli#install-system-dependencies"}),"Command Line Interface")," which has a command to install all necessary dependencies automatically for Ubuntu LTS releases."))}p.isMDXComponent=!0},346:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},347:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},348:function(e,t,n){"use strict";var a=n(0),r=n(349);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},349:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},350:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(348),o=n(346),c=n(53),s=n.n(c),l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,b=e.values,u=e.groupId,d=e.className,m=Object(i.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,O=Object(a.useState)(c),y=O[0],j=O[1],g=a.Children.toArray(e.children);if(null!=u){var w=h[u];null!=w&&w!==y&&b.some((function(e){return e.value===w}))&&j(w)}var v=function(e){j(e),null!=u&&f(u,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},351:function(e,t,n){"use strict";var a=n(3),r=n(0),i=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);