

/*
    
Stack Frames
======================

Each stack frame contains three parts


    --------------------
    local variable array
    --------------------
      operand stack
    --------------------  
      frame date
    -------------------
    
      Stack frame



Local Variables Array
=======================


It contains all parameters and local variables of the method. Each slot in the array
is of  4 bytes. Values of type int, float and reference occupy one entry in the array.


Values of double and long occupy 2 consecutive entries into the array.

Byte, short and char values will be converted to the int type before storing and occupying
one slot. But the way of storing boolean values is varied from JVM to JVM but most of the
JVMs follow one slot for the boolean values.



    public void m1( int i , double d, Object o, float f)
    {
        long x;
        .
        .
        .
    }

        int   double  double  object   float long long
        -----------------------------------------------------
        i   | d     |  d    | o     | f   |   x  |x    
        -----------------------------------------------------



*/


