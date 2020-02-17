/* public classes.
======================
1. If a class is declared as public then we can access that particular class from anywhere.

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


1. In this program we are trying to create an object of A class in the B class.

2. Here the class A belongs to one package and the class B belong to another package.

3. In order to use another class object in one package from another package we need to make import statement.

        import pack1.A

4. When we try to make the import , and compile the class B we will not be able to access the class as it is declared as default and hence
   the class can only be accessed inside the package and not outside the package.

    Compile error: class A is inaccessible as it is not public.

5. In order to fix this error, we have to change the access modifier of the A class and declare it as public in order
   to fix the error which is coming here.
                

[by Durga]
====================


    If class A is not public then while compiling B class we will get compile time error saying
            pack1.A is not public in pack1; cannot be accessed from outside of the package.


    
*/

//-------------------------------------------------------------------------------------------******************---------------------------------------------