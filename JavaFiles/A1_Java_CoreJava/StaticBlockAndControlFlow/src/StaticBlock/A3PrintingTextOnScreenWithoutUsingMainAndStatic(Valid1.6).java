/*
 
Printing text to screen using without main and static(valid-1.6)
===============================================================


Method  of printing text to console without main method and static block.

Without writing static block and main method it was possible until 1.6 to 
print a statement to the console but it is not  possible now.

[note]

    From 1.7 versions onwards main method is mandatary to start a program execution.
hence from 1.7 version onwards without writing main method it is impossible to print
some statements to the console.


*/
package StaticBlock;


class Test1
{
    
    static  int x=m1();  // created x variable to store the return data from m1 method
                        // Assignment of m1() method to x will happen during the second step in 
                        // which a variable has to be initialized with the actual value
    
    public static int m1() // m1 method implementation
    {
        
        System.out.println("Hello i m printing"); // As soon as control comes here this gets printed
        
        System.exit(0); //After this we are forcing the JVM not to continue further instead to shut down.
        
        return 10;
    }

public static void main(String[] args)
{
    // writing main method is mandatary from 1.7 onwards.
}

}
     


//-------------------------------------------------------------------------*********--------------------------------------------------------------