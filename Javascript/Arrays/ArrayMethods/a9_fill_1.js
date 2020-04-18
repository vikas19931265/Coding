/* 
JavaScript Array fill() method
===================================

The JavaScript array fill() method fills the elements of the given array with 
the specified static values. This method modifies the original array. It returns undefined, 
if no element satisfies the condition.

Syntax
=========
The fill() method is represented by the following syntax:

arr.fill(value[, start[, end]])  

Parameter
=============
value - The static value to be filled.


start - It is optional. It represents the index from where the value starts filling.
       By default, it is 0.

end - It is optional. It represents the index where the value stops filling. By default, it is length-1.

Return
===========

The modified array.

*/

var arr=["AngularJS","Node.js","JQuery"];  
var result=arr.fill("Bootstrap");  
        /*
 starting position is 0 to last . We can also specify starting and ending positions.
         */
 console.log(result);  //[ 'Bootstrap', 'Bootstrap', 'Bootstrap' ]