package aInnerClassIntroAndRegularInnerClass;

/*

Nesting of inner classes
------------------------------

1. Inside inner class we can declare another inner class that is nesting of inner classes is possible.

*/

class A

{
    class B
    {
        
        class C
        {
            
            public void m1()
            {
                System.out.println("Inner most class method");
            }
        }
    }
}



class  Test1
{
    
    public static void main(String[] args)
    {
        
        A a = new A();
        
        A.B b = a.new B();
        
        A.B.C c = b.new C();
        
        c.m1();
    }
}

/*
run:
Inner most class method
BUILD SUCCESSFUL (total time: 0 seconds)

*/



//----------------------------------------------------------------****************************-----------------------------------------------------