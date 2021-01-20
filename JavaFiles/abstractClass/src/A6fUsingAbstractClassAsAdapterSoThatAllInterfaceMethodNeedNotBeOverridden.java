/*
Another real scenario of abstract class as an Adapter
=========================================================

The abstract class can also be used to provide some implementation of the interface. 

In such case, the end user may not be forced to override all the methods of the interface.


Here in this program we have created abstract adapter class which will provide implementation
for all the default methods. By doing this we can extend from this class instead of 
creating a new class and giving dummy default implementation for all the metthods.

*/

interface A
{  

void a();  
void b();  
void c();  
void d();  

}  
  
abstract class B implements A //Using this as an adapter. We will extend this from adapter.
{  
    public void c(){System.out.println("I am c");}  
}  
  
class M extends B

{  
    public void a(){System.out.println("I am a");}  //We dont have to provide this dummy implementation in our inherited class.
    public void b(){System.out.println("I am b");}  
    public void d(){System.out.println("I am d");}  
}  
  
class Test5

{  
    public static void main(String args[])
    {  
    A a=new M();  
    a.a();  
    a.b();  
    a.c();  
    a.d();  
    }   
}  

/*
o/p
run:
I am a
I am b
I am c
I am d
BUILD SUCCESSFUL (total time: 0 seconds)


*/