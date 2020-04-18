/* 
JavaScript Array push() method
==================================

The JavaScript array push() method adds one or more elements to the end of the given array. 
This method changes the length of the original array.

Syntax
=======================

The push() method is represented by the following syntax:

array.push(element1,element2....elementn)  

Parameter
================

element1,element2....elementn - The elements to be added.

Return
==================

The original array with added elements.

*/

var elements=[1,2,3];
elements.push(4,5,6)
console.log(elements); //[ 1, 2, 3, 4, 5, 6 ]