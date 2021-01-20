/*
Java String substring
================================================================================

The java string substring() method returns a part of the string.

We pass begin index and end index number position in the java substring method where
start index is inclusive and end index is exclusive. In other words, start index starts
from 0 whereas end index starts from 1.

There are two types of substring methods in java string.

Signature

    public String substring(int startIndex)  
    and  
    public String substring(int startIndex, int endIndex)  

If you don't specify endIndex, java substring() method will return all the characters from startIndex.

Parameters
    startIndex : starting index is inclusive

endIndex :
    ending index is exclusive

Returns

specified string

Throws

StringIndexOutOfBoundsException if start index is negative value or end index is lower than starting index.
*/
package StringClassConstructorsAndMethods;


class SubStringExample
{
    
    public static void main(String[] args)
    {
        
        String str="Vikas";
        
        String st1= str.substring(0);
        
        String st2= str.substring(0,2); // index starts from 0(inclusive) and ends with 2(exclusive that is 1).
        
        System.out.println(st1);//Vikas
        
        System.out.println(st2);//Vi
        
    }
    
}