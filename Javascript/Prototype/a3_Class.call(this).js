/* 
Calling parent call members using Class.call(this)
*/

// Lets create a class Person

function Person(_name)
{
    this.name=_name;
    this.gender="male";
}

// Now we want to create a student class inheriting from the person class

function Student(_rollNo)
{
    Person.call(this);
    this.rollNo=_rollNo;
}

// Now we want to create a class Employee inheriting from the person clas

function Employee( _employeeId)
{
    this.EmployeeId=_employeeId;
}

// Now lets create an object of Student

var student1= new Student("vikas",1234);
console.log(student1.rollNo); //1234
        // we are able to access the rollNo.
// lets try to access th parent class member
console.log(student1.gender); //male .. ye are able to access. 