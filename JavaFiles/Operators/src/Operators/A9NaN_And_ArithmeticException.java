package Operators;

/*

For any X value including NaN , the following expressions returns false

x<NaN
x<=NaN
x>NaN
x>=NaN
x==NaN

For any X value including NaN, the following expression will return true

x!=NaN  --> true



ArithmeticException
======================================

1. It is Runtime exception but not compile time error.

2. It is possible only in integral arithmetic but not in floating point
   arithmetic.

3. The only operators which cause Arithmetic exception are / and %.




*/
 class Demo9 {

     public static void main(String[] args)
     {
         System.out.println(10<Float.NaN);//false
         System.out.println(10<=Float.NaN);//false
         System.out.println(10>Float.NaN);//false
         System.out.println(10>=Float.NaN);//false
         System.out.println(10==Float.NaN);//false
         System.out.println(Float.NaN==Float.NaN);//false
         System.out.println(10!=Float.NaN);// true
         System.out.println(Float.NaN!=Float.NaN);// true

     }



 }
