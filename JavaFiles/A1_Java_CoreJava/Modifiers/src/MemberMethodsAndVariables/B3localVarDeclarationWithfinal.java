/* final local variables.
==================================


1. Sometimes for temporary requirements of the programmer we have to declare variables
   inside a method or block or constructor. Such types of variables are called as 
   local variables or temporary variables or stack variables or automatic variables.


2. For local variables JVM will not provide any default values compulsory we should perform 
   initialization explicitly before using the local variable that is if we are not using then it is not
   required to perform initialization for the local variables.

    class Test
        {
            public static void main(String[] args)
            {
                int x;
                    System.out.println("hello); // output is hello as x is not initialized but has not been used also
            }
        }    


        class Test
        {
            public static void main(String[] args)
            {
                int x;
                    System.out.println(x); // ERROR :Variable x might not have been initialized as we are using x without initializing it.

            }
        }    




3. Even though local variable is final , only if we are using then we have  to perform initialization that is
   if we are not using then it is not required to perform initialization even though it is final.



4. **The only applicable modifier for local variable is final , by mistake if we are trying to apply any other
   modifier then we will get compile time error..


5. **If we are not declaring any modifier then by default it is default ** but this rule is applicable 
   only for instance and static variables but not for local variables.

           
*/



package MemberMethodsAndVariables;

 class Test11 {
    
     
     public static void main(String[] args)
     {
         final int x; // even though local variable is final , if we are  using then only initialization is needed.
         
         System.out.println("hello"); //o/p hello
     
         //private final int z; final is the only applicable modifier with local variable rest all are invalid.
                                //Compile Errror:Illegal start of the expression.
     }
 
 
 }


/*

Formal Parameters of method
======================================

Formal parameters of method simply acts as local variables of that method hence formal
parameter can be declared as final.


If formal parameter is declared as final then within the method we cannot perform
reassignment.

*/

/*
class Testing1
{
    public static void main(String[] args)
    {
        m1(10,20);// actual parameter.
    }

    
    public static void m1(final int x, int y) // formal parameter can be declared as final
    {
        x=100; // changing the value of final formal parameter is illegal
        y=200;
        
        System.out.println(x+y);
    }

}

    */
  
//---------------------------------------------------------------------------------*******************--------------------------------------