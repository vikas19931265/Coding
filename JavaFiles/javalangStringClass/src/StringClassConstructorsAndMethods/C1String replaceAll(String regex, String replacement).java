/*
Java String replaceAll
===============================================================================

The java string replaceAll() method returns a string replacing all the sequence of 
characters matching regex and replacement string.

Signature

    public String replaceAll(String regex, String replacement)  

Parameters
    regex : regular expression

replacement :
    replacement sequence of characters

Returns

replaced string

*/
package StringClassConstructorsAndMethods;


class ReplaceAllExample
{
    
    public static void main(String[] args)
    {
        
        String str="My name is Khan. My name is vikas. My name is Ravi";
        
       String str1=  str.replaceAll(" ", ""); // removing white spaces using replaceAll
        
       System.out.println(str1); 
       
    }
    
}