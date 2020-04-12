/* 
Using mixin with functions

*/

var eating = 
{
    eat : function() { return "eating"}
}


var walking = 
{
    walk : function() { return "walking"}
}


var talking = 
{
    talk : function() { return "talking"}
}

function mixin(source, ...target) // here ...target is the rest parameter
{
    Object.assign(source, ...target);
}

function Human()
{

}

function Robot()
{

}

mixin(Human.prototype, walking,talking,eating);
mixin(Robot.prototype, walking, talking);

var person= new Human();
console.log(person.walk());  // walking 
console.log(person.talk());  // talking
console.log(person.eat()); // eating
var rob= new Robot()
console.log(rob.walk()); // walking
console.log(rob.talk());  // talking