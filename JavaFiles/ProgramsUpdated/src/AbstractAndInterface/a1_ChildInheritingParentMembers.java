
package AbstractAndInterface;

class Parent
{
    Student s;
    Parent()
    {
        s=new Student();
    }
    public void test()
    {
        s.name="vikas";
    }
}

class Student
{
    String name;
    int rollNo;
    int marks;
}

class Child extends Parent
{
    Child()
    {
        super();
        s.marks=100;
    }
}

class Main
{
    public static void main(String[] args)
    {
        Child c = new Child();
        c.test();
        System.out.println(c.s.marks);
    }
}