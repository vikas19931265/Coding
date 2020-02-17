package MemberMethodsAndVariables;

/* public members
=============================

1. If a member is declared as public then we can access that member from anywhere but corresponding class should also be visible.
   That is before checking the member visibility we have to check class visibility.

example
---------

package pack1

class A
    {
        public void m1()
            {
                System.out.println("A class method");
            }
    }


package pack2;

import pack1.A

class B
{
    public static void main(String[] args)
        {
            A a = new A();
            a.m1();
        }

}

2. Here in the above example B class will not compile as we are trying to create an Object of A class
   which is "default" in nature and hence can only be accessed inside the package but
   since we are trying to access it from outside the package which is not possible. In order to 
   access the class A which we are trying here we have to make the A class as public.

3. Note the point in this program, here even though the method which we were trying  to access is public but since
   the class is not public hence we could not access the class. We will get the below compile time error
   while doing so.

        pack1.A is not public in pack1; cannot be accessed from outside the package.

by durga.
==============

1.In the above example even though m1() method is public we cannot access from outside the package because
  corresponding class A is not public that is if both class and method is public then only we can access the method
  from outside the package.


*/


//---------------------------------------------------------------------------------*******************--------------------------------------