/*
1. Here Class.forName() is responsible for loading of our class.

2. This is mostly used when we are tying to register our JDBC driver.

3. What will happen is that with the method Class.forName("Driver") the repsective
   driver class will be loaded.

4. As soon as the Driver class is loaded static block execution will be started. In the 
   driver class static block there is code written for the purpose of the registration of the driver.

5. On top of this if we call the .newInstance() method then the Object of type Object will be 
   created which can by typecasted to the respective class type here in our case of type student.
*/





package JDBC;

 class Class_forName {
    
 public static void main(String[] args) throws Exception
 {
     
     
    Student s = (Student)Class.forName("JDBC.Student").newInstance();
     
    s.demo();
 }
 
 
 
 
 }


class Student
{
    String name="vikas";


    public void demo()
    {
        System.out.println("Demo of JDBC");
    
    
    
    }


}