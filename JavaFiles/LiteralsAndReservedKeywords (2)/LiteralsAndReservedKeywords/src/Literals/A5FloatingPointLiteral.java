/*

Floating point literals
=============================================

By default every floating point literal is of double type hence we cannot assign
directly to the float variable.



But we can specify floating point literal as float type by suffixing with small
f or capital f.


We can specify explicitly floating point literal as double type by suffixing it 
with small d or capital D. Of course this convention is not required as by default
all floating points are double by default.


*/
package Literals;



class Ex4
{
    
   float f =123.456;  // by default floating values are double.
                      // CE: Possible loss of precision, found double, required float
   
   float f1 =123.456f; // This is valid . We have explicitly made the value as float by suffixing with f
   
   
   double d=123.456; // This is valid as value is double and data type also double.
    
    
   double d1=123.456D; // This is valid
   
   float f4 =123.4456d;// invalid , double is 8 bytes and float of 4 bytes, 
                       // CE: possible loss of precision found double, required float.         



}