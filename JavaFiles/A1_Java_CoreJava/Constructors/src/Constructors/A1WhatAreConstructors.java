/*

What is a Constructor
=============================

1. Once we create an Object, compulsory we should perform initialization then only
   the Object is in the position to respond properly.

2. Whenever we are creating an object, some piece of the code will be executing automatically
   to perform initialization of the object. This piece of the code is nothing but constructor.

3. Hence the main purpose of the constructor is to perform initialization of the object.

[note]

    The main purpose of the constructor is to perform initialization of the object.
    but not to create objects.

[Role Of Constructor]
==========================

1. Role of constructor is to initialize the contents of object, but not to create the Object.
   Creation of the object is done using the 'new' keyword.



*/
package Constructors;


 class Student
{
    
     String name; // created instance variables.
     int rollno;
     
     Student( String name, int rollno) // using constructor to initialize the object.
     {
         this.name=name;
         this.rollno=rollno;
     }
 
     public static void main( String[] args)
     {
         Student s1= new Student("durga",101);
         Student s2= new Student("ravi", 102);
    
         System.out.println(s1.name+ s1.rollno);
         
     
     }
 
}

/*
run:
durga101
BUILD SUCCESSFUL (total time: 0 seconds)

*/
//--------------------------------------------------------------------------*********--------------------------------------------------------------------------