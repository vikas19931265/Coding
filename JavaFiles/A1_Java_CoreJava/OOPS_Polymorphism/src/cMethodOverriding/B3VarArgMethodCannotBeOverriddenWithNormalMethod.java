/*

1. We can override varArg method with another varArg method only.

2.If we are trying to override with the normal method then it will become overloading
  but not overriding.


*/




package cMethodOverriding;


 class Parent8 {
    
     public void m1( int...x)  // VarArg Method
     {
         System.out.println("parent");
     }
 
 }

class Child8 extends Parent8
{
    public void m1(int x) // General Method , VarArg method on top cannot be overridden like this
    {                     // This will be overloading instead.  
        System.out.println("child");
    }
}


class Test
{
    public static void main(String[] args)
    {
        Parent8 p= new Parent8(); // Parent reference and parent Object
        p.m1(10);
        
        Child8 c= new Child8(); // Child reference and child Object
        c.m1(10);
        
        Parent8 p1= new Child8();// Parent reference and child object. Please note that in overriding
        p1.m1(10);              // method resolution is decided by run time object but since this is not
                                // overriding but overloading hence method resolution will be decided by the compiler.
                                
    }
    
}    

/*
run:
parent
child
parent
BUILD SUCCESSFUL (total time: 0 seconds)

*/
     
//------------------------------------------------------------------------*********-------------------------------------------------------------