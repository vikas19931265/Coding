/* 
JavaScript Array shift() method
=======================================

The JavaScript array shift() method removes the first element of the given array and 
returns that element. This method changes the length of the original array.

Syntax
=============

The shift() method is represented by the following syntax:

array. shift()  

Return
===============

The first element of an array.

*/

var elements=[1,4,6,8,0,3];
var ele=elements.shift();
console.log("original array  : " + elements); //4,6,8,0,3
console.log("original element :" + ele); //1