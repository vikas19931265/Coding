/*
     super keyword using to call the parent class method..
*/
package Classes_Objects_OOPS_Enum;

class A1
{
    public void display()
    {
        System.out.println("Class A is displaying");
    }
}

class B1 extends A1
{
    public void display()
    {
        super.display();
        System.out.println("Class B is displaying");
    }
}

class DriverPgm
{
    public static void main(String[] args)
    {
        A1 a = new B1();
        a.display();
    }
}

/*
run:
Class A is displaying
Class B is displaying
BUILD SUCCESSFUL (total time: 0 seconds)


*/
