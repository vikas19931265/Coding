/* 
Prototype Object
==============================

JavaScript is a prototype-based language that facilitates the objects to acquire properties 
and features from one another. Here, each object contains a prototype object.

In JavaScript, whenever a function is created the prototype property is added to that 
function automatically. This property is a prototype object that holds a constructor 
property.

Syntax:
==========

ClassName.prototype.methodName  

*/

function Employee()
{
    this.name="vikas";
    /*
    This function be default has a property called
            this.prototype or Employee.Prototype
            which refers to Object.prototype.

    like Employee.prototype=Object.create(Object.prototype);
    
    */
  
}
Employee.prototype.Test= function() { return " i am testing"};
function Student()
{
    this.rollNo=1234;
}

Student.prototype=Object.create(Employee.prototype);
// Lets create an object of Employee class

var student1= new Student();
console.log(student1.Test());


