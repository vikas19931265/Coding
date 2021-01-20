/*

From method local inner class, we cannot access local variables of the method in which we 
declared inner class.

If the local variable declared as final then we can access it.

CE: local variable x is accessed from within inner class; needs to be declared as final


FINAL VARIABLE VALUES ARE REPLACED AT COMPILE TIME ONLY BUT NON FINAL VARIABLES AT RUN TIME.


Comment

    If we declare as final then we will not get any compile time error.

But i think we can access it in java 1.8

starting in Java SE 8, a local class can access local variables and parameters of 
the enclosing block that are final or effectively final. A variable or parameter 
whose value is never changed after it is initialized is effectively final." 
So, if you try to change the value "x" and call it you will have the same error.
*/

class Testing2
{
    
    
    public void m1()
    {
        int x =80; // this local variable can be accessed in method inner class only if
                  // if is declared as final or its value is never reassigned that is it is
                  // effectively final.
        
        class Inner7
        {
           
            
            public void m2()
            {
                //x=90; Trying to change the value of x. If we try to change this value then we will
                        // get the same compile time error.
                
                System.out.println(x);
                /*
                
                We can access the variable x=80, but note that we did not write final. Even without
                writing final , also this value is effectively final as we are never changing it
                From java 1.8 onwards if we are trying to change the value once it is declared then
                we will get the same error as durga sir told.
                
                Compile time error: error: local variables referenced from an inner class must be final or effectively final
                x=90;
                */
            }
                    
        }
    
        Inner7 i = new Inner7();
        
        i.m2();
    
    
    }

    public static void main(String[] args)
    {

        Testing2 t = new Testing2();
        
        t.m1();

    }
    
}

/*
run:
10
BUILD SUCCESSFUL (total time: 0 seconds)

*/
