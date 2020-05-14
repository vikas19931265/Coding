/* 
    Number with String
    ======================

    
*/

var a = "50"			// String
var b = 10;			// Number
var c = 20;			// Number
var d = "Hello";			// String
console.log(a + b); 		// 5010
console.log(a - b); 		// 40   ....Subtraction does not work like concat..50 of type string is 
                            // is auto converted to the number type.
console.log(b+c+a);		// 10+20+ “50” = 3050
console.log(a+b+c);		// “50” +10+ 20 = 501020
var x = "Result: " + b + c; 		// Result: 1020
