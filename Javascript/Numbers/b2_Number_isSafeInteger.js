/* 
    Number.isSafeInteger()
    =============================

The Number.isSafeInteger() method determines whether a value is a safe integer.

A safe integer is an integer that can be exactly all integers from (2^53 - 1) to -(2^53 - 1)

This method returns true if the value is of the type Number, and a safe integer. Otherwise it returns false.
Ex: -

*/

Number.isSafeInteger(100) 		//true
Number.isSafeInteger(-100)		 //true
Number.isSafeInteger(0.1) 		//false
Number.isSafeInteger(564547567544563643543655665567756756756756) ;	// false