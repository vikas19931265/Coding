/* 
toString()
==================

The toString ( ) Method returns a string containing the comma-separated 
values of the array.

This method is invoked automatically when you print an 
array. 

It is equivalent to invoking join ( ) method without any arguments as for join the
default separator is semicolon. The returned string will separate the elements in the array with commas. 


Syntax: - array_name.toString(); 
Ex:-  
var geek = ["Rahul", "Sonam", "Sumit", "Raj", "Rohan"]; 
geek.toString(); 
*/

var geek = ["Rahul", "Sonam", "Sumit", "Raj", "Rohan"]; 
console.log(geek.toString()); //a6_toString

