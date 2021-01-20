/*

Method Local Inner Classes- Type 2
----------------------------------------

Class Declared Inside a Method:

1. Sometimes we can declare a class, inside another method. Such type of inner classes are 
   called as method local inner classes.


2. The main purpose of method local inner class is  to define method specific repeatedly required
   functionality.

3. Method local inner classes are the best suitable to meet "Nested Methods Requirements".


4. We can access method local inner classes only within the method where we have declared it.Outside 
   of the method we cannot access. Because of its less scope method local inner classes are most
   rarely used type of inner classes.

*/


public class Test2
{
    
    public void m1() //Declaring inner class inside m1
    {
        
        class Inner // Inner class methods can be called only from inside the method.
        {
            public void sum(int x, int y)
            {
                System.out.println("The sum"+(x+y));
            }
        }
    
        Inner i = new Inner();
        
        i.sum(10, 20);
        
        //;;;;
        
        i.sum(100,200);
        
        //;;;
        
        i.sum(1000, 2000);
    
    }

public static void main(String[] args)
{
    
    Test2 t = new Test2();
    
    t.m1();


}

}
