 package superKeyword;
/*

Real time usage of super()
===============================

1. In this program i created person class having common properties like name and age.

2. After this i created a Student class which inherits the properties of the Person class
   and adds a new instance member into it that is the variable rollNo.
   
3. After that i created a driver class and inside that i created a student object.

4. Now if i would not have used inheritance and properties of the parent constructor,
   then i need to write like Student s = new Student("vikas",25,4127). Then in the
   child constructor need to write like
   
    Student(String name, int age, int rollNo)
    {
        this.name=name;
        this.age=age;
        this.rollNo=rollNo;
    }
    
5. But instead of doing this since name and age properties are coming from the parent
   we can make a super call to the parent constructor and set the properties of the name
   and age. In this way our code will reduce.
   
   
   Person(String name, int age)
   {
       this.name=name;
       this.age=age;
   }
    

6. So the logic is that whenever we are creating a child class constructor then 
   automatically in the background parent class constructor is executed. If we 
   are not explicitly mentioning which super() constructor is needed to be executed
   then by default , default constructor which is a non-parameterized constructor 
   will be getting executed.



*/

class Persons {

    String name;
    int age;

    Persons(String name, int age) // call to this constructor will be make on current child object.
    {
        this.name = name;
        this.age = age;
    }
}

class Students extends Persons {
    int rollNo;
    Students(String name, int age, int rollNo) {
        super(name, age);
        this.rollNo = rollNo;
    }
    
}

class Driver13 {

    public static void main(String[] args) {
        Students s = new Students("vikas", 25, 4127);
        System.out.println(s.name + " " + s.age + " " + s.rollNo);
    }
}
/*
$javac Driver.java
$java -Xmx128M -Xms16M Driver
vikas 25 4127
*/
