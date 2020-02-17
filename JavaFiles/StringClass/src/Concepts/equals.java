//-------------------------equal method in String Class--------------

/*
1. Equals method in java is used to compare content of 2 String objects.
2. Point to note here is that it is different from "==" where reference are compared.
3. This equal method is actually a method of object class , but overridden
   in String class in order to perform content comparison.
4. If the objects do not match then false is returned or else true is returned.
5. The return type of this method is boolean

    [NOTE]

        This method checks case as well, in order to ignore case checking
        we have anothe method called equalsIgnoreCase which will make a comparison
        ignoring the case.

SIGNATURE.

        public boolean equals(String specifiedString);


*/
package Concepts;

public class equals {
    
public static void main(String[] args)
{
    
    String name="vikas";
    String name2="gautam";
    if(name.equals(name2)) // here equals method is used for the content comparison not the reference comparison
    {
        System.out.println("names are equal");
        
    }
    
    else
    {
        System.out.println("names are not equal");
    }

}



}

