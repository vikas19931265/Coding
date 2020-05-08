/* 
    split function
    =====================

    //  split() Method
    // The split ( ) method breaks the string up into separate string according to a delimeter passed 
    as its first argument. The result is returned in an array. 

*/


var str = "Hi guys Lets Learn JavaScript";
var ele=  str.split(" "); // returns array object.
ele.forEach( value  =>  console.log(value));

/* 
Hi
guys
Lets
Learn
JavaScript
*/