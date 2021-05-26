(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{301:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(890)),o=(a(894),a(895),{id:"docker",title:"Docker"}),c={unversionedId:"docker",id:"version-1.11.0/docker",isDocsHomePage:!1,title:"Docker",description:"[Dockerfile.focal] can be used to run Playwright scripts in Docker environment. These image includes all the dependencies needed to run browsers in a Docker container, and also include the browsers themselves.",source:"@site/versioned_docs/version-1.11.0/docker.mdx",slug:"/docker",permalink:"/docs/docker",version:"1.11.0",sidebar:"version-1.11.0/docs",previous:{title:"Test Runners",permalink:"/docs/test-runners"},next:{title:"Continuous Integration",permalink:"/docs/ci"}},l=[{value:"Usage",id:"usage",children:[{value:"Pull the image",id:"pull-the-image",children:[]},{value:"Run the image",id:"run-the-image",children:[]},{value:"Using on CI",id:"using-on-ci",children:[]}]},{value:"Image tags",id:"image-tags",children:[{value:"Base images",id:"base-images",children:[]}]},{value:"Development",id:"development",children:[{value:"Build the image",id:"build-the-image",children:[]}]}],s={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.focal",title:"Dockerfile.focal"}),"Dockerfile.focal")," can be used to run Playwright scripts in Docker environment. These image includes all the dependencies needed to run browsers in a Docker container, and also include the browsers themselves."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#usage"}),"Usage")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#image-tags"}),"Image tags")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#development"}),"Development"))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"This image is published on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/_/microsoft-playwright",title:"Docker Hub"}),"Docker Hub"),"."),Object(i.b)("h3",{id:"pull-the-image"},"Pull the image"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"docker pull mcr.microsoft.com/playwright:focal\n")),Object(i.b)("p",null,"or pinned to a specific Playwright version (recommended). Replace 1.10.0 with your Playwright version:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"docker pull mcr.microsoft.com/playwright:v1.10.0-focal\n")),Object(i.b)("h3",{id:"run-the-image"},"Run the image"),Object(i.b)("p",null,"By default, the Docker image will use the ",Object(i.b)("inlineCode",{parentName:"p"},"root")," user to run the browsers. This will disable the Chromium sandbox which is not available with root. If you run trusted code (e.g. End-to-end tests) and want to avoid the hassle of managing separate user then the root user may be fine. For web scraping or crawling, we recommend to create a separate user inside the Docker container and use the seccomp profile."),Object(i.b)("h4",{id:"end-to-end-tests"},"End-to-end tests"),Object(i.b)("p",null,"On trusted websites, you can avoid creating a separate user and use root for it since you trust the code which will run on the browsers."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"docker run -it --rm --ipc=host mcr.microsoft.com/playwright:focal /bin/bash\n")),Object(i.b)("h4",{id:"crawling-and-scraping"},"Crawling and scraping"),Object(i.b)("p",null,"On untrusted websites, it's recommended to use a separate user for launching the browsers in combination with the seccomp profile. Inside the container or if you are using the Docker image as a base image you have to use ",Object(i.b)("inlineCode",{parentName:"p"},"adduser")," for it."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"$ docker run -it --rm --ipc=host --user pwuser --security-opt seccomp=seccomp_profile.json mcr.microsoft.com/playwright:focal /bin/bash\n")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/utils/docker/seccomp_profile.json"}),Object(i.b)("inlineCode",{parentName:"a"},"seccomp_profile.json"))," is needed to run Chromium with sandbox. This is a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/docker/engine/blob/d0d99b04cf6e00ed3fc27e81fc3d94e7eda70af3/profiles/seccomp/default.json"}),"default Docker seccomp profile")," with extra user namespace cloning permissions:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "comment": "Allow create user namespaces",\n    "names": [\n      "clone",\n      "setns",\n      "unshare"\n    ],\n    "action": "SCMP_ACT_ALLOW",\n    "args": [],\n    "includes": {},\n    "excludes": {}\n  }\n]\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Using ",Object(i.b)("inlineCode",{parentName:"p"},"--ipc=host")," is recommended when using Chrome (",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc"}),"Docker docs"),"). Chrome can run out of memory without this flag."))),Object(i.b)("h3",{id:"using-on-ci"},"Using on CI"),Object(i.b)("p",null,"See our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/ci"}),"Continuous Integration guides")," for sample configs."),Object(i.b)("h2",{id:"image-tags"},"Image tags"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://mcr.microsoft.com/v2/playwright/tags/list",title:"all available image tags"}),"all available image tags"),"."),Object(i.b)("p",null,"Docker images are published automatically by GitHub Actions. We currently publish images with the following tags (",Object(i.b)("inlineCode",{parentName:"p"},"v1.10.0")," in this case is an example:):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},":next")," - tip-of-tree image version based on Ubuntu 20.04 LTS."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},":next-focal")," - tip-of-tree image version based on Ubuntu 20.04 LTS."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},":next-bionic")," - tip-of-tree image version based on Ubuntu 18.04 LTS."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},":bionic")," - last Playwright release docker image based on Ubuntu 18.04 LTS."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},":focal")," - last Playwright release docker image based on Ubuntu 20.04 LTS (Focal Fossa)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},":v1.10.0")," - Playwright v1.10.0 release docker image based on Ubuntu 20.04 LTS (Focal Fossa)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},":v1.10.0-focal")," - Playwright v1.10.0 release docker image based on Ubuntu 20.04 LTS (Focal Fossa)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},":v1.10.0-bionic")," - Playwright v1.10.0 release docker image based on Ubuntu 18.04 LTS (Bionic Beaver)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},":sha-XXXXXXX")," - docker image for every commit that changed docker files or browsers, marked with a ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection#Short-SHA-1"}),"short sha")," (first 7 digits of the SHA commit).")),Object(i.b)("p",null,"Status of push to MCR can be ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://mcrflow-status-ui.azurewebsites.net/"}),"verified here")," (internal link)."),Object(i.b)("h3",{id:"base-images"},"Base images"),Object(i.b)("p",null,"We currently publish images based on the following ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/_/ubuntu"}),"Ubuntu")," versions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Ubuntu 20.04 LTS")," (Focal Fossa), image tags include ",Object(i.b)("inlineCode",{parentName:"li"},"focal")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Ubuntu 18.04 LTS")," (Bionic Beaver), image tags include ",Object(i.b)("inlineCode",{parentName:"li"},"bionic"))),Object(i.b)("h4",{id:"alpine"},"Alpine"),Object(i.b)("p",null,"Browser builds for Firefox and WebKit are built for the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/GNU_C_Library"}),"glibc")," library. Alpine Linux and other distributions that are based on the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Musl"}),"musl")," standard library are not supported."),Object(i.b)("h2",{id:"development"},"Development"),Object(i.b)("h3",{id:"build-the-image"},"Build the image"),Object(i.b)("p",null,"Use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/utils/docker/build.sh"}),Object(i.b)("inlineCode",{parentName:"a"},"//utils/docker/build.sh"))," to build the image."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$ ./utils/docker/build.sh focal playwright:localbuild-focal\n")),Object(i.b)("p",null,"The image will be tagged as ",Object(i.b)("inlineCode",{parentName:"p"},"playwright:localbuild-focal")," and could be run as:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$ docker run --rm -it playwright:localbuild /bin/bash\n")))}b.isMDXComponent=!0},890:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(a),m=n,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return a?r.a.createElement(d,c(c({ref:t},s),{},{components:a})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},891:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},892:function(e,t,a){"use strict";var n=a(0),r=a(893);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},893:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},894:function(e,t,a){"use strict";a(0),a(892),a(891),a(55)},895:function(e,t,a){"use strict";a(3),a(0)}}]);