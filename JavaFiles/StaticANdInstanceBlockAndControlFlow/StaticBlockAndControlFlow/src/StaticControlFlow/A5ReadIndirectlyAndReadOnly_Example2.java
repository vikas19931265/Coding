

package StaticControlFlow;


 class Testing4 {
    
    static
    {
       // System.out.println(x); // The value of x is still in RIWO state and we are trying to print its value directly hence will get error.
        
            
        /*
        
        Error Illegal Forward Reference
        
     */
    
    }
 
    static int x=10; // value of x is in RIWO state
 
 }
