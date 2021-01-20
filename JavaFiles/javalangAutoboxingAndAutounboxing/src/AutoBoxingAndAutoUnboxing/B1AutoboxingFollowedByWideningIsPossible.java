
/*

This program is perfectly fine

conversion
---------


int------autoboxing--------Integer-------widening(Integer child of Object)--------Object

int converted to Integer by autoboxing

and Integer can be converted to Object as Integer is child class of object

autoboxing followed by widening is supported in java , hence this conversion is legal and
the program is fine.

*/

package AutoBoxingAndAutoUnboxing;

class SampleDemo
{

    Object o=10; // this is legal, 10 is of int type, int converted to Integer by autoboxing and Integer
                // is child class of Object hence this is legal


    Number n=10; // valid, 10 of type int autoboxed to Integer, and Integer is child class of Object hence this is
                 // also legal.

    public static void m1(Object o)
    {
        System.out.println("Object version");
    }


    public static void main(String[] args)
    {
        int x=10;

        m1(x);
    }

}

/*

run:
Object version
BUILD SUCCESSFUL (total time: 0 seconds)

*/