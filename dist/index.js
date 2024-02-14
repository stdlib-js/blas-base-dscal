"use strict";var s=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var y=s(function(C,m){
var c=5;function O(t,e,r,f){var i,u;if(t<=0||f<=0||e===1)return r;if(f===1){if(u=t%c,u>0)for(i=0;i<u;i++)r[i]*=e;if(t<c)return r;for(i=u;i<t;i+=c)r[i]*=e,r[i+1]*=e,r[i+2]*=e,r[i+3]*=e,r[i+4]*=e;return r}for(t*=f,i=0;i<t;i+=f)r[i]*=e;return r}m.exports=O
});var j=s(function(D,d){
var o=5;function a(t,e,r,f,i){var u,v,n;if(t<=0||e===1)return r;if(u=i,f===1){if(v=t%o,v>0)for(n=0;n<v;n++)r[u]*=e,u+=f;if(t<o)return r;for(n=v;n<t;n+=o)r[u]*=e,r[u+1]*=e,r[u+2]*=e,r[u+3]*=e,r[u+4]*=e,u+=o;return r}for(n=0;n<t;n++)r[u]*=e,u+=f;return r}d.exports=a
});var _=s(function(F,R){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=y(),g=j();b(M,"ndarray",g);R.exports=M
});var k=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=_(),q,E=w(k(__dirname,"./native.js"));z(E)?q=A:q=E;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
