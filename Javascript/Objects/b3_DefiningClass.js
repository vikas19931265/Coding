/* 
Defining a class in javascript
====================================

We define class in JavaScripts using custom constructor.

*/

// It is a special constructor which we will use to create objects..

function Stud(name, marks, rollNo)
{
    this.name=name;
    this.marks=marks;
    this.rollNo=rollNo;
    this.totalMarks= function(mar) { return ( this.marks+ mar)}
}

let student1= new Stud("vikas", 100, 12);
console.log(student1.name); // vikas 
console.log(student1.totalMarks(100));// 200

let student2= new Stud("ravi", 50, 11);
console.log(student2.name); // ravi
console.log(student2.totalMarks(50)); //100