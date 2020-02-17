/*

public void trimToSize();
==============================================================================

        to deallocate extra allocated free memory.

   Scenario.

    Lets say we created SringBuffer with capactiy of 1000, but later on just added three
    characters and got to know that no extra characters will be added anymore. Hence to save
    the remaining memory we can call trimToSize() method which will remove all the extra memory.
*/
package StringBufferConstructorsAndMethods;

class TrimtoSize
{
    
    public static void main(String[] args)
    {
        
        StringBuffer sb = new StringBuffer(1000);
        
        sb.append("abc");
        
        sb.trimToSize();
        
        System.out.println(sb.capacity()); //3
    }
}
