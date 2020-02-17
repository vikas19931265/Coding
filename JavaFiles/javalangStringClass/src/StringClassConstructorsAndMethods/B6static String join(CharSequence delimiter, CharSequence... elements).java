/*

Java String join
================================================================================

The java string join() method returns a string joined with given delimiter. 
In string join method, delimiter is copied for each elements.

In case of null element, "null" is added. The join() method is included in java
string since JDK 1.8.

There are two types of join() methods in java string.

Signature

The signature or syntax of string join method is given below:

    public static String join(CharSequence delimiter, CharSequence... elements)  

and  
    public static String join(CharSequence delimiter, Iterable<? extends CharSequence> elements)  

Parameters

delimiter : char value to be added with each element

elements : char value to be attached with delimiter

Returns

joined string with delimiter

Throws

NullPointerException if element or delimiter is null.

Since

1.8



*/
package StringClassConstructorsAndMethods;

    
class JoinExample
{
    
    public static void main(String[] args)
    {
        
        String str="Vikas";
        
        String st1= String.join("-",str, "Gautam");
        
            /*
                join is static method which is present inside the String class. This method
                will take 3 parameters. First one has to be delimiter which will be placed
                in between all strings which are joined
        
                so we have given "-" . Now str which is "vikas" will be joined with gautam
                and in between both of them a delimiter will be given that is "-".
            
        
        
            */
        
        System.out.println(st1); //Vikas-Gautam
        
    }
    
}

/*
run:
Vikas-Gautam
BUILD SUCCESSFUL (total time: 0 seconds)

*/