/* 
JavaScript Array findIndex() method
===========================================
The JavaScript array findIndex() method returns the index of first element of the given 
array that satisfies the provided function condition. It returns -1, if no element satisfies
the condition.

Syntax
==================
The findIndex() method is represented by the following syntax:

array.findIndex(callback(value,index,arr),thisArg)    

Parameter
====================
callback - It represents the function that executes each element.
value - The current element of an array.
index - It is optional. The index of current element.
arr - It is optional. The array on which findIndex() method operated.
thisArg - It is optional. The value to use as this while executing callback.

Return
==============
The index of first element of the array that satisfies the function condition.

*/

// Example 1
var elements=[8,2,3,1,5,1];
var index=elements.findIndex(check);
function check(value)
{
    return value==1
}
console.log(index); //3

// Example 2
var elements1=[9,2,3,1,5,4];
var index1=elements1.findIndex(checks)
function checks(value1)
{
    return (value1 % 2 ==0)
}
console.log(index1); //1  .. Here 9 modulo 2 is 1 ...It will return the first index.

// Example 3

var elements=[8,2,3,1,5,1];
var index=elements.findIndex(check=>check==17);
console.log(index); //-1 .. returning  -1 as no element with value 17 exist.
