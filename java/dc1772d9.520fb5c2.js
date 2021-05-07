(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{187:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),l=(a(0),a(211)),c=(a(214),a(215),{id:"assertions",title:"Assertions"}),i={unversionedId:"assertions",id:"assertions",isDocsHomePage:!1,title:"Assertions",description:"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions.",source:"@site/docs/assertions.mdx",slug:"/assertions",permalink:"/java/docs/next/assertions",version:"current",sidebar:"docs",previous:{title:"Auto-waiting",permalink:"/java/docs/next/actionability"},next:{title:"Authentication",permalink:"/java/docs/next/auth"}},s=[{value:"Text content",id:"text-content",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Inner text",id:"inner-text",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Attribute value",id:"attribute-value",children:[]},{value:"Checkbox state",id:"checkbox-state",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"JS expression",id:"js-expression",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Inner HTML",id:"inner-html",children:[{value:"API reference",id:"api-reference-4",children:[]}]},{value:"Visibility",id:"visibility",children:[{value:"API reference",id:"api-reference-5",children:[]}]},{value:"Enabled state",id:"enabled-state",children:[{value:"API reference",id:"api-reference-6",children:[]}]},{value:"Custom assertions",id:"custom-assertions",children:[{value:"API reference",id:"api-reference-7",children:[]}]}],o={toc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#text-content"}),"Text content")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#inner-text"}),"Inner text")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#attribute-value"}),"Attribute value")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#checkbox-state"}),"Checkbox state")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#js-expression"}),"JS expression")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#inner-html"}),"Inner HTML")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#visibility"}),"Visibility")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#enabled-state"}),"Enabled state")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#custom-assertions"}),"Custom assertions"))),Object(l.b)("h2",{id:"text-content"},"Text content"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'String content = page.textContent("nav:first-child");\nassertEquals("home", content);\n')),Object(l.b)("h3",{id:"api-reference"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pagetextcontentselector-options"}),"Page.textContent(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-elementhandle#elementhandletextcontent"}),"ElementHandle.textContent()"))),Object(l.b)("h2",{id:"inner-text"},"Inner text"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'String text = page.innerText(".selected");\nassertEquals("value", text);\n')),Object(l.b)("h3",{id:"api-reference-1"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pageinnertextselector-options"}),"Page.innerText(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-elementhandle#elementhandleinnertext"}),"ElementHandle.innerText()"))),Object(l.b)("h2",{id:"attribute-value"},"Attribute value"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'String alt = page.getAttribute("input", "alt");\nassertEquals("Text", alt);\n')),Object(l.b)("h2",{id:"checkbox-state"},"Checkbox state"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'boolean checked = page.isChecked("input");\nassertTrue(checked);\n')),Object(l.b)("h3",{id:"api-reference-2"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pageischeckedselector-options"}),"Page.isChecked(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-elementhandle#elementhandleischecked"}),"ElementHandle.isChecked()"))),Object(l.b)("h2",{id:"js-expression"},"JS expression"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Object content = page.evalOnSelector("nav:first-child", "e => e.textContent");\nassertEquals("home", content);\n')),Object(l.b)("h3",{id:"api-reference-3"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pageevalonselectorselector-expression-arg"}),"Page.evalOnSelector(selector, expression[, arg])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-jshandle#jshandleevaluateexpression-arg"}),"JsHandle.evaluate(expression[, arg])"))),Object(l.b)("h2",{id:"inner-html"},"Inner HTML"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'String html = page.innerHTML("div.result");\nassertEquals("<p>Result</p>", html);\n')),Object(l.b)("h3",{id:"api-reference-4"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pageinnerhtmlselector-options"}),"Page.innerHTML(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-elementhandle#elementhandleinnerhtml"}),"ElementHandle.innerHTML()"))),Object(l.b)("h2",{id:"visibility"},"Visibility"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'boolean visible = page.isVisible("input");\nassertTrue(visible);\n')),Object(l.b)("h3",{id:"api-reference-5"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pageisvisibleselector-options"}),"Page.isVisible(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-elementhandle#elementhandleisvisible"}),"ElementHandle.isVisible()"))),Object(l.b)("h2",{id:"enabled-state"},"Enabled state"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'boolean enabled = page.isEnabled("input");\nassertTrue(enabled);\n')),Object(l.b)("h3",{id:"api-reference-6"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pageisenabledselector-options"}),"Page.isEnabled(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-elementhandle#elementhandleisenabled"}),"ElementHandle.isEnabled()"))),Object(l.b)("h2",{id:"custom-assertions"},"Custom assertions"),Object(l.b)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of the browser. This is useful in situations where you want to assert for values that are not covered by the convenience APIs above."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Assert local storage value\nObject userId = page.evaluate("() => window.localStorage.getItem(\'userId\')");\nassertNotNull(userId);\n\n// Assert value for input element\npage.waitForSelector("#search");\nObject value = page.evalOnSelector("#search", "el => el.value");\nassertEquals("query", value);\n\n// Assert computed style\nObject fontSize = page.evalOnSelector("div", "el => window.getComputedStyle(el).fontSize");\nassertEquals("16px", fontSize);\n\n// Assert list length\nObject length = page.evalOnSelectorAll("li.selected",  "items => items.length");\nassertEquals(3, length);\n')),Object(l.b)("h3",{id:"api-reference-7"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pageevaluateexpression-arg"}),"Page.evaluate(expression[, arg])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pageevalonselectorselector-expression-arg"}),"Page.evalOnSelector(selector, expression[, arg])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-page#pageevalonselectorallselector-expression-arg"}),"Page.evalOnSelectorAll(selector, expression[, arg])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-frame#frameevaluateexpression-arg"}),"Frame.evaluate(expression[, arg])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-frame#frameevalonselectorselector-expression-arg"}),"Frame.evalOnSelector(selector, expression[, arg])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-frame#frameevalonselectorallselector-expression-arg"}),"Frame.evalOnSelectorAll(selector, expression[, arg])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-elementhandle#elementhandleevalonselectorselector-expression-arg"}),"ElementHandle.evalOnSelector(selector, expression[, arg])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-elementhandle#elementhandleevalonselectorallselector-expression-arg"}),"ElementHandle.evalOnSelectorAll(selector, expression[, arg])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/core-concepts#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"))))}b.isMDXComponent=!0},210:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},211:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=b(a),j=n,d=u["".concat(c,".").concat(j)]||u[j]||p[j]||l;return a?r.a.createElement(d,i(i({ref:t},o),{},{components:a})):r.a.createElement(d,i({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=j;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<l;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},212:function(e,t,a){"use strict";var n=a(0),r=a(213);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},213:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},214:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(212),c=a(210),i=a(53),s=a.n(i),o=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,u=e.values,p=e.groupId,j=e.className,d=Object(l.a)(),m=d.tabGroupChoices,O=d.setTabGroupChoices,f=Object(n.useState)(i),v=f[0],h=f[1],g=n.Children.toArray(e.children);if(null!=p){var x=m[p];null!=x&&x!==v&&u.some((function(e){return e.value===x}))&&h(x)}var N=function(e){h(e),null!=p&&O(p,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},j)},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},215:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return l.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);