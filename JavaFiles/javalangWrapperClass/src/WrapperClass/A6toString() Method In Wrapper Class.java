package WrapperClass;

/*

toString():
===============================================================================

We can use toString() method to convert wrapper object or primitive toString.


Wrapper Object or Primitive------> convert using toString() to------------>String



Form1
----------------

Every wrapper class contains the following toString() method to convert wrapper object to 
String type.

                public String toString();

It is the overriding version of Object class toString() method. 

Whenever we are trying to print wrapper object reference then internally this toString()
method will be called.

toString() method is available in every wrapper class.


        Integer I = new Integer(10);

        String s =I.toString();

        System.out.println(s); //10

        System.out.println(I)----> System.out.println(I.toString()); //10


Form 2:
----------------

Every wrapper clss including character class contains the following static toString() method
to convert the primitives to String.

        public static String toString(primitive p)

Example
----------

    String s = Integer.toString(10);
    String s =Boolean.toString(true);
    String s =Character.toString('a');

    

Form 3:
---------------------

Integer and long classes contains the following toString() method to convert primitives to 
specified radix string.

    public static String toString(primitive p, int radix);

           the allowed range of radix is 2 to 36.

Example
------------
        String s =Integer.toString(15,2)

        System.out.println(s); //1111



From 4:   toXXXString() method
----------------
    
Integer and long classes contains the following toXXXString() methods


    public static String toBinaryString(primitive p)
    public static String toOctalString(primitive p)
    public static String toHexString(primitive p)

   

Example

    String s= Integer.toBinaryString(10);
    System.out.println(s)//1010


    String s =Integer.octalString(10);
    System.out.println(s); //12


    String s =Integer.toHexString(10);
    System.out.println(s); //a


*/


class StringMethods
{
    public static void main(String[] args)
    {
        
        // Converting a Wrapper class object to String using toString() static method.
            Integer a = new Integer(10);
            String s =  a.toString();
            System.out.println(s);
    
        
        // Getting binary value of a number using toString()
           System.out.println(Integer.toString(15,2)); //1111
        
        
        //Converting a number to binaryString.
             System.out.println(Integer.toBinaryString(16));
    
        // Converting a char to String
            char ch='a';
            Character.toString(ch);
            System.out.println(ch);
            
    
             
             
    }
    
    
}
