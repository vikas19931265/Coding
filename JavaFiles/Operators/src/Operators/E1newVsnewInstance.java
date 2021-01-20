package Operators;

/*

new vs newInstance()
============================================================

1. We can use new operator to create an object if we know class name at the beginning.

    example

            Test t = new Test();

            Student s = new Student();

            Customer c = new Customer();

2. newInstance() is a method present in class "Class".


3. We can use newInstance() method to create an Object if we dont know the class name 
   at the beginning and it is available dynamically at the runtime.




*/

import java.util.*;

class Testr
{
    
    public static void main(String[] args) throws Exception
    {
        
              
 while(true)
            
     {  
            System.out.println("Enter the class name");
        
         Scanner cn = new Scanner(System.in);
        
       try
       {
            String input=cn.nextLine();
        
            Object o= Class.forName(input).newInstance();
        
                    /*
            
                    Class.forName(input) used to load our input class.
            
                    */
            
            
            
            System.out.println("Object created for the class "+ o.getClass().getName());
    
            break;
                    
       
       }

          catch(ClassNotFoundException e)
       {
            System.out.println("Invalid class please enter valid class");
       
       }
    
    
    }
 
  }
    
}
    
    class Student
{
    
}


class Employee
{
    
}


/*
run:
Enter the class name
java.lang.String
Object created for the class java.lang.String
BUILD SUCCESSFUL (total time: 4 seconds)


run:
Enter the class name
Employee
Object created for the class Employee
BUILD SUCCESSFUL (total time: 2 seconds)

run:
Enter the class name
Student
Object created for the class Student
BUILD SUCCESSFUL (total time: 2 seconds)


run:
Enter the class name
stsg
Invalid class please enter valid class
Enter the class name




*/