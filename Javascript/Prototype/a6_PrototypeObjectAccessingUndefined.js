function Mobile() {

}

var samsung = new Mobile();
console.log(samsung.a); // undefined.

/* 
This will show undefined because  a is neither defined in the function nor in the 
function's prototype
It first checks if lg object have property a as it doesn't have it so it go to its
prototype object pointed by __proto__ and ask him if he has property a as it also 
doesn't have it so finally we receive undefined. This is how it works behind the 
browser and JS Engine is the responsible for this task
        console.log(lg.a);

*/


function Mobiles() {

}

Mobiles.prototype.a = 10;
/* 
This property is defined in Function's Prototype Object so all Objects will have access 
to this property and this is just one single property for all objects. It doesn't make
 copies for objects separately. usually we defined methods as a prototype method member 
 rather than Prototype variable member.
*/
var nokia = new Mobiles();
console.log(nokia.a); //10
console.log(nokia.__proto__.a); //10  .. Here proto is referring to (Mobiles.prototype)
/* 
It first checks if lg object have property a as it doesn't have it so it go to its 
prototype object pointed by __proto__ and ask him if he has property a as it has so 
finally we receive 10. This is how it works behind the browser and JS Engine is the 
responsible for this task

*/