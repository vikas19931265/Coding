/*
public void setCharAt(int index, char ch);
================================================================================


        To replace the character located at specified index with the
         provided character.

*/
package StringBufferConstructorsAndMethods;

class Sample3
{
    public static void main(String[] args)
    {
        
        StringBuffer sbr= new StringBuffer("Vikas Gautam");
        
        sbr.setCharAt(0, 'b');
        
        System.out.println(sbr); // bikas Gautam.
        
    }
    
    
}
