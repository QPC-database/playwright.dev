(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),s=(a(0),a(152)),i=(a(155),a(156),{id:"class-request",title:"Request"}),l={unversionedId:"api/class-request",id:"api/class-request",isDocsHomePage:!1,title:"Request",description:"Whenever the page sends a request for a network resource the following sequence of events are emitted by [Page]:",source:"@site/docs/api/class-request.mdx",slug:"/api/class-request",permalink:"/dotnet/docs/api/class-request",version:"current",sidebar:"api",previous:{title:"Page",permalink:"/dotnet/docs/api/class-page"},next:{title:"Response",permalink:"/dotnet/docs/api/class-response"}},c=[{value:"Request.Failure",id:"requestfailure",children:[]},{value:"Request.Frame",id:"requestframe",children:[]},{value:"Request.Headers",id:"requestheaders",children:[]},{value:"Request.IsNavigationRequest",id:"requestisnavigationrequest",children:[]},{value:"Request.Method",id:"requestmethod",children:[]},{value:"Request.PostData",id:"requestpostdata",children:[]},{value:"Request.PostDataBuffer",id:"requestpostdatabuffer",children:[]},{value:"Request.PostDataJSON",id:"requestpostdatajson",children:[]},{value:"Request.RedirectedFrom",id:"requestredirectedfrom",children:[]},{value:"Request.RedirectedTo",id:"requestredirectedto",children:[]},{value:"Request.ResourceType",id:"requestresourcetype",children:[]},{value:"Request.ResponseAsync()",id:"requestresponseasync",children:[]},{value:"Request.Timing",id:"requesttiming",children:[]},{value:"Request.Url",id:"requesturl",children:[]}],o={toc:c};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Whenever the page sends a request for a network resource the following sequence of events are emitted by ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page",title:"Page"}),"Page"),":"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#eventpagerequest"}),"event Page.Request")," emitted when the request is issued by the page."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#eventpageresponse"}),"event Page.Response")," emitted when/if the response status and headers are received for the request."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#eventpagerequestfinished"}),"event Page.RequestFinished")," emitted when the response body is downloaded and the request is complete.")),Object(s.b)("p",null,"If request fails at some point, then instead of ",Object(s.b)("inlineCode",{parentName:"p"},"'requestfinished'")," event (and possibly instead of 'response' event), the  ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#eventpagerequestfailed"}),"event Page.RequestFailed")," event is emitted."),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",Object(s.b)("inlineCode",{parentName:"p"},"'requestfinished'")," event."))),Object(s.b)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the 'requestfinished' event, and a new request is  issued to a redirected url."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-request#requestfailure"}),"Request.Failure")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-request#requestframe"}),"Request.Frame")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-request#requestheaders"}),"Request.Headers")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-request#requestisnavigationrequest"}),"Request.IsNavigationRequest")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-request#requestmethod"}),"Request.Method")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-request#requestpostdata"}),"Request.PostData")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-request#requestpostdatabuffer"}),"Request.PostDataBuffer")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-request#requestpostdatajson"}),"Request.PostDataJSON")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-request#requestredirectedfrom"}),"Request.RedirectedFrom")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-request#requestredirectedto"}),"Request.RedirectedTo")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-request#requestresourcetype"}),"Request.ResourceType")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-request#requestresponseasync"}),"Request.ResponseAsync()")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-request#requesttiming"}),"Request.Timing")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-request#requesturl"}),"Request.Url"))),Object(s.b)("h2",{id:"requestfailure"},"Request.Failure"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(s.b)("p",null,"The method returns ",Object(s.b)("inlineCode",{parentName:"p"},"null")," unless this request has failed, as reported by ",Object(s.b)("inlineCode",{parentName:"p"},"requestfailed")," event."),Object(s.b)("p",null,"Example of logging of all the failed requests:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"page.RequestFailed += (_, request) =>\n{\n    Console.WriteLine(request.Failure);\n};\n")),Object(s.b)("h2",{id:"requestframe"},"Request.Frame"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-frame",title:"Frame"}),"Frame"),">")),Object(s.b)("p",null,"Returns the ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/dotnet/docs/api/class-frame",title:"Frame"}),"Frame")," that initiated this request."),Object(s.b)("h2",{id:"requestheaders"},"Request.Headers"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",title:"Map"}),"Map"),"<",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),", ",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">>")),Object(s.b)("p",null,"An object with HTTP headers associated with the request. All header names are lower-case."),Object(s.b)("h2",{id:"requestisnavigationrequest"},"Request.IsNavigationRequest"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">")),Object(s.b)("p",null,"Whether this request is driving frame's navigation."),Object(s.b)("h2",{id:"requestmethod"},"Request.Method"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(s.b)("p",null,"Request's method (GET, POST, etc.)"),Object(s.b)("h2",{id:"requestpostdata"},"Request.PostData"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(s.b)("p",null,"Request's post body, if any."),Object(s.b)("h2",{id:"requestpostdatabuffer"},"Request.PostDataBuffer"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|","[byte","[","]]",">")),Object(s.b)("p",null,"Request's post body in a binary form, if any."),Object(s.b)("h2",{id:"requestpostdatajson"},"Request.PostDataJSON"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <","[JsonDocument]",">")),Object(s.b)("p",null,"Returns parsed request's body for ",Object(s.b)("inlineCode",{parentName:"p"},"form-urlencoded")," and JSON as a fallback if any."),Object(s.b)("p",null,"When the response is ",Object(s.b)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," then a key/value object of the values will be returned. Otherwise it will be parsed as JSON."),Object(s.b)("h2",{id:"requestredirectedfrom"},"Request.RedirectedFrom"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-request",title:"Request"}),"Request"),">")),Object(s.b)("p",null,"Request that was redirected by the server to this one, if any."),Object(s.b)("p",null,"When the server responds with a redirect, Playwright creates a new ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/dotnet/docs/api/class-request",title:"Request"}),"Request")," object. The two requests are connected by ",Object(s.b)("inlineCode",{parentName:"p"},"redirectedFrom()")," and ",Object(s.b)("inlineCode",{parentName:"p"},"redirectedTo()")," methods. When multiple server redirects has happened, it is possible to construct the whole redirect chain by repeatedly calling ",Object(s.b)("inlineCode",{parentName:"p"},"redirectedFrom()"),"."),Object(s.b)("p",null,"For example, if the website ",Object(s.b)("inlineCode",{parentName:"p"},"http://example.com")," redirects to ",Object(s.b)("inlineCode",{parentName:"p"},"https://example.com"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'var response = await page.GotoAsync("http://www.microsoft.com");\nConsole.WriteLine(response.Request.RedirectedFrom?.Url); // http://www.microsoft.com\n')),Object(s.b)("p",null,"If the website ",Object(s.b)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'var response = await page.GotoAsync("https://www.google.com");\nConsole.WriteLine(response.Request.RedirectedFrom?.Url); // null\n')),Object(s.b)("h2",{id:"requestredirectedto"},"Request.RedirectedTo"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-request",title:"Request"}),"Request"),">")),Object(s.b)("p",null,"New request issued by the browser if the server responded with redirect."),Object(s.b)("p",null,"This method is the opposite of ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/dotnet/docs/api/class-request#requestredirectedfrom"}),"Request.RedirectedFrom"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"Console.WriteLine(request.RedirectedFrom?.RedirectedTo == request); // True\n")),Object(s.b)("h2",{id:"requestresourcetype"},"Request.ResourceType"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(s.b)("p",null,"Contains the request's resource type as it was perceived by the rendering engine. ResourceType will be one of the following: ",Object(s.b)("inlineCode",{parentName:"p"},"document"),", ",Object(s.b)("inlineCode",{parentName:"p"},"stylesheet"),", ",Object(s.b)("inlineCode",{parentName:"p"},"image"),", ",Object(s.b)("inlineCode",{parentName:"p"},"media"),", ",Object(s.b)("inlineCode",{parentName:"p"},"font"),", ",Object(s.b)("inlineCode",{parentName:"p"},"script"),", ",Object(s.b)("inlineCode",{parentName:"p"},"texttrack"),", ",Object(s.b)("inlineCode",{parentName:"p"},"xhr"),", ",Object(s.b)("inlineCode",{parentName:"p"},"fetch"),", ",Object(s.b)("inlineCode",{parentName:"p"},"eventsource"),", ",Object(s.b)("inlineCode",{parentName:"p"},"websocket"),", ",Object(s.b)("inlineCode",{parentName:"p"},"manifest"),", ",Object(s.b)("inlineCode",{parentName:"p"},"other"),"."),Object(s.b)("h2",{id:"requestresponseasync"},"Request.ResponseAsync()"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-response",title:"Response"}),"Response"),">")),Object(s.b)("p",null,"Returns the matching ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/dotnet/docs/api/class-response",title:"Response"}),"Response")," object, or ",Object(s.b)("inlineCode",{parentName:"p"},"null")," if the response was not received due to error."),Object(s.b)("h2",{id:"requesttiming"},"Request.Timing"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("inlineCode",{parentName:"li"},"Timing"),">",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"startTime")," <","[double]","> Request start time in milliseconds elapsed since January 1, 1970 00:00:00 UTC"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"domainLookupStart")," <","[double]","> Time immediately before the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",Object(s.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"domainLookupEnd")," <","[double]","> Time immediately after the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",Object(s.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"connectStart")," <","[double]","> Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",Object(s.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"secureConnectionStart")," <","[double]","> Time immediately before the browser starts the handshake process to secure the current connection. The value is given in milliseconds relative to ",Object(s.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"connectEnd")," <","[double]","> Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",Object(s.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"requestStart")," <","[double]","> Time immediately before the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",Object(s.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"responseStart")," <","[double]","> Time immediately after the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",Object(s.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"responseEnd")," <","[double]","> Time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first. The value is given in milliseconds relative to ",Object(s.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available.")))),Object(s.b)("p",null,"Returns resource timing information for given request. Most of the timing values become available upon the response, ",Object(s.b)("inlineCode",{parentName:"p"},"responseEnd")," becomes available when request finishes. Find more information at ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming"}),"Resource Timing API"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'var request = await page.RunAndWaitForEventAsync(PageEvent.RequestFinished, async () =>\n{\n    await page.GotoAsync("https://www.microsoft.com");\n});\nConsole.WriteLine(request.Timing.ResponseEnd);\n')),Object(s.b)("h2",{id:"requesturl"},"Request.Url"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"returns: <",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(s.b)("p",null,"URL of the request."))}b.isMDXComponent=!0},151:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),b=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=b(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=b(a),d=r,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||s;return a?n.a.createElement(m,l(l({ref:t},o),{},{components:a})):n.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<s;o++)i[o]=a[o];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},153:function(e,t,a){"use strict";var r=a(0),n=a(154);t.a=function(){var e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,a){"use strict";var r=a(0),n=Object(r.createContext)(void 0);t.a=n},155:function(e,t,a){"use strict";a(0),a(153),a(151),a(53)},156:function(e,t,a){"use strict";a(3),a(0)}}]);