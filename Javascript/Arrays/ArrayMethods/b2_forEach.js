/* 
The JavaScript array forEach() method is used to invoke the specified function once 
for each array element.

Syntax
===========

The forEach() method is represented by the following syntax:

    array.forEach(callback(currentvalue,index,arr),thisArg)  

except currentValue field rest of all the fields are optional.

Return
==========
UNDEFINED

*/

var elements=new Array(2,3,4);
elements.forEach(function(value) // value will hold each element present in the array.
{
    console.log(value*2);
})


/* 
PS C:\Users\Vikas.Gautam\Desktop\GitV2\Javascript\Arrays\ArrayMethods> node a4_forEach.js
4
6
8
*/