'use strict';

// MODULES //

var tape = require( 'tape' );
var ln = require( 'math-ln' );
var sqrt = require( 'math-sqrt' );
var abs = require( 'math-abs' );
var TWO_PI = require( 'const-two-pi' );
var EPS = require( 'const-eps-float64' );
var LN_SQRT_TWO_PI = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof LN_SQRT_TWO_PI, 'number', 'main export is a number' );
	t.end();
});

tape( 'export is a double-precision floating-point number equal to 0.9189385332046728', function test( t ) {
	t.equal( LN_SQRT_TWO_PI, 0.9189385332046728, 'equals 0.9189385332046728' );
	t.end();
});

tape( 'export equals ln(sqrt(2π))', function test( t ) {
	var delta;
	var tol;
	var v;

	v = ln( sqrt( TWO_PI ) );

	delta = abs( v - LN_SQRT_TWO_PI );
	tol = EPS * LN_SQRT_TWO_PI;

	t.ok( delta <= tol, 'equals ln(sqrt(2π)) within tolerance '+tol );

	t.end();
});
