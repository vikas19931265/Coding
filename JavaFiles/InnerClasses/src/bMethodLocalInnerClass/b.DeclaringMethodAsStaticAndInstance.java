/*

We can declare method local inner class inside both instance and static method.
But there is a small difference between both.


If we declare inner class inside instance method then from that method local inner class 
we can access both the static and non static members of the outer class directly.

If we declare inner class inside static method then we can access only static members of the 
outer class directly from that method local inner class.



*/

class Testing
{
    int x =10;
    
    static int y =20;
    
    public void m1()
    {
        
        /*
        
        If we declare m1() as static then, at line (System.out.println(x))
        we will get the compile time error saying.
        
        Non static variable x cannot be referenced from a static context.
        
        */
        
        class Inner
        {
            public void m2()
            {
                System.out.println(x); // We can access both static and non-static members of outer class.
                System.out.println( y);
            }
        }
    
        Inner i = new Inner();
        i.m2();
    
    }


    public static void main(String[] args)

    {
        Testing t = new Testing();
        
        t.m1();
    }

}

/*
run:
10
20
BUILD SUCCESSFUL (total time: 0 seconds)

*/
