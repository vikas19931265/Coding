/* 
Unshift function
===================

The unshift() method adds one or more elements to the beginning of an array 
and returns the new length of the array. 
This method changes the length of an array. 

Syntax: -  
===========
Array_name.unshift(value1, value2, value_n); 

Ex: - geek.unshift(“Dell”, “HP”); 
var geek_length = geek.unshift(“Dell”, “HP”);  // it will return length of new 
array  


*/

let elements=['jan','feb','mar','apr','may'];
elements.unshift('tst1','test');
console.log(elements);

/*
[
  'tst1', 'test',
  'jan',  'feb',
  'mar',  'apr',
  'may'
]

*/
