package MemberMethodsAndVariables;

/* When to use static method and instance method 
======================================================

Inside method implementation if we are using at least one instance variable then that method talks about a particular object hence we should
declare method as instance method.

Inside method implementation if we are not using any instance variable then this method is nowhere related to a particular object. 
Hence we have to declare such type of methods as static methods irrespective of whether we are using static variables or not.


  */


class Student
{
    String name;
    int rollno;
    double marks1;
    double marks2;
    static String collegeName="Tagore Engineering College";

    public String getStudentInfo()
    {
        return name+"...."+marks1+"..."+marks2;
    }
    
    public  static String getCollegeInfo() // simple utility method using no instance variable hence declared as static.
    {
        return collegeName; 
    }
            
    
    public static double getAverage(double x, double y) // simple utility method having no instance variable hence declared as static.
    {
        return ((x+y)/2);
    }
                
    public String getCompleteInfo()
    {
        return name + "..."+ rollno+"..."+ marks1 +"..."+"..."+"...."+marks2+"...."+collegeName;
    }
            
}


class Driver
{
    public static void main(String[] args)
    {
        Student s = new Student();
        s.marks1=100;
        s.marks2=200;
        s.name="vikas";
        s.rollno=1234;
        System.out.println(s.getStudentInfo());
        System.out.println(s.getCompleteInfo());
        System.out.println(Student.getAverage(s.marks1, s.marks2));
        System.out.println(Student.getCollegeInfo());
        
        
    }
}

/*
o/p  run:
vikas....100.0...200.0
vikas...1234...100.0..........200.0....Tagore Engineering College
150.0
Tagore Engineering College
BUILD SUCCESSFUL (total time: 0 seconds)
*/


/*

For static methods implementation should be available whereas for abstract methods ( instance methods) implementation is not 
available hence abstract static combination is illegal for methods.

*/

//---------------------------------------------------------------------------------*******************--------------------------------------