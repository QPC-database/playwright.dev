(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),a=(n(0),n(152)),o=(n(155),n(156),{id:"mobile",title:"Mobile (experimental)"}),c={unversionedId:"mobile",id:"mobile",isDocsHomePage:!1,title:"Mobile (experimental)",description:"- Requirements",source:"@site/docs/mobile.mdx",slug:"/mobile",permalink:"/dotnet/docs/mobile",version:"current"},l=[{value:"Requirements",id:"requirements",children:[]},{value:"How to run",id:"how-to-run",children:[]},{value:"Known limitations",id:"known-limitations",children:[]}],u={toc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#requirements"}),"Requirements")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#how-to-run"}),"How to run")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#known-limitations"}),"Known limitations"))),Object(a.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Mobile support is experimental and uses prefixed provisional API."))),Object(a.b)("p",null,"You can try Playwright against Android, Chrome for Android and Android WebView today. This support is experimental. Support for devices is tracked in the issue ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/issues/1122"}),"#1122"),"."),Object(a.b)("p",null,"See ","[Android]"," for documentation."),Object(a.b)("h2",{id:"requirements"},"Requirements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Android device or AVD Emulator."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.android.com/studio/command-line/adb"}),"ADB daemon")," running and authenticated with your device. Typically running ",Object(a.b)("inlineCode",{parentName:"li"},"adb devices")," is all you need to do."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://play.google.com/store/apps/details?id=com.android.chrome"}),Object(a.b)("inlineCode",{parentName:"a"},"Chrome 87"))," or newer installed on the device"),Object(a.b)("li",{parentName:"ul"},'"Enable command line on non-rooted devices" enabled in ',Object(a.b)("inlineCode",{parentName:"li"},"chrome://flags"),".")),Object(a.b)("h2",{id:"how-to-run"},"How to run"),Object(a.b)("h2",{id:"known-limitations"},"Known limitations"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Raw USB operation is not yet supported, so you need ADB."),Object(a.b)("li",{parentName:"ul"},'Device needs to be awake to produce screenshots. Enabling "Stay awake" developer mode will help.'),Object(a.b)("li",{parentName:"ul"},"We didn't run all the tests against the device, so not everything works.")))}b.isMDXComponent=!0},151:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),b=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||p[d]||a;return n?i.a.createElement(m,c(c({ref:t},u),{},{components:n})):i.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},153:function(e,t,n){"use strict";var r=n(0),i=n(154);t.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,n){"use strict";var r=n(0),i=Object(r.createContext)(void 0);t.a=i},155:function(e,t,n){"use strict";n(0),n(153),n(151),n(53)},156:function(e,t,n){"use strict";n(3),n(0)}}]);