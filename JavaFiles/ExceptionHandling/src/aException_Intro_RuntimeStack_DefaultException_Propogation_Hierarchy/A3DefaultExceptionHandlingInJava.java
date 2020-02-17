/*
Default Exception Handling in JAVA.

1. Inside a method if any exception occurs , the method in which it is raised is responsible 
   to create exception object by including the following information.

    i) Name of the Exception.
    ii)Description of the Exception.
   iii) Location at which Exception Occurs( Stack Trace)

2. After creating the instance object method hand over the object to the JVM.

3. JVM will check whether the method contains any Exception Handling code or not.


4. If the method does not contain Exception handling code then JVM terminates that method
   abnormally and removes the corresponding entry from the stack.

5. Then JVM identifies caller method and checks whether caller method contains any handling code 
   or not.

6. If the caller method does not contain  handing code then JVM terminates the caller method also abnormally
   and removes the corresponding entry from the Stack.

7. This process will be continued until the main() method and if the main() method also does not
   contain any handling code then JVM terminates the main() method also abnormally and removes the
   corresponding entry from the stack.

8. Then JVM hand overs the responsibility of the Exception Handling to Default Exception Handler , which
   is the part of the JVM.

9. Default Exception handler prints exception information in the following format and terminates the program
   abnormally.


        Exception in thread "main": Name of Exception: Description
        Stack Trace.
        

[note]


    In a program if at least one method terminates abnormally then the program termination is
abnormal termination.

If all the methods in the program terminated normally then only program termination is normal
termination.


*/


// Case 1:
package aException_Intro_RuntimeStack_DefaultException_Propogation_Hierarchy;

 class Test1{
    
     public static void main(String[] args)
     {
         doStuff();
     }
 
     public static void doStuff()
     {
         doMoreStuff();
     }
 
     public static void doMoreStuff()
     {
            System.out.println(10/0);
     }
 
 }

/*
    
|                       |
|                       |
|                       |
|                       |
|_____doMoreStuff()_____|
|____ doStuff()_________|
|____main()_____________|



run:
Exception in thread "main" java.lang.ArithmeticException: / by zero
	at Session1.Test1.doMoreStuff(NewClass2.java:61)
	at Session1.Test1.doStuff(NewClass2.java:56)
	at Session1.Test1.main(NewClass2.java:51)
*/

//Case 2:

class Test2{
    
     public static void main(String[] args)
     {
         doStuff();
         System.out.println(10/0);
     }
 
     public static void doStuff()
     {
         doMoreStuff();
         System.out.println("hi");
     
     }
 
     public static void doMoreStuff()
     {
            System.out.println("Hello");
     }
 
 }


/*
run:
Hello
hi
Exception in thread "main" java.lang.ArithmeticException: / by zero
	at Session1.Test2.main(NewClass2.java:91)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)

*/

//Case 3:


 
class Test100{
    
     public static void main(String[] args)
     {
         doStuff();
     }
 
     public static void doStuff()
     {
         try
         {
         
         doMoreStuff();
     
         }
         
         catch(ArithmeticException e)
         {
             System.out.println("Division by zero");
         }
     
     System.out.println("Inside doStuff");
         
     }
 
     public static void doMoreStuff()
     {
            System.out.println(10/0);
     
     /*
     1. In this case exception is occurring in the doMoreStuff() method , but this
        method does not contain any handling code.
            
     2. Hence the caller of doMoreStuff() which is doStuff() is checked to see if it
        contains any handling code or not.
            
     3. The caller method contains the handling code and hence abnormal termination of the program
        is prevented.
          
     4. Here the exception object which was created in the doMoreStuff() is propagated
        to the caller method. If this exception object is not handled by the caller methods
        then the program will terminate abnormally.
            
            
     */
     
     
     
     }
 
 }

/*
run:
Division by zero
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//----------------------------------------------------------------------------REVISED----------------------------------------