
package WaysOfCreatingObject;


class Employee {
    
    public static void main(String[] args) throws ClassNotFoundException, InstantiationException, IllegalAccessException
    {
        Student s= new Student();
        System.out.println(s);
    
    
        Student s1= (Student)Class.forName(("WaysOfCreatingObject.Student")).newInstance();
        
      /*
        
      1.forName() method
      method returns the Class object associated with the class or interface with the given string name, 
      using the given class loader . In short its like student s1= new WaysofCreatingObjects.student();
        
      2. Here forName method on class will return the object of class defined (WaysOfCreatingObject.Student).
        
      3.Return type of forName is like class, and on class reference we call newInstance method.
      
      4.Here the return type of newInstance is similar to generic or for now consider it as an object.
        
      5.This return type must be type casted to student type and then give it a reference of the student type.
        
      */
        
        
        
       System.out.println(s1);
    
        
    }



}




class Student
{
    
}


//--------------------------------------------------------------------------*******------------------------------------------