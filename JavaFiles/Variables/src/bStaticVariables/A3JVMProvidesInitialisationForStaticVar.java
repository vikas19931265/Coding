//Initialization of Static var given by JVM

/*

Like as in case of instance Variables, JVM provides default values for static variables as well.


For static variables, JVM will provide default values and we are not required to perform
Initialization  explicitly.


static variables also known as class level variables or fields.

*/

package bStaticVariables;

 class Test
 {
     
 static int x;
 static double d;
 static String s; // static variables as in case of instance variables are initialized by default.
 
 public static void main( String args[])
 {
    
     Test t= new Test();
     System.out.println(Test.x);
     System.out.println(Test.d);
     System.out.println(Test.s);
     
 }
 
 
 }
