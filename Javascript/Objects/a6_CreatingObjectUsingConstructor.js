/* 
Creating object instance using Constructor
===================================================

Object instance are created with constructor, which are basically special function that 
prepare new instance of an object for use.

*/

// Creating object using constructor

var Student= function (name, rollNo) // this is a special constructor function.
{
    this.name=name;
    this.rollNo=rollNo
}

/* 
sample concept in ES2015

class Student {
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
}
*/

var student1= new Student("vikas",1234);
console.log("name " + student1.name); // vikas
console.log("rollNo" + student1.rollNo); // 1234

var student2 = new Student("ravi",2456);
console.log("name "+ student2.name); // ravi
console.log("name"+ student2.rollNo); // 2456
