//------------------equalsIgnoreCase() method in String class.

/*
1. This method is similar to equals class.
2. The only difference with equals class is that it ignores the case.
3. Hence if we want to compare the string contents , without considering the case,
   then go for this method.
4. Return type of this method is boolean

SIGNATURE.

    public boolean equalsignoreCase(String string)


*/





package Concepts;


public class equalsIgnoreCase {
    
public static void main(String[] args)
{
    
    String str="vikas";
    String str1="Vikas";
    if(str1.equalsIgnoreCase(str))
    {
        System.out.println("Strings are equal");
    }
    
    else
    {
        System.out.println("Strings are not equal");
    }


}



}
