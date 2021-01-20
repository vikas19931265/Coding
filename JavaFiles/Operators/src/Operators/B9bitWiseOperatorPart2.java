package Operators;

/*

bitwise operators(&, |, ^ (exclusive or)
================================================


& ---  AND---Returns if and only if both of the arguments are true.


|-----OR----Returns true if and only if at least one argument is true.


^----X-OR---Returns true if both the arguments are different.


We can apply these operators for integral types also.


*/

 class IntegralTypesbitwise
{

    public static void main(String[] args)
    {

        System.out.println(4&4);//4

            /*
            Apply AND operation

                    100
                    100
        ------------------------
                    100


        note, in actual we have to consider 32 bits here, but taking 3 bits
        or 32 bits will not affect the answer here.

        */



        System.out.println(4|5);//5

            /*
            Apply OR operation

                    100
                    101
                  ----------
                    101

            */



        System.out.println(4^5);//1

        /*
        Apply XOR operation. Returns true only when both values are same

                100
                101
                ----
                001

        */



    }
}