/*

public int capacity();
===============================================================================

        This method is used to find out the capacity of the String. Please note
that length is different from the capacity. In the case of length it will return
number of characters which are present in the string. But capacity in case of 
StringBuffer will return the number of characters which can be held by the String Buffer.
By default the size is 16

*/
package StringBufferConstructorsAndMethods;


class Capacity
{
    
    public static void main(String[] args)
    {
        
        StringBuffer sbr= new StringBuffer();
        
        System.out.println(sbr.capacity()); //16
        
    }
    
}