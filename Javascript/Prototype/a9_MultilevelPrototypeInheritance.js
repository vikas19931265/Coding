/* 
    Multilevel prototype inheritance
    ====================================

*/

function Mobile()
{
    this.a=10;
}

Mobile.prototype.z=10;

function Samsung()
{
    Mobile.call(this);
    this.b=20;
}

function Iphone()
{
    Samsung.call(this);
    this.c=30;
}

Samsung.prototype= Object.create(Mobile.prototype); // samsung inherit from object prototype and
Iphone.prototype= Object.create(Samsung.prototype); // phone inherits from samsung, which is inheriting from object
        // this is example of multilevel inheritance

var samsung= new Samsung();
var iphone= new Iphone();
console.log(samsung.a); //10
console.log(samsung.b); //20
console.log(samsung.z);//10

console.log(iphone.a);//10
console.log(iphone.b);//20
console.log(iphone.c);//30
console.log(iphone.z);//10


