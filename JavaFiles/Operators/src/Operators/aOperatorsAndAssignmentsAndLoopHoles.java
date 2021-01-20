package Operators;

/* Operator and Assignments
--------------------------------


Expression     initial value of x       value of y     final value of x

y=++x                   10                  11                  11

y=x++                   10                  10                  11

y=--x                   10                  9                   9

y=x--                   10                  10                  9



*/

/*LoopHole 1: We can apply increment and decrement operators only for Variables but not for constant values.
              If we are trying to apply for constant values, then we will get error.  


*/

class ArithmeticTest
{
    public static void main(String[] args)
    {
        int x =10;
        
        int y =++x;
        
        System.out.println(y); //11
        
    
        // We cannot apply increment ord decrement operator to the constants
        
        int z=10;
        
        /* int m=++10; invalid Compile error:  Unexpected type, required variable, found value.
        
        System.out.println(m); */ 
        
            
        // Nesting of Increment and Decrement operators is not allowed
        
        int p=10;
        
       // int r= ++(++x); Invalid Compile time error: Unexpected type, required variable, found value.
       // After ++x , result will become 11 that is constant and for constant we cannot apply ++.     
    
    
    }
}

