/*

Java String replace
===============================================================================

The java string replace() method returns a string replacing all the old char or 
CharSequence to new char or CharSequence.

Since JDK 1.5, a new replace() method is introduced, allowing you to replace a sequence of char values.

Signature

There are two type of replace methods in java string.

    public String replace(char oldChar, char newChar)  
    and  
    public String replace(CharSequence target, CharSequence replacement)  // charSequence is String.

The second replace method is added since JDK 1.5.

Parameters

    oldChar : old character

    newChar : new character

target : 
    target sequence of characters

replacement :
    replacement sequence of characters

Returns
    replaced string

*/
package StringClassConstructorsAndMethods;


class Replacement
{
    public static void main(String[] args)
    {
        String st1="My name is khan";

        String st2= st1.replace('k','m');
        
        System.out.println(st2); //My name is mhan
        
        String st3= st1.replace("khan", "java"); //My name is java
        
        System.out.println(st3);
        
    }
    
}
