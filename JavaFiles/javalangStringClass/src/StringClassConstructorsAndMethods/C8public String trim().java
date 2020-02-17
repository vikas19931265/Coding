/*

Java String trim
================================================================================

The java string trim() method eliminates leading and trailing spaces. The unicode 
value of space character is '\u0020'. The trim() method in java string checks this unicode value before and after the string, if it exists then removes the spaces and returns the omitted string.

            The string trim() method doesn't omits middle spaces.

Signature

The signature or syntax of string trim method is given below:

        public String trim()  

Returns
        string with omitted leading and trailing spaces



*/
package StringClassConstructorsAndMethods;


class TrimExample
{
    public static void main(String[] args)
    {
        
        String str1= "    Vikas";
        
        System.out.println(str1.trim());//Vikas
        
    }
    
}
