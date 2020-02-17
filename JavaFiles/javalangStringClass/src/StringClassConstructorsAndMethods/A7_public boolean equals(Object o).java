/*

public boolean equals(Object o)
===============================================================================

 To perform content comparison where case is important.

 This is overriding version of Object class equals() method.


 The java string equals() method compares the two given Strings  based on the content of
 the string. If any character is not matched, it returns false. If all the characters 
 are matched then it returns true or else it will return false.



 Signature
 ---------------------

    public boolean equals(Object anotheObj);

    anotherObject: another object that is compared with the string.



Returns
---------------------

   Returns true if characters of both strings are equal or else will return false.

*/
package StringClassConstructorsAndMethods;


 class equalsMethod {
    
    public static void main(String[] args)
    {
        String s1="javatpoint";
        
        String s2="javatpoint";
        
        String s3= "JAVATPOINT";
        
        String s4= "python";
        
        System.out.println(s1.equals(s2)); // true
        
        System.out.println(s1.equals(s3));// false
        
        System.out.println(s1.equals(s4)); // false
        
        
        
    }
 
}