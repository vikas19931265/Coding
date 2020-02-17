package StringClass;

/*

Java String Compare
================================================================================

1. We can compare String in java based on the content and the reference.

2. There are three ways in java by which String comparison can be done

       a. by equals() method----> To compare content of objects

       b. by == operator-------> For reference comparison

       c. by compareTo() method-----> For sorting.


1) String compare by equals() method
------------------------------------------------------

The String equals() method compares the original content of the string. 
It compares values of string for equality. String class provides two methods:

    public boolean equals(Object another) compares this string to the specified object.
    public boolean equalsIgnoreCase(String another) compares this String to another string, ignoring case.

*/
    // comparison using .equals

    class Teststringcomparison1{  
        
     public static void main(String args[]){  
       String s1="Sachin";  
       String s2="Sachin";  
       String s3=new String("Sachin");  
       String s4="Saurav";  
       System.out.println(s1.equals(s2));//true  
       System.out.println(s1.equals(s3));//true  
       System.out.println(s1.equals(s4));//false  
     
     }  
    }


    //comparison using equalsIgnoreCase

       class Teststringcomparison2{  
       public static void main(String args[]){  
       String s1="Sachin";  
       String s2="SACHIN";  
      
       System.out.println(s1.equals(s2));//false  
       System.out.println(s1.equalsIgnoreCase(s2));//true  
     }  
    }  


//------------------------------------------------------------------------------------------------------------    
    
    
/*
2) String compare by == operator

The = = operator compares references not values.  */

    class Teststringcomparison3{  
     public static void main(String args[]){  
       String s1="Sachin";  // sachin stored  in SCP
       String s2="Sachin";  // sachin also stored in SCP , so s1 and s2 points to same instance
       String s3=new String("Sachin");  
       System.out.println(s1==s2);//true (because both refer to same instance)  
       System.out.println(s1==s3);//false(because s3 refers to instance created in nonpool)  
     }  
    }  



//------------------------------------------------------------------------------------------------------------

/*
3) String compare by compareTo() method

The String compareTo() method compares values lexicographically and returns an integer value that describes if first string is less than, equal to or greater than second string.

Suppose s1 and s2 are two string variables. If:

    s1 == s2 :0
    s1 > s2   :positive value
    s1 < s2   :negative value   
    
This concept will mostly be used in the case of the Sorting in TreeSet in the collections.
    
    
    */

    class Teststringcomparison4{  
     public static void main(String args[]){  
       String s1="Sachin";  
       String s2="Sachin";  
       String s3="Ratan";  
       System.out.println(s1.compareTo(s2));//0  
       System.out.println(s1.compareTo(s3));//1(because s1>s3)  
       System.out.println(s3.compareTo(s1));//-1(because s3 < s1 )  
     }  
    }  