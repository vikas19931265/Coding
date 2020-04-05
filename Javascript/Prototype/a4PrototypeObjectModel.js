/* 
Prototype Object
======================

Every object is associated with another Object in JavaScript.

*/

// Lets create an object 

var obj= { };

/* 
    The above object will have one more property associated with it called as "prototype".
    and this property will refer to Object.prototype.

    Here we are checking what is the prototype of object "obj" which is basically
    Object.prototype.

    Now here obj will inherit all the properties of Object.prototype Object.

    Above concept will work for both objects created through literal and also new keyword.

*/
console.log(Object.getPrototypeOf(obj)===Object.prototype); //true
console.log(Object.prototype);
console.log(Object.getPrototypeOf(obj));// { }

/* 
    Further Object.prototype refers to null and no other prototype
*/

console.log(Object.getPrototypeOf(Object.getPrototypeOf(obj))); // null

/* 
    Check the above stuff with Array.
*/

var newArray= new Array();
console.log(Object.getPrototypeOf(newArray)); //[]
console.log(Object.getPrototypeOf(Object.getPrototypeOf(newArray))); //{}
console.log(Object.getPrototypeOf(Array.prototype)) ; // {} we can get prototype of array like this also.
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(newArray)))); //null
