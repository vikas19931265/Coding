/* 
    Number method : toString()
    ===============================

toString ( ) Method returns a number as a string in other words it converts number into
string. We can use this method to output numbers as hexadecimal (16), octal(8), binary(2).

Syntax: - 
Variable_name.toString( );

Ex: -
var a = 10;
document.write(a.toString());
document.write(a.toString(2));	// Binary of 10

*/

let a =10;
console.log(a.toString(2)); //1010
console.log(a.toString(16)); //a