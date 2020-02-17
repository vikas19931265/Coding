package Operators;

/*

Bitwise Complement Operator(~)
===========================================================


We can apply this operator only for the integral types but not for boolean types.
If we are trying to apply this operator for the boolean types then we will get
compile time error.


System.out.println(~true); // CE: operator ~ cannot be applied to boolean

System.out.println(~4) // valid


note
======================

The most significant bit acts as sign bit of the number.

0 means positive number

and 1 means negative number

Positive numbers will be represented directly in memory whereas negative numbers
will be represented in the memory in 2s complement form.



*/
class bitwiseComplement {


    public static void main(String[] args)
    {

       System.out.println(~true); // This is invalid.

       System.out.println(~4);//-5

       /*

       Here we have to find the negation of 4.

       4 is by default of int type and int number is represented in 32 bits
       hence we have to find negation of 4( 32 bits)


       MSB(most significant bit) of number indicates the sign of number. If its
       0 it means it is positive number and if it is 1 it means it is negative number

       representing 4 in 32 bits

       00000000000000000000000000000100---> number 4 represented in 32 bits
       |
    sign bit( 0 means positive 1 means negative)


     Now we have to find the 2's complement of this number. To do that first
     we will find 1s complement of 4 and then 2's complement of 4.

     00000000000000000000000000000100( 4 )

       ~4 is

     11111111111111111111111111111011

     (if number is negative(-msb) then then number will be represented in the 2s complement.


     now we have to first find 1st complement( only for value)


     10000000000000000000000000000100-->1 complement


       now find 2s complement

     10000000000000000000000000000100
                                    1->(2s complement)
     --------------------------------
     10000000000000000000000000000101--->(-5)
     ---------------------------------


       */
    }



}
