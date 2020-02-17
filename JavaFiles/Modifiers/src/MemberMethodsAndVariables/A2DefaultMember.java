package MemberMethodsAndVariables;

/*

Default Member
==============================

1. If a member is declared as "default" then we can access that member only in the current package , we cannot access it
   from outside of the package.

2. Hence default access is also known as package level access.

example
---------------

package pack1

public class A
    {
         void m1()
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

1. Here in this program class B will not compile.

2. In class B we are trying to create an Object of the class A.

3. We can create the object of the class as class is declared as public and it is possible to access it.

4. However when trying to call the method on the respective object it will fail as the method is not public and is default.

5. A default member can be accessed only inside the package and not from outside of the package.

*/

//---------------------------------------------------------------------------------*******************--------------------------------------