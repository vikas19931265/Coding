/*
    
public char charAt(int index);
================================================================================

        This method will return the specific character at the specified index.

*/
package StringBufferConstructorsAndMethods;

 class Sample
         
 {
         public static void main(String[] args)
    {

        StringBuffer sb= new StringBuffer("durga"); 

        System.out.println(sb.charAt(3));

        System.out.println(sb.charAt(30)); //RE: StringIndexOutOfBoundsException

    }

 }
