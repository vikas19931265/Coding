/* case 2:
==============================

1. We can use throws keyword only for throwable types. If we are trying to use for normal 
   java classes then we will get compile time error saying 

        CE: incompatible types
        found: Test
        required: java.lang.Throwable. 


*/
package eThrowsKeyword;


// case 1 

class Test42 {
    

     public void m1() throws Test42 // This is invalid as Test42 is not throwable.
     {
         /*
         
         CE : found Test required java.lang.Throwable.
         */
         
     }
 
 
 }


// case 2:


class Test44 extends RuntimeException
{
    
    public void m1() throws Test44
    {
            // perfectly valid as Test44 has become throwable type after extending RuntimeException.
        
    }
}

//-------------------------------------------------------------------------REVISED----------------------------------------------------------