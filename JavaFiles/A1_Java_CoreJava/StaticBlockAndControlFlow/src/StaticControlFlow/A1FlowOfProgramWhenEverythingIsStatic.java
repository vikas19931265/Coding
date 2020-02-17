/*

This is the flow of program when everything is declared as static in a program
====================================================================================


1. Identification of static members from top to bottom .

2. Execution of static variable assignments and static blocks from top to bottom.

3. Execution of main method will happen at last after the execution of all the static blocks


o/p

    0
  First Static Block
  Second Static Block
    20
  Main Method

*/




package StaticControlFlow;


 class Base {
    
   static int i=10;
   
   static 
   {
       m1();
       System.out.println("First block");
   }
 
   public static void main(String[] args)
   {
       System.out.println("------Executing main-------");
       
       m1();
       
       System.out.println("main method block");
               
   }
   
   public static void m1()
   {
       System.out.println(" value is "+j);
               
   }
   
   static
   {
       System.out.println("Second static block");
   }
 
 
   static int j=20;
 
 
 }

/*

Steps of Execution.

1. Firstly JVM will read all the static blocks and provide a default value to
   all the variables which come in scene and will put them in RIWO state
   
        example static int i=10;
        
        For this a default value of 0 will be assigned to i , the same happens with int j=20 , where value of 0 is assigned to it.
        
Second step


1. After this second operation happens in which all the variables are assigned there actual values and blocks are executed.        

2. In the second operation int x=10 . x value which was earlier assigned a default value of 0 gets changed to 10.

3. In the second operation now blocks starts to execute.

4. static 
   {
       m1();
       System.out.println("First block");
   }
 
    This is the first block in the program , here m1 method is called which
    prints the value of j but second step has not yet reached to assignment of actual
    value of j hence its default value of 0 is printed. And this  value of 0 can only be printed
    indirectly that is when its called via method , when tried to print directly we will get forward
    reference error.

    o/p    0 , First block

5.  public static void m1()
   {
       System.out.println(" value is "+j);
               
   }

    This is method declaration block which gets executed only when it is called.


6. static
   {
       System.out.println("Second static block");
   }
 
    
    This block simply prints the text "Second static block"


7. int j=20;

    Now we reach to variable assignment statement and this causes the default value
    which was earlier  0 to be changed to 20.

8.  public static void main(String[] args)
   {
       System.out.println("------Executing main-------");
       
       m1();
       
       System.out.println("main method block");
               
   }
   
    Now at last main method is going to get executed. Execution of this main
    method will happen at last after all the static blocks execution is complete

    Inside the main method we are again calling m1 to print the value of j
    But now the value of j has been changed from default value to the actual value which is 20
    Hence 20 will be printed.

        0/p:  value is 20  main method block.
    
//-----------------------------------------------------------------------------*********-------------------------------------------------------------

*/ 