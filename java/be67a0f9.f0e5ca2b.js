(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{235:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(284)),i=(n(287),n(288),{id:"test-examples",title:"Examples"}),c={unversionedId:"test-examples",id:"test-examples",isDocsHomePage:!1,title:"Examples",description:"- Multiple pages",source:"@site/docs/test-examples.mdx",slug:"/test-examples",permalink:"/java/docs/next/test-examples",version:"current"},l=[{value:"Multiple pages",id:"multiple-pages",children:[]},{value:"Mobile emulation",id:"mobile-emulation",children:[]},{value:"Network mocking",id:"network-mocking",children:[]},{value:"Visual comparisons",id:"visual-comparisons",children:[{value:"Page object model",id:"page-object-model",children:[]}]}],s={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#multiple-pages"}),"Multiple pages")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#mobile-emulation"}),"Mobile emulation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#network-mocking"}),"Network mocking")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#visual-comparisons"}),"Visual comparisons"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"multiple-pages"},"Multiple pages"),Object(o.b)("p",null,"The default ",Object(o.b)("inlineCode",{parentName:"p"},"context")," argument is a ","[BrowserContext][browser-context]",". Browser contexts are isolated execution environments that can host multiple pages. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/java/docs/next/multi-pages"}),"multi-page scenarios")," for more examples."),Object(o.b)("h2",{id:"mobile-emulation"},"Mobile emulation"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"use")," section in the configuration file can be used to configure mobile emulation in the default ",Object(o.b)("inlineCode",{parentName:"p"},"context"),"."),Object(o.b)("h2",{id:"network-mocking"},"Network mocking"),Object(o.b)("p",null,"Define a custom route that mocks network calls for a browser context."),Object(o.b)("h2",{id:"visual-comparisons"},"Visual comparisons"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"expect")," API supports visual comparisons with ",Object(o.b)("inlineCode",{parentName:"p"},"toMatchSnapshot"),". This uses the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mapbox/pixelmatch"}),"pixelmatch")," library, and you can pass ",Object(o.b)("inlineCode",{parentName:"p"},"threshold")," as an option."),Object(o.b)("p",null,"On first execution, this will generate golden snapshots. Subsequent runs will compare against the golden snapshots. To update golden snapshots with new actual values, run with the ",Object(o.b)("inlineCode",{parentName:"p"},"--update-snapshots")," flag."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# Update golden snapshots when they differ from actual\nnpx playwright test --update-snapshots\n")),Object(o.b)("h3",{id:"page-object-model"},"Page object model"),Object(o.b)("p",null,"To introduce a Page Object for a particular page, create a class that will use the ",Object(o.b)("inlineCode",{parentName:"p"},"page")," object."),Object(o.b)("p",null,"Create a ",Object(o.b)("inlineCode",{parentName:"p"},"LoginPage")," helper class to encapsulate common operations on the login page."),Object(o.b)("p",null,"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"LoginPage")," class in the tests."))}u.isMDXComponent=!0},283:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?r.a.createElement(f,c(c({ref:t},s),{},{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},285:function(e,t,n){"use strict";var a=n(0),r=n(286);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},286:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},287:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(285),i=n(283),c=n(53),l=n.n(c),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,b=e.groupId,m=e.className,f=Object(o.a)(),d=f.tabGroupChoices,O=f.setTabGroupChoices,h=Object(a.useState)(c),j=h[0],g=h[1],v=a.Children.toArray(e.children);if(null!=b){var y=d[b];null!=y&&y!==j&&p.some((function(e){return e.value===y}))&&g(y)}var w=function(e){g(e),null!=b&&O(b,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},288:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);