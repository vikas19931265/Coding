
//------------------CONTAINS METHOD IN STRING-----------------------------

/*
1. String contains() method checks for the sequence of the characters in the string.
2. The Return type of this method is boolean.
3. If the specified string is found then true is returned or else false.

IMPORTANT POINT TO NOTE:
        1.If a reference does not point to any object, meaning its null.
        2.And we are trying to perform any operation on it, like calling method.
        3.In that case a null pointer Exception will be thrown.
        4.String str= null, and trying to call, str.contains() will throw null
          pointer exception hence need to be careful about that.

SIGNATURE

                public boolean contains( String specifiedString)

*/

package Concepts;

public class contains {
    
public static void main( String[] args)
{
    String str="my name is khan";
    
    if(str.contains("my name is"))
    {
        System.out.println("yes it is present");
    }

    else
    {
        System.out.println("absent");
    }
    
 }


}

