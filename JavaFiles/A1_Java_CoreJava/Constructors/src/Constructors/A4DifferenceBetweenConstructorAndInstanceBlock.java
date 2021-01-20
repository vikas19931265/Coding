
/*

Difference between constructor and instance block
====================================================


1. The main purpose of constructor is to  perform initialization of an object.

2. But other than initialization if we want to perform any activity for every object creation
   then we should go for instance blocks [ like updating one entry in the database for every object creation]. 
   or incrementing count value for every object creation etc.

3. Both constructors and instance blocks have their own different purposes and replacing one concept
   with another concept may not work always.

4. Both constructor and instance blocks will be executed for every object creation, but
   but instance block will execute first followed by constructor next.


*/


// Demo program to print number of Objects created for a class.

package Constructors;

 class Test {
    
 static int count=0;
 
 {
     count=count+1;  // instance block will be called as soon as a new object is created. And this will execute before execution of the constructor.
 }
 
 Test()
 {
     
 }
 
 Test(int i)
 {
     
 }
 
 
 Test(double d)
 {
     
 }
 
 
 public static void main(String[] args)
 {
     Test t1= new Test(); // instance block will be called followed by a call to the constructor.
     
     Test t2= new Test(10);
     
     Test t3= new Test(10.5);
 
     System.out.println("The number of Objects Created is "+ count);
 
 }
 
 
 }

/*
run:
The number of Objects Created is 3
BUILD SUCCESSFUL (total time: 0 seconds)

*/
//--------------------------------------------------------------------------*********--------------------------------------------------------------------------