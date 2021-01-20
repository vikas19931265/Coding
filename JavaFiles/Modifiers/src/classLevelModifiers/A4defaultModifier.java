/* default
=======================

If a class is declared as a default class  , then we can access that class only within the current package. That is
from outside the package we cannot access the class.


Hence default access is also known as package level access.

Lets take for example

    package pack1;
    
    class A     
        {
            public void m1()
            {
                System.out.println("hello");
            }
        }

       package pack2;
       import pack1.A;
       class B
            {
                public static void main(String[] args)
                {
                    A a = new A();
                    a.m1();
                }
            
            }


Here in this example we cannot access the class A Object  in class B as class A is declared as default.

*/


//-------------------------------------------------------------------------------------------******************---------------------------------------------