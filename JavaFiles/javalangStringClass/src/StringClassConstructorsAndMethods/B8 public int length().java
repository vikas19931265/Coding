/*
Java String length
================================================================================

The java string length() method length of the string. It returns count of total number of characters.
The length of java string is same as the unicode code units of the string.

Signature

The signature of the string length() method is given below:

    public int length()  

Specified by

CharSequence interface

Returns

length of characters

*/
package StringClassConstructorsAndMethods;
    
    class LengthExample{  
    
        public static void main(String args[]){  
    
            String s1="javatpoint";  
    
            String s2="python";  
    
            System.out.println("string length is: "+s1.length());//10 is the length of javatpoint string  
    
            System.out.println("string length is: "+s2.length());//6 is the length of python string  
    }
    
    }  