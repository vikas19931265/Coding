/*
Java String startsWith
===============================================================================

The java string startsWith() method checks if this string starts with given prefix. 
It returns true if this string starts with given prefix else returns false.

Signature

The syntax or signature of startWith() method is given below.

    public boolean startsWith(String prefix)  
    public boolean startsWith(String prefix, int offset)  

Parameter
    prefix : Sequence of character

Returns
    true or false
*/

package StringClassConstructorsAndMethods;

    class StartsWithExample
    
    {  
        public static void main(String args[]){  
    
            String s1="java string split method by javatpoint";  
    
            System.out.println(s1.startsWith("ja"));  // true
    
            System.out.println(s1.startsWith("java string"));// true.  
    }
    
    }  
