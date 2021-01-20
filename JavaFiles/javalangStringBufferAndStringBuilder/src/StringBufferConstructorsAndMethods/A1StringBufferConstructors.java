/*

StringBuffer constructors
================================================================================


1. StringBuffer sb= new StringBuffer();

        This will create an empty StringBuffer object with the default initial capactiy
        of 16. Once the StringBuffer reaches its max capacity, a new StringBuffer object
        will be created with



                NewCapactiy= (CurrentCapactiy+1) 2;

        This concept is similar to collections growable nature.


2. StringBuffer sb = new StringBuffer( int initialCapactity)

    Creates a StringBuffer object with initialCapacity.

    This creates an empty StingBuffer object with the specified initial capacity


3. StringBuffer sb = new StringBuffer(String s);


    This will create an equivalent StringBuffer for the given string with capactiy
    equal to

            capacity=s.length()+16;



example:
        StringBuffer sb= new StringBuffer("Durga");
        System.out.println(sb.capacity()); //21

*/
package StringBufferConstructorsAndMethods;


class Demotest
{
    public static void main(String[] args)
    {
        
        StringBuffer sb = new StringBuffer();
        
        System.out.println( sb.capacity()); //16
        
        sb.append("abcdefghijklmnop");
        
        System.out.println(sb.capacity()); //16
        
        sb.append("q");
        
        System.out.println(sb.capacity());//34
    
    
    }
}

