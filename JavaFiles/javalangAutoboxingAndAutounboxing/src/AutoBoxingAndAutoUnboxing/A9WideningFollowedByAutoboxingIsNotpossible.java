/*

Case 4
---------------------------------



int-----autoboxing-----------Integer----*(not possible)--------Long

we cannot convert Integer class to Long class as there is no relationship between Long and Integer


int-----widening------------long-----------autoboxing-----------Long

In java widening followed by autoboxing is not supported but autoboxing followed by
widening is supported.


w--a--> not  possible

a---w-->possible

hence int conversion to Long is not possible

-----int is first widened to long and then tried to autoboxed


*/
package AutoBoxingAndAutoUnboxing;

class Test41
{

   /*
    Long l=10;


    CE:  incompatible type, found int, required java.lang.Long

    1. Firstly 10 of type int will be widened to long.

    2. Then long will be autoboxed to Long .

    This is widening followed by autoboxing which is not possible in java.


    */


    long l =10; // valid ...widening concept


    public static void m1(Long l) // Long and Integer dont have any relationship
    {
        System.out.println("Long");
    }

    public static void main(String[] args)
    {
        int x =10;


        /*

        m1(x);

        CE: m1(java.lang.Long) in Test cannot be applied to int

        */

        }



}