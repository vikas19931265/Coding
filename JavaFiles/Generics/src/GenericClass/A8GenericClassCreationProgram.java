package Generics;

//  Generic class Creation Program
//=============================================================================

/*

1. Here we have created  a class with the name "Data".

2. This class is Generic in nature. It has variable which can be of Generic
   type that is of generic class type.

3. We are going to create two different types of objects from this generic class.

4. In the first case we will create string types of objects from this class.

5. And then in the second case we are going to create student type of objects from this
   generic class.


*/

class Data<T>
{
    T msg;


    Data(T msg)
    {
        this.msg=msg;
    }

    public T getMsg()
    {
        return msg;
    }
}


class  Student
{
    int rollno;

    Student(int rollno)
    {
        this.rollno=rollno;
    }

}


class Driver22
{
    public static void main(String[] args)
    {

        Data<String> t = new Data<String>("Vikas");

        System.out.println(t.getMsg());

        Student s = new Student(10);

        Data<Student> students = new Data<Student>(s);

        System.out.println(students.getMsg().rollno);

    }
}

/*

run:
Vikas
10
BUILD SUCCESSFUL (total time: 0 seconds)



*/