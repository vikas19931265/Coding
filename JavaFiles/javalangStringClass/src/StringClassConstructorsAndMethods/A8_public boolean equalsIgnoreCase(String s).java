/*

public boolean equalsIgnoreCase(String s)
===============================================================================
    
  
1. The String equalsIgnoreCase() method compares the two given strings on the basis of
   content of the strings irrespective of case of the string.

2. It is like equals() method but doesn't check the the case.


3. If any character is not matched, it returns false otherwise it will return the true.


Signature
-------------------------

public boolean equalsIgnoreCase(String s)


Parameter
-------------------------

str: another string i.e compared with this string.


Returns
------------------------

It returns true if characters of both strings are equal ignoring the case otherwise false
is returned.



To perform content comparison where case is not important.



note
--------

In general we can use equalsIgnoreCase method to validate user names where case is not 
important whereas we can use equals method to validate password where case is important.



*/
package StringClassConstructorsAndMethods;

class EqualsIgnoreCase
{
    
    public static void main(String[] args)
    {
        
        String s1="javatpont";
        
        String s2="javatpoint";
        
        String s3= "JAVATPOINT";
        
        String s4= "python";
        
        System.out.println(s1.equalsIgnoreCase(s2)); // true
        
        System.out.println(s1.equalsIgnoreCase(s3)); // true
        
        System.out.println(s1.equalsIgnoreCase(s4)); // false
        
        
    }
    
    
}