/* 
Rest parameters vs Objects
========================================

There are three main differences between rest parameters and the arguments object:-

Rest parameters are only the ones that haven't been given a separate name, while the arguments object
contains all arguments passed to the function.

The arguments object is not a real array, while Rest Parameters are Array instances, 
meaning methods like sort, map, forEach or pop can be applied on it directly.

The arguments object has additional functionality specific to itself (like the callee property).

*/

// Rest parameter

function rest(num1, ...args)
{
    console.log(args.length); //3....args will store only the array elements passed after first element.
}

rest(10,20,30,40);

function argumentsTest(num1, ...args)
{
    console.log(arguments.length) //4 ..arguments object will store list of all arguments passed to the function.
}

argumentsTest(10,20,30,40);