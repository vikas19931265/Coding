/*

Java String endsWith : public boolean endsWith(String suffix)
===============================================================================

The java string endsWith() method checks if this string ends with given suffix. It 
returns true if this string ends with given suffix else returns false.


Signature
-----------------

    public boolean endsWith(String suffix)


Parameters
-----------------

    suffix: Sequence of character.

Returns
-----------------

     true or false.


*/
package StringClassConstructorsAndMethods;


class EndsWithExample
{
    
    public static void main(String[] args)
    {
        
        String s1= "java by javatpoint";
        
        System.out.println(s1.endsWith("t")); // true
        
        System.out.println(s1.endsWith("point")); // point
   
   }
    
}