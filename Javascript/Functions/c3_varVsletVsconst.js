/* 

var VS lets vs const
===========================

var - The scope of a variable declared with var is its current execution context,
      which is either the enclosing function or, for variables declared outside any function, global.

let - let allows you to declare variables that are limited in scope to the block, statement, 
      or expression on which it is used. 

const - This declaration creates a constant whose scope can be either global or local to the block 
        in which it is declared. 
        
Global constants and let do not become properties of the window object, 

unlike var variables. An initializer for a constant is required; that is, you must
specify its value in the same statement in which it's declared which can't be changed later.

As much as possible we should try to create variable with let or const keyword. If value of variable is not
going to be used or changed anywhere then use let  or const keyword keyword.



*/

var a=10; // global var accessible throughout
function disp()
{
    var b=10  //this variable is accessible all through out the function.
    if(b<20)
    {
        var d= 30; // this variable is accessible all through out the function disp
    }
    else{
        let e=40; // this variable is has scope only inside the else block.
    }
}