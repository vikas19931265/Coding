/*
parseXXX( most commonly used method )
==============================================================================

1. We can use parseXXX method to convert String to primitive.



    String ------------parseXXX() method converts String to-------------primitve


Form1:
-----------

Every wrapper class except character class contains the following parseXXX() methods to find primitives for
the given String object.


                public static primitive parseXXX(String s);

Example
        
        int i =Integer.parseInt("10");

        double d =Double.parseDouble("10.5");

        boolean b =Boolean.parseBoolean("true");


Form 2:
-----------

Every integral type wrapper class(Byte, Short, Integer, Long) contains the following parseXXX() methods to convert specified
radix string to prmitive.

    public static primitive parseXXX(String x, int radix);

    The allowed range of radix is 2 to 36

Example

        int i =Integer.parseInt("1111",2);

        System.out.println(i); //15



*/
package WrapperClass;



class Sample5
{
    public static void main(String[] args)
    {
        
        int i = Integer.parseInt("100",2);
        
        System.out.println(i); // 100 is the binary value of 4
        
        
    }
    
}
