/*Interface Variable Conflicts*/

  /*
Two interfaces can contain a variable with the same name and they may conflict with each other.

We can solve the above problem by using interface names.

Interface variables are public static final by default.

We can access these variables which are static in nature by using the interface name dot variable name ( example Interf.a)*/




package interfaces;

interface Left9
{
    int x=777;  // this variable is by default public static final
}

interface Right9
{
    int x=888;
}

class Test8 implements Left9, Right9
{
    public static void main(String[] args)
    {
        
       /* System.out.println(x); 

              This will give error "reference to variable x is ambiguous as x variable 
              is declared in both the interfaces Left9 and Right9.

             We are trying to implement both the interfaces in the same class Test8 here hence Test8 has access
             to x from both the classes. If we will use this variable directly inside non local area then JVM 
             will not be able to identify that for which class this variable belongs to and we will get the ambiguity error.

             Since the variables are static in nature to fix this we can use the interface name to access it.  */
                    
            System.out.println(Right9.x); /*
             x variable is static and can be accessed with the Interface name. */
    }
}
/*o/p

compile-single:
run-single:
888
BUILD SUCCESSFUL (total time: 1 second)

*/

//---------------------------------------------------------------------------------*******************--------------------------------------//
