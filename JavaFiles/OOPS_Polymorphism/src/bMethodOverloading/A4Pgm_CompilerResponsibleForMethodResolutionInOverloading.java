/*

Method Overloading Demo Program
=============================

Note
=====

In Overloading compiler is responsible to perform the method resolution(decision) based
upon the reference type (but not based upon the run time object). Hence overloading is also
considered as the compile time polymorphism or static polymorphism or early binding.

*/
package bMethodOverloading;

class Test1
{
    public void methodOne()
    {
        System.out.println("no Arg method");
    }


    public void methodOne(int i)
    {
        System.out.println("int-arg method");
    }

    
    public void methodOne(double d)
    {
        System.out.println("double-arg method");
    }


    public static void main(String[] args)
    {
        Test1 t = new Test1();

        t.methodOne();//no-arg method
        
            /*
        
                Here compiler is going to check if in the Test class methodOne()
                with no arguments is present or not. If present then the code will
                compile successully without checking the run time object.
        
                So on the reference t of the class Test1 will check if the method is
                present or not. If the method is not present then we will get the 
                compile time error.
        
                t.methodOne2();//no-arg method
                symbol:   method methodOne2()
                location: variable t of type Test1
                1 error
        
            */
        
        t.methodOne(0.0);//double-arg method
        
        t.methodOne(0);//int-arg method

    }
    
    
}

/*
run:
no Arg method
double-arg method
int-arg method
BUILD SUCCESSFUL (total time: 0 seconds)

*/