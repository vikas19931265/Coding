package Operators;

/*

Difference b++ and b = b+1;
=============================================================================


In case of b++ internal typecasting is performed , however in the case of the b=b+1 internal typecasting
is not performed and it has to be done by us only.


**If we apply any arithmetic operators , between two variables a and b , then the result type is always

    max( int, type of a, type of b)

In below program

    max(int, byte, byte);


In case of increment and decrement operators internal typecasting will be performed automatically.


                    b++
                     |
                  b=(type of b)(b+1)

*/



class LoopHole7
{
    public static void main(String[] args)
    {

        //Example 1

        byte a=10;

        byte b=20;

        /*

        byte c=a+b; // max(int, byte, byte)= int ..CE possible loss of precision found int required byte

        Sysytem.out.println(c);


        To fix this we can do typecasting
        */

        byte c =(byte)(a+b);

        System.out.println(c);  //30



        //Example2

          byte b1 =10;

        // b1=b1+1;  max(int, byte)= int..CE possible loss of precision found int required byte

          b1=(byte)(b1+1); // To fix above issue we can use typecasting

          System.out.println(b1);




          byte e=10;

          e++;// In this case internal typecasting is performed e=(byte)(b+1)

          System.out.println(e); // 11



    }
}