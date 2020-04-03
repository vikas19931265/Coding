/* 
JavaScript Array slice() method
============================================
The JavaScript array slice() method extracts the part of the given array and returns it. 
This method doesn't change the original array.

Syntax
================

The slice() method is represented by the following syntax:

array.slice(start,end)  

Parameter
=================
start - It is optional. It represents the index from where the method starts to extract the 
elements.

*/

// Example 1

var elements= ["v","d","t","w","y","x"];
console.log(elements.slice(1,4)); //[ 'd', 't', 'w' ]
console.log(elements.slice(4)); // [ 'y', 'x' ]
console.log(elements.slice(0,4)); //[ 'v', 'd', 't', 'w' ]