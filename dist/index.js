"use strict";var n=function(a,i){return function(){try{return i||a((i={exports:{}}).exports,i),i.exports}catch(e){throw (i=0, e)}};};var v=n(function(w,u){
var q=require('@stdlib/complex-float64-ctor/dist'),N=require('@stdlib/math-base-special-copysign/dist'),t=require('@stdlib/math-base-special-sincos/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-assert-is-infinite/dist'),o=require('@stdlib/math-base-special-exp/dist'),c=require('@stdlib/constants-float64-pinf/dist'),p=require('@stdlib/constants-float64-ninf/dist'),x=require('@stdlib/complex-float64-real/dist'),m=require('@stdlib/complex-float64-imag/dist');function I(a){var i,e,r,s;return r=x(a),e=m(a),f(r)?(r=NaN,e=e===0?e:r):l(e)?r===c?(r=-r,e=NaN):r===p?(r=-0,e=N(0,e)):(r=NaN,e=NaN):(s=o(r),e===0?r=s:(i=t(e),r=i[1]*s,e=i[0]*s)),new q(r,e)}u.exports=I
});var g=v();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
