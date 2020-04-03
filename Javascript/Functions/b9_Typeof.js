/* 
The typeof operator
=========================

is used to get the data type (returns a string) of its operand. The operand can be either a
literal or a data structure such as a variable, a function, or an object. 

Syntax: -
===============

typeof operand
typeof(operand)
Ex: -
typeof “a”;

*/

console.log(typeof("a"));
console.log(typeof(1));
console.log(typeof(false));
console.log(typeof( (a) => {return a}  ))

/* 
string
number
boolean
function

*/