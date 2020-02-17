/*

Java String intern
================================================================================

The java string intern() method returns the interned string. It returns the canonical 
representation of string.

It can be used to return string from pool memory, if it is created by new keyword.

Signature

The signature of intern method is given below:

    public String intern()  


Returns

interned string


*/
package StringClassConstructorsAndMethods;


class InternMethod
{
    
    public static void main(String[] args)
    {
        
        String s1= new String("Vikas");
        
                /*created an object vikas in both scp as well as heap memory */
                
                
        String s3= "Vikas";
                
        String s2= s1.intern();
         
        /* Now this will not create a new object in heap instead s2 will start pointing
           to vikas object present in the scp, if the object is not present in the scp
           then in that case a new object will be created.
         */
        
        
         System.out.println(s1==s2);// false , because s2 is present in scp and s1 in heap      
               
         System.out.println(s2==s3); // true      
         
         
               
    }
    
    
}