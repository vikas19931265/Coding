//----------------------------ENDS WITH METHOD IN JAVA-----------------

/*

1. this method is used to check if the string object ends with specified string 
   in the endsWith method.
2. The return type for this method is boolean.

SIGNATURE

        public boolean endsWith( String speficedString);


*/


package Concepts;


public class endsWith {

    public static void main( String[] args)
    {
        String myname="my name is khan";
        if(myname.endsWith("sammy"))
        {
            System.out.println("ends with specifed string.");
        }
    
        else
        {
            System.out.println("does not end with specified string.");
        }
    
    }


}
