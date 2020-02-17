/*

Unreachable Statements
--------------------------------


Which of the following is valid cases???


very important
------------------

EVERY FINAL VARIABLE WILL BE REPLACED WITH THE VALUE AT THE COMPILE TIME ONLY.

*/
	

class Cases
{
    
    public static  void Case1()
    {
        while(true)
        {
            System.out.println("Hello");
        }
    
         System.out.println("hai"); //CE unreachable statement.
     }


/*
    Case 1:
    while(true){System.out.println("Hello")}
    
    This statement will keep on executing creating an infinite loop
    
    Hence the line below that is of System.out.println("hai") will never
    
    get the chance to execute hence we will get the compile time error
    
    CE: unreachable statement
    
*/

//---------------------------------------------------------------------------------------------
    
    
    public static void Case2()
    {
        
            while(false)
            { //  curly brace itself is unreachable CE: unreachable statement

                System.out.println("Hello"); 
            }

            System.out.println("hi");


        }

            /*
                Case 2:

                while(false) means that while body will never get executed because this
                statement is always returning false

                hence in while(false)
                        {
                            System.out.println("Hello");
                        }

                the body of while become unreachable as condition is never true to execute the body.
            */


    
//---------------------------------------------------------------------------------------------------    
    
    
    public static void Case3()
    {
        
        int a =10, b=20;
        
        while(a<b)
        {
            System.out.println("Hello");
        }

        System.out.println("hi"); 
        
            /* hello with infinite loop is the output at run time. If we see closely
              the line System.out.println("hi") then this line must have been unreachable 
              at compile time but the evaluation of (a<b) is not done by the compiler instead
              by the JVM. Compiler just checks the type of variables and does not throw the error.
              At the run time we are going to get the infinite loop. */
                                 
                                 
                                 

    }
    
/*
    
    Case 3:
    
    while(a<b)
        
        for this line compiler does not know whether the result is true or false.
    It just checks whether a and b are valid types or not. It does have any information
    about the result.
    
    Since the value of a and b can change any time before testing hence it is the job
    of JVM to execute.
    
    But in previous examples compiler had the information about whether the argument result
    is true or false ..(while(true))
    
    
    Now at the run time a< b(10<15) results in true and creates an infinite loop to print
    "hello" and the "hi" line below it never gets the chance to execute.
    
    
     IF VARIABLE IS A NORMAL VARIABLE, THEN COMPILER NEVER CONSIDERS ITS VALUE AS IT CAN
     CHANGE ANY TIME. THIS WORK IS TAKEN CARE BY THE JVM
    
    o/p
    
    Hello
    Hello
      .
      . ----> infinite loop is created here.
      .  
  */

//---------------------------------------------------------------------------------------------------



    public static void  case4()
    {
        int a =10, b=20;
        
        while(a>b)
        {
            System.out.println("Hello");
        }
        
        System.out.println("Hi"); //Hi
    }

    
  /*
    
    Case4: Here this case is similar to that of Case3
    
    In this case a>b(10>20) result becomes false hence the lines inside 
    the while loop are not considered and the control goes out of while 
    loop. This does not happen in the case of while(false) where the compiler
    has the information about the loop returning false. Compiler reads the 
    next line after while(false) and declare it as unreachable. 
    
    Compiler gives us unreachable statement because it reads the syntax line
    by line from top to bottom of the program but the JVM executes the program.
    When JVM sees that the while condition returns false it immediately skips
    remaining lines in the loop and simply returns Hi.
    
    
    o/p
    
    Hi  */  
    

//---------------------------------------------------------------------------------------------------
    
    public static void case5()
    {
        final int a =10,b=20;
        
        while(a<b)
        {
            System.out.println("Hello");
        }
    
        System.out.println("Hai"); //CE: unreacahble statement
    
    }
  
    
    
    /*
    Here a and b are final variables hence there values will never change. For the values
    which will never get changed those evaluations can be performed by the compiler. 
    
    So while(a<b) here a and b are final variable hence compiler evaluates it and result comes
    true.
    
    Now the compiler can never go the line below while loop as the loop becomes infinite.
    compiler is expecting a "break" line as the syntax now in order to reach below while loop
    
    since the break is not found hence the compiler throws unreachable statement error 
    for line below while loop. */
    

//---------------------------------------------------------------------------------------------------    


    public static  void case6()
    {
        final int a =10, b=20;
        
        while(a>b)
        {  // unreachable statement
            System.out.println("Hello");
        }
    
        System.out.println("Hi"); 
    
    
    }
    
    /*
    This is similar to case5:
    
    Here the variables are again final and hence compiler considers these variables
    for the evaluation.
    
    Now (a>b) compiler get the result as false and declares everything written
    inside the loop as unreachable statement.
    
    If these variable would have been normal variables then we would have got
    the result as true because (a>b) would have returned false to the JVM
    hence JVM would have skipped part of code inside the loop and would have 
    gone outside the while loop
    
    
    */
    
    
    public static void main(String[] args)
    {
        
    }
         

}
