/* 
The JavaScript array every() method checks whether all the given elements in an array 
are satisfying the provided condition. It returns true when each given array element 
satisfying the condition otherwise false.

Signature
============

array.every(callback(currentValueOfElement, indexPositionOfElement,completeArray),thisArg)

    except currentValueOfElements all the other fields are optional.

Return
========
BOOLEAN

*/

// this program will check if all the numbers in array are lesser then 100 or not. 

var elements= new Array(10,90,56,34,1000);

function isNumberLessThan100(value) // each element of array will be read
{
    return value<100; // every number will be tested. If it keeps returning true till the end 
                     // of elements then finally true is returned else false will be returned.
}

console.log(elements.every(isNumberLessThan100)); // it will return false as 1000 is not lesser then 100.

