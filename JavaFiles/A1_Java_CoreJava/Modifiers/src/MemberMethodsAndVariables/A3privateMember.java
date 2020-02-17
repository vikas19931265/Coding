/* private member
==============================

1.If a member is private then we can access that member only within the class that is from outside of the class
  we cannot access.

2. We can prevent a child class to acquire all the properties of the parent class by declaring the member methods or the variables as private.

3. abstract methods should be available to the child classes to provide implementation whereas
   private methods are not available to the child classes. Hence private-abstract combination is illegal for the methods.


*/
package MemberMethodsAndVariables;


 abstract class Test8
{
    // abstract private m3(); This combination of private-abstract not allowed, as abstract method will force it to be implemented in the child class
                        // and private modifier will force this method to be not available to the child class hence this contradiction will prevent usage of this combination.       
        
      abstract void m1();
     
      private void m2() // This method will not be available to the child class as its declared as private, only m1() method will be available.
     {
         System.out.println("hai");
     }
 }

class Child8 extends Test8
{

    @Override
    void m1() // m1() method is available to the child class and it has implemented it.
    {
       System.out.println("hai");
    }
    

    public static void main(String[] args)
    {
        Child8 child = new Child8();
        child.m1();
        // child.m2(); // m2() method not available to the child class as it was declared as private in the parent class.
    }

}

//---------------------------------------------------------------------------------*******************--------------------------------------