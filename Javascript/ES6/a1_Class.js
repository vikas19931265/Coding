/* 
Class
=======
JavaScript classes, introduced in ECMAScript 2015 or ES 6, 
Classes are in fact "special functions". 

There are two way to define class in JavaScript using class 
keyword:- 
• Class Declaration 
• Class Expression  : Class expressions can be named or unnamed.

*/

// class declaration


class Student
{
    constructor(name)
    {
        this.name=name;
        this.getMarks= function() { return this.name;}
    }
  
    // this is prototype member...please note that we dont have to write function here.
    display() {
        return "i am a student";
    }

}

var s1= new Student("vikas");
console.log(s1.getMarks()); // vikas
console.log(s1.display()); // I am a student.

// Class expression

var Students= class{
     constructor(name)
     {
         this.name=name;
     }

}