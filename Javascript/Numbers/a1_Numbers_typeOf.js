/* 
Numbers
================

Number type in JavaScript includes both integer and floating point values. 

JavaScript numbers are always stored as double precision floating point numbers, 
following the international IEEE 754 standard. 

JavaScript also provide an object representation of numbers. 

Ex- 
	12
	23.45
	5e3


Primitive( NUMBER)
=============

var a = 10;	// Whole Number
var a = 10.45;	// Decimal Number
var a = 5e3;	// 5000 // 5 x 10^3	exponent 
var a = 34e-5;	// 0.00034  exponent 

Constructor ( OBJECTS)
======================

var a = new Number(10);
var a = new Number(10.45);
var a = new Number(5e3);

*/

let number1= "10";
console.log(typeof(number1)); //string
let number2=10; 
console.log(typeof(number2));//number
let number3= 10.45;
console.log(typeof(number3)); //number
let number4= new Number(50);
console.log(typeof(number4)); //object