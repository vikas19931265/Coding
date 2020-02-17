/*

1. We can’t override a static method as non static. Infact a static method can never be overridden but method hiding is possible.

2. If we try to do so, then we will get compile time error.

3. Similar to point 1 we cannot override a non static method as static.

*/


package cMethodOverriding;


class Parent7
{
    public static void m1()
    {
        
    }

    public void m2()
    {
        
    }

}

class Child7 extends Parent7
{
    /*
    public void m1()
    {
        
    }

    This is invalid as we are trying to override a static method which is at class
    level inside the instance method which is at the object level.
    
    error: m1() method in c cannot override m1() in P, overridden method is static.
    
    
    
    public static void m2()
    {
    
    }
    
    This is also invalid as we cannot override a non static method to static method.
    
    error: m2() method in c cannot override m1() in P, overriding method is static. 
    
    */
    
    }


//-----------------------------------------------------------------------------*********-------------------------------------------------------------