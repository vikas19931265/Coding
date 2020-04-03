/* 
JavaScript Array toString() Method
======================================

The toString() method is used for converting and representing an array into string form. 
It returns the string containing the specified array elements. Commas separate these elements,
and the string does not affect the original array.

Syntax
================
The following syntax represents the toString() method:

array.toString()  

Parameters
==================

It does not have any parameters.

Return
===========
It returns a string that contains all the elements of the specified array.

*/

var  elements=[1,4,6,8,0,3];
var ele= elements.toString();
console.log(ele); //1,4,6,8,0,3 ...its a string separated by commas