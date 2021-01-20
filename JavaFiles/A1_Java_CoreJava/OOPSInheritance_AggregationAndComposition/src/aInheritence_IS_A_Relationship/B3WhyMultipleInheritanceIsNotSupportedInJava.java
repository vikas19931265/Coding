/*

Why multiple inheritance is not supported in java?
==========================================================


To reduce the complexity and simplify the language, multiple inheritance is not supported in java.

Consider a scenario where A, B, and C are three classes. The C class inherits A and B classes.
If A and B classes have the same method and you call it from child class object, there will be 
ambiguity to call the method of A or B class.

Since compile-time errors are better than runtime errors, Java renders compile-time error if you inherit 2 classes. So 
whether you have same method or different, there will be compile time error.





*/
package aInheritence_IS_A_Relationship;


class A
{
    public void m1()
    {
        
    }
}

class B
{
    public void m1()
    {
        
    }
}


class C extends A , B
{
    
    public static void main(String[] args){

        /*
        If multiple inheritance was supported then, 

        If we try to create a child object

        C c = new C();
        
        Now C class has m1() method coming from A as well as B, so if we try
        to call m1() method
        
        c.m1() , this will create ambiguity as whether m1() method of class A
        is to be called or m1() method of the Class B is to be called. In order
        to prevent this ambiguity java raises compile time error if we are trying
        to go for multiple inheritance.

CE: Compile time error


*/

}
}