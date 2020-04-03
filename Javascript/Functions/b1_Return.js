/* 
Return in function
=========================

A function returning a value.

Syntax: -
============

function function_name(para1, para2, ….. )
{
      Block of statement;
      return (expression);
}

*/

function sum(num1, num2)
{
    return (num1+num2); //30...function returning expression.
}

var  result = sum(10,20);
console.log("sum of two numbers  is " + result); //30
