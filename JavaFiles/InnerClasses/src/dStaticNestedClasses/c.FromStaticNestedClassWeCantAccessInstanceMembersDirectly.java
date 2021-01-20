package dStaticNestedClasses;

/*

From normal or regular inner classes , we can access both static and non static members of Outer class
directly. But in the case of static Nested classes we can access static members of outer class directly
but we cannot access non static members.

*/



class Test90
{
    int x =10; // instance member of outer class accessible in normal inner class. 
               // This member cant be accessed in static nested class.
    
    static int y=20;// static member of outer class accessible in normal inner class.
    
    static class Nested11
    {
        public void m1()
        {
            // System.out.println(x); CE: non static variables cannot be referenced from the static context.

            System.out.println(y);
        
        }
        
        
        }
}
