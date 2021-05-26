(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{224:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(273)),o=(n(276),n(277),{id:"inspector",title:"Inspector"}),c={unversionedId:"inspector",id:"version-1.11.0/inspector",isDocsHomePage:!1,title:"Inspector",description:"Playwright Inspector is a GUI tool that helps authoring and debugging Playwright scripts.",source:"@site/versioned_docs/version-1.11.0/inspector.mdx",slug:"/inspector",permalink:"/java/docs/inspector",version:"1.11.0",sidebar:"version-1.11.0/docs",previous:{title:"Input",permalink:"/java/docs/input"},next:{title:"Installation",permalink:"/java/docs/installation"}},s=[{value:"Open Playwright Inspector",id:"open-playwright-inspector",children:[]},{value:"Stepping through the Playwright script",id:"stepping-through-the-playwright-script",children:[]},{value:"Using Browser Developer Tools",id:"using-browser-developer-tools",children:[]},{value:"Debugging Selectors",id:"debugging-selectors",children:[]},{value:"Recording scripts",id:"recording-scripts",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Playwright Inspector is a GUI tool that helps authoring and debugging Playwright scripts."),Object(i.b)("img",{width:"712",alt:"Playwright Inspector",src:"https://user-images.githubusercontent.com/883973/108614092-8c478a80-73ac-11eb-9597-67dfce110e00.png"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#open-playwright-inspector"}),"Open Playwright Inspector")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#stepping-through-the-playwright-script"}),"Stepping through the Playwright script")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#using-browser-developer-tools"}),"Using Browser Developer Tools")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#debugging-selectors"}),"Debugging Selectors")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#recording-scripts"}),"Recording scripts"))),Object(i.b)("h2",{id:"open-playwright-inspector"},"Open Playwright Inspector"),Object(i.b)("p",null,"There are several ways of opening Playwright Inspector:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Set the ",Object(i.b)("inlineCode",{parentName:"p"},"PWDEBUG")," environment variable to run your scripts in debug mode. This configures Playwright for debugging and opens the inspector."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PWDEBUG=1 PLAYWRIGHT_JAVA_SRC=<java src root> mvn test\n\n# Windows\n$ set PLAYWRIGHT_JAVA_SRC=<java src root>\n$ set PWDEBUG=1\n$ mvn test\n")),Object(i.b)("p",{parentName:"li"},"Additional useful defaults are configured when ",Object(i.b)("inlineCode",{parentName:"p"},"PWDEBUG=1")," is set:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Browsers launch in the headed mode"),Object(i.b)("li",{parentName:"ul"},"Default timeout is set to 0 (= no timeout)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Call ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/api/class-page#pagepause"}),"Page.pause()")," method from your script when running in headed browser."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Pause on the following line.\npage.pause();\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use ",Object(i.b)("inlineCode",{parentName:"p"},"open")," or ",Object(i.b)("inlineCode",{parentName:"p"},"codegen")," commands in the Playwright ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/cli"}),"CLI"),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen wikipedia.org"\n')))),Object(i.b)("h2",{id:"stepping-through-the-playwright-script"},"Stepping through the Playwright script"),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"PWDEBUG=1")," is set, Playwright Inspector window will be opened and the script will be paused on the first Playwright statement:"),Object(i.b)("img",{width:"557",alt:"Paused on line",src:"https://user-images.githubusercontent.com/883973/108614337-71761580-73ae-11eb-9f61-3d29c52c9520.png"}),Object(i.b)("p",null,"Now we know what action is about to be performed and we can look into the details on that action. For example, when stopped on an input action such as ",Object(i.b)("inlineCode",{parentName:"p"},"click"),", the exact point Playwright is about to click is highlighted with the large red dot on the inspected page:"),Object(i.b)("img",{width:"344",alt:"Red dot on inspected page",src:"https://user-images.githubusercontent.com/883973/108614363-b69a4780-73ae-11eb-8f5e-51f9c91ec9b4.png"}),Object(i.b)("p",null,"By the time Playwright has paused on that click action, it has already performed actionability checks that can be found in the log:"),Object(i.b)("img",{width:"712",alt:"Action log",src:"https://user-images.githubusercontent.com/883973/108614564-72a84200-73b0-11eb-9de2-828b28d78b36.png"}),Object(i.b)("p",null,"If actionability can't be reached, it'll show action as pending:"),Object(i.b)("img",{width:"712",alt:"Pending action",src:"https://user-images.githubusercontent.com/883973/108614840-e6e3e500-73b2-11eb-998f-0cf31b2aa9a2.png"}),Object(i.b)("p",null,'You can step over each action using the "Step over" action or resume script without further pauses:'),Object(i.b)("center",null,Object(i.b)("img",{width:"98",alt:"Stepping toolbar",src:"https://user-images.githubusercontent.com/883973/108614389-f9f4b600-73ae-11eb-8df2-8d9ce9da5d5c.png"})),Object(i.b)("h2",{id:"using-browser-developer-tools"},"Using Browser Developer Tools"),Object(i.b)("p",null,"You can use browser developer tools in Chromium, Firefox and WebKit while running a Playwright script, with or without Playwright inspector. Developer tools help to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Inspect the DOM tree"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"See console logs")," during execution (or learn how to ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/verification#console-logs"}),"read logs via API"),")"),Object(i.b)("li",{parentName:"ul"},"Check ",Object(i.b)("strong",{parentName:"li"},"network activity")," and other developer tools features")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"For WebKit"),": launching WebKit Inspector during the execution will   prevent the Playwright script from executing any further."))),Object(i.b)("h2",{id:"debugging-selectors"},"Debugging Selectors"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click the Explore button to hover over elements in the screen and click them to automatically generate selectors for those elements."),Object(i.b)("li",{parentName:"ul"},"To verify where selector points, paste it into the inspector input field:")),Object(i.b)("img",{width:"602",alt:"Selectors toolbar",src:"https://user-images.githubusercontent.com/883973/108614696-ad5eaa00-73b1-11eb-81f5-9eebe62543a2.png"}),Object(i.b)("h2",{id:"recording-scripts"},"Recording scripts"),Object(i.b)("p",null,"At any moment, clicking Record action enables recorder (codegen) mode. Every action on the target page is turned into the generated script:"),Object(i.b)("img",{width:"712",alt:"Recorded script",src:"https://user-images.githubusercontent.com/883973/108614897-85704600-73b3-11eb-8bcd-f2e129786c49.png"}),Object(i.b)("p",null,"You can copy entire generated script or clear it using toolbar actions."))}p.isMDXComponent=!0},272:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},273:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,g=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(g,c(c({ref:t},l),{},{components:n})):a.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},274:function(e,t,n){"use strict";var r=n(0),a=n(275);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},275:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},276:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(274),o=n(272),c=n(53),s=n.n(c),l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,b=e.values,u=e.groupId,d=e.className,g=Object(i.a)(),h=g.tabGroupChoices,m=g.setTabGroupChoices,O=Object(r.useState)(c),f=O[0],j=O[1],v=r.Children.toArray(e.children);if(null!=u){var w=h[u];null!=w&&w!==f&&b.some((function(e){return e.value===w}))&&j(w)}var y=function(e){j(e),null!=u&&m(u,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},n)}))),t?Object(r.cloneElement)(v.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},277:function(e,t,n){"use strict";var r=n(3),a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);