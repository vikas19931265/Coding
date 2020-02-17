/*

Member Inner class program showing how inner class is able to access all kinds of variables of the outer class.
Here in this example we can access outer class private variable also.


For understanding we can assume that inner class is like a child class of the Outer class. All the variables
present in the outer class are accessible to the inner class. If we make any change in the value in inner class
then that change will be present only inside the inner class but will have no affect in the outer class variable.



*/



package aInnerClassIntroAndRegularInnerClass;


class MemberInnerClass
{
   
    private int a =100; // we can access this private variable from the inner class
    
    class InnerClass
    {
        public void m1()
        {
            System.out.println("Trying to access outerclass private variable  "+a);
            
        }
        
        
    }
    
}


class Driversss
{
    
    public static void main(String[] args)
    {
        
        MemberInnerClass m1= new MemberInnerClass();
        
        MemberInnerClass.InnerClass inner= m1.new InnerClass();
        
        inner.m1();
        
        
    }
    
}

/*
run:
Trying to access outerclass private variable  100
BUILD SUCCESSFUL (total time: 0 seconds)

*/