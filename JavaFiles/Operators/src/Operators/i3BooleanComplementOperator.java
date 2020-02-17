package Operators;

/*

Boolean Complement Operator(!)

We can apply this operator only for the boolean types and not for integral types.


*/

class booleanComplementOperator
{
    
    public static void main(String[] args)
    {
        
        System.out.println(!4); //CE: operator ! cannot be applied to int
        
        System.out.println(!false); // true
    }
}

