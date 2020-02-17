/*
Java String lastIndexOf
================================================================================

The java string lastIndexOf() method returns last index of the given character value or substring. 
If it is not found, it returns -1. The index counter starts from zero.


Signature

There are 4 types of lastIndexOf method in java. The signature of lastIndexOf methods are given below:

int lastIndexOf(int ch)	
        returns last index position for the given char value

int lastIndexOf(int ch, int fromIndex)	
       returns the  last index position for the given char value and from index.

int lastIndexOf(String substring)
        returns last index position for the given substring

int lastIndexOf(String substring, int fromIndex)	
        returns last index position for the given substring and from index


Parameters

ch: char value i.e. a single character e.g. 'a'

fromIndex: index position from where index of the char value or substring is retured

substring: substring to be searched in this string



*/
package StringClassConstructorsAndMethods;

     class LastIndexOfExample{  
    
         public static void main(String args[]){  
    
             String s1="this is index of example";//there are 2 's' characters in this sentence  
    
             int index1=s1.lastIndexOf('s');//returns last index of 's' char value  
    
             System.out.println(index1);//6  
    }
  }  
