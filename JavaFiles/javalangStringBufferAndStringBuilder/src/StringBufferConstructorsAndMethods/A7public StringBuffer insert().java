/*


public StringBuffer insert( int index, String s); // (overloaded methods) not only string , 
                                                    we can insert any type of object or primitive.
public StringBuffer insert( int index, int s)
public StringBuffer insert( int index, long s)
public StringBuffer insert( int index, char s)
public StringBuffer insert( int index, boolean s)

        This will insert the String at the given place. In append it is always added
        at the last but in insert we can place at the specific place.

  

    INSERT / APPEND / DELETE ARE NOT APPLICABLE TO STRING AS STRING OBJECTS ARE IMMUTABLE.

*/
package StringBufferConstructorsAndMethods;


class insert
{
    
    public static void main(String[] args)
    {
        
        StringBuffer sb= new StringBuffer("abcdefgh");
        
        sb.insert(2,"xyz");
        
        System.out.println(sb); //abxyzcdefgh
    }
}
