//------------------------EXAMPLE OF TYPE CASTING IN OBJECT AND OBJECT REF-------------------


package Concepts;

import java.util.*;

public class ObjectRef {

public static void main( String[] args)
        
{
    
Student student1 = new Student("vikas",1234);

student1.getObject(student1);

System.out.println(student1);

}

}


class Student
{
    String name;
    int rollno;
    
    Student(String name, int rollno)
    {
        this.name=name;
        this.rollno=rollno;
    }
            
    
public void getObject ( Object o)
{
    
    Student student2= ( Student) o; //TYPE CASTING OBJECT REFERENCE O TO STUDENT TYPE.
    
    
    System.out.println(o);
    
    System.out.println(student2);
    
    System.out.println((Student)o);// Another way of directly printing typecasted value.

}



}