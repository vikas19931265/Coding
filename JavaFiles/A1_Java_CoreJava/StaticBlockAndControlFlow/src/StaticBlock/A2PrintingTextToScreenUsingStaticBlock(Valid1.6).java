
package StaticBlock;

/*

Printing text to screen using static block(valid-1.6)
========================================================

1. Without writing main method is it possible to print some statements to the console.???

Answer: Yes it was possible in 1.6 but no more possible after 1.6.

        Below is the  example  where a static block would have printed text on console
        till 1.6 version but no more possible now.


*/


class MainMethodNot
{
    static
    {
        System.out.println("Hello World");
        System.exit(0);  // Shut down the JVM instantly after printing text to screen.

    }


    public static void main(String[] args)
    {
        //Without writing main method it is not possible after 1.6 to run the program.
    }


}    

//-------------------------------------------------------------------------*********--------------------------------------------------------------