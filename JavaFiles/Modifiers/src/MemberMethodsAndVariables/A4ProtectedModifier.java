/* protected members( the most misunderstood modifier in java.)
==========================================================================

1. If a member is declared as protected then we can access that member anywhere within the current package and only child classes of 
   outside package.

        protected = <default> + kids( child classes)



*/

//protected members program in the same package.

package MemberMethodsAndVariables;


 class ProtectedModifier
{
    protected void m1()
    {
        System.out.println("The most misunderstood modifier");
    }
}


class Childs extends ProtectedModifier
{
    public static void main(String[] args)
    {
        ProtectedModifier a = new ProtectedModifier(); // We can create object of parent class as parent class is public and can be accessed
        a.m1(); // We can access m1() method as it is protected. protected methods can be accessed within the same package or by child classes.
        
        Childs c = new Childs(); // m1() method is protected and is available to the child class by default.
        c.m1();
        
        ProtectedModifier a1= new Childs();// parent reference can be used to hold the child object
        a1.m1();// This will call m1() method in the parent class as m1() method is not overridden in the child class.
    }
}
