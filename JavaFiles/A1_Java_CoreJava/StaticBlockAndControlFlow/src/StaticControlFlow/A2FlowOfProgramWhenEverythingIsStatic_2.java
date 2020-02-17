
// Example on how static control flow will work when everything is static in a program.

package StaticControlFlow;


 class Testing {
    

 static int x=10; //  declared a static variable , first thing which will happen is JVM 
                // assign it a default value and in this case its 0


 static       // Now in second step execution starts

{
   m1(); // m1 method is called to print value of x, as x is assigned to 10 in second step , 10 is printed
   
   m2();// m2 method is called to print value of y, as y is yet to be assigned actual value, its value is still default and hence 0 will be printed( ONLY WHEN VALUE IS READ INDIRECTLY).
   
   System.out.println(x); // Value of x will be printed.
    

}


public static void m1()
{
    System.out.println(x);
}


static int j=20; // JVM assigns a default value to it as 0 which is the first step.


public static void m2()
{
    System.out.println(j);
}


public static void main(String[] args)
{
    // Writing main method is mandatary since java 1.7
}

}   

//-------------------------------------------------------------------------*********--------------------------------------------------------------
