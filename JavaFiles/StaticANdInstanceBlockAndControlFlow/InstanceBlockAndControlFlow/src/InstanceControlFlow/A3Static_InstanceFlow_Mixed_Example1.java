
/*

Pgm on Static and instance flow mixed
=========================================


o/p

First Static Block
Second static block
First Instance Block
Second instance block
Constructor
main
First Instance Block
Second instance block
Constructor


*/




package InstanceControlFlow;


 class Testing {
    
     {
         System.out.println("First Instance Block");
     }
 
     static
     {
         System.out.println("First Static Block");
     }
 
     Testing()
     {
         System.out.println("Constructor");
     }
     
     
     public static void main(String[] args)
     {
         Testing t= new Testing();
         System.out.println("main");
         Testing t2= new Testing();
     }
     
     static
     {
         System.out.println("Second static block");
     }
            
     {
         System.out.println("Second instance block");
     }
 }


/*

Steps of Execution.

1. This is program in which we have both instance and static blocks.

2. Here since static control flow is a priority and to note is that it is  a onetime activity. static
   control flow will start first.


Step1:

1. Program looks for the static blocks and static variables. Static variables will be assigned
   with default values that is 0 and will be put in RIWO state.


Step 2


2.static
     {
         System.out.println("First Static Block");
     }
 
     This is the first static block encountered hence 

     o/p  First Static Block.


3. static
     {
         System.out.println("Second static block");
     }

     Next this block is encountered and o/p will be 

      o/p  First Static Block / Second static block.

4.  Now no more static blocks exists hence the control goes to the main method static block.

5.  In the main method static block we are creating object, hence instance control flow will start now.

6.  Now the control flows to the instance block.

    {
         System.out.println("First Instance Block");
     }

  o/p

    o/p  First Static Block / Second static block./First Instance Block


7. Next the control flows to 
    {
         System.out.println("Second instance block");
     }

     o/p   First Static Block / Second static block./First Instance Block/Second instance block


8. Next the control goes to the constructor at last.
 
Test()
     {
         System.out.println("Constructor");
     }
     

   o/p First Static Block / Second static block./First Instance Block/Second instance block/Constructor


9. Now finaly after constructors exectution control comes back to main.

     public static void main(String[] args)
     {
         Test t= new Test();
         System.out.println("main");
         Test t2= new Test();
     }
     
   o/p First Static Block / Second static block./First Instance Block/Second instance block/Constructor/main

   Another object is getting created t2 now, hence all steps of instance block execution will again repeat.

 o/p First Static Block / Second static block./First Instance Block/Second instance block/Constructor/main
     /First Instance Block/Second instance block/Constructor

*/

//--------------------------------------------------------------------------*******------------------------------------------