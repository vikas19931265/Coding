/*

Printing text using instance block and without using main
==========================================================

Another way of printing text to console without static and main method. ( applicable only till 1.6) */


package StaticBlock;

 class Test31 {
    
 static Test31 t= new Test31(); // As soon as a new object is created instance block is automatically called.

{
    System.out.println("I can print");
    
}


public static void main(String[] args)
{
    //Writing main method is mandatary.
}

}

/*

Steps of execution
======================

1. static members and blocks are identified. static Test31 t is the static reference
   which is identified and assigned a default value of null.
   
2. After the identification of static variable we need to execute so ,t is assigned
   with an object that is new Test31().
   
3. As soon as we are going to create an object instance control flow is going to 
   start.
   
4. Once instance control flow starts instance block will be executed which prints
   "I can print".



/*
run:
I can print
BUILD SUCCESSFUL (total time: 0 seconds)

*/


//-------------------------------------------------------------------------*********--------------------------------------------------------------
