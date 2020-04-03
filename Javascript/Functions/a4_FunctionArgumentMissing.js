/* 
Function argument missing
================================

If a function is called with missing arguments, the missing values are set to undefined.

*/

function display(a, b , c)
{
    console.log(a);
    console.log(b);
    console.log(c); // c value is not received and hence is set to undefined.
}

display(10,20);

/* 
10
20
undefined

*/