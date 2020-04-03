/* 
JavaScript Array indexOf() method
=========================================

The JavaScript array indexOf() method is used to search the position of a particular 
element in a given array. This method is case-sensitive.

The index position of first element in an array is always start with zero.
If an element is not present in an array, it returns -1.

Syntax
========
The indexOf() method is represented by the following syntax:

array.indexOf(element,index)  

Parameter
=================

element - It represent the element to be searched.

index - It represent the index position from where search starts. It is optional.

Return
==================
An index of a particular element.

*/

//Example 1

var  elements=[1,4,6,11,0,3];
var index= elements.indexOf(4); //1
console.log("index " + index);

//Example 2

var  elements=[1,4,6,1,11,0,3];
var index1= elements.indexOf(1,1);
console.log("index " + index1); // 3...because search starts after first index(4)
