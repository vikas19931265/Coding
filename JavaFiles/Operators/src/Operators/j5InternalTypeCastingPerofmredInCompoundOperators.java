package Operators;

/*

In the case of compound assignment operators , internal typecasting will be performed 
automatically.


*/


class Example
{
    public static void main(String[] args)
    {
        
        byte b =10;
        
        b=b+1; // invalid
        
            /*
        
                We will get compile time error possible loss of precision , found int
                required byte.
        
                In this case internal typecasting is not performed
        
                max(int, byte, int) = int is result and we are trying to typecast int
                                       to byte type
        
            */
        
        System.out.println(b);
   
    
       byte b1=10;
       
       b++;
       
       System.out.println(b); //11
       
        /*
       
        In case of increment operator internal typecasting will be performed.
       
        so b++ line is equivalent to b=(byte)(byte+1);
       
        */
    
        
       byte b2=10;
       
       b2+=1;
       
       System.out.println(b2);
        
       /*
        
       
        In case of compound operator internal typecasting will be performed.
       
        so b++ line is equivalent to b=(byte)(byte+1);
       
        */
       
    }
}
