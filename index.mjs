// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";function n(r,n,e,f){var t,i;if(r<=0||f<=0||1===n)return e;if(1===f){if((i=r%5)>0)for(t=0;t<i;t++)e[t]*=n;if(r<5)return e;for(t=i;t<r;t+=5)e[t]*=n,e[t+1]*=n,e[t+2]*=n,e[t+3]*=n,e[t+4]*=n;return e}for(r*=f,t=0;t<r;t+=f)e[t]*=n;return e}function e(r,n,e,f,t){var i,o,u;if(r<=0||1===n)return e;if(i=t,1===f){if((o=r%5)>0)for(u=0;u<o;u++)e[i]*=n,i+=f;if(r<5)return e;for(u=o;u<r;u+=5)e[i]*=n,e[i+1]*=n,e[i+2]*=n,e[i+3]*=n,e[i+4]*=n,i+=5;return e}for(u=0;u<r;u++)e[i]*=n,i+=f;return e}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
