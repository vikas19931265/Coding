/* 
Pass by value
===================

JavaScript arguments are passed by value: The function only gets to know the values, not the
argument's locations.

If a function changes an argument's value, it does not change the parameter's original value.

Changes to arguments are not visible (reflected) outside the function.


Pass by reference
====================

In JavaScript, object references are values.
Because of this, objects will behave like they are passed by reference:

If a function changes an object property, it changes the original value.
Changes to object properties are visible (reflected) outside the function.

*/

 var myfun= (num1, num2) => 
    {
        num1=20;
        num2=45;
        console.log(num1); // 20 
        console.log(num2); // 45
    } 
   var num3=60;
   var num4=80;
   myfun(num3, num4);
   console.log(num3); //60 ...values are unchanged after the call
   console.log(num4); // 80 .. values are unchanged after the call.

