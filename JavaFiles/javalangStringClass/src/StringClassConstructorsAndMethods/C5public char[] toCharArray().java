/*
Java String toCharArray
=================================================================================

The java string toCharArray() method converts this string into character array. 
It returns a newly created character array, its length is similar to this string and 
its contents are initialized with the characters of this string.


Signature

The signature or syntax of string toCharArray() method is given below:

    public char[] toCharArray()  

Returns
character array

*/
package StringClassConstructorsAndMethods;


 class toCharArrayExample {
    
     public static void main(String[] args)
     {
         
         String str1="Vikas";
         
         char[] ch1= str1.toCharArray();
         
         for(char ch2: ch1)
         {
             
             System.out.println(ch2);
             
         }
         
         
         
     }
 
 
 
 }

/*
run:
V
i
k
a
s
BUILD SUCCESSFUL (total time: 0 seconds)

*/