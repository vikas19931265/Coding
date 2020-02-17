// SigleTon Design Pattern
package New;

class Student
{
    static Student s = new Student();
    private Student()
    {
        
    }
    public static Student getStudentObject()
    {
        return s;
    }
}

class Driver
{
    public static void main(String[] args)
    {
      //  Student s = new Student(); // not allowed
      Student s1=Student.getStudentObject();
      System.out.println(s1);
      Student s2=Student.getStudentObject();
      System.out.println(s2);
    }
}
/*
run:
New.Student@15db9742
New.Student@15db9742
BUILD SUCCESSFUL (total time: 0 seconds)

*/