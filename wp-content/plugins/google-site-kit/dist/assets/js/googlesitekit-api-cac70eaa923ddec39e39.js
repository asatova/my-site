(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[5],{1:function(t,n){t.exports=googlesitekit.i18n},100:function(t,n,e){"use strict";(function(t){e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return o}));var r=e(209),i=e(84),a=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Number.isNaN(Number(n)))return"";var a=e.invertColor,o=void 0!==a&&a;return Object(r.a)(t.createElement(i.a,{direction:n>0?"up":"down",invertColor:o}))},o=function(t,n){return t>0&&n>0?t/n-1:t>0?1:n>0?-1:0}}).call(this,e(3))},101:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return l}));var r=e(6),i=e.n(r),a=e(15),o=e(102),c=e(103);function u(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){i()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var f={activeModules:[],isAuthenticated:!1,referenceSiteURL:"",trackingEnabled:!1,trackingID:"",userIDHash:"",userRoles:[]};function l(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,i=s(s({},f),n);i.referenceSiteURL&&(i.referenceSiteURL=i.referenceSiteURL.toString().replace(/\/+$/,""));var u=Object(o.a)(i,e),l=Object(c.a)(i,e,u,r),d={},g=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];var r=JSON.stringify(n);d[r]||(d[r]=Object(a.once)(l)),d[r].apply(d,n)};return{enableTracking:function(){i.trackingEnabled=!0},disableTracking:function(){i.trackingEnabled=!1},initializeSnippet:u,isTrackingEnabled:function(){return!!i.trackingEnabled},trackEvent:l,trackEventOnce:g}}}).call(this,e(26))},102:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return a}));var r=e(59),i=e(36);function a(n,e){var a,o=Object(r.a)(e);return function(){var e=t.document;if(void 0===a&&(a=!!e.querySelector("script[".concat(i.b,"]"))),!a){var r=e.createElement("script");r.setAttribute(i.b,""),r.async=!0,r.src="https://www.googletagmanager.com/gtag/js?id=".concat(n.trackingID,"&l=").concat(i.a),e.head.appendChild(r),o("js",new Date),o("config",n.trackingID,{send_page_view:n.isSiteKitScreen}),a=!0}}}}).call(this,e(26))},103:function(t,n,e){"use strict";e.d(n,"a",(function(){return g}));var r=e(5),i=e.n(r),a=e(6),o=e.n(a),c=e(16),u=e.n(c),s=e(59),f=e(52);function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){o()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function g(t,n,e,r){var a=Object(s.a)(n);return function(){var n=u()(i.a.mark((function n(o,c,u,s){var l,g,p,v,b,h,m,y,k,O;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(l=t.activeModules,g=t.referenceSiteURL,p=t.trackingEnabled,v=t.trackingID,b=t.userIDHash,h=t.userRoles,m=void 0===h?[]:h,y=t.isAuthenticated,k=t.pluginVersion,p){n.next=3;break}return n.abrupt("return");case 3:return e(),O={send_to:v,event_category:o,event_label:u,value:s,dimension1:g,dimension2:m.join(","),dimension3:b,dimension4:k||"",dimension5:Array.from(f.a).join(","),dimension6:l.join(","),dimension7:y?"1":"0"},n.abrupt("return",new Promise((function(t){var n,e,i=setTimeout((function(){r.console.warn('Tracking event "'.concat(c,'" (category "').concat(o,'") took too long to fire.')),t()}),1e3),u=function(){clearTimeout(i),t()};a("event",c,d(d({},O),{},{event_callback:u})),(null===(n=r._gaUserPrefs)||void 0===n||null===(e=n.ioo)||void 0===e?void 0:e.call(n))&&u()})));case 6:case"end":return n.stop()}}),n)})));return function(t,e,r,i){return n.apply(this,arguments)}}()}},282:function(t,n,e){"use strict";(function(t){var r=e(60),i=e.n(r),a=e(283),o=t._googlesitekitAPIFetchData||{},c=o.nonce,u=o.nonceEndpoint,s=o.preloadedData,f=o.rootURL;i.a.nonceEndpoint=u,i.a.nonceMiddleware=i.a.createNonceMiddleware(c),i.a.rootURLMiddleware=i.a.createRootURLMiddleware(f),i.a.preloadingMiddleware=Object(a.a)(s),i.a.use(i.a.nonceMiddleware),i.a.use(i.a.mediaUploadMiddleware),i.a.use(i.a.rootURLMiddleware),i.a.use(i.a.preloadingMiddleware),n.default=i.a}).call(this,e(26))},283:function(t,n,e){"use strict";var r=e(267);n.a=function(t){var n=Object.keys(t).reduce((function(n,e){return n[Object(r.getStablePath)(e)]=t[e],n}),{}),e=!1;return function(t,i){if(e)return i(t);setTimeout((function(){e=!0}),1e3);var a=t.parse,o=void 0===a||a,c=t.path;if("string"==typeof t.path){var u,s=(null===(u=t.method)||void 0===u?void 0:u.toUpperCase())||"GET",f=Object(r.getStablePath)(c);if(o&&"GET"===s&&n[f]){var l=Promise.resolve(n[f].body);return delete n[f],l}if("OPTIONS"===s&&n[s]&&n[s][f]){var d=Promise.resolve(n[s][f]);return delete n[s][f],d}}return i(t)}}},34:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return k})),e.d(n,"b",(function(){return m})),e.d(n,"c",(function(){return y}));var r=e(101),i=t._googlesitekitTrackingData||{},a=i.activeModules,o=void 0===a?[]:a,c=i.isSiteKitScreen,u=i.trackingEnabled,s=i.trackingID,f=i.referenceSiteURL,l=i.userIDHash,d=i.isAuthenticated,g={activeModules:o,trackingEnabled:u,trackingID:s,referenceSiteURL:f,userIDHash:l,isSiteKitScreen:c,userRoles:i.userRoles,isAuthenticated:d,pluginVersion:"1.116.0"},p=Object(r.a)(g),v=p.enableTracking,b=p.disableTracking,h=(p.isTrackingEnabled,p.initializeSnippet),m=p.trackEvent,y=p.trackEventOnce;function k(t){t?v():b()}c&&u&&h()}).call(this,e(26))},36:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i}));var r="_googlesitekitDataLayer",i="data-googlesitekit-gtag"},39:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return l})),e.d(n,"d",(function(){return m})),e.d(n,"f",(function(){return y})),e.d(n,"c",(function(){return k})),e.d(n,"e",(function(){return O})),e.d(n,"b",(function(){return w}));var r=e(5),i=e.n(r),a=e(16),o=e.n(a),c=(e(30),e(8));function u(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return s(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return s(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return o=t.done,t},e:function(t){c=!0,a=t},f:function(){try{o||null==e.return||e.return()}finally{if(c)throw a}}}}function s(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var f,l="googlesitekit_",d="".concat(l).concat("1.116.0","_").concat(t._googlesitekitBaseData.storagePrefix,"_"),g=["sessionStorage","localStorage"],p=[].concat(g),v=function(){var n=o()(i.a.mark((function n(e){var r,a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t[e]){n.next=3;break}return n.abrupt("return",!1);case 3:return n.prev=3,a="__storage_test__",r.setItem(a,a),r.removeItem(a),n.abrupt("return",!0);case 10:return n.prev=10,n.t0=n.catch(3),n.abrupt("return",n.t0 instanceof DOMException&&(22===n.t0.code||1014===n.t0.code||"QuotaExceededError"===n.t0.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.t0.name)&&0!==r.length);case 13:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(t){return n.apply(this,arguments)}}();function b(){return h.apply(this,arguments)}function h(){return(h=o()(i.a.mark((function n(){var e,r,a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(void 0===f){n.next=2;break}return n.abrupt("return",f);case 2:e=u(p),n.prev=3,e.s();case 5:if((r=e.n()).done){n.next=15;break}if(a=r.value,!f){n.next=9;break}return n.abrupt("continue",13);case 9:return n.next=11,v(a);case 11:if(!n.sent){n.next=13;break}f=t[a];case 13:n.next=5;break;case 15:n.next=20;break;case 17:n.prev=17,n.t0=n.catch(3),e.e(n.t0);case 20:return n.prev=20,e.f(),n.finish(20);case 23:return void 0===f&&(f=null),n.abrupt("return",f);case 25:case"end":return n.stop()}}),n,null,[[3,17,20,23]])})))).apply(this,arguments)}var m=function(){var t=o()(i.a.mark((function t(n){var e,r,a,o,c,u,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:if(!(e=t.sent)){t.next=10;break}if(!(r=e.getItem("".concat(d).concat(n)))){t.next=10;break}if(a=JSON.parse(r),o=a.timestamp,c=a.ttl,u=a.value,s=a.isError,!o||c&&!(Math.round(Date.now()/1e3)-o<c)){t.next=10;break}return t.abrupt("return",{cacheHit:!0,value:u,isError:s});case 10:return t.abrupt("return",{cacheHit:!1,value:void 0});case 11:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),y=function(){var n=o()(i.a.mark((function n(e,r){var a,o,u,s,f,l,g,p,v=arguments;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=v.length>2&&void 0!==v[2]?v[2]:{},o=a.ttl,u=void 0===o?c.b:o,s=a.timestamp,f=void 0===s?Math.round(Date.now()/1e3):s,l=a.isError,g=void 0!==l&&l,n.next=3,b();case 3:if(!(p=n.sent)){n.next=14;break}return n.prev=5,p.setItem("".concat(d).concat(e),JSON.stringify({timestamp:f,ttl:u,value:r,isError:g})),n.abrupt("return",!0);case 10:return n.prev=10,n.t0=n.catch(5),t.console.warn("Encountered an unexpected storage error:",n.t0),n.abrupt("return",!1);case 14:return n.abrupt("return",!1);case 15:case"end":return n.stop()}}),n,null,[[5,10]])})));return function(t,e){return n.apply(this,arguments)}}(),k=function(){var n=o()(i.a.mark((function n(e){var r,a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b();case 2:if(!(r=n.sent)){n.next=14;break}return n.prev=4,a=e.startsWith(l)?e:"".concat(d).concat(e),r.removeItem(a),n.abrupt("return",!0);case 10:return n.prev=10,n.t0=n.catch(4),t.console.warn("Encountered an unexpected storage error:",n.t0),n.abrupt("return",!1);case 14:return n.abrupt("return",!1);case 15:case"end":return n.stop()}}),n,null,[[4,10]])})));return function(t){return n.apply(this,arguments)}}(),O=function(){var n=o()(i.a.mark((function n(){var e,r,a,o;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b();case 2:if(!(e=n.sent)){n.next=14;break}for(n.prev=4,r=[],a=0;a<e.length;a++)0===(o=e.key(a)).indexOf(l)&&r.push(o);return n.abrupt("return",r);case 10:return n.prev=10,n.t0=n.catch(4),t.console.warn("Encountered an unexpected storage error:",n.t0),n.abrupt("return",[]);case 14:return n.abrupt("return",[]);case 15:case"end":return n.stop()}}),n,null,[[4,10]])})));return function(){return n.apply(this,arguments)}}(),w=function(){var t=o()(i.a.mark((function t(){var n,e,r,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:if(!t.sent){t.next=25;break}return t.next=6,O();case 6:n=t.sent,e=u(n),t.prev=8,e.s();case 10:if((r=e.n()).done){t.next=16;break}return a=r.value,t.next=14,k(a);case 14:t.next=10;break;case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(8),e.e(t.t0);case 21:return t.prev=21,e.f(),t.finish(21);case 24:return t.abrupt("return",!0);case 25:return t.abrupt("return",!1);case 26:case"end":return t.stop()}}),t,null,[[8,18,21,24]])})));return function(){return t.apply(this,arguments)}}()}).call(this,e(26))},44:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"f",(function(){return c})),e.d(n,"e",(function(){return u})),e.d(n,"c",(function(){return s})),e.d(n,"d",(function(){return f})),e.d(n,"b",(function(){return l}));e(15);var r=e(1),i="missing_required_scopes",a="insufficientPermissions",o="forbidden";function c(t){return(null==t?void 0:t.code)===i}function u(t){var n;return[a,o].includes(null==t||null===(n=t.data)||void 0===n?void 0:n.reason)}function s(t){var n;return!!(null==t||null===(n=t.data)||void 0===n?void 0:n.reconnectURL)}function f(t,n){return!(!(null==n?void 0:n.storeName)||u(t)||c(t)||s(t))}function l(t){return"internal_server_error"===(null==t?void 0:t.code)?Object(r.__)("There was a critical error on this website while fetching data.","google-site-kit"):"invalid_json"===(null==t?void 0:t.code)?Object(r.__)("The server provided an invalid response.","google-site-kit"):null==t?void 0:t.message}},47:function(t,n,e){"use strict";e.d(n,"c",(function(){return r})),e.d(n,"e",(function(){return i})),e.d(n,"d",(function(){return a})),e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return c})),e.d(n,"f",(function(){return u}));var r="Date param must construct to a valid date instance or be a valid date instance itself.",i="Invalid dateString parameter, it must be a string.",a='Invalid date range, it must be a string with the format "last-x-days".',o=3600,c=86400,u=604800},48:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r=function(t){return t instanceof Date&&!isNaN(t)}},50:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(17),i=e.n(r),a=e(10),o=e.n(a),c=e(47),u=e(54),s=function(t){o()(Object(u.a)(t),c.e);var n=t.split("-"),e=i()(n,3),r=e[0],a=e[1],s=e[2];return new Date(r,a-1,s)}},52:function(t,n,e){"use strict";(function(t){var r,i;e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return o}));var a=new Set((null===(r=t)||void 0===r||null===(i=r._googlesitekitBaseData)||void 0===i?void 0:i.enabledFeatures)||[]),o=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return n instanceof Set&&n.has(t)}}).call(this,e(26))},54:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(48),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n="string"==typeof t;if(!n)return!1;var e=t.split("-");return 3===e.length&&Object(r.a)(new Date(t))}},59:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(36);function i(t){return function(){t[r.a]=t[r.a]||[],t[r.a].push(arguments)}}},63:function(t,n,e){"use strict";e.d(n,"d",(function(){return r.e})),e.d(n,"c",(function(){return r.d})),e.d(n,"b",(function(){return r.b})),e.d(n,"a",(function(){return r.a})),e.d(n,"e",(function(){return r.f})),e.d(n,"g",(function(){return c})),e.d(n,"h",(function(){return s})),e.d(n,"i",(function(){return f})),e.d(n,"j",(function(){return l.a})),e.d(n,"f",(function(){return g})),e.d(n,"k",(function(){return u.a}));var r=e(47),i=e(10),a=e.n(i),o=e(48),c=function(t){a()(Object(o.a)(t),r.c);var n="".concat(t.getMonth()+1),e="".concat(t.getDate());return[t.getFullYear(),n.length<2?"0".concat(n):n,e.length<2?"0".concat(e):e].join("-")},u=e(50),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,e=Object(u.a)(t);return e.setDate(e.getDate()-n),c(e)},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=t.split("-");return 3===n.length&&"last"===n[0]&&!Number.isNaN(n[1])&&!Number.isNaN(parseFloat(n[1]))&&"days"===n[2]},l=e(54);var d=e(1);function g(){var t=function(t){return Object(d.sprintf)(
/* translators: %s: number of days */
Object(d._n)("Last %s day","Last %s days",t,"google-site-kit"),t)};return{"last-7-days":{slug:"last-7-days",label:t(7),days:7},"last-14-days":{slug:"last-14-days",label:t(14),days:14},"last-28-days":{slug:"last-28-days",label:t(28),days:28},"last-90-days":{slug:"last-90-days",label:t(90),days:90}}}},630:function(t,n,e){"use strict";(function(t){var r=e(5),i=e.n(r),a=e(16),o=e.n(a),c=e(10),u=e.n(c),s=e(282),f=e(268),l=e(39),d=e(8),g=e(44),p=e(722),v=e(7),b=!0,h=function(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=[t,n,e].filter((function(t){return!!t&&t.length}));return 3===i.length&&r&&r.constructor===Object&&Object.keys(r).length&&i.push(Object(d.A)(r)),i.join("::")},m=function(n){var e,r,i,a=null===(e=t.googlesitekit)||void 0===e||null===(r=e.data)||void 0===r||null===(i=r.dispatch)||void 0===i?void 0:i.call(r,v.a);a&&(Object(g.f)(n)?a.setPermissionScopeError(n):Object(g.c)(n)&&a.setAuthError(n))},y=function(){var n=o()(i.a.mark((function n(e,r,a){var o,c,g,v,b,y,k,w,j,_,x,D,E,S,P,A,N,T=arguments;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=T.length>3&&void 0!==T[3]?T[3]:{},c=o.bodyParams,g=o.cacheTTL,v=void 0===g?d.b:g,b=o.method,y=void 0===b?"GET":b,k=o.queryParams,w=o.useCache,j=void 0===w?void 0:w,_=o.signal,u()(e,"`type` argument for requests is required."),u()(r,"`identifier` argument for requests is required."),u()(a,"`datapoint` argument for requests is required."),x="GET"===y&&(void 0!==j?j:O()),D=h(e,r,a,k),!x){n.next=18;break}return n.next=9,Object(l.d)(D);case 9:if(E=n.sent,S=E.cacheHit,P=E.value,!E.isError){n.next=16;break}throw m(P),P;case 16:if(!S){n.next=18;break}return n.abrupt("return",P);case 18:return n.prev=18,n.next=21,Object(s.default)({data:c,method:y,signal:_,path:Object(f.a)("/google-site-kit/v1/".concat(e,"/").concat(r,"/data/").concat(a),k)});case 21:if(A=n.sent,!x){n.next=25;break}return n.next=25,Object(l.f)(D,A,{ttl:v});case 25:return n.abrupt("return",A);case 28:if(n.prev=28,n.t0=n.catch(18),!(null==_?void 0:_.aborted)){n.next=32;break}throw n.t0;case 32:if(!(null===n.t0||void 0===n.t0||null===(N=n.t0.data)||void 0===N?void 0:N.cacheTTL)){n.next=35;break}return n.next=35,Object(l.f)(D,n.t0,{ttl:n.t0.data.cacheTTL,isError:!0});case 35:throw Object(p.a)({method:y,datapoint:a,type:e,identifier:r,error:n.t0}),m(n.t0),t.console.error("Google Site Kit API Error","method:".concat(y),"datapoint:".concat(a),"type:".concat(e),"identifier:".concat(r),'error:"'.concat(n.t0.message,'"')),n.t0;case 39:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(t,e,r){return n.apply(this,arguments)}}(),k=function(){var t=o()(i.a.mark((function t(n,e,r,a){var o,c,u,s,f,l,d,g=arguments;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=g.length>4&&void 0!==g[4]?g[4]:{},c=o.method,u=void 0===c?"POST":c,s=o.queryParams,f=void 0===s?{}:s,l=o.signal,t.next=3,y(n,e,r,{bodyParams:{data:a},method:u,queryParams:f,useCache:!1,signal:l});case 3:return d=t.sent,t.next=6,w(n,e,r);case 6:return t.abrupt("return",d);case 7:case"end":return t.stop()}}),t)})));return function(n,e,r,i){return t.apply(this,arguments)}}(),O=function(){return b},w=function(){var t=o()(i.a.mark((function t(n,e,r){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=h(n,e,r),t.next=3,Object(l.e)();case 3:t.sent.forEach((function(t){new RegExp("^".concat(l.a,"([^_]+_){2}").concat(a)).test(t)&&Object(l.c)(t)}));case 5:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}(),j={invalidateCache:w,get:function(t,n,e,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.cacheTTL,o=void 0===a?d.b:a,c=i.useCache,u=void 0===c?void 0:c,s=i.signal;return y(t,n,e,{cacheTTL:o,queryParams:r,useCache:u,signal:s})},set:k,setUsingCache:function(t){return b=!!t},usingCache:O};n.a=j}).call(this,e(26))},64:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return c}));var r=e(106);function i(t){try{return new URL(t).pathname}catch(t){}return null}function a(t,n){try{return new URL(n,t).href}catch(t){}return("string"==typeof t?t:"")+("string"==typeof n?n:"")}function o(t){return"string"!=typeof t?t:t.replace(/^https?:\/\/(www\.)?/i,"").replace(/\/$/,"")}function c(t,n){if(!Object(r.a)(t))return t;if(t.length<=n)return t;var e=new URL(t),i=t.replace(e.origin,"");if(i.length<n)return i;var a=i.length-Math.floor(n)+1;return"…"+i.substr(a)}},7:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i})),e.d(n,"d",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"y",(function(){return c})),e.d(n,"D",(function(){return u})),e.d(n,"F",(function(){return s})),e.d(n,"B",(function(){return f})),e.d(n,"C",(function(){return l})),e.d(n,"A",(function(){return d})),e.d(n,"z",(function(){return g})),e.d(n,"E",(function(){return p})),e.d(n,"e",(function(){return v})),e.d(n,"f",(function(){return b})),e.d(n,"g",(function(){return h})),e.d(n,"i",(function(){return m})),e.d(n,"k",(function(){return y})),e.d(n,"l",(function(){return k})),e.d(n,"m",(function(){return O})),e.d(n,"n",(function(){return w})),e.d(n,"p",(function(){return j})),e.d(n,"q",(function(){return _})),e.d(n,"r",(function(){return x})),e.d(n,"s",(function(){return D})),e.d(n,"u",(function(){return E})),e.d(n,"j",(function(){return S})),e.d(n,"w",(function(){return P})),e.d(n,"t",(function(){return A})),e.d(n,"x",(function(){return N})),e.d(n,"v",(function(){return T})),e.d(n,"h",(function(){return L})),e.d(n,"o",(function(){return I})),e.d(n,"H",(function(){return M})),e.d(n,"G",(function(){return C}));var r="core/user",i="connected_url_mismatch",a="__global",o="temporary_persist_permission_error",c="googlesitekit_authenticate",u="googlesitekit_setup",s="googlesitekit_view_dashboard",f="googlesitekit_manage_options",l="googlesitekit_read_shared_module_data",d="googlesitekit_manage_module_sharing_options",g="googlesitekit_delegate_module_sharing_management",p="googlesitekit_update_plugins",v="kmAnalyticsAdSenseTopEarningContent",b="kmAnalyticsEngagedTrafficSource",h="kmAnalyticsLeastEngagingPages",m="kmAnalyticsNewVisitors",y="kmAnalyticsPopularAuthors",k="kmAnalyticsPopularContent",O="kmAnalyticsPopularProducts",w="kmAnalyticsReturningVisitors",j="kmAnalyticsTopCities",_="kmAnalyticsTopConvertingTrafficSource",x="kmAnalyticsTopCountries",D="kmAnalyticsTopRecentTrendingPages",E="kmAnalyticsTopTrafficSource",S="kmAnalyticsPagesPerVisit",P="kmAnalyticsVisitLength",A="kmAnalyticsTopReturningVisitorPages",N="kmSearchConsolePopularKeywords",T="kmAnalyticsVisitsPerVisitor",L="kmAnalyticsMostEngagingPages",I="kmAnalyticsTopCategories",M=[v,b,h,m,y,k,O,w,I,j,_,x,D,E,S,P,A,T,L,I],C=[].concat(M,[N])},71:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return j})),e.d(n,"d",(function(){return _})),e.d(n,"e",(function(){return D})),e.d(n,"c",(function(){return E})),e.d(n,"b",(function(){return S}));var r=e(17),i=e.n(r),a=e(35),o=e.n(a),c=e(6),u=e.n(c),s=e(23),f=e.n(s),l=e(15),d=e(74),g=e.n(d),p=e(1);function v(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function b(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?v(Object(e),!0).forEach((function(n){u()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var h=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=k(t,n),r=e.formatUnit,i=e.formatDecimal;try{return r()}catch(t){return i()}},m=function(t){var n=y(t),e=n.hours,r=n.minutes,i=n.seconds;return i=("0"+i).slice(-2),r=("0"+r).slice(-2),"00"===(e=("0"+e).slice(-2))?"".concat(r,":").concat(i):"".concat(e,":").concat(r,":").concat(i)},y=function(t){return t=parseInt(t,10),Number.isNaN(t)&&(t=0),{hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}},k=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=y(t),r=e.hours,i=e.minutes,a=e.seconds;return{hours:r,minutes:i,seconds:a,formatUnit:function(){var e=n.unitDisplay,o=b(b({unitDisplay:void 0===e?"short":e},f()(n,["unitDisplay"])),{},{style:"unit"});return 0===t?D(a,b(b({},o),{},{unit:"second"})):Object(p.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(p._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),a?D(a,b(b({},o),{},{unit:"second"})):"",i?D(i,b(b({},o),{},{unit:"minute"})):"",r?D(r,b(b({},o),{},{unit:"hour"})):"").trim()},formatDecimal:function(){var n=Object(p.sprintf)(// translators: %s: number of seconds with "s" as the abbreviated unit.
Object(p.__)("%ds","google-site-kit"),a);if(0===t)return n;var e=Object(p.sprintf)(// translators: %s: number of minutes with "m" as the abbreviated unit.
Object(p.__)("%dm","google-site-kit"),i),o=Object(p.sprintf)(// translators: %s: number of hours with "h" as the abbreviated unit.
Object(p.__)("%dh","google-site-kit"),r);return Object(p.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(p._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),a?n:"",i?e:"",r?o:"").trim()}}},O=function(t){return 1e6<=t?Math.round(t/1e5)/10:1e4<=t?Math.round(t/1e3):1e3<=t?Math.round(t/100)/10:t},w=function(t){var n={minimumFractionDigits:1,maximumFractionDigits:1};return 1e6<=t?Object(p.sprintf)(// translators: %s: an abbreviated number in millions.
Object(p.__)("%sM","google-site-kit"),D(O(t),t%10==0?{}:n)):1e4<=t?Object(p.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(p.__)("%sK","google-site-kit"),D(O(t))):1e3<=t?Object(p.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(p.__)("%sK","google-site-kit"),D(O(t),t%10==0?{}:n)):D(t,{signDisplay:"never",maximumFractionDigits:1})};function j(t){var n={};return"%"===t?n={style:"percent",maximumFractionDigits:2}:"s"===t?n={style:"duration",unitDisplay:"narrow"}:t&&"string"==typeof t?n={style:"currency",currency:t}:Object(l.isPlainObject)(t)&&(n=b({},t)),n}function _(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=Object(l.isFinite)(t)?t:Number(t),Object(l.isFinite)(t)||(console.warn("Invalid number",t,o()(t)),t=0);var e=j(n),r=e.style,i=void 0===r?"metric":r;return"metric"===i?w(t):"duration"===i?h(t,e):"durationISO"===i?m(t):D(t,e)}var x=g()(console.warn),D=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.locale,r=void 0===e?S():e,a=f()(n,["locale"]);try{return new Intl.NumberFormat(r,a).format(t)}catch(n){x("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(r),", ").concat(JSON.stringify(a)," ).format( ").concat(o()(t)," )"),n.message)}for(var c={currencyDisplay:"narrow",currencySign:"accounting",style:"unit"},u=["signDisplay","compactDisplay"],s={},l=0,d=Object.entries(a);l<d.length;l++){var g=i()(d[l],2),p=g[0],v=g[1];c[p]&&v===c[p]||(u.includes(p)||(s[p]=v))}try{return new Intl.NumberFormat(r,s).format(t)}catch(n){return new Intl.NumberFormat(r).format(t)}},E=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.locale,r=void 0===e?S():e,i=n.style,a=void 0===i?"long":i,o=n.type,c=void 0===o?"conjunction":o;if(Intl.ListFormat){var u=new Intl.ListFormat(r,{style:a,type:c});return u.format(t)}
/* translators: used between list items, there is a space after the comma. */var s=Object(p.__)(", ","google-site-kit");return t.join(s)},S=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,e=Object(l.get)(n,["_googlesitekitLegacyData","locale"]);if(e){var r=e.match(/^(\w{2})?(_)?(\w{2})/);if(r&&r[0])return r[0].replace(/_/g,"-")}return n.navigator.language}}).call(this,e(26))},722:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(5),i=e.n(r),a=e(16),o=e.n(a),c=e(8),u=["fetch_error"];function s(t){return f.apply(this,arguments)}function f(){return(f=o()(i.a.mark((function t(n){var e,r,a,o,s,f,l,d;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.method,o=n.type,s=n.identifier,f=n.datapoint,(l=n.error)&&!u.includes(null==l?void 0:l.code)){t.next=3;break}return t.abrupt("return");case 3:return d="code: ".concat(l.code),(null===(e=l.data)||void 0===e?void 0:e.reason)&&(d+=", reason: ".concat(l.data.reason)),t.next=7,Object(c.B)("api_error","".concat(a,":").concat(o,"/").concat(s,"/data/").concat(f),"".concat(l.message," (").concat(d,")"),(null===(r=l.data)||void 0===r?void 0:r.status)||l.code);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},73:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return c}));var r=e(35),i=e.n(r),a=e(83),o=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{__html:a.a.sanitize(t,n)}};function c(t){var n,e="object"===i()(t)?t.toString():t;return null==e||null===(n=e.replace)||void 0===n?void 0:n.call(e,/\/+$/,"")}},8:function(t,n,e){"use strict";e.d(n,"B",(function(){return i.b})),e.d(n,"C",(function(){return i.c})),e.d(n,"y",(function(){return a.a})),e.d(n,"D",(function(){return a.b})),e.d(n,"A",(function(){return f})),e.d(n,"i",(function(){return l.a})),e.d(n,"w",(function(){return l.d})),e.d(n,"x",(function(){return l.e})),e.d(n,"t",(function(){return l.c})),e.d(n,"n",(function(){return l.b})),e.d(n,"u",(function(){return v})),e.d(n,"g",(function(){return b})),e.d(n,"f",(function(){return h})),e.d(n,"b",(function(){return m.b})),e.d(n,"a",(function(){return m.a})),e.d(n,"c",(function(){return m.e})),e.d(n,"l",(function(){return m.g})),e.d(n,"o",(function(){return m.h})),e.d(n,"j",(function(){return m.f})),e.d(n,"z",(function(){return m.k})),e.d(n,"k",(function(){return y.b})),e.d(n,"e",(function(){return y.a})),e.d(n,"q",(function(){return k.b})),e.d(n,"m",(function(){return k.a})),e.d(n,"v",(function(){return k.c})),e.d(n,"s",(function(){return O})),e.d(n,"r",(function(){return w})),e.d(n,"p",(function(){return j})),e.d(n,"d",(function(){return _})),e.d(n,"E",(function(){return x})),e.d(n,"h",(function(){return D}));var r=e(15),i=e(34),a=e(73),o=e(35),c=e.n(o),u=e(95),s=e.n(u),f=function(t){return s()(JSON.stringify(function t(n){var e={};return Object.keys(n).sort().forEach((function(r){var i=n[r];i&&"object"===c()(i)&&!Array.isArray(i)&&(i=t(i)),e[r]=i})),e}(t)))};e(99);var l=e(71);function d(t){return t.replace(new RegExp("\\[([^\\]]+)\\]\\((https?://[^/]+\\.\\w+/?.*?)\\)","gi"),'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')}function g(t){return"<p>".concat(t.replace(/\n{2,}/g,"</p><p>"),"</p>")}function p(t){return t.replace(/\n/gi,"<br>")}function v(t){for(var n=t,e=0,r=[d,g,p];e<r.length;e++){n=(0,r[e])(n)}return n}var b=function(t){return t=parseFloat(t),isNaN(t)||0===t?[0,0,0,0]:[Math.floor(t/60/60),Math.floor(t/60%60),Math.floor(t%60),Math.floor(1e3*t)-1e3*Math.floor(t)]},h=function(t){var n=t&&!Number.isInteger(t)?new Date(t).getTime():t;return isNaN(n)||!n?0:n},m=e(63),y=e(100),k=e(64);function O(t){var n=parseFloat(t)||0;return!!Number.isInteger(n)&&n>0}function w(t){if("number"==typeof t)return!0;var n=(t||"").toString();return!!n&&!isNaN(n)}var j=function(t){switch(t){case"minute":return 60;case"hour":return 3600;case"day":return 86400;case"week":return 604800;case"month":return 2592e3;case"year":return 31536e3}};function _(t,n){var e=function(t){return"0"===t||0===t};if(e(t)&&e(n))return 0;if(e(t)||Number.isNaN(t))return null;var r=(n-t)/t;return Number.isNaN(r)||!Number.isFinite(r)?null:r}var x=function(t){try{return JSON.parse(t)&&!!t}catch(t){return!1}},D=function(t){if(!t)return"";var n=t.replace(/&#(\d+);/g,(function(t,n){return String.fromCharCode(n)})).replace(/(\\)/g,"");return Object(r.unescape)(n)}},83:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return i}));var r=e(140),i=e.n(r)()(t)}).call(this,e(26))},84:function(t,n,e){"use strict";(function(t){var r=e(0),i=e.n(r),a=e(12),o=e.n(a);function ChangeArrow(n){var e=n.direction,r=n.invertColor,i=n.width,a=n.height;return t.createElement("svg",{className:o()("googlesitekit-change-arrow","googlesitekit-change-arrow--".concat(e),{"googlesitekit-change-arrow--inverted-color":r}),width:i,height:a,viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M5.625 10L5.625 2.375L9.125 5.875L10 5L5 -1.76555e-07L-2.7055e-07 5L0.875 5.875L4.375 2.375L4.375 10L5.625 10Z",fill:"currentColor"}))}ChangeArrow.propTypes={direction:i.a.string,invertColor:i.a.bool,width:i.a.number,height:i.a.number},ChangeArrow.defaultProps={direction:"up",invertColor:!1,width:9,height:9},n.a=ChangeArrow}).call(this,e(3))},947:function(t,n,e){"use strict";e.r(n),function(t){var r=e(630);void 0===t.googlesitekit&&(t.googlesitekit={}),void 0===t.googlesitekit.api&&(t.googlesitekit.api=r.a),n.default=r.a}.call(this,e(26))},99:function(t,n,e){"use strict";(function(t){e(49),e(51)}).call(this,e(26))}},[[947,1,0]]]);