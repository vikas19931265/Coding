/*

1. We can access protected members from outside of the package only in child classes and we should use that child class reference only.
   For example here in this program from D class if we want to access we should use D class reference only.

2. In short we can say that protected member is available to the child class through inheritance and it is actually from the child class that the protected method
   is used not from the parent class. Hence we have to use the current class reference only where protected method is available through the inheritance.

3. Below is the class which has been imported in the below program in order to show the demo.

package JavaSourceFileStructure;


public class eProtectedClassMadeAvailableInThisPackageSoToShowDemoHowAccessIsDoneOutsidePackage
{
    protected void m1()
    {
        System.out.println("The most misunderstood modifier");
    }
}


*/
package MemberMethodsAndVariables;

import JavaSourceFileStructure.A4ProtectedClassMadeAvailableInThisPackageSoToShowDemoHowAccessIsDoneOutsidePackage;

class C extends A4ProtectedClassMadeAvailableInThisPackageSoToShowDemoHowAccessIsDoneOutsidePackage
{
    
}


class D extends C
{
    public static void main(String[] args)
    {
      
        
      /*
        
        All these below scenarios will give us compile time error as we were trying to access the parent class protected method in all these cases using parent reference.
        The method can only be accessed inside the child class where it is inherited using the reference of child class. We cannot use parent class reference.
        
        
        Compile error:
                m1() has protected access in pack1.A.
        
        
        eProtectedClassMadeAvailableInThisPackageSoToShowDemoHowAccessIsDoneOutsidePackage
                a= new eProtectedClassMadeAvailableInThisPackageSoToShowDemoHowAccessIsDoneOutsidePackage();
        
        a.m1();
        
        C c = new C();
        c.m1();
        
        eProtectedClassMadeAvailableInThisPackageSoToShowDemoHowAccessIsDoneOutsidePackage a1= new C();
        a1.m1();
        
        eProtectedClassMadeAvailableInThisPackageSoToShowDemoHowAccessIsDoneOutsidePackage a2 = new D();
        a2.m1();
        
    */
    // 
        D d = new D(); 
        d.m1();// m1() method is available in the child class and we are accessing it using the child class reference.
    
    }
}

//---------------------------------------------------------------------------------*******************--------------------------------------