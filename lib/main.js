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

'use strict';

// MODULES //

var Complex128 = require( '@stdlib/complex-float64-ctor' );
var copysign = require( '@stdlib/math-base-special-copysign' );
var sincos = require( '@stdlib/math-base-special-sincos' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var isInfinite = require( '@stdlib/math-base-assert-is-infinite' );
var exp = require( '@stdlib/math-base-special-exp' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );


// MAIN //

/**
* Evaluates the exponential function for a double-precision complex floating-point number.
*
* @param {Complex128} z - complex number
* @returns {Complex128} result
*
* @example
* var Complex128 = require( '@stdlib/complex-float64-ctor' );
* var real = require( '@stdlib/complex-float64-real' );
* var imag = require( '@stdlib/complex-float64-imag' );
* var cexp = require( '@stdlib/math-base-special-cexp' );
*
* var v = cexp( new Complex128( 0.0, 0.0 ) );
* // returns <Complex128>
*
* var re = real( v );
* // returns 1.0
*
* var im = imag( v );
* // returns 0.0
*
* @example
* var Complex128 = require( '@stdlib/complex-float64-ctor' );
* var real = require( '@stdlib/complex-float64-real' );
* var imag = require( '@stdlib/complex-float64-imag' );
* var cexp = require( '@stdlib/math-base-special-cexp' );
*
* var v = cexp( new Complex128( 1.0, 0.0 ) );
* // returns <Complex128>
*
* var re = real( v );
* // returns ~2.718
*
* var im = imag( v );
* // returns 0.0
*/
function cexp( z ) {
	var out;
	var im;
	var re;
	var e;

	re = real( z );
	im = imag( z );

	if ( isnan( re ) ) {
		re = NaN;
		im = ( im === 0.0 ) ? im : re;
	} else if ( isInfinite( im ) ) {
		if ( re === PINF ) {
			re = -re;
			im = NaN;
		} else if ( re === NINF ) {
			re = -0.0;
			im = copysign( 0.0, im );
		} else {
			re = NaN;
			im = NaN;
		}
	} else {
		e = exp( re );
		if ( im === 0.0 ) {
			re = e;
		} else {
			out = sincos( im );
			re = out[ 1 ] * e;
			im = out[ 0 ] * e;
		}
	}
	return new Complex128( re, im );
}


// EXPORTS //

module.exports = cexp;
