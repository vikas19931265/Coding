/* 
Rest parameters
===================

The rest parameter allows to represent an indefinite number of arguments as an array.

Syntax: -
==============

function function_name (…args)
  {
      Block of statement;   
  }

The rest operator must be the last parameter to a function.

*/

function display(num1, ...args)
{
    console.log(num1); //10
    console.log(args); //20
    console.log(args[1]); //30
    console.log(args[2]); //40
}

display(10,20,30,40);