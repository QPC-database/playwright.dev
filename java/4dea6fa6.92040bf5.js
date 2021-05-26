(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{137:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),i=(t(0),t(273)),o=(t(276),t(277),{id:"ci",title:"Continuous Integration"}),c={unversionedId:"ci",id:"version-1.11.0/ci",isDocsHomePage:!1,title:"Continuous Integration",description:"Playwright tests can be executed in CI environments. We have created sample configurations for common CI providers.",source:"@site/versioned_docs/version-1.11.0/ci.mdx",slug:"/ci",permalink:"/java/docs/ci",version:"1.11.0",sidebar:"version-1.11.0/docs",previous:{title:"Docker",permalink:"/java/docs/docker"},next:{title:"Command Line Interface",permalink:"/java/docs/cli"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"CI configurations",id:"ci-configurations",children:[{value:"GitHub Actions",id:"github-actions",children:[]},{value:"Docker",id:"docker",children:[]},{value:"Azure Pipelines",id:"azure-pipelines",children:[]},{value:"Travis CI",id:"travis-ci",children:[]},{value:"CircleCI",id:"circleci",children:[]},{value:"Jenkins",id:"jenkins",children:[]},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",children:[]},{value:"GitLab CI",id:"gitlab-ci",children:[]}]},{value:"Caching browsers",id:"caching-browsers",children:[]},{value:"Debugging browser launches",id:"debugging-browser-launches",children:[]},{value:"Running headed",id:"running-headed",children:[]}],s={toc:l};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Playwright tests can be executed in CI environments. We have created sample configurations for common CI providers."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#introduction"}),"Introduction")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#ci-configurations"}),"CI configurations")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#caching-browsers"}),"Caching browsers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#debugging-browser-launches"}),"Debugging browser launches")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#running-headed"}),"Running headed"))),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"3 steps to get your tests running on CI:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Ensure CI agent can run browsers"),": Use ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/docker"}),"our Docker image")," in Linux agents. Windows and macOS agents do not require any additional dependencies."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Install Playwright"),":"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Run your tests"),":")),Object(i.b)("h2",{id:"ci-configurations"},"CI configurations"),Object(i.b)("h3",{id:"github-actions"},"GitHub Actions"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright-github-action"}),"Playwright GitHub Action")," can be used to run Playwright tests on GitHub Actions."),Object(i.b)("p",null,"We run ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/.github/workflows/tests.yml"}),"our tests")," on GitHub Actions, across a matrix of 3 platforms (Windows, Linux, macOS) and 3 browsers (Chromium, Firefox, WebKit)."),Object(i.b)("h3",{id:"docker"},"Docker"),Object(i.b)("p",null,"We have a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/java/docs/docker"}),"pre-built Docker image")," which can either be used directly, or as a reference to update your existing Docker definitions."),Object(i.b)("p",null,"Suggested configuration"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"By default, Docker runs a container with a ",Object(i.b)("inlineCode",{parentName:"p"},"/dev/shm")," shared memory space 64MB. This is ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/c0b/chrome-in-docker/issues/1"}),"typically too small")," for Chromium and will cause Chromium to crash when rendering large pages. To fix, run the container with ",Object(i.b)("inlineCode",{parentName:"p"},"docker run --shm-size=1gb")," to increase the size of ",Object(i.b)("inlineCode",{parentName:"p"},"/dev/shm"),". Since Chromium 65, this is no longer necessary. Instead, launch the browser with the ",Object(i.b)("inlineCode",{parentName:"p"},"--disable-dev-shm-usage")," flag:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions()\n  .setArgs(Arrays.asList("--disable-dev-shm-usage")));\n')),Object(i.b)("p",{parentName:"li"},"This will write shared memory files into ",Object(i.b)("inlineCode",{parentName:"p"},"/tmp")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},"/dev/shm"),". See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=736452"}),"crbug.com/736452")," for more details.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Using ",Object(i.b)("inlineCode",{parentName:"p"},"--ipc=host")," is also recommended when using Chromium\u2014without it Chromium can run out of memory and crash. Learn more about this option in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc"}),"Docker docs"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Seeing other weird errors when launching Chromium? Try running your container with ",Object(i.b)("inlineCode",{parentName:"p"},"docker run --cap-add=SYS_ADMIN")," when developing locally.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Yelp/dumb-init"}),"dumb-init")," is worth checking out if you're experiencing a lot of zombies Chromium processes sticking around. There's special treatment for processes with PID=1, which makes it hard to terminate Chromium properly in some cases (e.g. in Docker)."))),Object(i.b)("h3",{id:"azure-pipelines"},"Azure Pipelines"),Object(i.b)("p",null,"For Windows or macOS agents, no additional configuration required, just install Playwright and run your tests."),Object(i.b)("p",null,"For Linux agents, you can use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/java/docs/docker"}),"our Docker container")," with Azure Pipelines support for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/process/container-phases?view=azure-devops"}),"running containerized jobs"),". Alternatively, you can refer to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/java/docs/docker"}),"Dockerfile")," to see additional dependencies that need to be installed on a Ubuntu agent."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"pool:\n  vmImage: 'ubuntu-20.04'\n\ncontainer: mcr.microsoft.com/playwright:focal\n\nsteps:\n...\n")),Object(i.b)("h3",{id:"travis-ci"},"Travis CI"),Object(i.b)("p",null,"Suggested configuration"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://man7.org/linux/man-pages/man7/user_namespaces.7.html"}),"User namespace cloning")," should be enabled to support proper sandboxing"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Xvfb"}),"xvfb")," should be launched in order to run Chromium in non-headless mode (e.g. to test Chrome Extensions)"),Object(i.b)("li",{parentName:"ol"},"If your project does not have ",Object(i.b)("inlineCode",{parentName:"li"},"package-lock.json"),", Travis would be auto-caching ",Object(i.b)("inlineCode",{parentName:"li"},"node_modules")," directory. If you run ",Object(i.b)("inlineCode",{parentName:"li"},"npm install")," (instead of ",Object(i.b)("inlineCode",{parentName:"li"},"npm ci"),"), it is possible that the browser binaries are not downloaded. Fix this with ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#exception-node_modules-are-cached"}),"these steps")," outlined below.")),Object(i.b)("p",null,"To sum up, your ",Object(i.b)("inlineCode",{parentName:"p"},".travis.yml")," might look like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'language: node_js\ndist: bionic\naddons:\n  apt:\n    packages:\n    # These are required to run webkit\n    - libwoff1\n    - libopus0\n    - libwebp6\n    - libwebpdemux2\n    - libenchant1c2a\n    - libgudev-1.0-0\n    - libsecret-1-0\n    - libhyphen0\n    - libgdk-pixbuf2.0-0\n    - libegl1\n    - libgles2\n    - libevent-2.1-6\n    - libnotify4\n    - libxslt1.1\n    - libvpx5\n    # gstreamer and plugins to support video playback in WebKit.\n    - gstreamer1.0-gl\n    - gstreamer1.0-plugins-base\n    - gstreamer1.0-plugins-good\n    - gstreamer1.0-plugins-bad\n    # This is required to run chromium\n    - libgbm1\n    # this is needed for running headed tests\n    - xvfb\n\n# allow headed tests\nbefore_install:\n  # Enable user namespace cloning\n  - "sysctl kernel.unprivileged_userns_clone=1"\n  # Launch XVFB\n  - "export DISPLAY=:99.0"\n  - "sh -e /etc/init.d/xvfb start"\n')),Object(i.b)("h3",{id:"circleci"},"CircleCI"),Object(i.b)("p",null,"Running Playwright on CircleCI requires the following steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use the pre-built ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/java/docs/docker"}),"Docker image")," in your config like so:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"docker:\n  - image: mcr.microsoft.com/playwright:focal\nenvironment:\n  NODE_ENV: development # Needed if playwright is in `devDependencies`\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If you\u2019re using Playwright through Jest, then you may encounter an error spawning child processes:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"[00:00.0]  jest args: --e2e --spec --max-workers=36\nError: spawn ENOMEM\n   at ChildProcess.spawn (internal/child_process.js:394:11)\n")),Object(i.b)("p",{parentName:"li"},"This is likely caused by Jest autodetecting the number of processes on the entire machine (",Object(i.b)("inlineCode",{parentName:"p"},"36"),") rather than the number allowed to your container (",Object(i.b)("inlineCode",{parentName:"p"},"2"),"). To fix this, set ",Object(i.b)("inlineCode",{parentName:"p"},"jest --maxWorkers=2")," in your test command."))),Object(i.b)("h3",{id:"jenkins"},"Jenkins"),Object(i.b)("p",null,"Jenkins supports Docker agents for pipelines. Use the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/java/docs/docker"}),"Playwright Docker image")," to run tests on Jenkins."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-groovy"}),"pipeline {\n   agent { docker { image 'mcr.microsoft.com/playwright:focal' } }\n   stages {\n      stage('e2e-tests') {\n         steps {\n            sh 'npm install'\n            sh 'npm run test'\n         }\n      }\n   }\n}\n")),Object(i.b)("h3",{id:"bitbucket-pipelines"},"Bitbucket Pipelines"),Object(i.b)("p",null,"Bitbucket Pipelines can use public ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://confluence.atlassian.com/bitbucket/use-docker-images-as-build-environments-792298897.html"}),"Docker images as build environments"),". To run Playwright tests on Bitbucket, use our public Docker image (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/java/docs/docker"}),"see Dockerfile"),")."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"image: mcr.microsoft.com/playwright:focal\n")),Object(i.b)("p",null,"While the Docker image supports sandboxing for Chromium, it does not work in the Bitbucket Pipelines environment. To launch Chromium on Bitbucket Pipelines, use the ",Object(i.b)("inlineCode",{parentName:"p"},"chromiumSandbox: false")," launch argument."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Browser browser = chromium.launch(new BrowserType.LaunchOptions().setChromiumSandbox(false));\n    }\n  }\n}\n")),Object(i.b)("h3",{id:"gitlab-ci"},"GitLab CI"),Object(i.b)("p",null,"To run Playwright tests on GitLab, use our public Docker image (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/java/docs/docker"}),"see Dockerfile"),")."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"stages:\n  - test\n\ntests:\n  stage: test\n  image: mcr.microsoft.com/playwright:focal\n  script:\n  ...\n")),Object(i.b)("h2",{id:"caching-browsers"},"Caching browsers"),Object(i.b)("p",null,"By default, Playwright downloads browser binaries when the Playwright NPM package is installed. The NPM packages have a ",Object(i.b)("inlineCode",{parentName:"p"},"postinstall")," hook that downloads the browser binaries. This behavior can be ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/java/docs/installation"}),"customized with environment variables"),"."),Object(i.b)("p",null,"Caching browsers on CI is ",Object(i.b)("strong",{parentName:"p"},"strictly optional"),": The ",Object(i.b)("inlineCode",{parentName:"p"},"postinstall")," hooks should execute and download the browser binaries on every run."),Object(i.b)("h4",{id:"exception-node_modules-are-cached-node-specific"},"Exception: ",Object(i.b)("inlineCode",{parentName:"h4"},"node_modules")," are cached (Node-specific)"),Object(i.b)("p",null,"Most CI providers cache the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.npmjs.com/cli-commands/cache.html"}),"npm-cache")," directory (located at ",Object(i.b)("inlineCode",{parentName:"p"},"$HOME/.npm"),"). If your CI pipelines caches the ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," directory and you run ",Object(i.b)("inlineCode",{parentName:"p"},"npm install")," (instead of ",Object(i.b)("inlineCode",{parentName:"p"},"npm ci"),"), the default configuration"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"will not work"),". This is because the ",Object(i.b)("inlineCode",{parentName:"p"},"npm install")," step will find the Playwright NPM package on disk and not execute the ",Object(i.b)("inlineCode",{parentName:"p"},"postinstall")," step."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Travis CI automatically caches ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," if your repo does not have a ",Object(i.b)("inlineCode",{parentName:"p"},"package-lock.json")," file.")),Object(i.b)("p",null,"This behavior can be fixed with one of the following approaches:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Move to caching ",Object(i.b)("inlineCode",{parentName:"li"},"$HOME/.npm")," or the npm-cache directory. (This is the default behavior in most CI providers.)"),Object(i.b)("li",{parentName:"ol"},"Set ",Object(i.b)("inlineCode",{parentName:"li"},"PLAYWRIGHT_BROWSERS_PATH=0")," as the environment variable before running ",Object(i.b)("inlineCode",{parentName:"li"},"npm install"),". This will download the browser binaries in the ",Object(i.b)("inlineCode",{parentName:"li"},"node_modules")," directory and cache them with the package code. See ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/installation"}),"installation docs"),"."),Object(i.b)("li",{parentName:"ol"},"Use ",Object(i.b)("inlineCode",{parentName:"li"},"npm ci")," (instead of ",Object(i.b)("inlineCode",{parentName:"li"},"npm install"),") which forces a clean install: by removing the existing ",Object(i.b)("inlineCode",{parentName:"li"},"node_modules")," directory. See ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.npmjs.com/cli/ci.html"}),"npm docs"),"."),Object(i.b)("li",{parentName:"ol"},"Cache the browser binaries, with the steps below.")),Object(i.b)("h4",{id:"directories-to-cache"},"Directories to cache"),Object(i.b)("p",null,"With the default behavior, Playwright downloads the browser binaries in the following directories:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),Object(i.b)("p",null,"To cache the browser downloads between CI runs, cache this location in your CI configuration, against a hash of the Playwright version."),Object(i.b)("h2",{id:"debugging-browser-launches"},"Debugging browser launches"),Object(i.b)("p",null,"Playwright supports the ",Object(i.b)("inlineCode",{parentName:"p"},"DEBUG")," environment variable to output debug logs during execution. Setting it to ",Object(i.b)("inlineCode",{parentName:"p"},"pw:browser*")," is helpful while debugging ",Object(i.b)("inlineCode",{parentName:"p"},"Error: Failed to launch browser")," errors."),Object(i.b)("h2",{id:"running-headed"},"Running headed"),Object(i.b)("p",null,"By default, Playwright launches browsers in headless mode. This can be changed by passing a flag when the browser is launched."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// Works across chromium, firefox and webkit\nimport com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Browser browser = chromium.launch(new BrowserType.LaunchOptions().setHeadless(false));\n    }\n  }\n}\n")),Object(i.b)("p",null,"On Linux agents, headed execution requires ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Xvfb"}),"Xvfb")," to be installed. Our ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/java/docs/docker"}),"Docker image")," and GitHub Action have Xvfb pre-installed. To run browsers in headed mode with Xvfb, add ",Object(i.b)("inlineCode",{parentName:"p"},"xvfb-run")," before the Node.js command."))}b.isMDXComponent=!0},272:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},273:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(t),d=a,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return t?r.a.createElement(m,c(c({ref:n},s),{},{components:t})):r.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},274:function(e,n,t){"use strict";var a=t(0),r=t(275);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},275:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},276:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(274),o=t(272),c=t(53),l=t.n(c),s=37,b=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=Object(i.a)(),h=m.tabGroupChoices,j=m.setTabGroupChoices,g=Object(a.useState)(c),O=g[0],f=g[1],w=a.Children.toArray(e.children);if(null!=u){var y=h[u];null!=y&&y!==O&&p.some((function(e){return e.value===y}))&&f(y)}var v=function(e){f(e),null!=u&&j(u,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},d)},p.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===n,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case b:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(N,e.target,e)},onFocus:function(){return v(n)},onClick:function(){v(n)}},t)}))),n?Object(a.cloneElement)(w.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}},277:function(e,n,t){"use strict";var a=t(3),r=t(0),i=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:r}),n)}}}]);