/* 
Composition and mixins
============================

If we are using normal inheritance then it can be a problem some times. Consider for example we 
have a class Animal having features eat , walk and talk.

Here if we create a class human then its fine for it to inherit all the functions. However if we have
a class Robot then this class can inherit walk and talk feature but must not inherit eat feature.

Therefore in normal inheritance we cannot selectively choose what all features are needed for the
inherited class.

So here we will create the function objects having features and assign those features selectively
to particular object

Object.assign syntax
=========================

Object.assign(target, source1, source_n)
*/


// In this example we are assigning object to robot and person object using assign function. 

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


// lets create one human object
var person= Object.assign({} , eating, walking, talking); // to person object we have given features

// lets create one robot object now

var robot = Object.assign({}, walking, talking);

console.log(person.walk()); // walking
console.log(person.talk()); //talking
console.log(person.eat()); // eating

console.log(robot.walk()); // walking
console.log(robot.talk()); // talking

