/* 
Constructors
===========================

Default constructor and paramter constructors
==================================================

The constructor method is a special method for creating and initializing an 
object created within a class. There can be only one special method with the 
name "constructor" in a class. 

if you do not specify a constructor method a default constructor is used.
*/

class Student1
{
    /* 
        If no constructor is present then default constructor is called like
        constructor() { }

        Note that if we have a constructor with one argument, but we are not supplying
        any arguments to constructor then the 1 argument constructor will be called.

        But its best to give parameters when calling the respective constructor.
    */
    constructor(name) // parameterised constructor.
    {
        this.name=name;
        var rollNo=1234; // we are keeping rollNo private
        this.getRollNo= function() { return rollNo;}
    
    }
    display() // this is prototype function.
    {
       return "i am a student";
    }

}

var s1= new Student1("vikas"); // not specifying constructor will call the default constructor
console.log(s1.display());  // i am a student
console.log(s1.name); //vikas
console.log(s1.getRollNo()); //1234 ...trying to access private variables