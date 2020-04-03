/* 
Closure
============
A closure is a function having access to the parent scope. It preserve the data from outside. 

A closure is an inner function that has access to the outer (enclosing) function’s variables.
For every closure we have three scopes:-

Local Scope ( Own scope)
Outer Functions Scope
Global Scope

*/

var glo="global";
function outer()
{
    var  out="outer";
    function inner()
    {
        var ine="inner";
        console.log("outer " + out); // outer.. inner function having access to outer function
        console.log("inner" + ine); // inner...inner function having access to its own variable.
        console.log("global"+glo); // global...inner function having access to global variable outside function
    }
    inner();
}
outer();

/* 
PS C:\Users\Vikas.Gautam\Desktop\GitV2\Javascript\Functions> node b5_Closures.js
outer outer
innerinner
globalglobal
*/