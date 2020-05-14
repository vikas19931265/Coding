/*
    Number method : toPrecision
    ================================

    The toPrecision() method formats a number to a specified length.

    A decimal point and nulls are added (if needed), to create the specified length.

    Syntax:- 

    Variable_name.toPrecision(y) 

    Where y is the number of digits. If omitted, it returns the entire number (without any formatting)

*/


var a = 19.65823;
console.log(a.toPrecision() ); //19.65823
console.log(a.toPrecision(2)); //20
console.log(a.toPrecision(4)); //19.66
console.log(a.toPrecision(9)); //19.6582300



