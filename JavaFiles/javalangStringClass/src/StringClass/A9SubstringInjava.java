package StringClass;

/*

Substring in Java
========================================

A part of string is called as substring. In other words substring is part of another
String. In case of substring startIndex is inclusive and endIndex is exclusive.


Note
+++++
    Index always starts from 0.

We can get substring from the given string object by one of the two methods

1. public String subString(int startIndex):

    This method returns new String object containing the substring of the
    given string from the specified starting index(inclusive).

2. public String subString(int startIndex, int endIndex): 

    This method returns new String object containing the substring of the given
    string from specified startIndex to the endIndex.

In case of the String.

        startIndex: Inclusive
        endIndex:   Exclusive

Let's understand the startIndex and endIndex by the code given below.

    String s="hello";  
    System.out.println(s.substring(0,2));//he

In the above substring, 0 points to h but 2 points to e (because end index is exclusive). 

*/


/* Example of java substring
-------------------------------  */

     class TestSubstring{  
     public static void main(String args[]){  
       String s="SachinTendulkar";  
       System.out.println(s.substring(6));//Tendulkar  
       System.out.println(s.substring(0,6));//Sachin  
     }  
    }  


