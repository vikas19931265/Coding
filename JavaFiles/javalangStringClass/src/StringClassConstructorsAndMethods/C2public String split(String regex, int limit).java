/*
Java String split
===============================================================================

The java string split() method splits this string against given regular expression 
and returns a String array.

Signature

There are two signature for split() method in java string.

    public String split(String regex)  
    and,  
    public String split(String regex, int limit)  

limit:
     limit will tell how the elements will be stored inside the array. If the limit
     is 0 then all the words will be stored in consecutive indexes. If the limit is 1 then complete string
     will be stored at the first index string array. If the limit is 2 then the complete
     String will be stored in two parts. One will be stored at the 0th index and the other
     one will be stored at the first index.

Parameter
    regex : regular expression to be applied on string.

limit :
    limit for the number of strings in array. If it is zero, it will returns all the 
    strings matching regex.

Returns
    array of strings

Throws
    PatternSyntaxException if pattern for regular expression is invalid

Since
    1.4


*/
package StringClassConstructorsAndMethods;


class SplitExample
{
    
    public static void main(String[] args)
    {
        
        String str1= "My name is khan and i am not a terriorist";
        
        String str[]= str1.split("\\s"); 
            /*
                Here we have split the str1 based upon the space and be default
                the limit is 0 and hence each word separated by the space will be 
                stored in a particular index position only.
            
           */
        
            
         String str0[]= str1.split("\\s",2); 
         /*
            
            Here in this case splitting will be done in such a way that  a portion
            of String will be stored in the first index and the next portion of the
            String will be stored in the second index.
            
         
         
         */
        
        for(String st1: str)
        {
            System.out.println(st1);
            
        }
    
    
        System.out.println("--------Second example------------");
        
           for(String st2: str0)
        {
          
            System.out.println(st2);
            
        }
    
    
    
    
    
    
    }
    
}


/*
run:
My
name
is
khan
and
i
am
not
a
terriorist
--------Second example------------
My
name is khan and i am not a terriorist
BUILD SUCCESSFUL (total time: 0 seconds)

*/