
/*

Constructor with return type(treated as method)
=================================================

1. It is possible to declare a method with same name as class, but that is not a constructor.

2. Instead its a method.

*/


package Constructors;

class Tests {
    
 static int count=0;
 
 {
     count=count+1;  // instance block will be called as soon as a new object is created. And this will execute before execution of the constructor.
 }
 
 void Tests()  // This is a method but not a constructor.
 {
     System.out.println("I am a method not constructor");

 /*
     
 count++// this could have also been done but in that case we have to do in all types of constructors hence code readability will be down.    
           so better we go with creating the code in the instance block 
 */
 
 
 }
 
 Tests() // Constructor.
 {
     
 }
 
 
 Tests(double d)//Constructor.
 {
     
 }
 

 public static void main(String[] args)
 {
     
     Tests t = new Tests();
     t.Tests(); // Calling a method whose name is same as the class name.
                // Here Tests() is acting as a method , not as a constructor.
     
 }
 
 }

//--------------------------------------------------------------------------*********--------------------------------------------------------------------------