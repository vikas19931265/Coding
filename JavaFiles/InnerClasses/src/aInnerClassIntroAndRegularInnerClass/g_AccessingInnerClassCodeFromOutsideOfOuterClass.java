package aInnerClassIntroAndRegularInnerClass;

/*

Case 3:

Accessing inner class code from outside of outer class.
-------------------------------------------------------
*/

class Outer5
{
    
    class Inner5
    {
     
        public void run()
        {
        
            System.out.println("Inner class method");
    
        }
        }
}


class Test
{
    public static void main(String[] args)
    {
        Outer5 o = new Outer5();
        
        Outer5.Inner5 i = o.new  Inner5();
        
        i.run();
        
    }

}

/*
run:
Inner class method
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-----------------------------------------------------------------******************************---------------------------------------------
