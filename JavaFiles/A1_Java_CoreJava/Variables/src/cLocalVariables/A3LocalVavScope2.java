// Scope of Local Variable example 2.



package cLocalVariables;


 class Test5
 {
     
     public static void main( String[] args)
     {
         try
         {
             int a= Integer.parseInt("ten");
         }
     
         catch ( NumberFormatException e)
         {
             /*
                a=10;
           This will throw an error as a is declared inside block try and we are
           trying to access it in the catch block
             */       
          }
     
     }
 
 }
