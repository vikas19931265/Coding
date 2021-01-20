/*

for---loop unreachibility
===============================================================================

*/


class forLoopunreach
{
    
    public void case1()
    {
        
        for(int i=0; true ; i++)
        {
            
            System.out.println("Hello");
        }
        
    
        System.out.println("Hi");// unreachable statement
    
    
    }
    
    /*
    
    Here condition is true, and this true is like constant remaining fixed. This
    is evaluated by the compiler.
    
    Now the for loop always evaluates to true , hence it will create infinite loop
    therefore the control will never come out of for loop and all the code written
    below the for loop will become unreachable.
    
    
    
    
    */
    
//-------------------------------------------------------
    
    
    public void case2()
    {
        
        for(int i=0; false ;i++)
        {// unreachable statement
            
            System.out.println("hello");
        }
    
        System.out.println("Hi");
    
    
    }

    /*
        for loop test condition evaluation done by the compiler and it returns
        false hence anything written after for loop first line  that is for loop body will become
        unreachable for the compiler
   
   */
    
    
    
//---------------------------------------------------------
    
    
    
    public void case3()
    {
        
        for(int i =0; ; i++)
        {
            
            System.out.println("Hello");
        }
    
    
        System.out.println("Hi");// unreachable statement
    
    }
    

/*
   Here the conditional/test part is blank hence it will be replaced with true.
   Now the for loop becomes infinite and hence for the compiler all the code
   written after the for loop becomes unreachable.
    
    
    
    
    
 */



//-------------------------------------------------------------------------
    
    
    public void case4()
    {
        int a =10,b=20;
        
        for(int i=0; a<b;i++)
        {
            System.out.println("Hello");
        }
        
    
    
        System.out.println("Hi");
    }

/*
    
    Here conditional expression variables are normal variables hence there
    evaluation will be done by the JVM and JVM is not responsible for throwing
    code not reachable error.
    
    
    Here we will get infinite loop.
    
    Hello
    Hello
     .
     .--------->infinite loop
     .   
    
 */

//-----------------------------------------------------------------

    public void case5()
{
    int a =10, b=20;
    
    for(int i=0 ;a>b;i++)
    {
        System.out.println("Hello");
    }


    System.out.println("Hi");

}

/*
    
    Here also a and b are normal variables hence we will not get code not reachable
    error
    
    a>b that is 10>20 always returns false
    
    Hence output is
    
    Hi.
    
    */




//----------------------------------------------------------------
    
   public void case6()
   {
       
       final int a=10, b=20;
       
       for(int i=0; a<b;i++)
       {
           System.out.println("Hello");
       }
   
       System.out.println("Hi");// unreachable statement
   
   
   }

/*
   a and b are final variables hence there conditional expression evaluation
   will be done by the compiler.
   
   a<b will give true 
   
   and hence for loop creates infinite loop and code below for loop becomes 
   unreachable code.
   
  */
   
   
   
   
//-------------------------------------------------------------
   
   public void case7()
   {
       
       final int a=10, b=20;
       
       for(int i=0;a>b;i++)
       {  // unreachable statement
           System.out.println("Hello");
       }
   
       System.out.println("Hi");
   
   }
   
 /*
   Here also a and b are final hence there conditional expression evaluation 
   will be done at the compile time only.
   
   a>b  that is 10>20 will return false
   
   therefor body of the for loop becomes unreachable for the compiler.
   
  */  
   
   

}
