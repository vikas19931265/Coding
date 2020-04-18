/* 

fill() method
=====================

The fill() method fills all the elements in an array with a static 
value. 

Syntax:- array_name.fill(value, start, end) 

Ex:- geek.fill(“Don”) // all elements fill with Don 
geek.fill(“Don”, 1, 3) // fill don starting with index 1 to 3 
 (3 not included) 

*/

var elements=["jan","feb","mar","apr","may","june"];
elements.fill("don",1,3); // exclude the end position
console.log(elements); //[ 'jan', 'don', 'don', 'apr', 'may', 'june' ]

