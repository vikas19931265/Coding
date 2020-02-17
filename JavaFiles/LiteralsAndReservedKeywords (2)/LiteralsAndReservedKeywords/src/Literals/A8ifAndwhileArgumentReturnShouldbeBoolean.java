
package Literals;


 class Sample {
    
     public void case1()
     {
         
         int x =0;
         
         if(x)// x value is 0 and if always expects boolean as argument hence 
                // CE: incompatible types: found int , required : boolean
             
             
         {
             System.out.println("Hello");
         }
         
     
         else
         {
             System.out.println("Hi");
         }
     
     
     
     }
 

     public void case2()
             {
                 
                 while(1) // while condition expects a boolean value here hence we will get compile time error
                            // CE : incompatible types, found int, required boolean
                 {
                     System.out.println("hai");
                 }
                 
                 
                 
             }
     
     
     
 
 }

