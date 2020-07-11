/*

Child class Objects are also Childrens of their super classes.

*/


import java.lang.Number;

class Child1
{
    public static void main(String[] args)
    {
        Child1 child= new Child1();
        
        Integer a = new Integer(2);
        
        if(a instanceof Number) // a of type integer is a child Object for Number also, hence this statement is true.
        {
            System.out.println("true");
        }
    }
}
/*
run:
true
BUILD SUCCESSFUL (total time: 0 seconds)


*/
