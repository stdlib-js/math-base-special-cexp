"use strict";var q=function(a,i){return function(){try{return i||a((i={exports:{}}).exports,i),i.exports}catch(r){throw (i=0, r)}};};var n=q(function(P,v){
var N=require('@stdlib/complex-float64-ctor/dist'),t=require('@stdlib/math-base-special-copysign/dist'),f=require('@stdlib/math-base-special-sincos/dist').assign,l=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-assert-is-infinite/dist'),c=require('@stdlib/math-base-special-exp/dist'),p=require('@stdlib/constants-float64-pinf/dist'),x=require('@stdlib/constants-float64-ninf/dist'),m=require('@stdlib/complex-float64-real/dist'),g=require('@stdlib/complex-float64-imag/dist'),u=[0,0];function I(a){var i,r,e,s;return e=m(a),r=g(a),l(e)?(e=NaN,r=r===0?r:e):o(r)?e===p?(e=-e,r=NaN):e===x?(e=-0,r=t(0,r)):(e=NaN,r=NaN):(s=c(e),r===0?e=s:(f(r,u,1,0),e=u[1]*s,r=u[0]*s)),new N(e,r)}v.exports=I
});var C=n();module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
