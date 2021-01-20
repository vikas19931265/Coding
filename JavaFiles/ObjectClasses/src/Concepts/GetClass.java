//------------------------------------------------.getClass() Method in Object Class----------------------------------------------------


package Concepts;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.*;

class GetClass {
    
public static void main( String[] args)
{
   /*
   1. to find number of methods present in String class.
   2. Firstly created an object of String class and stored value "vikas"
   3. A reference assigned null value meaning pointing to no object cannot invoke
      any method instead will give null pointer exception error.
   4. With the help of the reference we can call .getClass method to find the class
      of the object at the runtime.
   5. .getClass() will return a reference of class "Class" type containing all the information about the class.
   6. Using the reference varialbe Class c= i.getClass(); we can find anything about the class like modifiers, constructors , etc. 
   */ 
   
    
   String str = "vikas";
   Class str1=str.getClass();
   Method[] strng=str1.getMethods();
   int count=0;
   for(Method strn : strng)
   {
       System.out.println(strn);
       count++;
   }
   
   System.out.println("total methods in String are"+count);
    
   /*
   1. In this example we create an arrayList of type object.
   2. In the arrayList we are going to store 2 different types of objects student and teacher.
   3. At run time we will find out the class of the respective objects stored in the array.
   
  Class ct=i.getClass();
   
  1. i is an object , i.getClass() will return a class reference.
  2. The returned reference is then assinged to ct of type class.
  3. Here the returned reference pointes to the object which contains all the information about the class on which object is called.
  4. Now using the assiged reference ct, we can access all the details about the class such as methods inside the class or modifiers etc.
   
  int modifer = ct.getMofiders();
   
  1. This will return the modifers but in the 'int' format , where each int value signifies some modifer , example 0 for default, 1 for public. 
  2. Now on the Modifier class .toString method is called and value returned from ct.getModifer is passed as the paramter.
        String st=Modifer.toString(modifer);
  3. Now this will return the type of modifer, as some implemenation is returned in the toString method of the Modifier class. 
   
   */
   
   ArrayList<Object> array= new ArrayList(); // an array list of object type is created first.
   Students student1= new Students("vikas",1234);// student object is created and its instance variables are initialized.
   Teacher teacher1= new Teacher("srimati"," HR");//teacher object is created and its instance variables are initialized.
   array.add(student1);//student1 is added in the array
   array.add(teacher1);//teacher1 is also added in the arrray
   Class c= array.getClass();//this will return a reference of Class type.
    
    for( Object i : array) // here in array object which is collection of reference, i will take values from first reference till last reference of type object.
        
    {
        
        Class ct=i.getClass();
        
        System.out.println("Class is "+ct.getName());
        
        System.out.println("----------------------");
        
        Method[] m=ct.getDeclaredMethods();
        
        int modifers =ct.getModifiers();
        
        String retval=Modifier.toString(modifers);
        
        System.out.println("modifiers are"+ retval);
          
        for( Method m1: m)
            {
                System.out.println("Methods are "+m1);
            }
    
    
    }

  }
 }
  class Students

{
    String name;
    int rollno;
    
    Students( String name, int rollno)
    {
        this.name=name;
        this.rollno=rollno;
    }
    
    public void setRollno(int rollno)
    {
        this.rollno=rollno;
    }
    
    public int getRollno()
    {
        return rollno;
    }


}


 class Teacher
{
    String name;
    String designation;
    
    Teacher( String name, String designation)
    {
        this.name=name;
        this.designation=designation;
    }
    
public String getTeacherName()
{
    return name;
}
        


}  
    

