
/*

By default every integral literal is of int type but we can specify explicitly 
as long type by suffixing with small "l" (or)  capital "L".


*/


package Literals;


class Example
{
    
    public static void main(String[] args)
    {
        
        int x =10 ; // 10 is of int type and data type is also int
        
        long l =10L; // long value and long variable
        
        long l1= 10; // int value , and long data type, internal typecasting will
                     // be performed to promote 10 of type int to long.
   
    
       int x1=10l; //  conversation of long value(8bytes) to int type( 4 bytes) is
                   // not possible, CE: possible loss of precision , found : long, required int
    
                   
    
}
    
}

