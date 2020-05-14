/* 
toExponential()
====================

The toExponential() method converts a number into an exponential notation.

Syntax:- 
Variable_name.toExponential(y)

Where y is an integer between 0 and 20 representing the number of digits in the notation
after the decimal point. 

If omitted, it is set to as many digits as necessary to represent the value.

*/

var a = 58975.98745;
console.log(a.toExponential() ); //5.897598745e+4
console.log(a.toExponential(2)); //5.90e+4
console.log(a.toExponential(4)); //5.8976e+4
