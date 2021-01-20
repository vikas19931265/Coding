/*

New concepts[ binary integral type]
====================================================

Any sequence of characters within double quotes is treated as String literal.

    Example 

            String s ="Vikas";


1.7 version enhancements with respect to the literals
=======================================================


For integral data types  until 1.6 version , we can specify  literal values
in following ways

1. Decimal      2. Octal             3. Hexadecmial


but from 1.7 version onwards we can specify literal values even in the "binary"
form also.

Binary form allowed digits are 0 and 1.

Literal values should be prefixed with 0b or oB.


Example

        int x =0b1111;
        System.out.println(x)//15
        




1.  Binary Literals

2.  usage of "_" in Numeric literals.


usage of "_" in Numeric literals.
------------------------------------

From 1.7 onwards we can use _ symbol between digits of the numeric literal.

Example 
      double d1=1_23_456.7_8_9;
        
       double d2=123_456.7_8_9;


The main advantage of this approach is that the readability of the
code will be improved.

At the time of the compilation these underscore symbols will be removed
automatically hence after compilation the above lines will becomes


    double d =123456/789;

We can use more then one underscore symbol also between the digits.

    double d= 1__23_4_5_6.7_8_9;

    or double d =1__@__3_4_5_6.7_8_9.


Which of them is valid??
-----------------------------

double d = _1_23_456.7_8_9;

double d =1_2_3_456_.7_8_9;

double d=  1_23_456.7_8_9_;

    We can use "_" symbol only between the digits. If we are trying to 
 use it anywhere else then we will get the compile time error.



*/
package Literals;


class exam
{
    public static void main(String[] args)
    {
          int x =0b1111;
             System.out.println(x);//15
        
    
    
    //-------"_" between digits --------------------
    
        double d =123456.789;
        
        double d1=1_23_456.7_8_9;
        
        double d2=123_456.7_8_9;
        
        System.out.println(d1); //123456.789
    
    
        double d5 = _1_23_456.7_8_9;// underscore allowed only between digits

        double d6 =1_2_3_456_.7_8_9;// underscore allowed only between digits

        double d7=  1_23_456.7_8_9_;// underscore allowed only between digits
        
        
        
    }
}