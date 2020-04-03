/* 
Anonymous Functions
=============================
Anonymous functions allow the creation of functions which have no specified name.

Can be stored in a Variable 
Can be Returned in a Function
Can be pass in a Function 

Syntax: -
	function ( ) {
	   body of function;	
	};

*/

// Case 1: Store Anonymous Function in Variable
var res=function(num) // in var variable we are storing anonymous function.
{
    return(num*num);
}; // we should end the function with the semicolon in case of anonymous function.

console.log(" square of number is "+ res(4)); //square of number is 16

// Case 2: Passing function as the argument

function display(myFun) // here mFun variable is holding the supplied anonymous function.
{
    
    return (myFun());  // sample....
}

console.log(display(function()
{
    return "sample";
}));

/* 
In the above case myFun variable will hold our anonymous function like 

    myFun--> function() { return "sample"};

this basically forms the function expression and in order to call this function we have to do like
    myFun()...if function contains any arguments then those can be supplied here.
*/


// case 3 : returning a function.

function disp1(num)
{
     return function(num2)
     {
           return (num+num2);
     };
}

var res= disp1(10); 
    /* 
        Here res will hold the function returned after calling the function disp

            res ----> function(num2) { return 10 + num2};
            num is holding value 10 which was supplied as thea argument.
  
  So res is holding a function expression , and in order to execute this we have to call like
  res()...since the anonymous function contains argument hence that has to be supplied as well.
            */

console.log(" sum of two numbers is "+ res(30)); //sum of two numbers is 40




