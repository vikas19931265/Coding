
/*

Pgm on Static and instance flow mixed
=========================================

note
=======

order of execution of assignment of instance variables and execution of instance block
will be decided in the order of control flow that is which ever comes first will be given
the priority.


o/p


2
3
1
*/



package InstanceControlFlow;


 class initialization {
    

 private static String m1( String msg)
 {
     System.out.println(msg);
     
     return msg;
 }
 
 
 public initialization()
 {
     m=m1("1");
 }
 
 
 {
     m=m1("2");
 }
 
 
 String m=m1("3");
 
 
 
public static void main(String[] args)
{
    Object o= new initialization();
}
 
}

 
/*


Steps of Execution.

1. Programs looks for static blocks first.

    private static String m1( String msg)
    {
     System.out.println(msg);
     
     return msg;
    }

  This is one static block which is identified , but content can only be printed 
  when this method is called.


2. There is no other static block in program hence control goes to the main method.


3. In the main method we are creating an object hence , instance control flow will start.

public static void main(String[] args)
{
    Object o= new initialization();
}
 
}


4. Now instance blocks and variables will be identified and assigned values. Here String m= m1("1")
   is an instance variable hence it will be assigned with default value of null.

5. Now execution of instance blocks and variables assignment will start.
   

6. Next this is the instance block which is encountered.

     {
     m=m1("2");
 }
 
    hence m1 method will be called which takes string and return string and prints string

    hence o/p 2

7. Next 

     String m=m1("3"); is called , note earlier the default value of m was null but now in this step variables assignment will happen.

     o/p 2/3


8. Now at last constructor will be called.

 public initialization()
 {
     m=m1("1");
 }
    

    o/p 2/3/1

*/

//--------------------------------------------------------------------------*******------------------------------------------