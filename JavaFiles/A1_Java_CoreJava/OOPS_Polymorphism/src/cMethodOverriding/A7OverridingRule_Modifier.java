// Method Overriding

/*

1. Parent class private methods not available to the child and hence overriding concept
   not applicable for private methods.

2. Based on our requirement we can define exactly same private method inside the child class. It is valid
   but not overriding as both classes then will have separate methods with same name and modifier then.



In Overriding following modifiers will not keep any restriction.

1. Synchronzied.
2. Native.
3. Strictfp


1. We cannot override a final method, but we can override non final method to final.

2. We can override abstract to non-abstract or vice versa.

3. We can override synchronized to non Synchronized or vice versa.

4. We can override native method to non-native or vice versa.

5. We can override strictfpp method to non strictfpp method or vice versa.

*/



package cMethodOverriding;





class Parents
{
    
    private void m1() // created a private method in parents class whose overriding is not possible.
    {
        System.out.println("m1");
    }        
    
    public static void main( String[] args)
    {
        Parents p= new Childs();
        p.m1();
    
    /*
                Demonstrating that this is not overriding.
        
     1. We created a Parents reference firstly.
     2. Now this reference is pointing to the child object.
     3. Now we call m1 method on reference P.
     4. At compile time , the compiler just checks whether m1 method is available in the
        parent class or not.
     5. Next when the condition is satisfied then at run time JVM comes into the action.
     6. Now JVM checks if m1 method is overridden in the child class or not.
     7. Here in this case as our method was private and hence its overriding is not possible.
     8. So JVM then gets to know that m1 method is not overridden hence it calls the parent class method instead of child.  
        
        
        
        
     */
    
    
    }


}

class Childs extends Parents
{
    private void m1()   // this is not overriding of m1 method by child. It is just a separate method applicable only to child’s.
    {
        System.out.println("m2");
    }
}


//-----------------------------------------------------------------------------*********-------------------------------------------------------------