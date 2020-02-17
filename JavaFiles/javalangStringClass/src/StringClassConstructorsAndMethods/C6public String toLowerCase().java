/*

Java String toLowerCase()
===============================================================================

The java string toLowerCase() method returns the string in lowercase letter. 
In other words, it converts all characters of the string into lower case letter.

The toLowerCase() method works same as toLowerCase(Locale.getDefault()) method. 
It internally uses the default locale.

Signature

There are two variant of toLowerCase() method. The signature or syntax of string toLowerCase() method is given below:

    public String toLowerCase()  
    public String toLowerCase(Locale locale)  

The second method variant of toLowerCase(), converts all the characters into lowercase using 
the rules of given Locale.

Returns

string in lowercase letter.

*/
package StringClassConstructorsAndMethods;


class toLowerCaseExample
{
    
    public static void main(String[] args)
    {
        
        String st1="VIKAS"; 
        
        String st2= st1.toLowerCase();
        
        System.out.println(st2); //vikas
        
    }
    
}