/*

public StringBuffer reverse();
===============================================================================

        It will reverse the characters of the String.

*/
package StringBufferConstructorsAndMethods;

/**
 *
 * @author vikas
 */


class reverse
{
    public static void main(String[] args)
    {
        String s="1078" ;
        
        StringBuffer sb = new StringBuffer(s);
        
        sb.reverse();
        
        Integer a = Integer.parseInt( new String(sb));
        
        System.out.println(a);//8071
        
       
    }
}