/* 
JavaScript Array pop() method
===================================

The JavaScript array pop() method removes the last element from the given array 
and return that element. This method changes the length of the original array.

Syntax
===============

The pop() method is represented by the following syntax:

array.pop()  

Return
======================
The last element of given array.

*/

var elements=[1,2,3];
var rm=elements.pop()
console.log(elements);  //[ 1, 2 ]
console.log("element removed " + rm); //element removed 3