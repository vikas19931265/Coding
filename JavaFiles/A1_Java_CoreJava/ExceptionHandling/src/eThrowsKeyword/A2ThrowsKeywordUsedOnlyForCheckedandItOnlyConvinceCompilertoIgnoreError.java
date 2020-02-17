/*


1. throws keyword is required only for the checked exceptions and usage of throws keyword
   for unchecked exceptions there is no use or has impact.

2. throws keyword is required only to convince the compiler and usage of throws keyword
   does not prevent abnormal termination of the program.


*/
package eThrowsKeyword;


 class Test31 {
    
     public static void main(String[] args)  throws InterruptedException // caller of main is jvm now so jvm will handle this 
                                                                         // but jvm does not have handling code hence if exception occurs
                                                                         // then program will terminate abnormally.
     {
         
         doStuff();
         
    /*
         
    If there was no throws keyword then again we will get the compile time error
    CE: unreported exception java.lang.Interrupted must be caught
                                    or decalared to be thrown.      
   
    */
     
     
     }
 
 
      public static void doStuff()  throws InterruptedException 
      {
         /*
          doMoreStuff();
      
          We will get compile time error if the exception given by doMoreStuff is not handled.
          We can handle this again by using try catch or declaring exception with throws keyword 
          to allow the caller of this method which is main() to handle this.
          
            CE: unreported exception java.lang.Interrupted must be caught
                                    or decalared to be thrown.
          
          */
          
          
          doMoreStuff(); // this checking work will go to the main() now as main is the caller here.
      
      }
 
          

       public static void doMoreStuff() throws InterruptedException
       {
           /*
           Thread.sleep(10000); CE: unreported exception java.lang.Interrupted must be caught
                                    or decalared to be thrown.
           
           1. 2 options to handle this, either go for try catch or
          
           2. Delegate the work of exception handling to the caller method that is doStuff() method
           
           */
      
       
           Thread.sleep(1000); // responsiblity of handling exception can be given to caller using throws keyword.
       
       }

 } 

