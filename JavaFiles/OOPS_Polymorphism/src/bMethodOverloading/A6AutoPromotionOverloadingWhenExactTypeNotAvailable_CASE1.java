// AUTOMATIC PROMOTION OVERLOADING [CASE 1]                                                                                                                     

/*

CASE 1:
======================

1. While resolving overloaded methods , if exact match method is not available then
   we won’t get any compile time error immediately.

2. First it will promote argument to the next level and check whether matched method is
   available or not.

3. If matched method is available then it will be considered, and if the matched 
   method is not available then compiler promotes argument once again to the next
   level. This process will be continued until all possible promotions.

4. Still if the matched method is not available then we will get compile time
   error.

5. The following are all possible promotions in overloading

    byte-->short--->int-->long->float->double. [ this process is Automatic promotion in overloading]

    char-->int--->long--->float--->double.

    a).  Interesting thing to note here will be that  float able to take a long value,
         where float is of 32 bits however long is of 64 bits.
         This is  because float is represented using scientific notation and is capable of taking a much larger range than long.

    b). However byte cannot take a char value as byte range is less than char.
    c) Similarly a short cannot take a char value, as the range of short is less than that of char.


byte (1byte)
short(2byte)
int(4byte)
long(8byte)
float(4byte)
double(8byte)


6. [Note]

    char next immediate conversion will be int but not byte or short.
    as char range is more than both byte as well as short hence byte or a short variable
    will not be able to hold a char value.

 
7. [Note]

        if exact match data type is available then automatic promotion overloading will not happen
        as the priority will be given to the exact data type available.

 */
package bMethodOverloading;

 class AutmoaticPromotionInOverloadingCASE1 {

    public static void main(String[] args) {

        Test t = new Test(); //HAS A RELATIONSHIP
        t.m1('a');
        /*
                    This char 'a'  of size 2 byte will be promoted to the next
                    level which is of 4 byte and that is int and hence method m1
                    taking int parameter is going to be executed.
    
         */

        t.m1(10); // this will compile successfully
        t.m1(10.5f); // this will compile successfully
        t.m1(9223372036854775807l);// legal.

        /*
    
            1. This is also legal, but interesting thing to note here will be that float
               is of 4 bytes but a long is of 8 bytes but still range of float is more 
               than that of a long.

            2. This is because of the scientific notation used to represent a number in case of 
                float types.

            3.  t.m1(10.5) //this is illegal as no method exists which can  take a double value.

            error: cannot find symbol m1(double) in class test.

         */
    }
}

class Test {

    public void m1(int i) // overloaded methods
    {
        System.out.println("int-args value is " + i);
    }

    public void m1(float f)// overloaded method.
    {
        System.out.println("float- args" + f);
    }

}


/*

run:
int-args value is 97
int-args value is 10
float- args10.5
float- args9.223372E18
BUILD SUCCESSFUL (total time: 0 seconds)

*/
//-----------------------------------------------------------------------------*********-------------------------------------------------------------

