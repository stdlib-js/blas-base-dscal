// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r,t="function"==typeof Object.defineProperty?Object.defineProperty:null,o=Object.defineProperty,n=Object.prototype,i=n.toString,a=n.__defineGetter__,f=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;function c(e,r,t,o){var n,i;if(e<=0||o<=0||1===r)return t;if(1===o){if((i=e%5)>0)for(n=0;n<i;n++)t[n]*=r;if(e<5)return t;for(n=i;n<e;n+=5)t[n]*=r,t[n+1]*=r,t[n+2]*=r,t[n+3]*=r,t[n+4]*=r;return t}for(e*=o,n=0;n<e;n+=o)t[n]*=r;return t}function _(e,r,t,o,n){var i,a,f;if(e<=0||1===r)return t;if(i=n,1===o){if((a=e%5)>0)for(f=0;f<a;f++)t[i]*=r,i+=o;if(e<5)return t;for(f=a;f<e;f+=5)t[i]*=r,t[i+1]*=r,t[i+2]*=r,t[i+3]*=r,t[i+4]*=r,i+=5;return t}for(f=0;f<e;f++)t[i]*=r,i+=o;return t}r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?o:function(e,r,t){var o,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||l.call(e,r)?(o=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=o):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),p&&f&&f.call(e,r,t.set),e},r(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:_}),e.default=c,e.ndarray=_,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).dscal={});
//# sourceMappingURL=index.js.map