/* 
JavaScript Array join() method
======================================

The JavaScript array join() method combines all the elements of an array into a string and 
return a new string. We can use any type of separators to separate given array elements.

The join() method joins the elements of an array into a string, and returns the string. 
The elements will be separated by a specified separator. The default separator is comma 
(,). 
Syntax: - array_name.join(separator); 

Syntax
===========

The join() method is represented by the following syntax:

    array.join(separator)  

Parameter
===============

Separator() - It is optional. It represent the separator used between array elements.

Return
============

A new string contains the array values with specified separator.


*/

// JavaScript Array join() method example

var arr=["AngularJs","Node.js","JQuery"]  
var result=arr.join('-')  
console.log(result); 