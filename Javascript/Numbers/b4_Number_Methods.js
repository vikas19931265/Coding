/* 
    Number()
    =================
 The Number() function converts the object argument to a number that represents the object's 
 value.
    If the value cannot be converted to a legal number, NaN is returned.
    If the parameter is a Date object, the Number() function returns the number of milliseconds since midnight January 1, 1970 UTC.
    Ex: -

    Number(true)

    Number(“100”)

    Number(100/“Hello”)

*/

console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number("100")); //100
console.log(Number(100/"s")); //NaN