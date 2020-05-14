/* 
    NaN
    =======


    The NaN property represents "Not-a-Number" value. This property indicates that a value
    is not a legal number. NaN never compare equal to anything, even itself. 

    The NaN property is the same as the Number.Nan property.

*/

console.log(NaN==NaN); // false

// compare NaN to anything is going to give false result only.

var a = "50";
var b = 10;
var c = 20;
var d = "Hello";
console.log(a / b ); 5
console.log(c /d); //NaN

