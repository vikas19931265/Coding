/*


***1. We can access protected members within the current package anywhere either by using parent reference or by using the child reference.

2. But we can access protected members in outside package only in child classes and we should use only child reference ,
  ***that is parent reference cannot be used to access protected members from outside of the package.


Below is the program having protected modifier which has been tried to be accessed from outside the package through inheritance.


package JavaSourceFileStructure;
public class A4ProtectedClassMadeAvailableInThisPackageSoToShowDemoHowAccessIsDoneOutsidePackage
{
    protected void m1()
    {
        System.out.println("The most misunderstood modifier");
    }
}


*/
package MemberMethodsAndVariables;

import JavaSourceFileStructure.A4ProtectedClassMadeAvailableInThisPackageSoToShowDemoHowAccessIsDoneOutsidePackage;
// import the class from another package here to show demo on how protected members are accessed from outside of the class.



 class ProtectedModifier_AccessInChildClasses extends A4ProtectedClassMadeAvailableInThisPackageSoToShowDemoHowAccessIsDoneOutsidePackage
{
    
    public static void main(String[] args)
    {
        A4ProtectedClassMadeAvailableInThisPackageSoToShowDemoHowAccessIsDoneOutsidePackage
             a= new A4ProtectedClassMadeAvailableInThisPackageSoToShowDemoHowAccessIsDoneOutsidePackage();// Created an object with help of the above line.
        
        /* a.m1(); (invalid)
        
            Compile error : m1() method has protected access in imported class.
        
            1. We cannot access the parent class methods protected in nature from outside of the package.
               This is the most confusing stuff amongst people.
    
            2. The protected method is actually available to the child class through inheritance and is can
               be used only with the child reference on the child class not on parent class.
        
        */


        ProtectedModifier_AccessInChildClasses child=
                        new ProtectedModifier_AccessInChildClasses(); // Created object of child classs
        
        child.m1(); 
            // protected method() of parent class available to the child class through inheritance. 
            //We cannot call a method with protected access from outside the package on parent reference but possible on child class ref.
        
    
         
        
        A4ProtectedClassMadeAvailableInThisPackageSoToShowDemoHowAccessIsDoneOutsidePackage
             a1= new ProtectedModifier_AccessInChildClasses(); // parent class refernce used to hold child object.
         
         //a1.m1();( invalid) 
         /*
            This is again illegal as we cannot use parent class reference to call parent methods with protected access from
            outside the package when a method has protected modifier in the parent class.
         */
    
    
    
    
    }



}

//---------------------------------------------------------------------------------*******************--------------------------------------