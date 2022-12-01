// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-copysign@v0.0.7-esm/index.mjs";import{assign as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sincos@v0.0.7-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.0.8-esm/index.mjs";function r(r,a,o){var j,l;return e(a)?(r[0]=NaN,r[1]=0===o?o:a):i(o)?a===m?(r[0]=-a,r[1]=NaN):a===d?(r[0]=-0,r[1]=s(0,o)):(r[0]=NaN,r[1]=NaN):(l=n(a),0===o?(r[0]=l,r[1]=o):(t(o,r,1,0),j=r[0],r[0]=r[1]*l,r[1]=j*l)),r}function a(s,t,e){return 2===arguments.length?r([0,0],s,t):r(s,t,e)}export{a as default};
//# sourceMappingURL=index.mjs.map
