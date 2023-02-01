<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# exp

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [exponential][exponential-function] function of a complex number.

<section class="intro"> 

The [exponential][exponential-function] function of a complex number is defined as

<!-- <equation class="equation" label="eq:cexp_function" align="center" raw="\operatorname{exp}(z) = e^{x + i y} = (\exp{x}) (\cos(y) + i \sin(y))" alt="Complex exponential function"> -->

<div class="equation" align="center" data-raw-text="\operatorname{exp}(z) = e^{x + i y} = (\exp{x}) (\cos(y) + i \sin(y))" data-equation="eq:cexp_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d4edb68b52a6c646be5683023c5a24890300727f/lib/node_modules/@stdlib/math/base/special/cexp/docs/img/equation_cexp_function.svg" alt="Complex exponential function">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-cexp
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var cexp = require( '@stdlib/math-base-special-cexp' );
```

#### cexp( \[out,] re, im )

Evaluates the [exponential][exponential-function] function with a `complex` argument comprised of a **real** component `re` and an **imaginary** component `im`.

```javascript
var v = cexp( 0.0, 0.0 );
// returns [ 1.0, 0.0 ]

v = cexp( 0.0, 1.0 );
// returns [ ~0.540, ~0.841 ]
```

By default, the function returns real and imaginary components as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var out = new Float64Array( 2 );

var v = cexp( out, 0.0, 1.0 );
// returns <Float64Array>[ ~0.540, ~0.841 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex-float64' );
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );
var cexp = require( '@stdlib/math-base-special-cexp' );

var re;
var im;
var z1;
var z2;
var o;
var i;

for ( i = 0; i < 100; i++ ) {
    re = round( randu()*100.0 ) - 50.0;
    im = round( randu()*100.0 ) - 50.0;
    z1 = new Complex128( re, im );

    o = cexp( real(z1), imag(z1) );
    z2 = new Complex128( o[ 0 ], o[ 1 ] );

    console.log( 'cexp(%s) = %s', z1.toString(), z2.toString() );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-cexp.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-cexp

[test-image]: https://github.com/stdlib-js/math-base-special-cexp/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-cexp/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-cexp/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-cexp?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-cexp.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-cexp/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-cexp/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-cexp/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-cexp/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-cexp/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-cexp/main/LICENSE

[exponential-function]: https://en.wikipedia.org/wiki/Exponential_function

</section>

<!-- /.links -->
