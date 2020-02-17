
/*

Accessing instance variable from static area by creating Object.
==============================================================================

*/

package bStaticVariables;


 class Students {
    
      String name;
     
     public static void main(String[] args)
     {
         // Trying to access "name" which is an instance variable from main method which is static
         
                Students s=  new Students();
                
                s.name="vikas";
            
                System.out.println(s.name);
                
                /*
                   We cannot access instance variable directly from the static area but it 
                   is possible to access it using the object.
                */
         
     }
 
 
 
 }

/*
run:
vikas
BUILD SUCCESSFUL (total time: 0 seconds)

*/