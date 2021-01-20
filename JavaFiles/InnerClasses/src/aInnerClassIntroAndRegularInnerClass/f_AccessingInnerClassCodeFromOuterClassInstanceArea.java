package aInnerClassIntroAndRegularInnerClass;

/*

Case 2:

Accessing inner class code from instance area of outer class.

*/

class Outer4
{
    
    class Inner
    {
        public void m1()
        {
            System.out.println("Inner method");
        }
    }

  
    public void m2()
    {
        Inner  i= new Inner();
        
        i.m1();
   /*
        
   In this case we did not need to create outer object to access inner class object. 
     
   This is because in order to call m2() method we have used outer class object already.
        
     That is : o.m2() is done to access this method hence outer class object is already available.
        
   Outer4 o = new Outer4();
        o.m2();
     
    m2() method could have only been called if object of outer class was available. Now since 
     we have the object of outer class, just creating the object of inner class and calling the m1() 
    method is enough.
        
        */
    
    
    }


    public static void main(String[] args)
    {
        Outer4 o = new Outer4();
        o.m2();
    }


}

/*
run:
Inner method
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-------------------------------------------------------------------*************************-----------------------------------------------------