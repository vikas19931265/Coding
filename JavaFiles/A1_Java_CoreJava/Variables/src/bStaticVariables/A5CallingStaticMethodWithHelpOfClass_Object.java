package bStaticVariables;


// Calling Static Method With help of Class name or Object but preferred usage is with class name.


class CallingStaticMethodWithHelpOfClass_Object
{
    
    public static void m1()  // decalared two static methods
    {
        System.out.println("I am m1");
    }
    
    
    public static void m2()
    {
        System.out.println("I am m2");
    }
}


class Drivers1
{
    public static void main(String[] args)
    {
        CallingStaticMethodWithHelpOfClass_Object test1= new CallingStaticMethodWithHelpOfClass_Object();  // Here we are creating an object of Test1 class to access m1 method 
        
        test1.m1(); // calling m1 method on test2 class
        
        CallingStaticMethodWithHelpOfClass_Object.m1(); // We can do this using class name as well. This is a more preferred option then creating the object.
    }
}