/* 
JavaScript Array of() Method
====================================

The of() method creates and returns a new array from different a number of arguments. 
It does not focus on the type and number of arguments. Similar to Array, it also provides a constructor that
handles the integer arguments, but in a different manner.

Syntax
===============
The syntax of Array of() method is as follows:

Array.of(element1, element2,.....)  

Parameter
==============

It takes and put elements in an array form. Thus, these elements create the array.

*/

var newArray=Array.of("1","vikas"); //these elements will be put in one array
console.log(newArray); //[ '1', 'vikas' ]
newArray.push("ravi");
console.log(newArray); //[ '1', 'vikas', 'ravi' ]