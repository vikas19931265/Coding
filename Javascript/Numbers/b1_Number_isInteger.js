/* 
Number.isInteger()
=================

The Number.isInteger() method determines whether a value an integer.

This method returns true if the value is of the type Number, and an integer, 
Otherwise it returns false.

*/
console.log(Number.isInteger());		// false
console.log(Number.isInteger(100));	// true
console.log(Number.isInteger(-100));	// true
console.log(Number.isInteger(100.45) );	// false
console.log(Number.isInteger(200-100) );	// true
console.log(Number.isInteger(0.1) );	// false
console.log(Number.isInteger("100") );	// false
console.log(Number.isInteger("Hello") );	// false
