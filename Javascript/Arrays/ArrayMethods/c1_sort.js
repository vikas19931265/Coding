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
    return (b-a);

    /* 
    here number is returned either negative or positive...like first two numbers are 
    1 and 4 and result is positive so 4 comes first...then compare between 4 and 6
    result is positive so 6 comes first and then 6 to 8..eight is positive so 8 comes first
    this keeps going on for all the elements.

    1 , 4, 6, 8, 0, 3
    4,1,6,8,0,,3
    4,6,1,8,0,3
    4,6,,8,1,0,3  

    and so on until sorting completes
    
    */
}
console.log(elements1); ////[ 8, 6, 4, 3, 1, 0 ]
