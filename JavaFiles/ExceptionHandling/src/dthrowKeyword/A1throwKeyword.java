/*

throw
---------------------------------------------


   O                                        O
   |                                        |
   |                                        |    
  programmer------> throw exception object--> JVM catches it.




1. Sometimes we can create exception object explicitly. We can handover to the JVM manually. For this we 
   have to use throw keyword.

        throw new ArithmeticException("/ by zero");
                    

2. The main objective of the throw keyword is to handover our created exception object to the JVM manually.


3. The result of the below 2 programs is exactly same.




*/

package dthrowKeyword;



class Test {
    

    public static void main(String[] args)
    {
        
        System.out.println(10/0);
    }


}

// Exception in thread main  java.lang.ArithmeticException division by zero at Test.main

/*

In this case main method throws the exception object and JVM catches it. JVM comes back 
to see if there is some handling code. Since there is no handling code hence this exception 
object is passed to default exception handler which terminates the program abnormally.

 
In this case main method is responsible to create exception object and hand over it to the JVM.

*/


class Test1
{
    
    
    public static void main(String[] args)
    {
        
          throw new ArithmeticException("/ by zero explicitly"); 
    
    /*
          
      new ArithmeticException("/ by zero"); // creation of Arithmetic exception object explicitly
          
      throw--> Handover the created  exception object to the jvm manually    
          
     
      In this programmer creates exception object explicitly and hand over to the JVM manually     
          
     */
    
   // Exception in thread main  java.lang.ArithmeticException division by zero explicitly at Test.main 
    
    }
}