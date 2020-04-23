/* 
JavaScript Array some() Method
=======================================

The some() methods perform testing and checks if at least a single array element passes the
 test, implemented by the provided function. If the test is passed, it returns true. 
 Else, returns false.

Note: If some() method is applied on an empty array, it returns false always.

Syntax
=================

array.some(callback_funct(element, index, array), thisArg);  

Parameter
================

callback_funct: It is the function that tests each element present in the array. 
It undertakes the following three arguments:

element: It is the current element, being in process.
index: Although it is optional, it is the index value of the current element in process.
arr: It is the given array on which some() method performs the test.
thisArg: It is an optional parameter, used as 'this' value while executing the callback function.
         If we do not provide, 'undefined' will be used as 'this' value.


Return
=================
It returns a boolean value. If it founds an element returning true value to the callback function,
it returns true. Otherwise, false.

Note: The array.some() does not affect the original array.

*/

var  elements=[1,4,6,11,0,3];
console.log("status is "+ elements.some(check))
function check (val, index , arr)
{
    console.log("index : " + index + " val : " + val + " arr : " + arr);
    return (val>10);
}

/* 
index : 0 val : 1 arr : 1,4,6,11,0,3
index : 1 val : 4 arr : 1,4,6,11,0,3
index : 2 val : 6 arr : 1,4,6,11,0,3
index : 3 val : 11 arr : 1,4,6,11,0,3
status is true
*/

var values=[10,20,40,50];
console.log(values.some((val)=> 
{
    console.log("valus is " + val);
    return(val>50)
})); 

//o/p false