/* 
Many arguments function
=======================
If a function is called with too many arguments, these arguments can be reached using the arguments 
object which is a built-in.

*/

function display(num1)
{
    console.log(num1); //10
    console.log(arguments[3]); //40
    console.log(arguments.length); //5
}

display(10,20,30,40,50);