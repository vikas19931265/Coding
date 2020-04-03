/* 
JavaScript Array sort() method
========================================

The JavaScript array sort() method is used to arrange the array elements in some order. 
By default, sort() method follows the ascending order.

Syntax
=============
The sort() method is represented by the following syntax:

array.sort(compareFunction)  

Parameter
==============
compareFunction - It is optional. It represents a function that provides an alternative 
sort order.

Return
=================

An array of sorted elements. It will sort the original array.

*/

// Example 1

var elements=[1,4,6,8,0,3];
elements.sort();
console.log(elements); //[ 0, 1, 3, 4, 6, 8 ]

// Example 2
var elements1=[1,4,6,8,0,3];
elements1.sort(compare);
function compare(a,b)
{
    return (a-b);
}
console.log(elements1); ////[ 0, 1, 3, 4, 6, 8 ]
