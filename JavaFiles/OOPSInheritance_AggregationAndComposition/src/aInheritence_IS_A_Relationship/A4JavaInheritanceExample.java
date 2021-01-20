/*

Java Inheritance Example
===========================

In the above example, Programmer object can access the field of own class as well as of Employee class i.e. code reusability.

*/
package aInheritence_IS_A_Relationship;

class Employee
{
    float salary=3000;
}

class Programmer extends Employee
{
    float bonus=500;
    
    
    
    public static void main(String[] args)
    {
            Programmer p = new Programmer();
            
            System.out.println("Programmer salary"+p.salary);
            
            System.out.println("Programmer bonus"+p.bonus);
    }
}

/*
run:
Programmer salary3000.0
Programmer bonus500.0
BUILD SUCCESSFUL (total time: 0 seconds)

*/