/*
 
1. We can use super() or this() only inside the constructor.

2. If we are trying to use outside of the constructor in below case in methods then we will get compile time 
   error.



*/
package Constructors;


class Test9
{
    public void m1() // this is a method and super(), this() can be used only inside constructor.
    {
        
        /*
        super();
        
        System.out.println("hello")
    
                
       This is illegal as super() , this() can be used only inside the constructor.
        
        
        error: call to super() must be first statement inside the constructor.
        
        We can call a constructor directly from another constructor only
        
        
        */        
                
        }
}

//--------------------------------------------------------------------------*********--------------------------------------------------------------------------