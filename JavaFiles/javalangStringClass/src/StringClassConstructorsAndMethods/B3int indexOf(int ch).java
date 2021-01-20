/*
Java String indexOf
===============================================================================

The java string indexOf() method returns index of given character value or substring.
If it is not found, it returns -1. The index counter starts from zero.

Signature

There are 4 types of indexOf method in java. The signature of indexOf methods are given below


int indexOf(int ch)            
            returns index position for the given char value

int indexOf(int ch, int fromIndex)	
            returns index position for the given char value and from index


int indexOf(String substring)	
            returns index position for the given substring

int indexOf(String substring, int fromIndex)
            returns index position for the given substring and from index



*/
package StringClassConstructorsAndMethods;


class IndexOfExammple
{
    
    public static void main(String[] args)
    {
        
        String sr="My name is Vikais Gautam is ";
        
        System.out.println(sr.indexOf('M')); //0
            // This will return index of M character, here it is 0.
            
        System.out.println(sr.indexOf("name")); //3
            //This will return index of name. This will be index of n character 
            
        
        System.out.println(sr.indexOf('i',11));//12
        
            /*This will return index of i after 11 th position. This is useful
              when we have duplicate characters in string. So if we dont specify
              the index position then it will always result the first occurenece
              character, hence to find the index position of other occurence character
              after specified index we can go for this method. */
    
    
       System.out.println(sr.indexOf("is" ,11));//15
       
            /* same reason as in for character */
    
    }
    
}