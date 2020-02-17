/*

public boolean contains(String s)
===============================================================================

The java string contains() method which searches for the sequence of the characters in the String.
If will return true if the sequence of the char values are found in the string or else will
return false.


Signature
--------------

    public boolean contains(charSequence s)

Parameter
---------------

    sequence: specified the sequence of the characters which have to be searched.


Returns
-------------

    true, if sequence of char value exists otherwise false.


Throws
---------------

    NullPointerException, if sequence is null.



*/
package StringClassConstructorsAndMethods;


class ContainsExample
{
    
    public static void main(String[] args)
    {
        
        String name= "what do you know about me";
        
        System.out.println(name.contains("do you know")); // true
        
        System.out.println(name.contains("about"));// true
        
        System.out.println(name.contains("hello"));//false
     }
    
    
}