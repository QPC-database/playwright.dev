(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{265:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),c=(n(0),n(890)),o={id:"pom",title:"Page Object Models"},i={unversionedId:"pom",id:"version-1.6.0/pom",isDocsHomePage:!1,title:"Page Object Models",description:"Large test suites can be structured to optimize ease of authoring and maintenance.",source:"@site/versioned_docs/version-1.6.0/pom.mdx",slug:"/pom",permalink:"/docs/1.6.0/pom",version:"1.6.0",sidebar:"version-1.6.0/docs",previous:{title:"Authentication",permalink:"/docs/1.6.0/auth"},next:{title:"Test Runners",permalink:"/docs/1.6.0/test-runners"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Implementation",id:"implementation",children:[{value:"API reference",id:"api-reference",children:[]}]}],s={toc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Large test suites can be structured to optimize ease of authoring and maintenance.\nPage object models are one such approach to structure your test suite."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#introduction"}),"Introduction")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#implementation"}),"Implementation"))),Object(c.b)("h2",{id:"introduction"},"Introduction"),Object(c.b)("p",null,"A page object represents a part of your web application. An e-commerce web\napplication might have a home page, a listings page and a checkout page. Each of\nthem can be represented by page object models."),Object(c.b)("p",null,"Page objects ",Object(c.b)("strong",{parentName:"p"},"simplify authoring"),". They create a higher-level API which suits\nyour application."),Object(c.b)("p",null,"Page objects ",Object(c.b)("strong",{parentName:"p"},"simplify maintenance"),". They capture element selectors in one place\nand create reusable code to avoid repetition."),Object(c.b)("h2",{id:"implementation"},"Implementation"),Object(c.b)("p",null,"Page object models wrap over a Playwright ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.6.0/api/class-page#class-page"}),Object(c.b)("inlineCode",{parentName:"a"},"page")),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// models/Search.js\nclass SearchPage {\n  constructor(page) {\n    this.page = page;\n  }\n  async navigate() {\n    await this.page.goto('https://bing.com');\n  }\n  async search(text) {\n    await this.page.fill('[aria-label=\"Enter your search term\"]', text);\n    await this.page.keyboard.press('Enter');\n  }\n}\nmodule.exports = { SearchPage };\n")),Object(c.b)("p",null,"Page objects can then be used inside a test."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// search.spec.js\nconst { SearchPage } = require('./models/Search');\n\n// In the test\nconst page = await browser.newPage();\nconst searchPage = new SearchPage(page);\nawait searchPage.navigate();\nawait searchPage.search('search query');\n")),Object(c.b)("h3",{id:"api-reference"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-page"}),"class ",Object(c.b)("inlineCode",{parentName:"a"},"Page")))))}l.isMDXComponent=!0},890:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||c;return n?r.a.createElement(d,i(i({ref:t},s),{},{components:n})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);