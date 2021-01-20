// Local Variable Initialization ( Command Prompt runtime)/applicable modifier

/*

 1. A local variable before usage must be initialized.
 2. Scope of local variable is dangerous as sometimes it may be initialized and sometimes it may not.
 3. Hence it is always advisable and is a good programming practice to initialize the local variables before using it.


by gurga.

  1. It is not recommended to perform initialization for local variables inside logical blocks.
  2. Because there is no guarantee for the execution of these blocks always at run time.

It is highly recommended to perform initialization  for local variables at the time of the declaration at
least with default values.


**The only applicable modifier for local variables is final, if we try to apply any other modifier
then we will get compile time error.

*/
package cLocalVariables;


class Test7
{
    
    public static void main( String[] args)
    {
        int x=0;   // initilise the local var, Good practice to always give local variable a default value
        
        if(args.length>0) // if some parameters are passed during run time then x is printed and if not then 0 , hence var is always initialized.
        {
            x=10;
        }
        
        
        System.out.println(x);
    }

}

/*
run:
0
BUILD SUCCESSFUL (total time: 0 seconds)

*/