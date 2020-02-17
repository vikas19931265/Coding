/*

public String 	substring(int beginIndex)
            is used to return the substring from the specified beginIndex.

public String 	substring(int beginIndex, int endIndex)
            is used to return the substring from the specified beginIndex and endIndex.



*/
package StringBufferConstructorsAndMethods;


class SubString1
{
    public static void main(String[] args)
    {
        
        StringBuffer sbr= new StringBuffer("Vikas Gautam");
        
        System.out.println( sbr.substring(0));// Vikas Gautam
        
        System.out.println(sbr.substring(0, 4)); // Vika
        
    }
    
}
