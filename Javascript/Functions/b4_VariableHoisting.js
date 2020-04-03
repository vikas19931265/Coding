/* 
Variable Hoisting
========================
Hoisting is JavaScript's default behavior of moving declaration to the top of the function, 
if defined in a function, or the top of the global context, if outside a function. 

A variable can be used before it has been declared. 
Only variable declarations are hoisted to the top, not variable initialization.

We write like this.

var a = 10;
document.write(a);
var b = 20;

At the compile phase code becomes like 

var a;
var b;
a = 10;
document.write(a);
b = 20;

we write like this.

var a = 10;
document.write(a + “ ” + b);
var b = 20;

At the compile phase code becomes like 
var a = 10;
var b;
document.write(a + “ ” + b);
b = 20;

*/

a =10;
var a;
console.log(a); //10...during compile time the compilation a declaration will go at the top.




