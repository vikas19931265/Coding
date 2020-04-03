/* 
Scopes in javascript
===========================
JavaScript has two scopes: -

Global 
Local

Global Scope
=================
A variable that is declared outside a function definition is a global variable, and its value is 
accessible and modifiable throughout your program. 
In a web browser, global variables are deleted when you close the browser window (or tab), 
but remain available to new pages loaded into the same window.

var a = 10;	// Global variable 
function add(b) {
      return (a + b);	// a is global variable 
}
document.write(add(20));

Local Scope
===================
A variable that is declared inside a function definition is local. It is created and destroyed 
every time the function is executed, and it cannot be accessed by any code outside the function. 
Inside a function, if a variable has not been declared with var it is created as a global variable.

function add(b) {
      var a = 10;	// Local Variable 
      return (a + b);
}
document.write(add(20));

If there is function inside a function the inner function can access outer function’s 
variables but outer function can not access inner function’s variables. 

Function arguments (parameters) work as local variables inside functions.

*/


// Global  and local variable.

var value="i am a global variable";
function display()
{
    var local="tst";  // this is local variable accessible only inside this function.
    console.log(value); //i am a global variable
}

display();

// inner function

function outer(outer)
{
    var out="i am outer variable"; // first call. (global outer variable accessible to inner)
    function inner(inner)
    {
       var inv="i am inner variable";// declaring  it without var keyword will treat it as local variable.
       console.log(inv);
       console.log(out);  // outer variable accessible to inner variable
    }
    inner(); // second call ( global variable is accessed.)
}

outer();

/* 
i am inner variable
i am outer variable
*/