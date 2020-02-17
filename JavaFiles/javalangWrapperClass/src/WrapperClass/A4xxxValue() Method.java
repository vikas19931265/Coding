/*

xxxValue()
===============================================================================


Wrapper object------xxxValue() method converts wrapper object to------------>primitive


1. We can use xxxValue() methods to get primitive for the given wrapper object


2. Every number type wrapper class( Byte, Short, Integer, Long, Float, Double) contains the following
   6 methods to get the primitive for the given wrapper object


    public byte byteValue()

    public short shortValue()

    public int intValue();

    public float floatValue();

    public double doubleValue()

    public long longValue();



charValue()
---------------------------

Character class contains charValue() method to get char primitive for the given char object


    public char charValue();

Example

      Character ch = new Character('a');

      char c = ch.charValue();

      System.out.println(c); 'a'


booleanValue()
-------------------------------

Boolean class contains booleanValue() method  to get booleanValue() for the given Boolean
object.

        public boolean booleanValue();

        Boolean b = Boolean.valueOf("durga");

         boolean B= b.booleanValue();

         System.out.println(B); // false


Note
------------


In total 38(6*6+1+1) , xxxValue() method are possible


*/

// example

package WrapperClass;



 class Testing
{

    public static void main(String[] args)
    {

        Integer i = new Integer(130); //

        System.out.println("byte"+i.byteValue());//-126

        System.out.println("short"+i.shortValue());//130

        System.out.println("int"+i.intValue());//130

        System.out.println("long"+i.longValue());//130

        System.out.println("float"+i.floatValue());//130.0

        System.out.println("double"+i.doubleValue());//130.0

      //  System.out.println(i.charValue()); // invalid: this is not possible

        //charValue()

        Character ch = new Character('a');

        char c = ch.charValue();

        System.out.println(c); //'a'

        //booleanValue()

         Boolean b = Boolean.valueOf("durga");

         boolean B= b.booleanValue();

         System.out.println(B); // false

    }
}
