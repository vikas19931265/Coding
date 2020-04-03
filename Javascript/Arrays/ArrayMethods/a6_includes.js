/* 
JavaScript Array includes() method
=======================================

The JavaScript array includes() method checks whether the given array contains the specified 
element. It returns true if an array contains the element, otherwise false.

Syntax
=============
The includes() method is represented by the following syntax:

array.includes(element,start)  

Here elements is value to be searched and is mandatory. And start is optional which represents the 
index position from which the element has to be searched.

Return
========
BOOLEAN
*/

var element=new Array("vikas","sachin");
console.log(element.includes("vikas"))  // true , vikas is present in the elements