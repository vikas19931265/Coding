
/*     ------------PROGRAM TO SWAP 2 NUMBERS WITHOUT USING A THIRD VARIABLE.-----
================================================================================================================= */

package BasicPrograms;


public class A2SwapWithoutUsing3rdVariable {

    
   public static void main(String[] args) {
        
   int x=20; // take a number in the first variable.
   
   int y=40;// take a number in the second variable.
   
   x=x+y;   // add both the numbers and store in the first variable.
    
   y=x-y; // now Subtract y , from sum and store it in y( this is actually not x)
   
   x=x-y; //now subtract y , from sum and store in in x.( this is actually y)
   
   
   System.out.println(" x is "+ x +" and y is "+y);
   
            
    
    
    }
    
}


/*
run:
 x is 40 and y is 20
BUILD SUCCESSFUL (total time: 0 seconds)

*/