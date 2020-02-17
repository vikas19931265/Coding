//// We can apply increment and decrement operators to all the primitive types except boolean type.

package Operators;

class LoopHole5
{
    public static void main(String[] args)
    {
        char ch='a';

        ch++;

        System.out.println(ch); //b


        int x=10;

        x++;

        System.out.println(x); // 11


        double d =10.5;

        d++;

        System.out.println(d);//11.5


       /*

        We cannot apply increment and decrement type to boolean type

        boolean b = true;

        b++;

        System.out.println(b);


        CE: Operator ++ cannot be applied to boolean type


        */
    }
}