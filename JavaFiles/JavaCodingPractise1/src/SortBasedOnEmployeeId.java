/*
Sorting of elements based upon the employee id.
*/

import java.util.ArrayList;
import java.util.Collections;

class Employee
{

    String name;
    int employeeId;

    Employee(String name, int employeeId)
    {
        this.name = name;
        this.employeeId = employeeId;
    }

    public String toString()
    {
        return (this.name + " " + this.employeeId);
    }

}

class Driver
{

    public static void main(String[] args)
    {
        Employee e1 = new Employee("vikas", 5);
        Employee e2 = new Employee("amit", 7);
        Employee e3 = new Employee("ravi", 8);
        Employee e4 = new Employee("azhar", 9);
        Employee e5 = new Employee("ashish", 1);
        Employee e6 = new Employee("akaash", 4);

        ArrayList l = new ArrayList();
        l.add(e1);
        l.add(e2);
        l.add(e3);
        l.add(e4);
        l.add(e5);
        l.add(e6);
        Collections.sort(l, (p1, p2) ->
        {
            Employee f1 = (Employee) p1;
            Employee f2 = (Employee) p2;
            int num1 = f1.employeeId;
            int num2 = f2.employeeId;
            if(num1<num2)
            {
                return -1;
            }
            else if(num1<num2)
            {
                return 1;
            }
            else
            {
                return 0;
            }


        });

        System.out.println(l);

    }
}
