package Operators;

/*

TypeCast operator
========================================================

There are two types of Type-Casting 

    1. Implicit typecasting

    2. Explicit typecasting.


1. Compiler is responsible to perform implicit type casting

2. Whenever we are assigning smaller data type value to bigger data type
   variable  then implicit typecasting will be performed.

3. This is also knows as widening or Up casting.

4. There is no loss of information in this kind of typecasting.


5. The following are various possible  conversions where implicit typecasting will
   be informed.




   byte---->short\
                    int----long---float---double     
                   /     
            char--/



If we move from left to right then it is implicit typecasting or else explicit typecasting.


*/

class Examples
{
    
    public static void main(String[] args)
    {
        int x ='a'; // compiler converts char to int automatically by implicit typecasting
        
        System.out.println(x);
        
    
        double d =10;
        
        System.out.println(d); // 10.0 compiler converts int to double by implicit typecasting.
    
    
    
    }
    
}

