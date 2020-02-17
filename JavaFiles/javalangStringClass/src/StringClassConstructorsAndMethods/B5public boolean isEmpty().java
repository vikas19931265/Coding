/*
Java String isEmpty
================================================================================

The java string isEmpty() method checks if this string is empty. It returns true, 
if length of string is 0 otherwise false.

The isEmpty() method of String class is included in java string since JDK 1.6.

Signature

The signature or syntax of string isEmpty() method is given below:

    public boolean isEmpty()  

Returns

true if length is 0 otherwise false.

Since

1.6



*/
package StringClassConstructorsAndMethods;


class isEmptyCheck
{
    
    public static void main(String[] args)
    {
        String str="";
        
        String st1="Vikas";
        
        System.out.println(str.isEmpty()); // true
        
        System.out.println(st1.isEmpty());// false
        
    }
    
    
}
