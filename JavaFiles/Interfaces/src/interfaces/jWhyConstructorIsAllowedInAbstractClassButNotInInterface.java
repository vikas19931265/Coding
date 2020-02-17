/* 

1.  We cannot create object for abstract class , but abstract class can contain a constructor
    What is the need??

   Abstract class constructor will be executed whenever we are creating the child class object
  to perform initialization of child class objects


[note]

    Either directly or indirectly we cannot create object for abstract class.

2. We cant create Objects for abstract class as well as interface, but abstract class can contain
   constructor but interface does not contain constructor. What is the reason?

   The main purpose of the constructor is to perform initialization for the instance variables.
   Abstract class can contain instance variables which are required for the child object. To perform
   initialization of those instance variables constructor is required for the abstract class.

   But every variable present inside interface is always public-static-final whether we are declaring it or not
   and there is no chance of existing instance variable inside the interface hence constructor concept is 
   not required for the interface.

 
    

*/
package interfaces;

 abstract class Person
{
    String name; // like this assume we have 1000 properties.
    int age;
    
   Person()
   {
       
   }
    
    Person(String name, int age) // This constructor will work for every child object creation.
   {
       this.name=name;
       this.age=age;
   }
 
 
 }


// approach 1 without using abstract class constructor

class Student extends Person
{
    int rollno;
    
    Student(String name, int age, int rollno)
    {
        this.name=name;
        this.age=age;
        this.rollno=rollno;
    }
}

class Teacher extends Person
{
    String Subject;
    
    Teacher(String name, int age, String Subject)
    {
        this.name=name;
        this.age=age;
        this.Subject=Subject;
    }
}

/*
Here in approach 1 , if we had 1000 fields and 1000 classes then code would have become complex
as then we would has to initialize the fields in every class using this keyword. Instead of doing this
we can use the approach 2 which uses super keyword to call the parent constructor and initialize the
child object.

1. More code and code redundancy issue in this.

*/
//approach 2 , with using parent class constructor

class Employee extends Person
{
    int empID;
    
    Employee(String name, int age, int empID)
    {
        super(name, age); // super keyword invoking the parent class constructor, reducing the code.
        this.empID=empID;
    }
}

class Drivers1
{
    public static void main(String[] args)
    {
        Student s = new Student("vikas",24,812);
        Teacher t = new Teacher("vikas",23,"chemistry");
        Employee e= new Employee("vikas",23,456);
    }
}

/*

Less code and code reusability in approach 2
*/
