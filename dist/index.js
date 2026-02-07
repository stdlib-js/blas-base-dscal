"use strict";var o=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var f=o(function(D,q){
var v=5;function E(t,r,e,s,a){var i,n,u;if(t<=0||r===1)return e;if(i=a,s===1){if(n=t%v,n>0)for(u=0;u<n;u++)e[i]*=r,i+=s;if(t<v)return e;for(u=n;u<t;u+=v)e[i]*=r,e[i+1]*=r,e[i+2]*=r,e[i+3]*=r,e[i+4]*=r,i+=v;return e}for(u=0;u<t;u++)e[i]*=r,i+=s;return e}q.exports=E
});var y=o(function(F,d){
var M=require('@stdlib/strided-base-stride2offset/dist'),O=f();function b(t,r,e,s){var a=M(t,s);return O(t,r,e,s,a)}d.exports=b
});var R=o(function(G,j){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=y(),k=f();g(m,"ndarray",k);j.exports=m
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=R(),c,_=z(w(__dirname,"./native.js"));A(_)?c=B:c=_;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
