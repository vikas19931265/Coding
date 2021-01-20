package aInnerClassIntroAndRegularInnerClass;

/*

Accessing Inner class code
-------------------------------

1. From static area  of outer class or from outside of outer class
        
        Outer o = new Outer();
        Outer.Inner i= o.new Inner();
        i.m1();


2.From instance Area of the outer class

    Inner i = new Inner();
    i.m1();
        




Case 1:

    Accessing inner class code from static area of outer class.
*/

class Outer3
{
    
    class Inner
    {
        
        public void m1()
        {
            System.out.println("Inner class method");
        }
    }

    public static void main(String[] args)
    {
        
        
        //Writing in 3 lines
        
        Outer3 o = new Outer3(); // Created outer class object which will be used to access inner object
        
        Outer3.Inner i = o.new Inner();// inner object created using outer reference.
        
        i.m1();
   
        
       //Combining line 1 and 2
       
       Outer3.Inner i1 = new Outer3().new Inner();
       
       i1.m1();
       
       //Combining line 1 , 2 and 3
       
       new Outer3().new Inner().m1();
    
    
    }


}

/*
run:
Inner class method
Inner class method
Inner class method
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//------------------------------------------------------------------------*******************-------------------------------