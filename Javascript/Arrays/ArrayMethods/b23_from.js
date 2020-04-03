/* 
JavaScript Array from() Method
=====================================

The from() method creates a new array that holds the shallow copy from an array or 
iterable object. When applied to a string, each word gets converted to an array element
in the new array.

Syntax
===========
There is a following possible syntax:

Array.from(object,map_fun,thisArg);  

Parameter
================

object: 
    It is the name of the array-like or iterable object on which from() method will be applied.
map_fun: 
    It is an optional parameter used for calling the elements of the array via map() function.
thisArg:
     An optional parameter whose value is used as 'this' when we execute the map_fun.

Return
===========

It returns a newly created array.

*/

// Example 1: Creating array from the string.

var name="vikas gautam";
var newArray=Array.from(name);
console.log("array length is " + newArray.length); //12
console.log(newArray);
    /* 
    [
  'v', 'i', 'k', 'a',
  's', ' ', 'g', 'a',
  'u', 't', 'a', 'm'
    ]
    */

// Example 2: Creating array from the arguments

console.log(check("vikas",1,2,3));
function check()
{
 var argArray= Array.from(arguments)  // arguments are caught here.
 return argArray
}

// Example 3: Creating array using map option in arguments

console.log(check1(1,2,3)); //[ 12, 13, 14 ]
function check1()
{
 var argArray= Array.from(arguments,val=>val+11)  // arguments are caught here.
 return argArray
}
