/* 
Private Properties and Methods
===============================

Using var or let or const you can create private properties and methods.
Ex: -

this.price 
var price
let price

*/

function Studs(name, marks)
{
    this.name=name;
    this.marks=marks;
    var rollNo=1234; // use var, const or let to make the property as private.
    this.getRollNo = function() { return rollNo}

    /*
    Here function without this keyword will be private in nature and we cannot call it
    from outside the function. Here rollNo is private variable and in order to access 
    the variable i am using a public function which will return me the value of rollNo.
    
    */

}

var stu1= new Studs("vikas",1234);
console.log(stu1.rollNo); // trying to access the private property. We will get undefined.
console.log(stu1.getRollNo()); // 1234. ....trying to access the private property using the public function.
