/* 
Concat method
=========================


The JavaScript array concat() method combines two or more arrays and returns a new string. 
This method doesn't make any change in the original array.

This method does not change the existing arrays, but instead returns a new array. 

Return types
=============

returns a new string.

*/

var employee1= new Array("vikas","sachin");
var employee2= new Array("ravi", "singh");

var totalEmployees= employee1.concat(employee2);
console.log("total employees : " + totalEmployees);

/* 
PS C:\Users\Vikas.Gautam\Desktop\GitV2\Javascript\Arrays\ArrayMethods> node a1_Concat.js
total employees : vikas,sachin,ravi,singh
*/