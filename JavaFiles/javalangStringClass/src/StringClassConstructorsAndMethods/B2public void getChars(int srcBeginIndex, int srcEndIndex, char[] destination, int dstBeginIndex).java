/*
Java String getChars()
================================================================================


The java string getChars() method copies the content of this string into specified char array. 
There are 4 arguments passed in getChars() method. The signature of getChars() method is given below:

Signature


The signature or syntax of string getChars() method is given below:

    public void getChars(int srcBeginIndex, int srcEndIndex, char[] destination, int dstBeginIndex)




*/
package StringClassConstructorsAndMethods;

class getCharsExample
{
    public static void main(String[] args)
    {
        
        char[] ch = new char[15];
        
        String str="My name is Vikas Gautam";
        
        str.getChars(11, 23, ch, 0);
        
        System.out.println(ch);
        
        
        
        
    }
    
    
}

/*
run:
Vikas Gautam
*/