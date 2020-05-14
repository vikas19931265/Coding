/* 
    Global isNaN() function
    ================================

The isNaN() function is used to determines whether a value is an illegal number (Not-a-Number).

This function returns true if the value equates to NaN. Otherwise it returns false.

This function is different from the Number specific Number.isNaN() method.

The global isNaN() function, converts the tested value to a Number, then tests it.

Syntax: - isNaN(value)

*/

let a =10;
let b ="test";
if(isNaN(a/b))
{
    console.log("not a number"); // not a number
}
else{
    console.log("number");
}

