/* 
JavaScript Array unshift() method
========================================

The JavaScript array unshift() method adds one or more elements in the beginning of the given 
array and returns the updated array. This method changes the length of the original array.

Syntax
===============

The unshift() method is represented by the following syntax:

array. unshift(element1,element2,....,elementn)  

Parameter
===================
element1,element2,....,elementn - The elements to be added.


Return
====================

The original array with added elements.

*/

var  elements=[1,4,6,8,0,3];
elements.unshift(9,8)
console.log("ele " + elements); //9,8,1,4,6,8,0,3