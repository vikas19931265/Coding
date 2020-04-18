/* 
JavaScript Array find() method
=======================================

The JavaScript array find() method returns the first element of the given array that satisfies
the provided function condition.

Syntax
========
The find() method is represented by the following syntax:

array.find(callback(value,index,arr),thisArg)    

Parameter
==========
callback - It represents the function that executes each element.


value - The current element of an array.
index - It is optional. The index of current element.
arr - It is optional. The array on which find() operated.
thisArg - It is optional. The value to use as this while executing callback.

Return
============

The value of first element of the array that satisfies the function condition.


*/

var arr=[5,22,19,25,34];  
var result=arr.find(x=>x>20);  
document.writeln(result) //22