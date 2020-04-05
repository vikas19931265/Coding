/* 
Prototype Object
=========================

Whenever we create any function constructor (class) , then automatically one property
called as prototype is assigned to it.

example for Mobile constructor function...property Mobile.property is available to it.

Now whenever we are going to create any objects using the above function then the objects
will have one ready made property called (__proto__) which will point to the Mobile.prototype
property of the mobile class.

like samsung.__proto__=Mobile.prototype

*/

function Mobile(_brand)
{
    this.brand=_brand;
}
Mobile.prototype.color="red";

var samsung= new Mobile("samsung");
console.log(samsung.__proto__===Mobile.prototype); // true.
console.log(Mobile===samsung.__proto__.constructor); //true
console.log(samsung.__proto__.color); // red
console.log(samsung.color); // red.
console.log(Mobile.prototype); //Mobile { color: 'red' } ...Mobile prototype is holding these values.
console.log(Object.getPrototypeOf(Mobile.prototype)); //{} ..mobile prototype is pointing to object prototype