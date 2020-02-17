
/*

Instance control flow with respect to inheritance
====================================================

Whenever we are creating a child Object, following sequence of events will be performed automatically

1.Identification of instance members from parent to child class.

2.Execution of instance variables assignments and  instance blocks only in parent class.

3.Execution of parent constructor.

4.Execution of instance variables assignments and instance blocks in child class.

5.Execution of child constructor.



[note]

    When we will execute only parent class, child class will not get executed.
*/


package InstanceControlFlow;


 class Parent
{
    
     int i=10;
     
     {
         m1();
         
         System.out.println("Parent Instance Block");
     }
 
     Parent()
     {
         System.out.println("Parent Constructor");
     }
     
     public static void main(String[] args)
     {
         Parent p= new Parent();
         System.out.println("Parent main");
     }
 
     public void m1()
     {
         System.out.println(j);
     }
 
     int j=20;
 }


 class Child extends Parent
{
    int x=100;
    
    {
        m2();
        
        System.out.println("Child First instance block");
    }

    Child()
    {
        System.out.println("Child Constructor");
    }

    public static void main(String[] args)
    {
        Child c= new Child(); 
        
        /*
        When we are calling child object, parent class loading
        will start. Since child class extends from the parent class hence
        the control will go to the parent class and then identify the
        instance variables then assign and then execute the constructor.
        Once the execution of the constructor is over the control will again
        return to the child class.
        
        
        */
        System.out.println("Child main");
    }

    public void m2()
    {
        System.out.println(y);
    }

    
    {
        System.out.println("Child Second Intance Block");
    }

    int y=200;

}

/*

Steps of Execution.

1. JVM first looks for static blocks and variables , but since there is no static blocks and variables
   in the program the control goes to the main method.

2. In the main method object is created hence instance control flow starts from here.


Step 1:(Identification of instance members from parent to child class.)

 1. int i=10, int j=20 , int x=100, int y=200 

    These variables are identified in the first step and are assigned with the default
    value which is 0.All variables are in RIWO state.




Step 2(Execution of instance variables assignments and  instance blocks only in parent class.)

1.  int i=10;

    10 is assigned to the variable i.

2.   {
         m1();
         
         System.out.println("Parent Instance Block");
     }
 
   Here we are calling m1 which is printing value of j, since value of j is in RIWO state
   its default value ( only indirectly through method) is printed.

    o/p   0/ Parent Instance Block.

3.   int j=20;

    20 is assigned to j.


Step 3( Execution of parent constructor)
    
 Parent()
     {
         System.out.println("Parent Constructor");
     }

    o/p   0/ Parent Instance Block/Parent Constructor.


Step 4: Control goes to the derived class.

1. int x=100;

    x is assigned value of 100.

2. {
        m2();
        
        System.out.println("Child First instance block");
    }

    m2() is called to print value of j, but since j is in RIWO state its default
    value which is 0 gets printed.

    o/p   0/ Parent Instance Block/Parent Constructor/0/Child First Instance Block.


3.  {
        System.out.println("Child Second Instance Block");
    }
    
    Next this block gets executed.

    0/ Parent Instance Block/Parent Constructor/0/Child First Instance Block/Child Second Instance block


4. int y=200;

    y is assiged value of 200 and y changes to Read/Write state.



Step 5: Constructor execution starts.

    Child()
    {
        System.out.println("Child Constructor");
    }

  0/ Parent Instance Block/Parent Constructor/0/Child First Instance Block/Child Second Instance block/Child Constructor



Step6: Main Method Execution

    Since we are keeping our main class in child hence main method of child gets executed.

      public static void main(String[] args)
    {
        Child c= new Child();
        System.out.println("Child main");
    }

   0/ Parent Instance Block/Parent Constructor/0/Child First Instance Block/Child Second Instance block/Child Constructor/Child main
    


*/

/*
0
Parent Instance Block
Parent Constructor
0
Child First instance block
Child Second Intance Block
Child Constructor
Child ma
*/
//--------------------------------------------------------------------------*******------------------------------------------