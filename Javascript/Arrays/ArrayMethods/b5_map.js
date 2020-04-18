/* 
JavaScript Array map() method
===============================
The JavaScript array map() method calls the specified function for every array element
and returns the new array. This method doesn't change the original array.

Syntax
============

array.map(callback(currentvalue,index,arr),thisArg) 

Here also the current value is mandatory and index and arr values are optional.

Return
==========

A new array whose each element generate from the result of a callback function.
*/

var element=[1,2,3,4,5];
var array1=element.map(elements=>elements+1); // original array is unchanged. way1 to do
var array2= element.map(add); // returns new array.
console.log("map elements are " + array1); //map elements are 2,3,4,5,6
function add(value) // way2 to do
{
    return (value+2);
}
console.log("array2 elements are " + array2);//3,4,5,6,7


// another example

let ele=[10,20,30];

let ele2=ele.map(function(value)
    {
        return (value+1);
    })
console.log("ele2 values are " + ele2); //11,21,31