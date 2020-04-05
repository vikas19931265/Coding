/* 
For in loop used to access the prototype member
=================================================

*/

function Mobile(_model)
{
    this.model=_model;
    this.price=3310;
}

Mobile.prototype.color="black";
var samsung= new Mobile("samsung")
console.log(samsung.model); // samsung
console.log(samsung.price); //3310

// Trying to use Object method "keys"
console.log(Object.keys(samsung)); //[ 'model', 'price' ]// we can see that prototype object did not appear.

// To get the prototype object also we need to use for in loop

for(key in samsung)
{
    console.log(samsung[key]); // samsung, 3310, black
}



