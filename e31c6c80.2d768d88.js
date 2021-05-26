(window.webpackJsonp=window.webpackJsonp||[]).push([[726],{796:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),o=(n(0),n(890)),a={id:"ci",title:"Continuous Integration"},c={unversionedId:"ci",id:"version-1.0.0/ci",isDocsHomePage:!1,title:"Continuous Integration",description:"Playwright tests can be executed to run on your CI environments. To simplify this, we have created sample configurations for common CI providers that can be used to bootstrap your setup.",source:"@site/versioned_docs/version-1.0.0/ci.mdx",slug:"/ci",permalink:"/docs/1.0.0/ci",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Navigation and loading",permalink:"/docs/1.0.0/loading"},next:{title:"Test Runners",permalink:"/docs/1.0.0/test-runners"}},s=[{value:"GitHub Actions",id:"github-actions",children:[]},{value:"Docker",id:"docker",children:[]},{value:"Azure Pipelines",id:"azure-pipelines",children:[]}],u={toc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright tests can be executed to run on your CI environments. To simplify this, we have created sample configurations for common CI providers that can be used to bootstrap your setup."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#github-actions"}),"GitHub Actions")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#docker"}),"Docker")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#azure-pipelines"}),"Azure Pipelines"))),Object(o.b)("p",null,"Broadly, configuration on CI involves ",Object(o.b)("strong",{parentName:"p"},"ensuring system dependencies")," are in place, ",Object(o.b)("strong",{parentName:"p"},"installing Playwright and browsers")," (typically with ",Object(o.b)("inlineCode",{parentName:"p"},"npm install"),"), and ",Object(o.b)("strong",{parentName:"p"},"running tests")," (typically with ",Object(o.b)("inlineCode",{parentName:"p"},"npm test"),"). Windows and macOS build agents do not require any additional system dependencies. Linux build agents can require additional dependencies, depending on the Linux distribution."),Object(o.b)("h2",{id:"github-actions"},"GitHub Actions"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright-github-action"}),"Playwright GitHub Action")," can be used to run Playwright tests on GitHub Actions."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"steps:\n  - uses: microsoft/playwright-github-action@v1\n  - name: Run your tests\n    run: npm test\n")),Object(o.b)("p",null,"We run ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/.github/workflows/tests.yml"}),"our tests")," on GitHub Actions, across a matrix of 3 platforms (Windows, Linux, macOS) and 3 browsers (Chromium, Firefox, WebKit)."),Object(o.b)("h2",{id:"docker"},"Docker"),Object(o.b)("p",null,"We have a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.0.0/docker/README"}),"pre-built Docker image")," which can either be used directly, or as a reference to update your existing Docker definitions."),Object(o.b)("h2",{id:"azure-pipelines"},"Azure Pipelines"),Object(o.b)("p",null,"For Windows or macOS agents, no additional configuration required, just install Playwright and run your tests."),Object(o.b)("p",null,"For Linux agents, refer to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.0.0/docker/README"}),"our Docker setup")," to see additional dependencies that need to be installed."))}l.isMDXComponent=!0},890:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return n?i.a.createElement(m,c(c({ref:t},u),{},{components:n})):i.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);