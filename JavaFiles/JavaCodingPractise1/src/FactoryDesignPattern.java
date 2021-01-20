
package New;

class Person
{
    public void type()
    {
        System.out.println("i am anonymous");
    }
}

class Students extends Person
{
    public void type()
    {
        System.out.println("i am student type");
    }
}

class Employee extends Person
{
    public void type()
    {
        System.out.println("i am a an employee type");
    }
}

class PersonFactoryDesignpattern
{
    public static Person getObject(String type)
    {
        if(type.equals("students"))
        {
            return new Students();
        }
        else if(type.equals("employees"))
        {
            return new Employee();
        }
        else
        {
            return null;
        }
    }
}

class Driver1
{
    public static void main(String[] args)
    {
        Person p=PersonFactoryDesignpattern.getObject("students");
               p.type();
        Person p1=PersonFactoryDesignpattern.getObject("employees");
               p1.type();
    }
}
/*
run:
i am student type
i am a an employee type
BUILD SUCCESSFUL (total time: 0 seconds)

*/