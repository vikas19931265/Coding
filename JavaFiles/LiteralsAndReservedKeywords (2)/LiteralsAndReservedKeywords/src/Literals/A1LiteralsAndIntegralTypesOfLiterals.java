/*

Literals
======================================================================

A constant value which can be assigned to a variable is called as Literal.

    int x =10;

where int ----> data type/keyword.

x-------> name of variable / identifier

10-------> is the constant value or the literal


IntegralTypes Literals.
======================================

For the integral data types( byte , short , int , long) we can specify the integral values in
the following ways.


  1. Decimal Literals.(base 10)

            Allowed digits are 0 to 9
            Example int x=10;


   2. Octal Literals(base 8) { if 0 is there before number then it is octal value}
            
            Allowed digits are 0 to 7
            And literal values for octal numbers should prefix with 0

            Example int x =010;

           
   3. Hexa decmial Literals(base 16)

          1. The alowed digits are from 0 to 9 and a to f.
          
          2. For the extra digits that is digits after 9 (a to f---10,11,12,13,14,15}) we can use both
             upper case and lower case characters.

          3. This is one of the very few areas where java is not case sensitive.

             Example int x =0x10;

          4. The Literal value should be prefixed with ox or OX.

            example int x =0z10;
            
 
These are the only possible ways to specify literal value for the integral data types


//--------------------------------------------------------------------------------------------

Which of the following are valid declarations.
-----------------------------------------------

     
int x =10; // valid

int x =0786// invalid as this is octal number and octal number digit range is (0 to 7)
           // CE : integer number too large. 


int x =0777; // valid octal number


int x =0XFace // valid This is hexadecimal number and in hexadecimal (a,b c, d,e, f ) are allowed


int x =0XBeef //valid , hexadecimal number in 0-9 and a-f range.

int x =0XBeer; //invalid , r is not in range of hexadecmial number
              // CE: ';' expected  


*/
