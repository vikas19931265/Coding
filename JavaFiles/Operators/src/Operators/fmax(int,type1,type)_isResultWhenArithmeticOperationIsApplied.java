package Operators;

/*

Arithmetic Operators(+, -, *, / , %)
=====================================================================================


1. If we apply any arithmetic operator between two variables A and B  the result type is always
    
        max(int, type of a, type of b);


byte+byte= int

byte + short= int

short + short = int

byte + long = long

long + double=double

float + long = float

char + char = int

char + double = double



            byte  -- short  -- int -- long -- float --- double
                                |
                    char------  |

*/

class Demo
{
    public static void main(String[] args)
    {
        
        System.out.println('a'+'b'); // max( int, char, char) = int hence operation performed will be of int type
                                    // 97+98=195;
        
        System.out.println('a'+0.89);// max( int, char, double)= double hence operation performed will be of double type
                                     //97+0.89= 97.89       
            
    }
}

