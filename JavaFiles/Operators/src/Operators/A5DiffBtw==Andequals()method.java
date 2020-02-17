package Operators;

/*

Difference between == operator and .equals() method?
=======================================================================================

In General we can use == operator for the purpose of reference comparison( address comparison)
and .equals method for the purpose of content comparison.



note
=============================

For any object reference r, r==null is always false but null==null is always true.


*/


class Equality2
{
     static String s ;
   
     public static void main(String[] args)
    {
        
       
    // case 1
        
        System.out.println(s==null);// true
        
    // case 2  
        System.out.println(null==null);// true
        
    //case 3    
        String s1 = new String("Durga");
        
        String s2= new String("Durga");
        
        System.out.println(s1==s2); // false
        
        System.out.println(s1.equals(s2));//true
    
   // case 4
   
        String s = new String("Durga");
        
        System.out.println(s==null);// false.
    
    
    }
}