/*  
Function Expression
=========================

When we create a function and assign it to a variable, known as function expression.

example
    var myFun= function test() 
            {
                    // body of the function.
            };

 Note
 ======
 
You can’t call function expression before function definition. 
 
Function expressions in JavaScript are not hoisted, unlike function declarations.

example

myfun();  // this is not allowed as we are calling function after expression. But possible if its 
             a function declaration only.
var myfun = function show( ){
     document.write(“GeekyShows”);
};

*/

// console.log("square of the number is "+ result(5)); 
        // This is not allowed as we cant call function expression  before declared.
                                                       
var result=function myFun(num)
{
    return num*num;
}

console.log("square of the number is "+ result(4));


