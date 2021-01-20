/*
 
Instance Control Flow
=========================================
 
1. Whenever we are executing a java class , first static control flow will be executed.

2. In the static control flow if we are creating an object the following sequence of events will be
   executed as a part of instance control flow.

    a) Identification of instance members from top to bottom.

    b) Execution of instance variables assignments and instance blocks from top to bottom.

    c) Execution of Constructor.


o/p

0
First Instance Block
Second instance block
Constructor
main



[note]

  1.If we dont create Object then output will be only "main" because instance control flow
    will not happen.

  2. ****static control flow is one time activity which will be performed at the time of class loading.
    
  3. But instance control flow is not one time activity and it will be performed for every object creation.

  4. Object creation is the most costly operation. If there is no specific requirement then it is not 
     recommended to create object.


*/
package InstanceControlFlow;


 class Test
{
    int i=10; //instance variable 1
    
    {
        m1();
        
        System.out.println("First Instance Block");
    }

 
    Test()
    {
        System.out.println("Constructor");
    }
 
 
    public static void main(String[] args)
    {
        Test t= new Test(); //Instance control flow will start whenever we are creating an object.
        
        System.out.println("main");
    }
 
    public void m1()
    {
        System.out.println(j);
    }
 
    {
        System.out.println("Second instance block");
    }
 
    int j=20; // instance variable 2
 }


/*

Steps of Execution.

    1. Firstly the program looks for static variables and static blocks. Since there is no
       static block hence the control goes to the main method which is a static block executed at last when no static block found.

    2. Now in the main method we are creating an object. Hence instance control flow will start from here.

Step 1(Assignment of default value and Identification)

    3. int i=10 

    This is part of the first step which is responsible for identification of instance variables and methods.
    Hence the default value of i which is 0 is assigned to it.

    The same thing happens with int j=20, where default value of j which is 0 is assigned to it.


Step 2:(Execution)

    1. int i=10 , now the actual value of i which is 10 is assigned to i. i moves to now Read/Write state.

    2.  {
        m1();
        System.out.println("First Instance Block");
        }

        Now in this instance block we are calling the m1 method . m1 method is responsible for printing
        the value of j. Since j value is still not assigned a value hence default value of j which is 0 gets printed

        o/p   0 / First Instance Block

    3.  {
        System.out.println("Second instance block");
        }


    This instance block will print the statement as written in the code

    o/p  0/ First Instance Block/ Second Instance Block.


    4. int j=20; , now here the actual value of j which is 20 is assigned to it.



Step3: ( Execution of Constructors)

1.  Test()
    {
        System.out.println("Constructor");
    }

    Now the constructor content is printed at last after execution of instance blocks.


    o/p  0/ First Instance Block/ Second Instance Block / Constructor.
    

2. Now instance blocks execution completes and control goes back to main

     public static void main(String[] args)
    {
        Test t= new Test();
        
        System.out.println("main");
    }


    Now last System.out.println line will get printed.

    o/p

    0/ First Instance Block/ Second Instance Block / Constructor/ main
  


*/

//--------------------------------------------------------------------------*******------------------------------------------