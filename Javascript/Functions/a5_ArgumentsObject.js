/* 
Arguments Object
===============================================

The arguments object contains an array of the arguments used when the function was called.
This object contains an entry for each argument passed to the function, the first entry's index starting at 0. 

**The arguments object is not an Array. It is similar to an Array, but does not have any Array properties except 
length.

function add(num1, num2) {
  // arguments[0] = 10
  // arguments[1] = 20 
}

add(10, 20);

*/

function display(num1, num2)
{
    console.log(arguments[0]); //2
    console.log(arguments.length);//2
    arguments[0]=3;
    console.log(num1); //n=changing arguments object will internally change the values of the parameters.
    console.log(arguments.callee); //[Function: display]
}

display(2,4); // 2 and 4 arguments will be stored inside the arguments object.