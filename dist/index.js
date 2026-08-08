"use strict";var n=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(r){throw (e=0, r)}};};var v=n(function(F,u){
var q=require('@stdlib/complex-float64-ctor/dist'),N=require('@stdlib/math-base-special-copysign/dist'),t=require('@stdlib/math-base-special-sincos/dist').assign,f=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-assert-is-infinite/dist'),c=require('@stdlib/math-base-special-exp/dist'),o=require('@stdlib/constants-float64-pinf/dist'),p=require('@stdlib/constants-float64-ninf/dist'),x=require('@stdlib/complex-float64-real/dist'),m=require('@stdlib/complex-float64-imag/dist'),s=[0,0];function g(i){var e,r,a;return r=x(i),e=m(i),f(r)?(r=NaN,e=e===0?e:r):l(e)?r===o?(r=-r,e=NaN):r===p?(r=-0,e=N(0,e)):(r=NaN,e=NaN):(a=c(r),e===0?r=a:(t(e,s,1,0),r=s[1]*a,e=s[0]*a)),new q(r,e)}u.exports=g
});var I=v();module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
