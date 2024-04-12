"use strict";var n=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var v=n(function(w,u){
var q=require('@stdlib/complex-float64/dist'),N=require('@stdlib/math-base-special-copysign/dist'),t=require('@stdlib/math-base-special-sincos/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-assert-is-infinite/dist'),o=require('@stdlib/math-base-special-exp/dist'),c=require('@stdlib/constants-float64-pinf/dist'),p=require('@stdlib/constants-float64-ninf/dist'),x=require('@stdlib/complex-real/dist'),m=require('@stdlib/complex-imag/dist');function I(a){var i,r,e,s;return e=x(a),r=m(a),f(e)?(e=NaN,r=r===0?r:e):l(r)?e===c?(e=-e,r=NaN):e===p?(e=-0,r=N(0,r)):(e=NaN,r=NaN):(s=o(e),r===0?e=s:(i=t(r),e=i[1]*s,r=i[0]*s)),new q(e,r)}u.exports=I
});var g=v();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
