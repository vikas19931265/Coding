/* 
JavaScript Array filter() method
======================================

The JavaScript array filter() method filter and extract the element of an array that satisfying 
the provided condition. It doesn't change the original array.

Syntax
=========

array.filter(callback(currentvalue,index,arr),thisArg)  

where currentValue is the only mandatory element and rest are optional.

Return
========

A new object with filtered value is returned.
*/

// program 1
var elements=[2,5,7,9,1,8]
var evenNumbers=elements.filter(evenNumbers)
var oddNumbers=elements.filter(ele=>ele%2!==0)
function evenNumbers(value)
{
    return value%2==0;
}
console.log("even elements are " + evenNumbers);
console.log("odd elements are "+ oddNumbers);


