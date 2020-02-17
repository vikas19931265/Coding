package StringClassConstructorsAndMethods;

/*

public int compareTo()
=======================================================================

The java string compareTo() method compares the given string with the current string
lexicographically.

It returns positive number , negative number or 0.


It compares strings on the basis of the unicode values of each characters in the String.


If first string is lexicographically greater than the second string, then it returns the
positive number that is the difference of the character value.

If first string is less then the second string lexicographically , it returns the negative
number.

And if the first string is lexicographically equal to the second string then it will return 0.


        if s1> s2, it returns positive number
        if s1< s2 , it returns negative number
        if s1==s2, it returns 0.


Signature
-------------

        public int compareTo(String anotherString);

parameters
------------

        anotherString represents string that is to be compared with the current string

Returns
------------

        Integer Value


*/


//Java String compareTo() method example


 class CompareToExample
{
    
     public static void main(String[] args)
     {
         
         String s1= "hello";
         
         String s2= "hello";
         
         String s3= "meklo";
         
         String s4= "hemlo";
         
         String s5= "flag";
         
         
         String s6="";
         
         System.out.println(s1.compareTo(s2)); //0
         
         System.out.println(s1.compareTo(s3));//-5
         
         System.out.println(s1.compareTo(s4));//1
         
         System.out.println(s1.compareTo(s5));//2
         
         System.out.println(s1.compareTo(s6));//5
         
                //If second string is empty then in that case we will get the length of
                // the String. If first string is empty then we will get the negative value
                // and if the second string is empty then we will get the positive value.
     }
    
}