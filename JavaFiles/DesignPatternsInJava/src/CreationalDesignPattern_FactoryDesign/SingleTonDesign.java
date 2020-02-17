/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CreationalDesignPattern_FactoryDesign;


class Student
{
    static Student s = new Student();
    
    private Student()
    {
        
    }
    
    public static Student getStudentObject()
    {
        return Student.s;
    }
}

class Drivers
{
    public static void main(String[] args)
    {
        
      //  Student s = new Student(); // this is not allowed as the Student constructor is private
        
      Student s1= Student.getStudentObject();
      
      System.out.println(s1.hashCode());
      
      Student s2=Student.getStudentObject();
      
      System.out.println(s1==s2);
        
    }
}
