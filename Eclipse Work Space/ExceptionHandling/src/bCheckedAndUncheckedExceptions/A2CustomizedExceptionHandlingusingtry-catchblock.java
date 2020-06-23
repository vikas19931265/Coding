/*

Customized exception handling by using try - catch block.

without try catch(abnormal termination)

*/

//Case 1: Not using any try-catch block to handle the exception

package bCheckedAndUncheckedExceptions;


class Test {
    

public static void main(String[] args)
{
    
    System.out.println("start");
    
    System.out.println(10/0);
    
    System.out.println("end");
    
}


}

/*

run:
start
Exception in thread "main" java.lang.ArithmeticException: / by zero
	at Sesssion2.Test.main(NewClass1.java:21)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)


This is abnormal termination of the program.

*/
//---------------------------------------------------------------------------------------------------------

/* with try catch(normal termination)

1. It is highly recommended to handle the exceptions. The code which may raise an exception 
   is called risky code and we have to define that code inside the try block and corresponding
   handling code must be defined in the catch block.



try
{
    risky code

}

catch(Exception e)
{
    handling code

}



*/

// Case 2: Using try-catch block to handle the exception

class Test1 {
	public static void main(String[] args) {
		
		System.out.println("Statement1");

		try {
		
			System.out.println(10 / 0);

		}

		catch (ArithmeticException e) {

			System.out.println(10 / 2);

		}

		System.out.println("statement3");

	}

}

/*
run:
Statement1
5
statement3
BUILD SUCCESSFUL (total time: 0 seconds)

This is normal termination or graceful termination.


*/

//-------------------------------------------------------------------------REVISED-------------------------------------------------