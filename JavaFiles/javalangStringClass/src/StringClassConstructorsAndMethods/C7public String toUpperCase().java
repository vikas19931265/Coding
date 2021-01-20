/*
Java String toUpperCase
===============================================================================

The java string toUpperCase() method returns the string in uppercase letter. 
In other words, it converts all characters of the string into upper case letter.

The toUpperCase() method works same as toUpperCase(Locale.getDefault()) method. 
It internally uses the default locale.

Signature

There are two variant of toUpperCase() method. The signature or syntax of string toUpperCase() method is given below:

    public String toUpperCase()  
    public String toUpperCase(Locale locale)  

The second method variant of toUpperCase(), converts all the characters into uppercase using 
the rules of given Locale.

Returns
string in uppercase letter.


*/

package StringClassConstructorsAndMethods;

class StringInUpper {
    
    public static void main(String[] args)
    {
        
        String str1= "vikas";
        
        System.out.println(str1.toUpperCase());//VIKAS
        
    }
 
 
 
 }
