// Object passing in java.
/*

[NOTE]

    As java is call by Value, hence objects passed are also passed on basis of 
Call by value only. Here during the method call objects are passed by value for the 
reference to hold.

OBJECTS ARE PASSED BY THE MECHANISM OF CALL BY VALUE.
*/


package Methods;

public class Methods_Accepting_Objects {
    
public void GetObject( Emp e, Student s)
{
    System.out.println(""+e.name+s);
}

public static void main( String args[])
{
    Methods_Accepting_Objects obj1= new Methods_Accepting_Objects();
    Emp e= new Emp(); // another way of creating object and storing the reference , but it wont be used much in the real time projects.
    Student s= new Student();
    obj1.GetObject(new Emp(), new Student());
    /*
    1. This is one of the way of sending the object to a reference.
    2. This will be mostly used when dealing with the real time projects.
    3. Here as soon as new Emp() object is created , the object is passed to the reference e.
    4. Hence the object in this case is not immutable , but it survives as it gets a reference during a method call.
    5. This feature reduces the code work.
    
    */
}


}


class Emp
{
    
    String name="VikasGautam";

}

class Student
{
    
}
