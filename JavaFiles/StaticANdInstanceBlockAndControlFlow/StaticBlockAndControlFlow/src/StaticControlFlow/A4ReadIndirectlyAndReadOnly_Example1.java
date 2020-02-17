
package StaticControlFlow;

 class Testing2 {
    
 static int x=10;
 /*
 
 1. In the first step value of x is 0 as its in RIWO state.
 
 2. In the second state value is changed to 10 and state to Read and write state
 
 */
 
 
 static
 {
     System.out.println(x); // As x is in read write state, the value can be read directly.
 }
 
 
 
 } 
