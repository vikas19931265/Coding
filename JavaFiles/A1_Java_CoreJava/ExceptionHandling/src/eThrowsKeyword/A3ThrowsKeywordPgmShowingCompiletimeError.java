/*

In the below program if we remove, at least one throw statement then code will not compile.

*/


package eThrowsKeyword;




// case 1:

 class Test32 {
    
     public static void main(String[] args)  throws InterruptedException 
         
     {   
      
         doStuff();
         
     }
     
     
 
 
      public static void doStuff()  
      {
         
          
          
          doMoreStuff(); 
      
      }
 
          

       public static void doMoreStuff() 
       {
           
      /*
           case 1: no throws for exception handling here but present in main.
           Here compiler will still throw the error, as the task of exception handling
           is not given to the main.
           
           CE: unreported exception java.lang.Interrupted must be caught
                                    or declared to be thrown.  */
    
       
           Thread.sleep(1000);   // Error-CE: unreported exception java.lang.Interrupted must be caught
                                 //   or declared to be thrown.
       }

 } 

//-----------------------------------------------------------------------------------------------------------------------

// case 2:

 class Test33{
    
     public static void main(String[] args)  throws InterruptedException 
         
     {   
      
         doStuff();
         
     }
     
     
 
 
      public static void doStuff()  
      {
         
            
          
          doMoreStuff(); // Error->unreported exception java.lang.Interrupted must be caught
                         // or decalared to be thrown.
      
    
        
           /*case 2: no throws for exception handling here but present in main as well as for doMoreStuff()
          
           Here compile will still throw the error, as the task of exception handling
           is not given to the main.
               
          CE: unreported exception java.lang.Interrupted must be caught
                                    or decalared to be thrown. */
          
      
      
      }
 
          

       public static void doMoreStuff() throws InterruptedException
       {
           

          
           Thread.sleep(1000);    
       }

 } 

//-------------------------------------------------------------------------REVISED---------------------------------------------------