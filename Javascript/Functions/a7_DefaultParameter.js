/* 
Default Parameter
===========================

In javascript we can set the value of a parameter to a default value. If during a function call we are
not passing the argument then the default value which we define in our function will be used.

We can pass null as default value, as well as array as default value.

Syntax
=========

function function_name (para1, para2, para3=“value”)
  {
      Block of statement;   
  }

*/

function display(num1, num2=10)
{
    console.log(num1);// 10
    console.log(num2); // num2 =10, argument was not passed so default value is used. If it was passed the
                       // actual value would have been used.
}

display(10); // 10, 10
display(10,30); 10,30

// scenario : undefined value.
function display1(num1, num2=10,num3) 
{
    console.log("val1" + num1); //10
    console.log(num2); // 30 
    console.log(num3); // undefined.
}
display1(10,30); 
/* 
    In thi case, 10 is passed to num1, and num2 value will be 10 and num3 value will be undefined.
*/

// scenario: passing array/null as default value
function display2(num1, num2= null , num3=[10])
{
    console.log("values "  + num1); //10
    console.log(num2); // null
    console.log(num3[0]); // 10
    console.log(num3[1]); // undefined.
}
display2(10);