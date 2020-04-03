/* 
Function with parameters
==============================================

1. JavaScript function definitions do not specify data types for parameters.
2. JavaScript functions do not perform type checking on the passed arguments.
3. JavaScript functions do not check the number of arguments received.

Syntax: -
==============
function function_name (parameter1, parameter2, ….)
  {
      Block of statement;   
  }

*/


function display(name) // no data type is specified and checking of number of arguments is not done.
{
    console.log(name);
}

display("vikas" ,"gautam");  // unlike java where signature of function is done, no such checking is done here.
display("ravi");

/* 
PS C:\Users\Vikas.Gautam\Desktop\GitV2\Javascript\Functions> node a3_FunctionWithParameters.js
vikas
ravi
*/