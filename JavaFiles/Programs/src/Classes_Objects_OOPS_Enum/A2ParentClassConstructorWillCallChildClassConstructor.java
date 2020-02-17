package Classes_Objects_OOPS_Enum;
/*
Constructors interview question:
==========================================
    first line in the constructor super(), therefore whenever an object of
    the child class is created an object of the parent class is called automatically.
*/
class A
{
    A()
    {
        System.out.println("A");
    }
}
class B extends A
{
    B()
    {
        System.out.println("B");
    }
}
class C extends B
{
    C()
    {
        System.out.println("C");
    }
}
 class Driver
{
    public static void main(String[] args)
    {
        C c = new C();
    }
}
/*
$javac Driver.java
$java -Xmx128M -Xms16M Driver
A
B
C

*/

