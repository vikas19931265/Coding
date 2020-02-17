package Operators;


/*

If we assign floating point values to the integral types then by explicit typecasting
the digits after the decimal point will be lost.

*/

class Example5
{
    public static void main(String[] args)
    {
        
        double d =130.456;
        
        int x =(int)d ; // When we are assigning floating type to integral type explicitly
                        // then digits after decimal will be gone.
    
       System.out.println(x);                   
                        
        byte b =(byte)d;
        
        System.out.println(b); //126
    
    
    }
}
