
package InterfaceAndAbstractClass;

abstract class A
{
    public  final void Test()
    {
        System.out.println("Testing");
    }
}

interface B
{
    public void Test();
}

class C extends A implements B
{
    @Override
    public void Test()
    {
      System.out.println("I am implementing");   
    }
    
    public static void main(String[] args)
    {
        C c = new C();
        c.Test();
    }
}

