/* 
Example of prototype usage
=================================

*/

function Mobile(_model)
{
    this.model=_model;
    this.price=3310;
}

// using the function constructor above we will create two object namely samsung and nokia

var samsung= new Mobile("samsung")
console.log(samsung.model); // samsung
console.log(samsung.price); //3310

// similarly we can create an object for nokia as well

var nokia= new Mobile("nokia");
console.log(nokia.model); // nokia
console.log(nokia.price); //3310

/* 
Now lets say we want to add a common property "white" color to thousand of phones then 
if we have to do like

    samsung.color="white";
    nokia.color="white";

Otherwise we can create this property in the Mobile function constructor and that will be
used by other objects.
However that case it will lead to creation of same property for all the objects created from
the mobile function which will lead to memory loss.
Hence we can go for the prototype object. Here we will create a prototype object for mobile
and all the objects created from the mobile function will simply refer to prototype object
holding color. Now new copies will be created.
*/

Mobile.prototype.color="white";
console.log(samsung.color); // white
console.log(nokia.color)//white