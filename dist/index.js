"use strict";var s=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}}};var q=s(function(J,x){"use strict";var w=require("@stdlib/math-base-special-copysign"),A=require("@stdlib/math-base-special-sincos").assign,C=require("@stdlib/math-base-assert-is-nan"),P=require("@stdlib/math-base-assert-is-infinite"),R=require("@stdlib/math-base-special-exp"),E=require("@stdlib/constants-float64-pinf"),p=require("@stdlib/constants-float64-ninf"),N=[0,0];function K(i,e,r,n,a){var v;return C(i)?(r[a]=NaN,r[a+n]=e===0?e:NaN,r):P(e)?i===E?(r[a]=p,r[a+n]=NaN,r):i===p?(r[a]=-0,r[a+n]=w(0,e),r):(r[a]=NaN,r[a+n]=NaN,r):(v=R(i),e===0?(r[a]=v,r[a+n]=e,r):(A(e,N,1,0),r[a]=N[1]*v,r[a+n]=N[0]*v,r))}x.exports=K});var y=s(function(L,l){"use strict";var S=require("@stdlib/complex-float64-ctor"),W=require("@stdlib/array-float64"),b=require("@stdlib/complex-float64-real"),h=require("@stdlib/complex-float64-imag"),j=q(),c=new W(2);function k(i){return j(b(i),h(i),c,1,0),new S(c[0],c[1])}l.exports=k});var I=s(function(M,F){"use strict";var u=q();function B(i,e,r,n,a,v){return u(i[r],i[r+e],n,a,v)}F.exports=B});var d=require("@stdlib/utils-define-nonenumerable-read-only-property"),g=y(),D=q(),G=I();d(g,"assign",D);d(g,"strided",G);module.exports=g;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
