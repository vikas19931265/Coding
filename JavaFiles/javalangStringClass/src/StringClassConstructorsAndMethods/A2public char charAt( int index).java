/*

public char charAt( int index);
===============================================================================

    This will return the character locating at the specified index.


Java String charAt()

    The java string charAt() method returns a char value at the given index number.

    The index number starts from 0 and goes to n-1, where n is length of the string. It returns 
    StringIndexOutOfBoundsException if given index number is greater than or equal to this 
    string length or a negative number.

Signature

    The signature of string charAt() method is given below:

    public char charAt(int index)  

Parameter

    index : index number, starts with 0

Returns

    A char value

Specified by

CharSequence interface, located inside java.lang package.

Throws

StringIndexOutOfBoundsException : if index is negative value or greater than this string length.


*/

package StringClassConstructorsAndMethods;


 class charAt1 {
    
     public static void main(String[] args)
     {
         
         String s ="Durga";
         
         System.out.println(s.charAt(3)); //g
         
         System.out.println(s.charAt(30)); // RE: StringIndexOutOfBoundsException
     }
 
 
 
 }
